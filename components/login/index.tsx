"use client";
import ShopContext from "@/context";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import styles from "../singin/styles.module.css";
export default function Login() {
  const cookies = new Cookies();
  const { findUser, setFindUser } = useContext(ShopContext) as any;
  interface User {
    username: string;
    password: string;
  }
  const userInfo: User[] = cookies.get("userLogin") || "[]";
  // context API kullanamdan önceki state yönetimi
  // const [findUser, setFindUser] = useState<User | undefined>(
  //   JSON.parse(localStorage.getItem("giris") || "[]")
  // );
  const [user, setUser] = useState<User>({ username: "", password: "" });
  const singinOnchange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const formSubmit = (e: any) => {
    e.preventDefault();
    if (user.username?.length === 0 || user.password?.length === 0) {
      alert("gerekli bilgileri duldurun");
      return;
    }
    const userSingin = userInfo.find(
      (users) =>
        users.username === user.username && users.password === user.password
    );
    if (userSingin === undefined) {
      alert("giriş başarısız");
      return;
    } else alert("giriş başarılı");
    setFindUser(userSingin);
    cookies.set("giris", userSingin);
    router.push("/");
  };

  console.log(userInfo);
  return (
    <div>
      <form className={styles.singInContainer} onSubmit={formSubmit}>
        <div>
          <img src="email.png" alt="" />
          <input
            placeholder="E-mail Address"
            type="email"
            name="username"
            onChange={singinOnchange}
          />
        </div>
        <div>
          <img src="pass.png" alt="" />

          <input
            placeholder="Password"
            type="text"
            name="password"
            onChange={singinOnchange}
          />
        </div>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
