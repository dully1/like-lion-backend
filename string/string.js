// 문자열 선언
var greeting = "hello!";
var farewell = 'bye!';
var myname = '김태킷';
var sentence = greeting +'\n'+ myname;
// console.log(sentence);
// console.log(farewell +2);



// 이스케이프 시퀀스
// var sentence = greeting + '\t' +myname;
// var sentence = greeting + '\"' +myname;
// console.log(sentence);


// 템플릿 리터럴(es6)
// 멀티라인 텍스트 작업가능
// 이스케이프 시퀀스 필요 x
// var a =`안녕하세요!
// 여러분:)`;
// console.log(a);

// var price = 1000;
// var b = '이 물건은' +price + '원 입니다.';
// console.log(b);

// var c = `이 물건은 ${price}원 입니다`;
// console.log(c);
// var d = `이 물건은 ${200 +450}원 입니다.`;
// console.log(d);



var abc = "I am Iron man"
// indexOf
// 문자열의 특정 값이 시작되는 위치
// console.log(abc.indexOf("man"));
// console.log(abc.indexOf("I"));

// slice 문자열의 일부를 잘라낼떄
// console.log(abc.slice(0,4));
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());

// startWith() endsWith
var efg = 'This is my car.';
console.log(efg.startsWith('Th'));
console.log(efg.startsWith('th'));

console.log(efg.endsWith('car.'));

// includes()
console.log(efg.includes('is'));



// 문자열 함수