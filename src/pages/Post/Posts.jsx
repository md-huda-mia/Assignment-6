import React, { useEffect, useState } from "react";
import SinglePost from "../../components/singlePost/SinglePost";

const Posts = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  return (
    <div className="mt">
      <div className="section_title">
        <h1>Posts Component</h1>
      </div>

      <div className="posts_container">
        {posts?.map((post, index) => (
          <SinglePost key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
