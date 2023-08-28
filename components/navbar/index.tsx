"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "@/types/navbar/type";
import axios from "axios";
import styles from "./styles.module.css";
import Link from "next/link";
export default function Navbar() {
  const [menu, setMenu] = useState<Navbar[]>([]);
  useEffect(() => {
    axios
      .get<Navbar[]>("https://fakestoreapi.com/products/categories")
      .then((res) => setMenu(res.data));
  }, []);
  return (
    <div className={styles.navbarContainer}>
      {menu.map((menu, index) => (
        <div key={index}>
          <Link href={`/${menu}`}>{menu}</Link>
        </div>
      ))}
    </div>
  );
}
