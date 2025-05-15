"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentList from "./CommentList";

interface Props {
  post_id: string;
}

const CommentCreate = ({ post_id }: Props) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/posts/${post_id}/comments`
      );
      console.log("Posts fetched:", response);
      if (response.data.length === 0) {
        console.log("No posts found.");
        setComments([]);
      } else {
        setComments(Object.values(response.data));
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post_id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Post comment:", comment);

    const data = JSON.stringify({
      comment: comment,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `http://localhost:4001/posts/${post_id}/comments`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        fetchComments();
        setComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full mb-4">
          <textarea
            name="title"
            id="title"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            autoComplete="off"
            autoFocus
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your comment"
          ></textarea>
        </div>

        <div className="w-full mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Submit
          </button>
        </div>
      </form>

      <div className="w-full mt-4">
        <CommentList comments={comments} />
      </div>
    </div>
  );
};

export default CommentCreate;
