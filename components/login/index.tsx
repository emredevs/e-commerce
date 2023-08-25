"use client";
import React, { useState } from "react";

export default function Login() {
  interface User {
    username: string;
    password: string;
  }
  const userInfo: User[] = JSON.parse(
    localStorage.getItem("userLogin") || "[]"
  );
  const [findUser, setFindUser] = useState<User | undefined>(
    JSON.parse(localStorage.getItem("giris") || "[]")
  );
  const [user, setUser] = useState({ username: "", password: "" });
  const singinOnchange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    if (user.username.length === 0 || user.password.length === 0) {
      alert("gerekli bilgileri duldurun");
      return;
    }
    const userSingin = userInfo.find(
      (users) =>
        users.username === user.username && users.password === user.password
    );
    if (userSingin === undefined) {
      alert("giriş başarısız");
    } else alert("giriş başarılı");
    setFindUser(userSingin);
    localStorage.setItem("giris", JSON.stringify(userSingin));
  };

  console.log(userInfo);
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input type="text" name="username" onChange={singinOnchange} />
        <input type="text" name="password" onChange={singinOnchange} />
        <button type="submit">Log in</button>
      </form>
      <h1>
        {findUser?.username} {findUser?.password}
      </h1>
    </div>
  );
}
