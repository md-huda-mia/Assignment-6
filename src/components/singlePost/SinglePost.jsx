import React from "react";
import "./Singlepost.css";

const SinglePost = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div>
      <div className="single_post">
        <div className="post_id">
          <h3>User Id: {id}</h3>
        </div>
        <div className="user_text">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
