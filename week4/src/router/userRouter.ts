import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

router.get("/:userId", userController.getUserById);

//* 유저 생성
router.post("/",userController.createUser);

//* 전체 유저 조회
router.get("/",userController.getAllUser);

//* 유저 수정
router.patch("/:userId",userController.updateUser);

//* 유저 삭제
router.delete("/:userId",userController.deleteUser);

export default router;
