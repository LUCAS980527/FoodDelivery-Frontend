"use client";

import { useState } from "react";
import AvatarIcon from "../_icons/AvatarIcon";

export default function OrdersSection() {
  const [filter, setFilter] = useState("pending");

  return (
    <div className="flex flex-col w-full h-[948px] gap-6">
      <div className="flex flex-col w-full">
        <div className="text-[24px] font-semibold text-black">Orders</div>
        <div className="text-sm text-[#71717A]">
          Manage incoming orders and track their status
        </div>
      </div>

      <div className="flex items-center gap-4">
        {["pending", "preparing", "delivering", "completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-medium capitalize transition
              ${
                filter === tab
                  ? "bg-black text-white"
                  : "bg-white text-[#71717A] hover:bg-[#F4F4F5]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {/* {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="w-full bg-white rounded-xl p-4 flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center gap-4">
                <AvatarIcon />
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-black">
                    Order #{1000 + i}
                  </span>
                  <span className="text-sm text-[#71717A]">
                    2 items • ₮24,800
                  </span>
                </div>
              </div>

              <div className="text-sm font-medium text-[#71717A]">
                {filter.toUpperCase()}
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
}
