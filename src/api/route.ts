import { request } from "http";
import { NextResponse } from "next/server";
import { cache } from "react";

export const getNews = async () => {
    const newsData = await fetch(`http://localhost:4000/api/pages/653560f3cff2f1f31b16f6b6?locale=en`, {cache: "no-store"})
    return newsData.json();
}
export const getPostData = async (postId:string) => {
    const postData = await fetch(`http://localhost:4000/api/posts/${postId}?locale=en`)
    return postData.json();
}