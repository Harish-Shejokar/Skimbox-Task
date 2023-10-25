import React from "react";
import hello from "../api/hello";
import Head from "next/head";

const index = () => {
  // console.log(hello)
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <h1 className="text-3xl">About Page</h1>
    </div>
  );
};
export default index;

// export async function getStaticProps() {
//   const api = hello();
//   // const res = await fetch(`${hello}`);
//   // const data = await res.json();
//   // console.log(data);
// }
