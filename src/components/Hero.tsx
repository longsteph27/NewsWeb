"use client";
import { newsData, posts } from "@/utils/types";
import { useEffect, useState } from "react"
import { types } from "util";
import CardNews from "./CardNews";
import { getNews } from "@/api/route";


const Hero = () => {
    const [pageBody, setPageBody] = useState<newsData>();
    useEffect(() => {
        const getNewsData = async () => {
            const newsResponse: newsData = await getNews();
            setPageBody(newsResponse);
        }
        getNewsData();
    },[]);
    return (
            <div className="news_page_body_container">
                {pageBody?.Posts.map( item => (
                    <CardNews key={item.title} data={item}>

                    </CardNews>
                ))}
            </div>
    )
}

export default Hero