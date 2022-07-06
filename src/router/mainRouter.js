import express from "express";
// express를 사용하기 위해선 매 파일 마다 import 해줘야함, (파일 하나가 그 자체의 모듈이고 독립된 형태이기 때문)

// 외부 파일에 존재하는 컨트롤러를 import 해옴 (defalut로 export된 파일과 다르게 원래 이름만 써줘야함. 이름 변경 불가능)
// 여러개를 한번에 import 할땐 {}안에 작성
import { Main ,Home, topID, bottomID } from "../controller/mainController";

// 라우터 만들기
const mainRouter = express.Router();



// 컨트롤러를 이용해 url 생성
mainRouter.get("/",Home);
mainRouter.get("/main",Main);
//여기서 생성된 url은 메인 라우터에서 갈라져서 나오는 것 = 도메인 바로 뒤에 붙는 하위 가지들

mainRouter.get("/:id/top",topID);
mainRouter.get("/bottom/:id",bottomID);
// 파라미터 = ":"는 url에 변수를 포함 시킬 수 있도록 함
// 파라미터를 사용할땐 단독 url 아래에 위치해야함 - url을 불러낼때 파라미터로 이동하지 않기 위한것.
// ex (/:id) (/page)의 순서라면 page로 이동하기 전에 파라미터가 먼저 인식되서 :page 같은 형식이 되어버림 그래서 (/page) (/:id) 순서로 코드를 써야함
// 위의 경우를 방지하기 위해서 파라미터에 정규식을 쓰면 그 조건만 불러냄 "/:id(\\d+)" 라고 입력하면 숫자인 경우에만 변수로 인식함


// 이 파일 외부에서 라우터를 사용하기 위해 export 해주는 것 (default를 사용하면 외부에서 import할때 다른 이름으로 바꿔서 쓸 수 있음)
export default mainRouter;