const isLiked:boolean = true;

console.log(`${typeof isLiked}, ${isLiked}`);

const str: string ="hello";

console.log(`${typeof str}, ${str}`);

let num:number=31;

console.log(`${typeof num}, ${num}`);

//const sum:number= "sss";

let numbers: number[]=[1,2,3];

const strings: Array<string>=['hi', 'hello'];

const objArray1: Object[] = [
    {item1 : "a"},
    {item2 : "b"}
] //객체 타입

const objArray2: object[] = [
    {item1 : "a"},
    {item2 : "b"}
] // ts에서 추가된 객체 타입으로 원시 타입이 아닌 타입들만 할당함
// object가 더 엄격함. 

const foo1=(a:Object) => {
    console.log(a)
}

const foo2=(a:object) => {
    console.log(a)
}

foo1("helloworld")

//foo2("hellowordl")