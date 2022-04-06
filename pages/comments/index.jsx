import React, { useState } from "react";

const Comments = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setData(data);
  };

  const addComments = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  const removeComments = async (commentId) => {
    const res = await fetch(`api/comments/${commentId}`, {
      method: "DELETE",
    });
    const data = res.json();
    fetchComments();
  };

  return (
    <div className="text-center pt-5">
      <form onSubmit={addComments}>
        <input
          type="text"
          className="border border-gray-400 p-2 radius-lg "
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required="required"
        />
        <br />
        <button type="submit" className="m-2 bg-red-300 p-2">
          Submit
        </button>
        <button onClick={fetchComments} className="m-2 bg-red-300 p-2">
          Click Me
        </button>
      </form>
      {data.map((comment) => {
        return (
          <div key={comment.id}>
            <h1>
              {comment.id} {comment.name}
            </h1>
            <button
              onClick={() => removeComments(comment.id)}
              className="m-2 bg-red-300 p-2"
            >
              <i className="fa fa4-plus"> </i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
