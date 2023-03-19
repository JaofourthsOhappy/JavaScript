let firstname = "Fourth";
let age = 22;
let student = false;

console.log("Hello",firstname);
console.log("I am",age ,"years old");
console.log("Enroll:",student);

document.getElementById("p1").innerHTML = "Hello" + firstname;
document.getElementById("p1").innerHTML = "I am" + age + " years old";
document.getElementById("p1").innerHTML = "Enroll:" + student;