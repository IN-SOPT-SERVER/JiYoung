import {Request, Response, } from "express";
import mediaData from "../data/media";

const getMedia = (req:Request, res:Response) => {
    return res.status(200).json({
        status:200,
        data: mediaData
    });
};

const addMedia = (req:Request, res:Response) => {
    const body=req.body;
   
    mediaData.push(body);

    return res.status(200).json({
        status:200,
        message:"넷플릭스 미디어 추가 성공",
        data:mediaData
    });
};

export {getMedia, addMedia};