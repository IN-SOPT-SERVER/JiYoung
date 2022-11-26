import { Router } from "express";
import { userController } from "../controller";
import auth from "../middlewares/auth";
import {body} from "express-validator";
const router: Router = Router();

router.get("/:userId", auth, userController.getUserById);

//* 전체 유저 조회
router.get("/",auth, userController.getAllUser);

//* 유저 수정
router.patch("/:userId",auth, userController.updateUser);

//* 유저 삭제
router.delete("/:userId",auth, userController.deleteUser);

//* 유저 생성 - POST api/user
router.post(
    "/",
    [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
    userController.createUser
  );

  //* 이름으로 유저 찾기  /search/?keyword={}
router.get("/search", userController.searchUserByName);

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
