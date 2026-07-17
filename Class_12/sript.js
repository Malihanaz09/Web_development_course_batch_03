//conditional statement if
// let mode = "light";
// let color;
// if (mode === "dark"){
//     color = "black";
//     console.log(color)
// }

//conditional statement if-else
// let mode = "pink";
// let color;
// if (mode === "dark"){
//     color = "black";
// }else{
//     color = "white"
// }
// console.log(color)

//conditional statement else-if
let mode = "light";
let color;
if (mode == "dark"){
    color = "black"
} else if (mode == "pink"){
    color = "pink"
} else if (mode == "yellow"){
    color = "yellow"
}else{
    color = "white"
}
console.log(color);

// Function 
function myfunction(){
    console.log("this is my first function")
}
myfunction();

function sum(a,b){
    console.log(a+b)
}
sum(6,9);
sum(2,4);

function multipy(a,b){
    console.log("axb = " , a*b)
}
multipy(6,6)
multipy(5,12)

let divide = (c,d)=>{console.log(c/d)}
divide(10,2)

const addfive = function(value){
    console.log(value + 5)
}
addfive(20)

// Array
let marks = [34,67,12,98,77]
console.log(marks);
console.log(marks.length);
// add value
marks.push(45)
console.log(marks);
marks.unshift(88)
console.log(marks);
// delete value
marks.shift()
console.log(marks);
marks.pop()
console.log(marks);
marks.pop()
console.log(marks);
// slice
console.log(marks.slice(1,3));

//splice
console.log(marks.splice(2, 1));
console.log(marks)
console.log(marks.indexOf(34));