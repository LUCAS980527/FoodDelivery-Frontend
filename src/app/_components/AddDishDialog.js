"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function AddDishDialog({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const addDish = () => {
    if (!name || !price) return;
    onAdd({ name, price, description: desc, image });
    setName("");
    setPrice("");
    setDesc("");
    setImage("");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex flex-col justify-center items-center gap-6 px-4 py-2 rounded-[20px] border border-dashed border-[#EF4444] w-[270px] h-[241px] cursor-pointer">
          <Button className="rounded-full bg-red-500 w-[40px] h-[40px] flex items-center justify-center">
            <PlusIcon />
          </Button>
          <div className="text-center text-sm font-medium">Add new Dish</div>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Dish</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          <Input
            placeholder="Dish name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <Textarea
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <Input
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <Button className="w-full bg-red-500 text-white" onClick={addDish}>
            Add Dish
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
