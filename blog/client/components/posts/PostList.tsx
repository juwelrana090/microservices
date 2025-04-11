'use client";';

import React, { useState, useEffect } from "react";
import axios from "axios";

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
          setPosts(response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full">
        <h2>Post List</h2>
      </div>
      <div className="w-full">
        {/* {posts?.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <ul>
            {posts?.map((post: { id: string; title: string }) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )} */}
      </div>
    </div>
  );
};

export default PostList;
