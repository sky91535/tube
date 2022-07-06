// 컨트롤러는 함수이고 라우터는 그 함수를 이용하는것
// export default 는 파일에서 하나 밖에 export 하지 못함
// 함수 앞에 export 를 써주면 그 자체로 export 됨


export const Home = (req,res) => {
    const mixintest = [{
        a: "a",
        b: "b",
        c: "c"
    }]
    res.render("home", {pageTitle:"Home", variable:"변수",mixintest});
};
    
// res.render("pug 파일이름") 을 쓰면 웹에 표시될 외부 파일을 불러옴
// 템플릿에서 필요한 #{}변수들은 해당 페이지를 렌더링 하고 있는 컨트롤러에서 지정해서 보내는 것
export const Main = (req,res) => res.send("Main of mainRouter");


export const topID = (req,res) => res.send(`Using of mainRouter #${req.params.id}`);
export const bottomID = (req,res) => res.send(`Using of mainRouter &${req.params.id}`);
