const condition:boolean=true;

const promise=new Promise((resolve, reject)=> {
    if(condition)
        resolve("우와 promise");
    else
        reject(new Error("비동기 처리 중 실패"));
});

promise.then((resolveData):void=> console.log(resolveData));

const condition1:boolean=false;

const promise1=new Promise((resolve, reject)=> {
    if(condition1)
        resolve("우와 promise");
    else    
        reject(new Error("비동기 처리 중 실패"));
});

promise1
    .then((resolveData):void => console.log(resolveData))
    .catch((error):void => console.log(error.message));