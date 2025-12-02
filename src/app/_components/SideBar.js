"use client";

import { useState } from "react";
import HeaderIcon from "../_icons/HeaderIcon";
import FoodMenuAdmin from "../_icons/MenuIcon";
import TruckIcon from "../_icons/TruckIcon";
import AvatarIcon from "../_icons/AvatarIcon";

export default function Sidebar({ activeMenu, setActiveMenu }) {
  return (
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
    </div>
  );
}
