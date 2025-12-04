"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function DishInfoModal({ open, onOpenChange, dish }) {
  if (!dish) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[450px] p-6">
        <DialogHeader>
          <DialogTitle>Dishes info</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-zinc-500">Dish name</label>
            <input
              type="text"
              defaultValue={dish.name}
              className="w-full mt-1 border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-500">Ingredients</label>
            <textarea
              defaultValue={dish.ingredients}
              className="w-full mt-1 border rounded-lg p-2 h-20"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-500">Price</label>
            <input
              type="number"
              defaultValue={dish.price}
              className="w-full mt-1 border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-500">Image</label>
            <div className="relative w-full h-32 mt-2 rounded-lg overflow-hidden border">
              <Image src={dish.image} alt="" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="p-2 border border-red-400 text-red-500 rounded-lg">
            <Trash2 size={22} />
          </button>

          <button
            className="px-4 py-2 bg-black text-white rounded-lg"
            onClick={() => onOpenChange(false)}
          >
            Save changes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
