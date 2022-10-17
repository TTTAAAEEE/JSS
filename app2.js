const days = [1,2,false,true,null,undefined,"text"];
const me = "sexy~~"

//array를 값으로 채워보자 모든 데이터타입, null 가능

const toBuy = ["potato","tomato","pizza"];

console.log(toBuy);
toBuy[2] = "Water";
console.log(toBuy);
toBuy.push("chicken")
// push로 chicken을 받아 toB~의 array 맨 끝에 붙여넣어줄것ㄷ임...
//list를 쓰면 항목에  공통 맥락을 붕려가능한점.. 잊지마라
const realday = ["mon","tue","wed","thu","fri","sat","sun"]

const player = {
    name : "Taegyue",
    age : 27,
    
};
player.name
console.log
// console도 결국 객체다
console.log(player)

// 자바스크립트는 ㄹ마법이아니고 ,가지고 있는것을 보여주는 것이다 f는 function, 함수라는 의미이다 
console.log(player);
player.name = "nicolas";
console.log(player);

alert("You're SSSSSOOOO LATE");
function plus (first, second) {
    console.log(first + second)
};
plus(33333,2222);
plus(1.24214142,2.4124214142);
plus(3,3);

function minusFive(Hello) {
    console.log(Hello - 5)
};
minusFive(232,222,224,444,242);

const calculator = {
    add: function (a,b) {
        console.log(a+b);   
    },
    minus: function (a, b) {
        console.log(a-b);
    },
    times : function (a,b) {
        console.log(a*b);
    },
    divide : function (a,b)  {
        console.log(a/b);
    },
    power : function (a,b) {
        console.log(a**b);
    }, 
};

calculator.add (33,424);


// a-b a/b a+b a**b 구현해주기..! calculaotr에
calculator.add(1,2);
calculator.minus(2,1);
calculator.power(2,10);
calculator.times(10,124);
