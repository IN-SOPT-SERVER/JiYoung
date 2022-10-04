// 타입 단언하기 - open api를 사용할 때 종종 사용됨. 

// as
const test: any = "이종현"
const nameLength: number = (test as string).length

console.log(nameLength)

const test1: any ="수빈이연진이"
const testLength: number = (<string> test1).length;

console.log(testLength);