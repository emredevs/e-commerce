"use client";
import ShopContext from "@/context";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import styles from "./styles.module.css";
export default function Singin() {
  const { user, setUser, userLogin, setUserLogin } = useContext(
    ShopContext
  ) as any;
  interface Login {
    username: string;
    password: string;
  }
  // context API kullanamdan önceki state yönetimi
  // const [user, setUser] = useState<Login[]>(
  //   JSON.parse(localStorage.getItem("userLogin") || "[]")
  // );
  // const [userLogin, setUserLogin] = useState<Login>({
  //   username: "",
  //   password: "",
  // });
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
    const userFind = user.find(
      (users: any) => users.username === userLogin.username
    );

    if (userFind !== undefined) {
      alert("varolan kullanıcı");
      return;
    }
    setUser([...user, userLogin]);
    localStorage.setItem("userLogin", JSON.stringify([...user, userLogin]));
    setUserLogin({ username: "", password: "" });
    alert("kayıt başarılı");
    localStorage.setItem("giris", JSON.stringify(""));

    router.push("/login");
  };

  console.log(user);
  return (
    <form className={styles.singInContainer} onSubmit={formSubmit}>
      <div>
        <img src="email.png" alt="" />
        <input
          placeholder="E-mail Address"
          name="username"
          type="email"
          value={userLogin.username}
          onChange={userOnchange}
        />
      </div>
      <div>
        <img src="pass.png" alt="" />
        <input
          placeholder="Password"
          name="password"
          type="text"
          value={userLogin.password}
          onChange={userOnchange}
        />
      </div>
      <button type="submit">Sing in</button>
    </form>
  );
}
