import express, { Router, Request, Response } from "express";

const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!

router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
    status: 200,
    message: "index.ts 들어오기 ",
    });
});

router.use("/user", require("./user"));
router.use("/member", require("./member"));
router.use("/blog", require("./blog"));

module.exports = router; // 모듈로 반환