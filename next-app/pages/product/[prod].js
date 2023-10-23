import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const product = ({data}) => {
  // console.log(path);
  const params = useParams();
  const router = useRouter();
  // console.log(params);
  // console.log(data);

  return (
    <div>
      <div className="text-3xl">particular paroduct page</div>
      <div className="text-5xl mx-auto">{data?.id}</div>
      {/* <div>{params.prod}</div> */}
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  let data = await res.json();
  //  data = data.slice(0, 10);
  console.log(data);
  return {
    paths: [
      {
        params: {
          prod: "1",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(params) {
  const path = params.params.prod;

  console.log("params", path);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${path}`);
  let data = await res.json();
  // data = data.slice(0, 10);

  return { props: { data } };
}

export default product;
