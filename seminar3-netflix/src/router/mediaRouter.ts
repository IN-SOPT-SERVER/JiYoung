import express, {Router} from 'express';
import getMedia from '../api/media'

const router:Router=express.Router();

router.get("/",getMedia);

export default router;