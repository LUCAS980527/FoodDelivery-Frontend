"use client";

import { useEffect, useState } from "react";
import AvatarIcon from "../_icons/AvatarIcon";
import FoodCard from "../_components/FoodCard";
import Sidebar from "../_components/SideBar";
import OrdersSection from "../_components/OrderSection";
import AddCategoryDialog from "../_components/AddCategoryDialog";
import AddDishDialog from "../_components/AddDishDialog";
import axios from "axios";
import { Badge } from "lucide-react";
import { FoodSection } from "../_components/FoodSection";

export default function AdminPage({ selected, onSelect }) {
  const [activeMenu, setActiveMenu] = useState("food");
  const [categoryData, setCategoryData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:1000/food-Category");
      setCategoryData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("categoryData", categoryData);

  // const getFoodData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:1000/food");
  //     setFoodData(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const getFoodData = async (categoryId) => {
    try {
      const response = await axios.get(
        `http://localhost:1000/food/${categoryId}`
      );
      setFoodData(response.data);
      console.log("data", response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("foodData", foodData);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData();
    getFoodData();
  }, []);

  const addCategory = async (name) => {
    try {
      const token = localStorage.getItem("token") || "";
      await axios.post(
        "http://localhost:1000/food-Category",
        {
          categoryName: name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getData();
    } catch (err) {
      alert(err);
    }
  };
  const deleteCategory = async (id) => {
    try {
      const token = localStorage.getItem("token") || "";
      await axios.delete(`http://localhost:1000/food-Category/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getData();
    } catch (err) {
      alert(err);
      console.log(err, "err");
    }
  };

  const getFilteredFoods = () => {
    if (!selectedCategory) {
      return foodData;
    }
    return foodData.filter((food) => food.categoryId === selectedCategory);
  };
  const getFoodCount = (categoryId) => {
    return foodData.filter((food) => food.categoryId === categoryId).length;
  };

  return (
    <div className="flex min-h-screen bg-[#F4F4F5]">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      <div className="flex-1 px-10 py-6">
        {activeMenu === "food" && (
          <div className="flex flex-col w-full border-gray-100 items-end gap-6">
            <div className="w-9 h-9">
              <AvatarIcon />
            </div>

            <div className="flex flex-col bg-[#FFF] w-full  p-4 border-t border-[#E4E4E7] rounded-lg shadow-sm gap-4">
              <div className="font-bold text-[20px]">Dishes category</div>

              <div className="flex flex-row w-full justify-between gap-3">
                <button
                  className="flex h-[36px] px-[16px] py-[8px] items-center gap-[8px] rounded-full border border-red-500 bg-white"
                  onClick={() => setSelectedCategory("")}
                >
                  <div className="text-[#18181B] text-[14px] font-medium w-[145px]">
                    All Dishes
                  </div>
                </button>

                <div className="flex flex-row gap-3 flex-wrap w-full">
                  {categoryData.map((category) => (
                    <div
                      key={category._id}
                      className="relative group flex items-center"
                    >
                      <button
                        onClick={() => setSelectedCategory(category._id)}
                        className={`flex h-9 px-4 py-2 items-center rounded-full gap-4 border bg-white text-sm font-medium ${
                          selected === category
                            ? "border-red-500 text-red-500"
                            : "border-zinc-300 text-zinc-800"
                        }`}
                      >
                        {category.categoryName}
                        <Badge className="rounded-full bg-[#18181B] text-white w-5 h-5 flex items-center justify-center text-[10px]">
                          {getFoodCount(category._id)}
                        </Badge>
                      </button>

                      <button
                        onClick={() => deleteCategory(category._id)}
                        className="absolute -top-2 -right-2 text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-white w-4 h-4 flex items-center justify-center text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ))}

                  <AddCategoryDialog onAdd={addCategory} />
                </div>
              </div>
            </div>

            {/* {categoryData.map((category) => {
                const foodsInCategory = foodData.filter(
                  (food) => food.categoryId === category._id
                );

                return (
                  <div key={category._id} className="space-y-4">
                    <h2 className="text-[20px] font-semibold text-[#09090B] flex items-center gap-2">
                      {category.categoryName}

                      <span className="px-2 py-1 text-xs bg-black text-white rounded-full">
                        {foodsInCategory.length}
                      </span>
                    </h2>

                    <div className="w-[270px]">
                      <AddDishDialog
                        categoryId={category._id}
                        onAdd={(dish, categoryId) => addDish(dish, categoryId)}
                      />
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {foodsInCategory.map((food) => (
                        <FoodCard
                          key={food._id}
                          image={food.image}
                          name={food.foodname}
                          ingredients={food.ingredients}
                          price={food.price}
                        />
                      ))}
                    </div>
                  </div>
                );
              })} */}
            {categoryData.map((item, index) => (
              <div
                key={item._id || index}
                className="w-full min-h-[325px] p-5 border border-[#E4E4E7] flex flex-col gap-4 bg-white rounded-xl"
              >
                <div className="text-[20px] font-medium">
                  {item.categoryName}
                </div>

                <div className="flex flex-row gap-4 flex-wrap">
                  <AddDishDialog
                    categoryId={item._id}
                    getFoodData={getFoodData}
                  />
                  <FoodSection categoryId={item._id} />

                  {/* {(foodData || []).map((food) => (
                    <FoodCard
                      key={food._id}
                      {...food}
                      categoryData={categoryData}
                    />
                  ))} */}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeMenu === "orders" && (
          <div className="flex flex-col w-full h-[948px] gap-6">
            <OrdersSection />
          </div>
        )}
      </div>
    </div>
  );
}
