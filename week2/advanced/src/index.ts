import express, {NextFunction, Request, Response} from "express";

const app=express();
const PORT=3000;

app.get("/", (req:Request, res:Response, next:NextFunction)=>{
    res.send("서버입니다람쥐");
});

app.listen(PORT, () => {
    console.log(`
        #############################################
            🛡️ Server listening on port: ${PORT} 🛡️
        #############################################
    `);
}); //포트에서 서버를 실행하겠다!