"use client";

import { useState } from "react";
import AvatarIcon from "../_icons/AvatarIcon";
import { PlusIcon } from "lucide-react";
import FoodCard from "../_components/FoodCard";
import Sidebar from "../_components/SideBar";
import OrdersSection from "../_components/OrderSection";
import AddCategoryDialog from "../_components/AddCategoryDialog";

export default function AdminPage({ selected, onSelect }) {
  const [activeMenu, setActiveMenu] = useState("food");

  const [categories, setCategories] = useState([
    { id: "Salads", label: "Salads" },
    { id: "Pizzas", label: "Pizzas" },
    { id: "LunchFavorites", label: "LunchFavorites" },
    { id: "MainDishes", label: "MainDishes" },
    { id: "FishSeafoods", label: "Fish & Seafoods" },
    { id: "Brunch", label: "Brunch" },
    { id: "SideDishe", label: "SideDishe" },
    { id: "Desserts", label: "Desserts" },
    { id: "Beverages", label: "Beverages" },
    { id: "Appetizers", label: "Appetizers" },
  ]);

  const addCategory = (name) => {
    const newCategory = {
      id: name.replace(/\s+/g, ""),
      label: name,
    };
    setCategories((prev) => [...prev, newCategory]);
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

              <div className="flex flex-row w-[525px] justify-between gap-3">
                <button className="flex h-[36px] px-[16px] py-[8px] items-center gap-[8px] rounded-full border border-red-500 bg-white">
                  <div className="text-[#18181B] text-[14px] font-medium">
                    All Dishes
                  </div>
                </button>

                <div className="flex gap-3 flex-wrap w-[1171px]">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => onSelect(cat.id)}
                      className={`flex h-9 px-4 py-2 items-center gap-2 rounded-full border bg-white text-sm font-medium transition
                        ${
                          selected === cat.id
                            ? "border-red-500 text-red-500"
                            : "border-zinc-300 text-zinc-800"
                        }`}
                    >
                      {cat.label}
                    </button>
                  ))}

                  <AddCategoryDialog onAdd={addCategory} />
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-[#FFF] w-full p-4 border-t border-[#E4E4E7] rounded-lg shadow-sm gap-4 text-[#09090B] text-[20px] font-semibold">
              Salads
              <div className="flex bg-[#FFF] w-full gap-4">
                <div className="flex flex-col justify-center items-center gap-6 px-4 py-2 rounded-[20px] border border-dashed border-[#EF4444] w-[270.75px] h-[241px]">
                  <button className="rounded-full bg-red-500 w-[40px] h-[40px] flex items-center justify-center">
                    <PlusIcon />
                  </button>
                  <div className="text-center text-sm font-medium leading-5 w-[154px]">
                    Add new Dish to Salads
                  </div>
                </div>

                <FoodCard />
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
