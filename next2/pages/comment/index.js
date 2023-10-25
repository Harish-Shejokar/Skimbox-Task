import { useState } from "react";
import { useRouter } from "next/router";



const comment = () => {
  const router = useRouter();
 
  const [allComments, setComments] = useState([]);
  const [newComment, setNewCommet] = useState("");
  console.log(newComment);
  const getComments = async () => {
    const res = await fetch(`/api/comments`);
    const data = await res.json();
    console.log(data);
    setComments(data);
  };

  const submitCommentHandler = async () => {
    //   console.log(newComment)
    const res = await fetch(`api/comments`, {
      method: "POST",
      body: JSON.stringify({ newComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const deleteCommentHandler = async (e) => {
    // console.log(e.target.id);
    const commentId = e.target.id;
    const res = await fetch(`api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    getComments();
  };


  return (
    <>
      <div className="">
        <h1>Add comments</h1>
        <input
          className="text-black"
          type="text"
          value={newComment}
          onChange={(e) => setNewCommet(e.target.value)}
          placeholder="add comment"
        />
        <button type="submit" onClick={submitCommentHandler} className="px-2 bg-blue-800">
          submit comment
        </button>
      </div>
      <button
        onClick={getComments}
        className="border-2 bg-slate-100 p-2 text-black"
      >
        get comments
      </button>
      {allComments.map((el) => (
        <div key={el.id}>
          {el.comment}
          <button
            id={el.id}
            onClick={deleteCommentHandler}
            className="bg-slate-500 cursor-pointer"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default comment;
