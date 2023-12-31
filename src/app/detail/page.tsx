"use client"
import { newsData, posts } from '@/utils/types'
import { useEffect, useState } from "react"
import { notFound, useSearchParams } from 'next/navigation';
import React from 'react'
import { getPostData } from '@/api/route';

function DetailPage() {
    const searchParams = useSearchParams();
    if (!searchParams) {
        return notFound();
    }
    const [postData, setPostData] = useState<posts>();
    useEffect(() => {
        const getNewsData = async () => {
            const response = await fetch(`http://localhost:4000/api/posts/${searchParams.get("id")}?locale=en`);
            const postData: posts = await response.json();
            setPostData(postData);
        }
        getNewsData();
    }, []);
    console.log(searchParams.get('id'))

    return (
        <article>
            <section className='news_detail'>
                <div>
                    <h1 className='text-[40px] font-bold tracking-normal'> {postData?.title} </h1>
                    <p className='flex justify-end md:text-[15px] text-[12px]  font-des'>{postData?.createdAt}</p>
                </div>
                {postData?.title && (
                    <img
                        src={postData.postImage.url}
                        alt='post_img'
                        className='w-full rounded-lg mt-10' />
                )}
                <div className='pt-12 bg-slate-200 px-7 pb-10'>
                    <p className='font-des text-[20px] font-extralight tracking-wide'> {postData?.description} </p>
                </div>

            </section>

        </article>
    )
}

export default DetailPage