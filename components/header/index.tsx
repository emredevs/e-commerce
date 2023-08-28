"use client";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./styles.module.css";
import ShopContext from "@/context";
import Navbar from "../navbar";
export default function Header() {
  const { findUser, setFindUser } = useContext(ShopContext) as any;
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
          <span>{findUser?.username}</span>
          <button
            onClick={() => {
              setFindUser({ username: "", password: "" });
              localStorage.setItem("giris", JSON.stringify(""));
            }}
          >
            out
          </button>
        </div>
      )}
    </div>
  );
}
