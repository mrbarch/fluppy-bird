// for(let i = 150; i > 5; i /= 2) {
//   console.log(i)
// }

// let j = 1000;
// while (j >= 100) {
//   console.log(j)
//   j -= 100
// }

// let isHasCar = true
// while (isHasCar) {

// }

// let x = 0;
// do {
//   console.log(x);
//   x++;
// }while(x < 10);

// for(let i = 10; i < 20; i += 2) {
//   if(i > 15)
//     break;

//   console.log(i)
// }
// for(let i = 10; i < 20; i += 2) {
//   if(i % 2 == 0)
//     continue;

//   console.log(i)
// }

//  let arr = [4, 5, 2, 7, 8, 9, 3, 2, 5]

// for(let i = 0; i < arr.length; i++) {
//   arr[i] *= 2

//   console.log("Елемент" + (i + 1) + ': ' + arr[i])
// }

// let x = prompt("Сколько вам лет")
// console.log(x)

// let p = null;
// if(confirm("Ви точно впевнені")) {
//  p = prompt("Введите ваше имя");
//  alert("Привет, " + p)
// }else {
//   alert("Ви натиснули на відміну")
// }

// function info(word) {
//   console.log(word + "!")
// }

// function summa(a, b) {
//   let res = a + b;
//   info(res)
// }

// summa(4,6)

// 

// let text = document.getElementById('text')
// text.id = "newText"
// console.log(text.id)

// text.style.backgroundColor = 'red'
// text.innerHTML = "New<br>string"

// document.getElementById('newText').style.color = "white";

// let spans = document.getElementsByTagName('span')
// let spans = document.getElementsByClassName('simple-text');

// for(let i = 0; i < spans.length; i++) {
//   console.log(spans[i].innerHTML)
// }

// document.getElementById("main-form").addEventListener('submit', checkForm);

// function checkForm(event) {
//   event.preventDefault();
//   let el = document.getElementById("main-form");
//   let name = el.name.value;
//   let pass = el.pass.value;
//   let repass = el.repass.value;
//   let state = el.state.value;

//   let fail = "";

//   if (name == "" || pass == "" || state == "")
//     fail = "Заполните все поля";
//   else if (name.length <= 1 || name.length > 50)
//     fail = "Введите корректное имя";
//   else if (pass != repass)
//     fail = "Пароли не совпадают";
//   else if (pass.split("&").length > 1)
//     fail = "Некорректный пароль";

//   if (fail != "") {
//     document.getElementById('error').innerHTML = fail;

//   } else {
//     alert("Все данные орректно заполненны");
//     window.location = 'https://itproger.com';
//   }
// }

// let id = setInterval(my_func, 1000);

// let counter = 0;
// function my_func() {
//   counter++;
//   console.log("Counter: " + counter);

//   if(counter == 3)
//     clearInterval(id);
// }

// let counter = 0;

// setInterval(function() {
//   counter++;
//   console.log("Прошло секунд: " + counter);
// }, 1000);

// setTimeout(my_func, 2000); 
// let id = setInterval(my_func, 1000);
// let count = 0
// function my_func() {
//   console.log("Timer is working!")
//   count++
//   console.log("Counter: " + count)
// };

let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());  
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// date.setHours(23);
// date.setMinutes(23);

// console.log("Время: " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())

// let arr = [4, 2, 3, 8];
// // console.log(arr.join("| |"))
// // console.log(arr.sort())
// let stroka = arr.reverse().join(", ")

// console.log(stroka.split(", "))

// class Person {
//   constructor(name, age, happiness) {
//     this.name = name;
//     this.age = age;
//     this.happiness = happiness;
//   }

//   info() {
//     console.log("Человек: " + this.name + ". Возраст" + this.age);
//   }

// }

// let bob = new Person('Bob', 35, false);
// let alex = new Person('Alex', 45, true);

// alex.name = 'alex2'
// alex.info()
// bob.info()

// console.log(alex.name)
// console.log(bob.name)
