"use client";

import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Post Created:", title);

    const data = JSON.stringify({
      title: title,
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/posts",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));

        setTitle("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full m-auto flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4">Create a Post</h1>
      <form className="w-full max-w-[350px]" onSubmit={handleSubmit}>
        <div className="w-full mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            autoComplete="off"
            autoFocus
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter post title"
          />
        </div>

        <div className="w-full mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
