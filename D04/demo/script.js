// var x=10;
// var y;
// y=x++;
// console.log(x)  //11
// console.log(y)  //10

// var x=10;
// var y;
// y=++x;
// console.log(x)  //11
// console.log(y)   //11

var a=2;
var b ="2"
// console.log(a===b)

// casting 
// 1-parseInt
// 2-Number
// 3- +


// var num=10.5567
// console.log(typeof num)

// falsy valuse
// 0,false, null ,undefined, NAN, ""

// console.log(2&&9)   //9
// console.log(0&&9)
// console.log(""&&9)
// console.log(3&&undefined)


// console.log(8||9)
// console.log(0||9)

// console.log(0||8||9)

// console.log(!!"youssef")

// console.log(3<2<1)    //true
// false<1
// 0<1     //true


// console.log(10<6<2)

// false<2
// 0<2    
// var a,b,c;
// document.writeln("docooooo")
// document.writeln("docooooo")

// var usrName=prompt("enter your name","Omar")
// if(usrName !=null ){
//     document.write(usrName)
// }
// else {
//     alert("invalid")
// }
// switch (usrName) {
// case null:
//     alert ("please enter your name");
//     break;
// case "":
//     alert ("invalid data");
//     break;
// case usrName:
//     switch (usrName[0]){
//         case " ":
//             alert ("start with char");
//             break;
//         default:
//             document.write(usrName)
//     break;

//     }
    
// }
// console.log("4")
// console.log(parseInt("10.88acvhjbjkhf"))
// console.log(parseFloat("10.88"))
// console.log(parseFloat("10.88acvhjbjkhf"))
// console.log(parseInt("afgcshvdhjx"))

// console.log(parseInt("0101",2))
// console.log(parseInt("a",16))

// isNaN vs isFinite
// console.log(isNaN("1234aasas"))
// console.log(isFinite("1234"))
// console.log(isFinite("1234dsadhbag"))


// var res= confirm("are you okay?")
// console.log(res)


var result;


function sumFun (x,y){
    if (typeof x == "number" && typeof y=="number"){
    var sum=0;
    sum=x+y;
    return sum;
    }
    else{
        return "not valid";
    }
}



result =sumFun(1,2)
// result =sumFun(4,6,3,4)   //10  
// result = sumFun()    //NaN
// result = sumFun("hello" ," ya G1")
// result = sumFun (3)    //NaN  
// result = sumFun("hello") //helloundefined


// console.warn(result)
// console.log(result)
// console.log(2+undefined)

// function isNan(x){
//     if (typeof x=="number")
//     return false;
//     if (typeof x== "string")
//     // x[0]    string object




// }




var myStr="this is javaScript string object demo";
console.log(myStr.charAt(0))  //t
console.log(myStr.length)  //37
console.log(myStr.split(" "))  // ['this', 'is', 'javaScript', 'string', 'object', 'demo']
console.log(myStr.split("i"))  //['th', 's ', 's javaScr', 'pt str', 'ng object demo']
console.log(myStr.split("i",4))
// myStr.lastIndexOf("o")  //36
// myStr[0]
// 't'
// myStr[0]="A"
// 'A'
// myStr
// 'this is javaScript string object demo'


// myStr
// 'this is javaScript string object demo'
// myStr.substr(5,14)
// 'is javaScript '
// myStr.substring(5,14)
// 'is javaSc'
// myStr.replace("i","_")
// 'th_s is javaScript string object demo'
// myStr.trim()
// 'this is javaScript string object demo'
// myStr='         this is javaScript string object demo'
// '         this is javaScript string object demo'
// myStr
// '         this is javaScript string object demo'
// myStr.trim()
// 'this is javaScript string object demo'
// myStr.toUpperCase()
// '         THIS IS JAVASCRIPT STRING OBJECT DEMO'





























