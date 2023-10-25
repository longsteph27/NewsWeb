import { type } from "os";


export type newsData = {
    id: string,
    title_page: string,
    Posts: posts[],
    BackgroundImage: imgdata,
    createdAt: string,
    updatedAt: string,
}

export type posts = {
    id: string,
    title_short: string,
    title: string,
    description: string,
    category: categories,
    postImage: imgdata,
    createdAt: string,
    updatedAt: string,
}

export type categories = {
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
}

export type imgdata = {
    id: string, 
    filename: string, 
    mimeType: string, 
    filesize: number, 
    width: number,
    height: number, 
    createdAt: string, 
    updatedAt: string, 
    url: string,
}