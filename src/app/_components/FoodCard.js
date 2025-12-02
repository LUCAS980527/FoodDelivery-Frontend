"use client";

import Image from "next/image";

export default function FoodCard({ image, name, description, price }) {
  return (
    <div className="flex flex-col gap-4 p-4 rounded-2xl border border-zinc-200 bg-white w-[270px]">
      <div className="relative w-full h-[120px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-red-500 truncate">
            {name}
          </h3>

          <span className="text-sm font-semibold text-black">{price}</span>
        </div>

        <p className="text-[13px] text-zinc-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
