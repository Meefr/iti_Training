// var obj={name:"Omar" ,age:22};

// obj.objName="new obj";
// obj.type="js obj";
// obj.cat=["js","web" ,"develoment"];
// obj.count=1;
// obj["prop"]="val";
// obj.propobj={color:"green" ,model:"abc"}
// console.log(obj)
// console.log(obj["type"])
// console.log(obj.propobj.model)
// console.log(obj.hasOwnProperty("typeeee"))
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// console.log(x)
// var x=10;

// // TDZ
// // console.log(y)
// let y=5;

// console.log(i) 
// for(let i=0;i<2;i++){

// }
// console.log(i)  

// function abc(){
//     var z=10;
// }

// // console.log(z) // err
// abc()
// console.log(z)  //err

// function abc(){
//     let z=10;
// }

// console.log(z) // 
// abc()
// console.log(z)  // 


// const x=4;
// x=3;
// console.log(x)

// let x=4;
//  let x="hello"
// console.log(x)

// functions
// 1)function statment
// function abc(){
//     return "hello";
// }
// console.log(abc())

//2)anonymous fucntion 
// (function (){    //IIFE immediate invoked function
//     console.log("hi")
// })()
// setTimeout(function (){},1000)

// 3)Expression 
// var a=6;
// var myFun= function (){
//     console.log("hello")
// }
//  console.log(myFun())

// 4) arrow func
// var myFun= (x,y)=>{
//        return x+y
//     }
 
//    console.log(myFun(3,6)) 




// var usrNm="mona"
// var obj={
//     usrNm:"ali" ,
//     usrAge:25,
//     display:function (){
//         var that=this;
//         window.setTimeout(function (){
//             // console.log(this)
//             console.log("my name is "+that.usrNm +" and my age is "+ that.usrAge)
//         },2000)
//     }
// }



// var usrNm="mona"
// var obj={
//     usrNm:"ali" ,
//     usrAge:25,
//     display:function (){
      
//         window.setTimeout(()=>{     //lexical binding
          
//             console.log("my name is "+this.usrNm +" and my age is "+ this.usrAge)
//         },2000)
//     }
// }

// obj.display();
// arguments

// rest Parameter
// function abc (a,b,c,...arr){
//     console.log(arr)
//     console.log(arr.join("*"))
//     return a+b+c;
// }

// console.log(abc(1,2,3))
// console.log(abc(1,2,3,5,6))
// console.log(abc(1,2,3,5,6,7,8,9))

// spread operator
// var arr1=["mango", "banana", "apple"];
// var arr2=["kiwi","orange",...arr1]
// console.log(arr2)
// var arr3=[1,2,3];
// var arr4=arr3;   //shallow copy

// arr4.push(6)
// console.log(arr3)
// console.log(arr4)


// function fullName(fN,lN){
//     return "welcome " +fN +" "+lN
// }

// var arr=["omar","Ahmed"]
// // var full=fullName(arr[0],arr[1])
// var full=fullName(...arr)


// console.log(full)






var arr3=[1,2,3];
var arr4=arr3;   //shallow copy

arr4.push(6)
// console.log(arr3)
// console.log(arr4)

var arr5=[]   //deep copy
for(var i=0;i<arr3.length;i++){
    arr5[i]=arr3[i]
}
arr3.push(9)
// console.log(arr3)
// console.log(arr4)
// console.log(arr5)


var arr6=[...arr3]
// console.log(arr6)
arr3.push(10);

// console.log(arr3)
// console.log(arr6)


// Destructuring Assignment
var arr=[1,2,3,4,5,6,7,8,9,10,"a" ,function(){
    console.log("abc")
}]


// var x=arr[arr.length-1]
// console.log(x)

// var y=arr[10]
// console.log(y)

// var [x,y,,,,,,,,,a,b]=[1,2,3,4,5,6,7,8,9,10,"a" ,function(){
//     console.log("abc")
// }]
// console.log(x)
// console.log(y)

// console.log(a)
// console.log(b)



// function func()
// {
//     return "abcde"
// }



// var [x,y,z]="abcde"
// console.log(x)
// console.log(y)
// console.log(z)


// var obj={usrName:"es6" ,main:"JS" ,born:2015};
//  var x=obj.name
//  var y=obj.main

// var x=6;
// console.log(x)
// x="str"

// console.log(age)


// var {usrName:nm ,born:birth ,age}= obj
// obj.usrName="Ahmed"

// console.log(nm)
// console.log(birth)

// Template Strings
// function fullName(fN,lN){
//         // return "welcome " +fN +" "+lN 
//      return  `welcome ${fN} ***** ${lN}`
//     }

//    console.log( fullName("Ahmed" ,"Mohamed"))
// var x="Mahmoud"
// var y="Omar"
// console.log( `welcome ${x} ***** ${y}`)

// document.write( `welcome ${x} ***** ${y}`)


var User = function (id, firstName , lastName ){
    return {
id,
firstName,
lastName
};
}
var obj=User(1,"ali" ,"Ahmed")