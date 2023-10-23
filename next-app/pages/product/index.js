import Album from '@/Components/Album';
import React from 'react'

const index = ({data}) => {
  return (
    <>
      <div className="text-4xl ">product page</div>
      <Album data={data} />
    </>
  );
}

export default index;

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  let data = await res.json();
  data =  data.slice(0, 10);
  return { props: { data } };
}
