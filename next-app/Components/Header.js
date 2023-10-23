import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <ul className="h-[100px] w-full bg-slate-400 flex justify-evenly items-center text-3xl">
      <li>
        <Link href="/" >Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/product">Product</Link>
      </li>
    </ul>
  );
};

export default Header;
