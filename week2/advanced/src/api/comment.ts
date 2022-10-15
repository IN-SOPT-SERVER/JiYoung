
import express ,{Request, Response, Router} from "express";
import comments from './data/comment'

const router:Router=express.Router();

router.get("/",(req:Request, res:Response)=>{
    return res.status(200).json({
        status:200,
        message:"댓글 가져오기 완료",
        data: comments
    });
});

module.exports=router;