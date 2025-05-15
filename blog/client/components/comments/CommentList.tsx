"use client";

import React from "react";

type Comment = {
  id: string;
  comment: string;
};

interface Props {
  comments: Comment[];
}

const CommentList = ({ comments }: Props) => {
  return (
    <div className="w-full grid grid-cols-1 gap-2">
      {comments?.map((item: Comment, index: number) => (
        <div key={index} className="w-full  border rounded p-2">
          {item.comment}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
