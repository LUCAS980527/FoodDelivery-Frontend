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
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function AddCategoryDialog({ onAdd }) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const submit = () => {
    if (!name.trim()) return;
    onAdd(name.trim());
    setName("");
    setOpen(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="rounded-full bg-red-500 w-[36px] h-[36px] flex items-center justify-center text-white"
        >
          <PlusIcon />
        </button>
      </DialogTrigger>
      {open && (
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <Input
              placeholder="Category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Button className="w-full bg-red-500" onClick={submit}>
              Add Category
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
