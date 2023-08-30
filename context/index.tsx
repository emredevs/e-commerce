"use client";

import React, { createContext, useState, ReactNode } from "react";

interface User {
  username: string;
  password: string;
}

interface ShopContextType {
  user: User[] | undefined;
  setUser: React.Dispatch<React.SetStateAction<User[] | undefined>>;
  findUser: User | undefined;
  setFindUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  userLogin: User;
  setUserLogin: React.Dispatch<React.SetStateAction<User>>;
  basket: string[];
  setBasket: React.Dispatch<React.SetStateAction<string[]>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopContextProviderProps {
  children: ReactNode;
}

export function ShopContextProvider({ children }: ShopContextProviderProps) {
  const [user, setUser] = useState<User[] | undefined>(
    JSON.parse(localStorage.getItem("userLogin") || "[]")
  );
  const [findUser, setFindUser] = useState<User | undefined>(
    JSON.parse(localStorage.getItem("giris") || "[]")
  );
  const [userLogin, setUserLogin] = useState<User>({
    username: "",
    password: "",
  });
  const [basket, setBasket] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const values: ShopContextType = {
    user,
    setUser,
    findUser,
    setFindUser,
    userLogin,
    setUserLogin,
    basket,
    setBasket,
    totalPrice,
    setTotalPrice,
  };

  return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
}

export default ShopContext;
