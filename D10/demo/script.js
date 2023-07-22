// var courses=["html" ,"css","JS","react"];

// var newArr=courses.map((elem)=>{return `I like ${elem}`})
// // var newArr=courses.map((elem)=>`I like ${elem}`)

// console.log(newArr)



// function fun(x="hiiiiiii"){
//     // x=x||"hi"
//     // x= (x!=undefined)?x:"hiii";
// console.log(x)
// }

// fun("hello");
// fun()


// var obj={
//     name:"Ahmed",
//     age:20,
//     // display:function(){}
//     display(){
//         console.log(this.name)
//     }
// }

// obj.display();   //
// var namee="Mohamed";
// var age=22
// // var obj={namee:"Mohamed",age:22}
// var x="Roaa";
// var y=20
// var obj ={namee, age}
// // var obj={namee,age}   //{namee:namee}
// console.log(obj)



// function Employee(nm="Omar", age=20){
//     return {nm,age}     //{nm:nm,age:age}
// }

// console.log(Employee("Mona",22))
// console.log(Employee("Ahmed"))
// console.log(Employee(30)) 
// console.log(Employee(25,"mona"))


function fun (x=10 , y=7 , obj){
    var defaultObj={nm:"Ali",age:40}
    var sum=x+y;
 var newObj=Object.assign({},defaultObj,obj)
 console.log(newObj)


     return `userName is ${newObj.nm} & age is ${newObj.age} &sum is ${sum}`

}


// // console.log(fun()) //`userName is Ali & age is 40 &sum is 17`
// console.log(fun(1,2,{userName:"Yossef"})) // 

// Number

// console.log(isFinite("123"))  //true   auto casting

// console.log(Number.isFinite("123"))  //false no

// console.log(Number.isInteger(123.123))   //false

// // console.log(isNaN(123))  //false
// console.log(isNaN("abc"))  //true
// // console.log(isNaN("123"))   //false auto casting
// // console.log(Number.isNaN(123))  //false
// console.log(Number.isNaN("abc"))  //false
// // console.log(Number.isNaN("123"))   //false auto casting

// x=0/0
// console.log(x)
// // is (x===NaN)
// console.log(Number.isNaN(x))  //true

// var mySet=new Set();
// mySet.add(1);
// mySet.add("abc");

// mySet.add(1)
// console.log(mySet)
// console.log(mySet.keys())
// console.log(mySet.values())
// console.log(mySet[i])      //not valid
// var x=mySet.entries();
// for notValid
// for(var i=0;i<mySet.size;i++){
//   console.log(x[i])
// }
//  for in not valid
// for (var i in mySet.entries()){
//     console.log("jhhghg")
//     console.log("khnjkn")
// }

// set ,map ,Array ,string =>iterable obj
// for of 
// for (var [key,value] of mySet.entries()){
//     console.log(key)
// }
// console.log(mySet.entries())
// mySet.add("EG")

// mySet.delete("abc")
// console.log(mySet.has("abc"))
// var x=[1,2,3]

// mySet.add(x)
// console.log(mySet)
// mySet.add(x)
// mySet.add([1,2,3])  
// mySet.add([1,2,3])  //
// x=[1,2]
// mySet.add(x)
// x.push(4)   //x=[1,2,3,4]
// mySet.add(x)    //
// console.log(mySet)
// function fun(){
//     return {name:"Ali"}
// }
// // var [x,y]=fun();
// // console.log(x);
// // console.log(y)

// var {name}=fun()
// console.log(name)


// var set2=new Set([1,"AX",[4,5,6] ,function(){},mySet])
// set2.add(4)


// set2.add(x)
// console.log(set2)

var myMap=new Map();
myMap.set("abc",1);
myMap.set(2,"x");

myMap.set("abc",7)
console.log(myMap.get("abc"))
// myMap.delete("abc")
console.log(myMap.has(2))
// myMap.clear()
console.log(myMap)

var map2=new Map([[1,2],[2,"abc"],[3,[1,2,3]],["a",function(){}]])
console.log(map2)

for (var [key,value] of myMap){
    console.log(key)
}





