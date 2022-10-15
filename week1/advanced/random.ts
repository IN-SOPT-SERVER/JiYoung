interface Member{
    name:string;
    group: string; 
}
interface Dinner{
    member: Member[],
    menu: string[],
    shuffle: (arr: Member[]) => Member[];
    organize: (arr: Member[]) => void;
}

const dinner : Dinner={
    member: [
    {
        name: "권세훈",
        group: "ob"
    },
    {
        name: "한유진",
        group: "ob"
    },
    {
        name: "양지영",
        group: "yb"
    },
    {
        name: "유수화",
        group: "yb"
    },
    {
        name: "김소현",
        group: "ob"
    },
    ],
    menu: ['샌드위치', '브리또', '무', '마라샹궈', '상추'],
    shuffle(members) {
        members.sort(() => Math.random() - 0.5);

        return members;
    },
    organize(members) {
        this.shuffle(members);
        
        members.map((item, index) => console.log(`${item.name}이 ${this.menu[index]}를 먹는다.`));

        const dinnerMember= members.map(mem => mem.name);
        console.log(`${dinnerMember[0]}, ${dinnerMember[1]}은 같이 ${this.menu[0]}을 먹는다..`);
    }
};

// dinner.shuffle(dinner.member);

dinner.organize(dinner.member);
