import express, {Request, Response, Router} from "express";
import movies from "./data/movie";

const router:Router=express.Router();

router.get("/", (req:Request, res:Response)=>{
    return res.status(200).json({
        status:200,
        message:"영화 불러오기 완료",
        data:movies
    });
});

module.exports=router;