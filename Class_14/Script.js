console.log(window);
console.log(document);
console.log(document.head);
console.log(document.body);

// getElementsByTagName
const heading = document.getElementsByTagName("h1");
console.log(heading)
console.log(heading[0].innerHTML)
console.log(heading[0].innerText)
console.log(heading[0].textContent)
// change text
heading[1].innerText = "New Text"

// getElementById
const para = document.getElementById("para");
console.log(para)

// getElementsByClassName
// const h3 = document.getElementsByClassName("third-heading")
// console.log(h3);

const h3 = document.querySelector(".third-heading")
console.log(h3)
