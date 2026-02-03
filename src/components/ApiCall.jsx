import React, { useEffect, useState } from "react";

import axios from "axios";

function ApiCall() {
  const BASE_URL = "https://mern-gndu.onrender.com/api/todos";
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const fetchPosts = async () => {
    const res = await axios.get(BASE_URL);
    setPosts(res.data);
  };

  const addPost = async () => {
    await axios.post(BASE_URL, { title });
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => {
          console.log(e.target.value);
          setTitle(e.target.value);
        }}
      />

      <button onClick={addPost}>Add</button>
      {posts.map((post) => {
        console.log(post);
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        );
      })}
    </>
  );
}

export default ApiCall;
