"use client";
import { Categories, CategoriesAxios } from "@/types/categories/type";
import axios from "axios";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import styles from "../shop-list/styles.module.css";
import ShopContext from "@/context";
interface Iparams {
  params: string;
}

const Catagories: FunctionComponent<Iparams> = ({ params }) => {
  const [cate, setCate] = useState<Categories[]>([]);
  const { setBasket } = useContext(ShopContext) as any;
  useEffect(() => {
    axios
      .get<CategoriesAxios>(
        `https://fakestoreapi.com/products/category/${params}`
      )
      .then((res) => setCate(res.data));
  }, [params]);
  console.log(cate);

  return (
    <div className={styles.shopListContainer}>
      {cate?.map((cate) => (
        <div className={styles.ShopListBox} key={cate.id}>
          <img src={cate.image} alt={cate.title} />
          <h3>
            {cate?.title.length > 20
              ? cate.title.slice(0, 20) + "..."
              : cate.title}
          </h3>
          <div>
            <span>Price:{cate.price}$</span>{" "}
            <span>Rateing:{cate.rating.rate}</span>
          </div>

          <button
            onClick={() => setBasket((prev: string[]) => [...prev, cate])}
          >
            Sepete Ekle
          </button>
        </div>
      ))}
    </div>
  );
};

export default Catagories;
