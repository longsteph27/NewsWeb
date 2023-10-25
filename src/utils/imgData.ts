import { type } from "os";
import internal from "stream";

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