// 컨트롤러는 함수이고 라우터는 그 함수를 이용하는것
// export default 는 파일에서 하나 밖에 export 하지 못함
// 함수 앞에 export 를 써주면 그 자체로 export 됨


export const Home = (req,res) => res.send("Home of mainRouter");
export const Main = (req,res) => res.send("Main of mainRouter");


export const topID = (req,res) => res.send(`Using of mainRouter #${req.params.id}`);
export const bottomID = (req,res) => res.send(`Using of mainRouter #${req.params.id}`);