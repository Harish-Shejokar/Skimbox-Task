import React, { useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";


const Album = ({ data }) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName)

  return (
    <div>
      {data.map((item) => (
        <div className="border border-slate-200 p-2 cursor-pointer w-[40%] mx-auto my-4" onClick={()=>router.push(`/product/${item.id}`)} key={item.id}>{item.id} {item.title}</div>
      ))}
    </div>
  );
};
export default Album;


