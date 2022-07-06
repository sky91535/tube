import express from "express";
import { First, Second } from "../controller/serveController";

const serveRouter = express.Router();




serveRouter.get("/first",First);
serveRouter.get("/second",Second);
// 여기서 생성된 파일은 /serve 뒤에 붙게 됨 = 도메인/serve/~


export default serveRouter;