import express, {Request, Response, Router} from "express";
import members from "./data/member"

const router:Router=express.Router();

router.get("/", (req:Request, res:Response)=>{
    return res.status(200).json({
        status:200,
        message: "멤버 불러오기 완료",
        data: members,
    });
});

module.exports = router;