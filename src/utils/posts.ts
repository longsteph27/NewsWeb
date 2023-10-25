import { type } from "os";
import { categories } from "./categories";
import { imgdata } from "./imgData";

export type posts = {
    id: string,
    title: string,
    description: string,
    category: categories,
    postImage: imgdata,
    createdAt: string,
    updatedAt: string,
}