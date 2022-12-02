import { Router } from "express";
import { userController } from "../controller";
import auth from "../middlewares/auth";
import {body} from "express-validator";
const router: Router = Router();

router.get("/:userId", auth, userController.getUserById);

//* 유저 생성
router.post("/",userController.createUser);

//* 전체 유저 조회
router.get("/",userController.getAllUser);

//* 유저 수정
router.patch("/:userId",userController.updateUser);

//* 유저 삭제
router.delete("/:userId",userController.deleteUser);

//* 유저 생성 - POST api/user
router.post(
    "/",
    [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
    userController.createUser
  );

router.post(
    "/signin",
    [
        body("email").notEmpty(),
        body("email").isEmail(),
        body("password").notEmpty(),
        body("password").isLength({ min: 6 }),
    ],
    userController.signInUser
    );

export default router;
