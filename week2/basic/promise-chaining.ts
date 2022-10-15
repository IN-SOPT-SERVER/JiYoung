const me=(callback: () => void, time:number)=>{ //인자로 callback함수와 time을 받음 
    setTimeout(callback, time);
};

const wakeUp= ():Promise<string> => {
    return new Promise((resolve, reject)=> {
        me(()=>{
            console.log("[현재] 일어남");
            resolve("일어남");
        }, 1000);
    });
};

const goBathRoom = (now: string): Promise<string> => {
    return new Promise((resolve, reject)=> {
        me(()=>{
            console.log("[현재] 화장실로 이동함.");
            console.log(`${now} -> 화장실로 이동함`);
        }, 1000);
    });
};

const ready= (now:string):Promise<string> => {
    return new Promise((resolve, reject) => {
        me(()=> {
            console.log("[현재] 칫솔과 치약을 준비함.");
            resolve(`${now} -> 칫솔과 치약을 준비함.`);
        },1000);
    });
};

const start=(now:string):Promise<string> => {
    return new Promise((resolve, reject)=>{
        me(()=> {
            console.log("[현재] 양치함");
            resolve(`${now} -> 양치함`);
        }, 1000);
    });
};

wakeUp()
    .then((now)=> goBathRoom(now))
    .then((now)=> ready(now))
    .then((now)=> start(now))