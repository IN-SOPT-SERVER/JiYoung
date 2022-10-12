interface Comment{
    date: string,
    writer: string,
    content: string,
    isPrivate: boolean
}

const comments:Comment[]=[
    {
        date:"2022.10.12",
        writer:"양지용",
        content:"정말 눈부시겠어요",
        isPrivate:false
    },{
        date:"2022.10.13",
        writer:"황연진",
        content:"메가 커피 짱",
        isPrivate:true
    },{
        date:"2022.10.14",
        writer:"김수빈",
        content:"멋져요",
        isPrivate:false
    }
];

export default comments;