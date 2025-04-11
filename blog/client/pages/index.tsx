"use client";

import PostCreate from "@/components/posts/PostCreate";
import PostList from "@/components/posts/PostList";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} w-full h-screen`}
    >
      <div className="w-full mt-4">
        <h1 className="text-3xl">Blog, world!</h1>
      </div>
      <div className="w-full mt-4">
        <PostCreate />
      </div>
      <div className="w-full mt-4">
        <PostList />
      </div>
    </div>
  );
}
