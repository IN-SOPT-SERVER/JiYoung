import express, {NextFunction, Request, Response} from "express";
import indexRouter from './router/index';

const app=express();
const PORT=3000;

app.use(express.json());
app.get("/", (req:Request, res:Response, next:NextFunction)=>{
    res.send("넷플릭스의 index입니다.");
});
app.use("/media", indexRouter);

app.listen(PORT, () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################
    `);
}); //포트에서 서버를 실행하겠다!