interface Members{
    name: string;
    age : number;
    home: string;
    favorite: string; 
    mbti: string;
    sibling: Boolean;
    appjame?:Boolean;
    study?:Boolean;
}

const members: Members[]=[
    {
        name:"이종현",
        age:26,
        home:"노원",
        favorite:"헬스",
        mbti: "enfj",
        sibling: true
    },{
        name:"한유진",
        age:24,
        home:"잠실",
        favorite:"운동",
        mbti: "isfj",
        sibling:true
    },{
        name:"장한빛",
        age: 24,
        home: "상봉",
        favorite: "웹툰",
        mbti:"esfp",
        sibling:true
    },{
        name:"양지영",
        age:25,
        home: "청량리",
        favorite: "아이스아메리카노",
        mbti: "infj",
        sibling:true
    }
];

export default members;