import { Router } from "express";
import { imageController } from "../controller";
import {upload, auth} from "../middlewares";
const router: Router = Router();

router.post("/", upload.single("file") ,imageController.uploadImage); //단일 파일 -> single, 여러 파일 -> arrays


export default router;