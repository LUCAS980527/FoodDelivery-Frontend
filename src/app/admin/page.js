"use client";

import { useState } from "react";
import HeaderIcon from "../_icons/HeaderIcon";
import FoodMenuAdmin from "../_icons/MenuIcon";
import TruckIcon from "../_icons/TruckIcon";
import AvatarIcon from "../_icons/AvatarIcon";
import { PlusIcon } from "lucide-react";
import FoodCard from "../_components/FoodCard";

export default function AdminPage({ selected, onSelect }) {
  const categories = [
    { id: "Salads", label: "Salads" },
    { id: "Pizzas", label: "Pizzas" },
    { id: "LunchFavorites", label: "LunchFavorites" },
    { id: "MainDishes", label: "MainDishes" },
    { id: "Fish & Seafoods", label: "Fish & Seafoods" },
    { id: "Brunch", label: "Brunch" },
    { id: "SideDishe", label: "SideDishe" },
    { id: "Desserts", label: "Desserts" },
    { id: "Beverages", label: "Beverages" },
    { id: " Appetizers", label: " Appetizers" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F4F4F5]">
      <div className="flex flex-col w-[220px] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-10">
          <HeaderIcon />
          <div>
            <div className="text-[20px] text-black font-bold leading-tight">
              NomNom
            </div>
            <div className="text-[12px] text-[#71717A]">Swift delivery</div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div
            onClick={() => setActiveMenu("food")}
            className={`flex items-center gap-3 w-full h-11 px-4 rounded-xl cursor-pointer transition-all duration-200
              ${
                activeMenu === "food"
                  ? "bg-[#F4F4F5] font-semibold text-black"
                  : "text-[#71717A] hover:bg-[#F9F9FA] hover:text-black"
              }`}
          >
            <FoodMenuAdmin
              className={`transition ${
                activeMenu === "food" ? "opacity-100" : "opacity-70"
              }`}
            />
            <span className="text-[15px]">Food menu</span>
          </div>

          <div
            onClick={() => setActiveMenu("orders")}
            className={`flex items-center gap-3 w-full h-11 px-4 rounded-xl cursor-pointer transition-all duration-200
              ${
                activeMenu === "orders"
                  ? "bg-[#F4F4F5] font-semibold text-black"
                  : "text-[#71717A] hover:bg-[#F9F9FA] hover:text-black"
              }`}
          >
            <TruckIcon
              className={`transition ${
                activeMenu === "orders" ? "opacity-100" : "opacity-70"
              }`}
            />
            <span className="text-[15px]">Orders</span>
          </div>
        </div>

        {/* <div className="mt-auto pt-6 border-t border-[#E4E4E7] flex items-center gap-3">
          <AvatarIcon />
          <span className="text-[14px] text-[#52525B] font-medium">Admin</span>
        </div> */}
      </div>

      <div className="flex-1 px-10 py-6">
        {activeMenu === "food" && (
          <div className="flex flex-col w-full border-gray-100 h-[176px] items-end gap-6">
            <div className="w-9 h-9">
              <AvatarIcon />
            </div>
            <div className="flex flex-col bg-[#FFF]  w-full h-[100vh] p-4  border-t border-[#E4E4E7] rounded-lg shadow-sm gap-4">
              <div className="flex ">
                <div className="font-bold text-[20px]">Dishes category</div>
              </div>
              <div className="flex flex-row w-[525px] justify-between gap-3">
                <button
                  className="flex h-[36px] px-[16px] py-[8px] items-center gap-[8px]  rounded-[var(--radius-rounded-full,9999px)]
  border 
  border-[var(--Tailwind-red---Text-color-500,#EF4444)]
  bg-[var(--background-bg-background,#FFF)]"
                >
                  <div className="text-[var(--text-text-secondary-foreground,#18181B)] font-inter text-[14px] font-medium leading-[20px]">
                    All Dishes
                  </div>
                </button>

                <div className="flex gap-3 flex-wrap w-[1171px]">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => onSelect(cat.id)}
                      className={`
            flex h-9 px-4 py-2 items-center gap-2 
            rounded-full border 
            bg-white
            text-sm font-medium
            transition
            ${
              selected === cat.id
                ? "border-red-500 text-red-500"
                : "border-zinc-300 text-zinc-800"
            }
          `}
                    >
                      {cat.label}
                    </button>
                  ))}
                  <div className="rounded-full bg-red-500 w-[36px] h-[36px] flex items-center justify-center">
                    <button>
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row bg-[#FFF]  w-full  p-4  border-t border-[#E4E4E7] rounded-lg shadow-sm gap-4 text-[#09090B] font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.5px]">
              Salads
              <div className="flex flex-col justify-center items-center gap-6 px-4 py-2  self-stretch rounded-[20px] border border-dashed border-[#EF4444] w-[270.75px] h-[241px]">
                <button className="rounded-full bg-red-500 w-[40px] h-[40px] flex items-center justify-center">
                  <PlusIcon />
                </button>
                <div className="text-center text-[#18181B] font-inter text-sm font-medium leading-5 w-[154px]">
                  Add new Dish to Salads
                </div>
              </div>
              <FoodCard />
            </div>
          </div>
        )}

        {activeMenu === "orders" && (
          <div className="flex flex-col w-full h-[948px] gap-6">
            <div className="flex justify-end">
              <div className="w-9 h-9">
                <AvatarIcon />
              </div>
            </div>

            <div className="flex flex-row bg-[#FFF] justify-between w-full p-4 items-center border-t border-[#E4E4E7] rounded-lg shadow-sm">
              <div className="flex flex-col">
                <div className="font-bold text-[20px]">Orders</div>
                <div className="text-[12px] text-[#71717A]">
                  Track and manage customer orders
                </div>
              </div>
              <div className="flex flex-row w-[525px] justify-between">
                <button
                  className="w-[300px] h-9 items-center justify-center flex border border-[#E4E4E7] rounded-full"
                  type="date"
                >
                  Calendar
                </button>
                <div className="w-[213px] h-9 flex items-center justify-center border-[#E4E4E7] rounded-full">
                  Change Status
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
