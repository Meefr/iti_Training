// console.log("start")
// setTimeout(()=>{
//     console.log("in time out")
// },0)
// console.log("end")
// console.log("jbbmnbn")

// Timers
// Events
// Ajax

// promises
var x = 1;
// var myPromise=new Promise(function(resolve,reject){
//     if (x==10){
//         resolve("success");
//     }
//     else
//     reject('error');

// })
// myPromise.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// sum(3,4)

// function(a,b){

// }

// var myPromise=new Promise(function(resolve,reject){
//     var xhr=new XMLHttpRequest();
//     // methods    (get,post,delete,put,patch)
//     xhr.open("GET","https://jsonplaceholder.typicode.com/users");
//     xhr.onreadystatechange=function(){
//         if (xhr.readyState==4){
//             if (xhr.status>=200&&xhr.status<300){
//                 resolve(xhr.responseText)
//             }
//             else{
//                 reject("fail")
//             }
//         }
//     }
//     xhr.send()
// })

// myPromise.then((data)=>{
//     var result=JSON.parse(data)
//     console.log(result);
//     console.log("hello");

// }).catch((er)=>{console.log(er)})
//  async function myFun(){
// var x = 10;
// var myPromise = new Promise(function (resolve, reject) {
//   if (x == 10) {
//     setTimeout(() => {
//       resolve("success p1");
//     }, 5000);
//   } else {
//     reject("fail p1");
//   }
// });
// var y = 10;
// var myPromise2 = new Promise(function (resolve, reject) {
//   if (y == 10) {
//     setTimeout(() => {
//       resolve("success p2");
//     }, 1000);
//   } else {
//     reject("fail p2");
//   }
// });

// await myPromise;

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // console.log("hkgjhgh")
 
// myPromise2
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// }

// myFun()
// console.log("fady")



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>{ return data.json()})
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)})

// fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(json => console.log(json))


// generators
// function myFun(){
//     //logic

//     return " ";
// }
// myFun()



function *fun(){
    //part of logic
    yield 7;

    //part of logic
    console.log("hi")
    yield "abc";
   
    var z=3;
    z+=7;
    yield z;

    console.log("hkgh")
    yield [1,2,3]
   

}

 var x=fun();
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())

















