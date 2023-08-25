"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Singin() {
  interface Login {
    username: string;
    password: string;
  }
  const [user, setUser] = useState<Login[]>(
    JSON.parse(localStorage.getItem("userLogin") || "[]")
  );
  const [userLogin, setUserLogin] = useState<Login>({
    username: "",
    password: "",
  });
  const router = useRouter();
  const userOnchange = (e: any) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const formSubmit = (event: any) => {
    event.preventDefault();
    if (userLogin.username.length === 0 || userLogin.password.length === 0) {
      alert("gerekli bilgileri duldurun");
      return;
    }
    const userFind = user.find((user) => user.username === userLogin.username);

    if (userFind !== undefined) {
      alert("varolan kullanıcı");
      return;
    }
    setUser([...user, userLogin]);
    localStorage.setItem("userLogin", JSON.stringify([...user, userLogin]));
    setUserLogin({ username: "", password: "" });
    alert("kayıt başarılı");
    router.push("/login");
  };

  console.log(user);
  return (
    <form onSubmit={formSubmit}>
      <input
        name="username"
        type="text"
        value={userLogin.username}
        onChange={userOnchange}
      />
      <input
        name="password"
        type="text"
        value={userLogin.password}
        onChange={userOnchange}
      />
      <button type="submit">Sing in</button>
    </form>
  );
}
