"use client";
import Link from "next/link";
import Cookies from "universal-cookie";

import React, { useContext } from "react";
import styles from "./styles.module.css";
import ShopContext from "@/context";
import Navbar from "../navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Header() {
  const cookies = new Cookies();

  const { findUser, setFindUser, basket } = useContext(ShopContext) as any;
  //   interface User {
  //     username: string;
  //     password: string;
  //   }
  //   const [user, setUser] = useState<User>(
  //     JSON.parse(localStorage.getItem("giris") || "[]")
  //   );

  return (
    <div className={styles.headerContainer}>
      <h2>
        <Link href={"/"}>E-Shop</Link>
      </h2>
      <Navbar />
      {!findUser?.username && (
        <div>
          <button>
            <Link href={"/singin"}>Sing-in</Link>
          </button>
          <button>
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      )}

      {findUser?.username && (
        <div>
          <span>
            {findUser?.username?.slice(0, findUser?.username.indexOf("@"))}
          </span>
          <button
            onClick={() => {
              setFindUser({ username: "", password: "" });
              cookies.set("giris", "");
            }}
          >
            out
          </button>

          <button className={styles.basketBtn}>
            <Link href={"/basket"}>
              <ShoppingCartIcon />
              <sup>{basket.length}</sup>
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}
