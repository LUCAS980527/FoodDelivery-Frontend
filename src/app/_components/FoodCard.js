"use client";

import Image from "next/image";

import { useState } from "react";
import DishInfoModal from "./DishInfoModal";
import EditIcon from "../_icons/EditIcon";

export default function FoodCard({ id, image, name, ingredients, price }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-col gap-4 p-4 rounded-2xl border border-zinc-200 bg-white w-[270px]">
        <div className="relative w-[238.75] h-[129px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center rounded-xl"
          />

          <button
            onClick={() => setOpen(true)}
            className="absolute bottom-2 right-2"
          >
            <EditIcon size={36} />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold text-red-500 truncate">
              {name}
            </h3>
            <span className="text-sm font-semibold text-black">${price}</span>
          </div>
          <p className="text-[13px] text-zinc-600 line-clamp-2">
            {ingredients}
          </p>
        </div>
      </div>

      <DishInfoModal
        open={open}
        onOpenChange={setOpen}
        dish={{ id, name, ingredients, price, image }}
      />
    </>
  );
}
