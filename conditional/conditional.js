/**
 * 제어문(control flow)
 * 1. 조건문
 * 2. 반복문
 */

var a = 0;

// 1. if ...else
// if (a>2){
//     console.log('a>2');
// } else {
//     console.log('a ,=2');
// }


// 2. if ...else if ...else
// if (a>2){
//     console.log('a>2');
// } else if (a==2){
//     console.log('a=2');
// } else if (a==0) {
//     console.log('a=0');
// } else if (a<2) {
//     console.log(('a<2'));
// }else {
//     console.log('a ,=2');
// }

// 3. switch
var mbti = 'infp'
var val;
switch(mbti) {
    case 'infp':
        val = 'infp';
        break;
    case 'enfp':
        val = 'enfp';
        break;
    case 'istj':
        val = 'istj';
        break;
    default: 
    val= '유효한 값이 아닙니다'  
}

console.log(val);