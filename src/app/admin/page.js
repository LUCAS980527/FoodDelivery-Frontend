"use client";

import { useEffect, useState } from "react";
import AvatarIcon from "../_icons/AvatarIcon";
import FoodCard from "../_components/FoodCard";
import Sidebar from "../_components/SideBar";
import OrdersSection from "../_components/OrderSection";
import AddCategoryDialog from "../_components/AddCategoryDialog";
import AddDishDialog from "../_components/AddDishDialog";
import axios from "axios";

export default function AdminPage({ selected, onSelect }) {
  const [activeMenu, setActiveMenu] = useState("food");
  const [categoryData, setCategoryData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  // console.log("categoryData", categoryData);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:1000/food-Category");
      setCategoryData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log("categoryData", categoryData);

  const getFoodData = async () => {
    try {
      const response = await axios.get("http://localhost:1000/food");
      setFoodData(response.data);
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
      getData(); // refresh the category list after deletion
    } catch (err) {
      alert(err);
      console.log(err, "err");
    }
  };

  const addDish = async (dish) => {
    console.log("dish", dish);
    try {
      await axios.post("http://localhost:1000/food", {
        foodname: dish.name,
        ingredients: dish.desc,
        price: dish.price,
        image: dish.image,
        categoryId: "69243a5b5356af4dafe773a3",
      });
      getFoodData();
    } catch (err) {
      alert(err);
    }
  };

  const getFilteredFoods = () => {
    if (!selected) {
      return foodData;
    }
    return foodData.filter(
      (food) =>
        food.categoryId === selected.id || food.categoryId === selected.id
    );
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
                <button className="flex h-[36px] px-[16px] py-[8px] items-center gap-[8px] rounded-full border border-red-500 bg-white">
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
                        onClick={() => onSelect(category)}
                        className={`flex h-9 px-4 py-2 items-center rounded-full border bg-white text-sm font-medium ${
                          selected === category
                            ? "border-red-500 text-red-500"
                            : "border-zinc-300 text-zinc-800"
                        }`}
                      >
                        {category.categoryName}
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

            <div className="flex flex-col bg-[#FFF] w-full p-4 border-t border-[#E4E4E7] rounded-lg shadow-sm gap-4 text-[#09090B] text-[20px] font-semibold">
              Salads
              <div className="flex bg-[#FFF] w-full gap-4">
                <div>
                  <div className="text-center text-sm font-medium leading-5 ">
                    <AddDishDialog onAdd={addDish} />
                  </div>
                </div>

                {getFilteredFoods().map((food) => (
                  <FoodCard
                    key={food._id || food.id}
                    image={food.image}
                    name={food.foodname}
                    ingredients={food.ingredients}
                    price={food.price}
                  />
                ))}
              </div>
            </div>
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
