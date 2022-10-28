import {Request, Response, } from "express";
import mediaData from "../data/media";

const getMedia = (req:Request, res:Response) => {
    return res.status(200).json({
        status:200,
        data: mediaData
    });
};

export default getMedia;