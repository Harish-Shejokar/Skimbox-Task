import React from 'react'
import hello from "../api/hello";

const index = () => {
  console.log(hello)
  return (
    <div>
      <h1 className='text-3xl'>About Page</h1>
    </div>
  )
}
export default index

// export async function getStaticProps() {
//   const api = hello();
//   // const res = await fetch(`${hello}`);
//   // const data = await res.json();
//   // console.log(data);
// }

