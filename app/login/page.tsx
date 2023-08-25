import Login from "@/components/login";
import Link from "next/link";
import React from "react";

export default function LoginPage() {
  return (
    <div>
      <Link href={"/"}>anasayfa</Link>
      <Login />
    </div>
  );
}
