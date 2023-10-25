import { newsData, posts } from '@/utils/types'
import { useRouter } from 'next/navigation';
import { type } from 'os'
import React from 'react'

type Props = {
    data: posts;
};

const CardNews = ({ data }: Props) => {

    const route = useRouter();
    const handleClick = () => {
        const queryImg = Object.entries(data.postImage)
        .map(([key, value]) => `${key} =  ${value}`)
        .join('&');
        const queryPost = `id=${data.id}`;
        
        const url = `/detail?${queryPost}`;
        route.push(url);
    }
    return (
        <article className='bg-slate-100 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg 
     hover:bg-slate-200 cursor-pointer transition-all duration-200 ease-out' onClick={handleClick}>
            {data.postImage.filename && (
                <img
                    src={data.postImage.url}
                    alt='post_img'
                    className='w-full rounded-lg' />
            )}

            <div>
                <div className='p-4'>
                    <h2 className='font-bold h-16 flex justify-center' >{data.title_short}</h2>
                </div>
            </div>
        </article>
    )
}

export default CardNews