"use client";

import { useState } from "react";
import Header from "./_features/Header";
import MainPage from "./_features/Mainpage";
import Footer from "./_features/Footer";

export default function Page() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
    localStorage.setItem("isCartOpen", "true");
  };

  const closeCart = () => {
    setIsCartOpen(false);
    localStorage.setItem("isCartOpen", "false");
  };

  return (
    <div>
      <Header openCart={openCart} />
      <MainPage
        isCartOpen={isCartOpen}
        openCart={openCart}
        closeCart={closeCart}
      />
      <Footer />
    </div>
  );
}
