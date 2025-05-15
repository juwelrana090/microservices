"use client";

import React from "react";
import CommentCreate from "../comments/CommentCreate";

type Post = {
  id: string;
  title: string;
};

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <div className="w-full">
      <div className="w-full  mb-4">
        <h2>{post.title}</h2>
      </div>
      <div className="w-full mb-4"></div>
      <div className="w-full">
        <div className="w-full mb-4">
          <h3>Comments :</h3>
        </div>
        <div className="w-full mb-4">
          <CommentCreate post_id={post.id} />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
