//기본 배열
let arr = [10, 20, 30, 40];

//자바스크립트 유용한 함수들
// map

arr.map(() => {  //반복 실행하면서 return 가능
    console.log('arr map');
});

arr.forEach(() => {  //반복문 내부에 코드 실행
    console.log('arr forEach');
});

arr.map((item) => {  //map 내부 함수 매개변수(item) 배열안에 값 주입
    console.log(item);
});

arr.map((item, index) => {  //map 내부 함수 매개변수(item, index) 배열안에 값과 인덱스 주입
    console.log('값:' + item + ' index:' + index + ' 배열[index]:' + arr[index]);
});

let result1 = arr.map(() => {
    return 99; //99 4개 들어있는 배열이 생김. 리턴해야 남는것임
});
console.log(result1);

let result2 = arr.map((item) => {
    return item + 100; //원래 들어있던 값(arr)에 + 100
});
console.log(result2);

let result3 = arr.map((item) => {
    return '보유한 값:' + item;  //[10, 20, 30, 40] -> [0 0 0 0]
});
console.log(result3);

let menuArr = ['우동', '라면', '김밥'];
let result4 = menuArr.map((item, index)=>{
    return '<p>'+item+'</p>';
})
console.log(result4);

let result5 = menuArr.map((item, index)=> //()=> {return data} = ()=>data
    '<p>'+item+'</p>');

console.log(result5);

// filter
// let arr = [10, 20, 30, 40];
let result6 = arr.filter((value)=>{    //item이나 value 같음 변수명임
    return value != 20; //조건 결과가 참인 값들만 return
});
console.log(result6);

// find
let result7 = arr.find((value)=>{
    return value == 30; //조건에 맞는 값 찾아줌, 없으면 언디파인드
});
console.log(result7);

// findIndex

let result8 = arr.findIndex((value, index)=>{
    return value == 20; //1인덱스에 20 있어서 1리턴, 찾는 값 없으면 -1 리턴
});
console.log(result8);



let [n1, n2, n3] = [10, 20, 30];
console.log(n1);
console.log(n2);
console.log(n3);

let obj  = {
    num1 : 30,
    num2 : 50
};
console.log(obj.num2);

let {num1, num2} = obj;
console.log(num1);
console.log(num2);