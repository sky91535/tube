//서버 활성화 : npm run dev / 서버 중지 : 컨트롤 + C

// express를 통한 서버 생성
import express from "express";

// 라우터를 사용하기 위해 외부 파일에서 export한 라우터를 import해줌 >>> 아래의 app.use("/",라우터이름)과 연결
import mainRouter from "./router/mainRouter";
import serveRouter from "./router/serveRouter";

const PORT = 9875;
const app = express();

// pug 템플릿 엔진 추가 (pug 설치: npm i pug)
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
// 기본 위치가 /views로 설정되어 있기 때문에 다른 폴더 위치를 지정할땐 앞에 추가해주면 수정됨


// <<<< 라우터 작동원리 >>>>
const testRouter = express.Router(); // 라우터 생성 - 1
const addUrl = (req,res) => res.send("test라우터의 add컨트롤러") // 아래 url이 실행되면 send값을 보냄 - 4
testRouter.get("/add",addUrl); //라우터에 하위 URL 생성, 위 함수 값을 받음 - 3
app.use("/test",testRouter); //생성된 라우터 활성화 - 2
// (이렇게 만들면 html:~/test/addurl 이란 주소를 사용할 수 있게됨)

// 개별 파일(~Router.js)에서 만든 라우터 활성화 (url의 시작, 가지의 시작부분 같은 역할)
app.use("/",mainRouter);
app.use("/serve",serveRouter);




// 웹에 표시될 내용
const testHome = (req,res) => {
    return res.send("Hello!");
};
app.get("/",testHome);


//서버가 활성화 되도록 + 콘솔 표시
const serverListen = () => console.log("Working!!!");
app.listen(PORT,serverListen);