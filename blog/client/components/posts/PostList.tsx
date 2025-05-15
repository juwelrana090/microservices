'use client";';

import React, { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./PostItem";

type Post = {
  id: string;
  title: string;
};

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/posts");
        console.log("Posts fetched:", response);
        if (response.data.length === 0) {
          console.log("No posts found.");
          setPosts([]);
        } else {
          setPosts(Object.values(response.data));
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  console.log("Posts:", posts);
  console.log("Posts length:", posts?.length);

  return (
    <div className="w-full p-4">
      <div className="w-full mb-4">
        <h2>Post List</h2>
      </div>
      <div className="w-full m-auto place-content-center">
        {posts?.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {posts?.map((post: Post) => (
              <li key={post.id} className="w-full p-4 card border rounded">
                <PostItem post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PostList;
