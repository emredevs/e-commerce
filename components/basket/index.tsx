"use client";
import ShopContext from "@/context";
import React, { useContext } from "react";

export default function Basket() {
  const { basket, setBasket } = useContext(ShopContext) as any;
  const deleteBtn = (e: any) => {
    const filterDelete = basket.filter((item: any) => item.id != e);
    setBasket(filterDelete);
  };

  return (
    <div>
      {basket.map((item: any) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <button onClick={() => deleteBtn(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
