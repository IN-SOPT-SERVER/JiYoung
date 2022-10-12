import express, {Request, Response, Router} from "express";
import blogPosts from "./data/blog"

const router:Router=express.Router();

router.get("/", (req:Request, res:Response)=>{
    return res.status(200).json({
        status:200,
        message: "블로그 내용 불러오기 완료",
        data: blogPosts,
    });
});

module.exports = router;