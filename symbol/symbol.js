var name1 = "최윤호";
var name2 = "최윤호";
console.log(name1 == name2);

var name3 = Symbol("이테킷");
var name4 = Symbol("이테킷");
console.log(name3 == name4);

var myclass = {
    [Symbol("이테킷")]:1,
    [Symbol("이테킷")]:2
};