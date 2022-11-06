import express, {Router} from 'express';
import {getMedia, addMedia} from '../api/media'

const router:Router=express.Router();

router.get("/",getMedia);
router.post("/",addMedia);

export default router;