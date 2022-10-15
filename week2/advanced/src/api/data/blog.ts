interface Blog{
    date: string,
    title: string,
    content: string,
    isPrivate:boolean,
    writer:string
}

const blogPosts:Blog[]= [
    {
        date:"2022.10.12",
        title:"눈부셔",
        content:"창가자리 피하기",
        isPrivate:false,
        writer:"ㅇㅈㅇ"
    },
    {
        date:"2022.10.13",
        title:"미래에서 온 글",
        content:"이 글은 미래에서 왔다.",
        isPrivate:true,
        writer:"ㅇㅈㅇ"
    },
    {
        date:"2022.10.17",
        title:"미래의 중간고사보는 날",
        content:"ㅎㅇㅌ",
        isPrivate:false,
        writer:"양지영"
    }
];

export default blogPosts;