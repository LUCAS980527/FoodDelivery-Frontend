"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

export function FoodSection() {
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
    <div>
      {(foodData || []).map((food) => (
        <FoodCard key={food._id} {...food} />
      ))}
    </div>
  );
}
