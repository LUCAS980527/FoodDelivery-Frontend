"use client";

import Image from "next/image";

import { useState } from "react";
import DishInfoModal from "./DishInfoModal";
import EditIcon from "../_icons/EditIcon";

export default function FoodCard({
  categoryId: categoryId,
  image: image,
  foodname: foodname,
  ingredients: ingredients,
  price: price,
}) {
  const [open, setOpen] = useState(false);
  const [foodData, setFoodData] = useState([]);

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
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getFoodData();
  }, []);

  return (
    <>
      <div className="relative flex flex-col gap-4 p-4 rounded-2xl border border-zinc-200 bg-white w-[270px]">
        <div className="relative w-[238.75] h-[129px]">
          {/* <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center rounded-xl"
          /> */}

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
              {data.foodname}
            </h3>
            <span className="text-sm font-semibold text-black">
              ${data.price}
            </span>
          </div>
          <p className="text-[13px] text-zinc-600 line-clamp-2">
            {ingredients}
          </p>
        </div>
      </div>

      {/* <DishInfoModal
        open={open}
        onOpenChange={setOpen}
        dish={{ categoryId, name, ingredients, price, image }}
      /> */}
    </>
  );
}
