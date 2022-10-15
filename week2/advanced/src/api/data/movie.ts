import internal from "stream";

interface Movie{
    name:string,
    starRating: number,
    director: string,
    info: string
}

const movies:Movie[]=[
    {
        name:"씽2게더",
        starRating:3.7,
        director:"가스 제닝스",
        info:"전 세계가 주목한 스테이지!"
    },{
        name:"탑건: 메버릭",
        starRating:4.1,
        director:"조셉 코신스키",
        info:"비행이 시작된다."
    },{
        name:"베놈 2",
        starRating:2.6,
        director:"앤디 서키스",
        info:"히어로의시대는끝남"
    }
];

export default movies;