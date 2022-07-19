// mongoDB 웹사이트에서 Coummunity Server 다운로드 후 시스템 환경 변수에서 시스템 변수 Path를 mongoDB/././bin 로 변경
// cmd 에 mongod 쳐서 에러문구가 아닌 알 수 없는 장문의 문구가 뜨면 mongo 쳐서 연결
// 터미널에 npm i mongoose 쳐서 설치
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/tube");



const db = mongoose.connection;
const dbOpen = () => console.log("Connected to DB!");
const dbError = () => console.log("DB Error", error);
db.on("error",dbError);
db.once("open",dbOpen);