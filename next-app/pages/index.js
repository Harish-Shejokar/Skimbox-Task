

export default function Home({ posts }) {
  console.log("reValidate")
  return (
    <>
      <main className={`flex min-h-screen `}>
        <h2 className='text-3xl'>Home page</h2>
        <ul className='mx-10 mt-10'>
          {posts.map(post => <li className='bg-yellow-300 my-2 text-2xl border-2 border-red-500 text-black' key={post.id}>{post.body}</li>)}
        </ul>
      </main>
    </>
  );
}



export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let posts = await res.json();
  posts = posts.slice(0,20);
  return {
    props: {
      posts,
    },
    

  }
}