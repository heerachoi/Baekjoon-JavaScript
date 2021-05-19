// 문제 
// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다.

// 예제 입력
// 1 2
// 결과
// 3
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
// time: 172ms


//다른 방법
let input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
    
let numA = input[0].split(' ');
let numB = input[1].split(' ');

console.log(parseInt(numA) + parseInt(numB));
//time: 120ms
