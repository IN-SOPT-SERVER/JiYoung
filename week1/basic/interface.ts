interface SOPT {
    name: string;
    age:number;
    isSOPT?:boolean; //선택적 property 
}

const introduce :SOPT ={
    name:"ㅇㅈㅇ",
    age : 22,
    isSOPT : false
}

const introduces: SOPT[] =[
    {
        name:"ㅇㅈㅇ",
        age : 22,
        isSOPT : true
    },
    {
        name:"양지용",
        age : 25,
        isSOPT : false
    },
    {
        name:"양지영",
        age : 25
    }
]