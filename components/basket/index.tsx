"use client";
import ShopContext from "@/context";
import React, { useContext } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import styles from "./styles.module.css";
export default function Basket() {
  const { basket, setBasket, totalPrice, setTotalPrice } = useContext(
    ShopContext
  ) as any;

  const deleteBtn = (e: string) => {
    const filterDelete = basket.filter((_: any, i: string) => i !== e);
    setBasket(filterDelete);
  };

  return (
    <div className={styles.basketContainer}>
      <h2>Total Price:{totalPrice.toFixed(2)}$</h2>
      {basket.map((item: any, index: string) => (
        <div className={styles.basketBox} key={index}>
          <div className={styles.basketInfo}>
            <img src={item.image} alt={item.title} />
            <div>{item.title}</div>
            <div>{item.price}$</div>
          </div>

          <DeleteForeverIcon
            sx={{ color: "red", fontSize: "50px", cursor: "pointer" }}
            id={index}
            onClick={() => {
              deleteBtn(index);
              setTotalPrice((prev: number) => prev - parseFloat(item.price));
            }}
          />
        </div>
      ))}
    </div>
  );
}
