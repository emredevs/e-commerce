"use client";
import { ShopList, ShopListAxios } from "@/types/shop-list/type";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import ShopContext from "@/context";
import Link from "next/link";
export default function ShopList() {
  const { basket, setBasket, setTotalPrice } = useContext(ShopContext) as any;
  const [shopList, setShopList] = useState<ShopList[]>([]);
  useEffect(() => {
    axios
      .get<ShopListAxios>("https://fakestoreapi.com/products")
      .then((res) => setShopList(res.data));
  }, []);
  console.log(shopList);
  console.log("sepet", basket);
  return (
    <div className={styles.shopListContainer}>
      {shopList?.map((shopList) => (
        <div className={styles.ShopListBox} key={shopList.id}>
          <Link href={`/detail/${shopList.id}`}>
            <img src={shopList.image} alt={shopList.title} />
            <h3>
              {shopList?.title.length > 20
                ? shopList.title.slice(0, 20) + "..."
                : shopList.title}
            </h3>
            <div>
              <span>Price:{shopList.price}$</span>{" "}
              <span>Rateing:{shopList.rating.rate}</span>
            </div>
          </Link>
          <button
            onClick={() => {
              setBasket((prev: string[]) => [...prev, shopList]);
              setTotalPrice((prev: number) => prev + shopList.price);
            }}
          >
            Add To Basket
          </button>
        </div>
      ))}
    </div>
  );
}
