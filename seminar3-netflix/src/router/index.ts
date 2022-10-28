import express, {Router} from "express";

import mediaRouter from "./mediaRouter";

const router:Router=express.Router();

router.use("/", mediaRouter);

export default router;