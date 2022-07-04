
// express를 통한 서버 생성
import express from "express";

const PORT = 9874;
const app = express();


// 웹에 표시될 내용
const testHome = (req,res) => {
    return res.send("Hello!");
};
app.get("/",testHome);


//서버가 활성화 되도록 + 콘솔 표시
const serverListen = () => console.log("Working!!!");
app.listen(PORT,serverListen);