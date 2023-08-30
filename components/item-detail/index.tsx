"use client";
import { DetailItem } from "@/types/detail-item/type";
import axios from "axios";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "./styles.module.css";
import ShopContext from "@/context";

interface Iparams {
  params: string;
}
const ItemDetail: FunctionComponent<Iparams> = ({ params }) => {
  const [detail, setDetail] = useState<DetailItem>();
  const { setBasket, setTotalPrice } = useContext(ShopContext) as any;
  useEffect(() => {
    axios
      .get<DetailItem>(`https://fakestoreapi.com/products/${params}`)
      .then((res) => setDetail(res.data));
  }, [params]);

  return (
    <div className={styles.detailContainer}>
      <h2>{detail?.title}</h2>
      <div className={styles.detailInfo}>
        <img src={detail?.image} alt="" />

        <div className={styles.detailBox}>
          <div>
            <div>{detail?.description}</div>
            <div>
              <b>Category: </b>
              {detail?.category}
            </div>
            <div>
              <b>Rating: </b>
              {detail?.rating.rate}
              <span> ({detail?.rating.count}votes)</span>
            </div>
            <div>
              <b>Price:</b> {detail?.price}$
            </div>
            <button
              onClick={() => {
                setBasket((prev: string[]) => [...prev, detail]);
                setTotalPrice(
                  (prev: number) => prev + parseFloat(detail.price)
                );
              }}
            >
              Add To Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
