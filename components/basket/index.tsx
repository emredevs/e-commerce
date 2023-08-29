"use client";
import ShopContext from "@/context";
import React, { useContext } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import styles from "./styles.module.css";
export default function Basket() {
  const { basket, setBasket } = useContext(ShopContext) as any;
  const deleteBtn = (e: string) => {
    const filterDelete = basket.filter((item: any, i: string) => i !== e);
    setBasket(filterDelete);
  };

  return (
    <div className={styles.basketContainer}>
      {basket.map((item: any, index: string) => (
        <div className={styles.basketBox} key={index}>
          <div className={styles.basketInfo}>
            <img src={item.image} alt={item.title} />
            <div>{item.title}</div>
            <div>{item.price}$</div>
          </div>

          <HighlightOffIcon
            sx={{ color: "red", fontSize: "50px", cursor: "pointer" }}
            id={index}
            onClick={() => deleteBtn(index)}
          />
        </div>
      ))}
    </div>
  );
}
