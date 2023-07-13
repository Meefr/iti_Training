// function sumXY (x,y){
//     var result=0;
//     result=x+y;
//     return result;
// }



// // var res=
// console.log(sumXY(3,5))



var a=20;
// console.log(myFun(2,5))

// console.log(b)

// function myFun(x,y){
//     var z=10;
//     console.log(z)

//     b=2;
//     console.log(b)
//     return a+x+y+b+z;
// }

// console.log(myFun(2,4))   //38
// console.log(b)
// console.log(z)

// var str="this is javaScrIpt Demo";
// console.log(str.replace("i","_"))
// console.log(str.replace(regExpr,"_"))

// /pattern/flag
// flag==== g m i

// var regExp=/i/gi;
// console.log(str.replace(regExp,"_"))

// [a-z][A-Z]
// [0-9]
// [0-5]{min,max}
// [0-9]{2,5}
// [0-9]{,5}
// [0-9]{2,}
// [0-9]{8}

// var data=prompt("plll");
// var regExpr=/^[a-z]{2,5}[0-9]{8}$/;
// // [0-9]    /d
// // +   {1,}
// // * {0,}
// // .
// // ?

// console.log(regExpr.test(data))


// var n=123.456
// console.log(n.toExponential(1)) //1.2e+2
// console.log(n.toExponential(4))   //1.2346e+2
// console.log(n.toFixed(2))
// console.log(n.toPrecision(5))

// console.log(n.toLocaleString("ar-eg"))   //١٢٣٫٤٥٦


// var x= new Number(20);
// console.log(typeof x);
// var y=x.valueOf()
// console.log(typeof y)








// var arr= [,1,,,"a"];
// arr[0]=4
// console.log(arr)


var arr=[];
arr[0] =12;
arr[1]=5;
arr[10]=20;
// console.log(typeof arr)
    

// var arr2=arr

// arr2[0]="abc";
// console.log(arr2)
// console.log(arr)


// var arr3=[];
// for (var i=0;i<arr.length;i++){
//     arr3[i]=arr[i]
// }
// console.log(arr3)

// arr3[0]=11
// console.log(arr3)
// console.log(arr)



// arr.push(40)
// arr.unshift("sd")
// arr.pop()
// arr.shift()
// arr.reverse()
// var arr4=arr.concat(arr3)
// console.log(arr4)
// console.log(arr)



// var arr =[1,2,9,4]
// console.log(arr.join())  //"1,2,3,4"
// var myStr=arr.join("*");
// var splittedArr=myStr.split("*")

// var splittedArr=arr.join("*").split("*")    //function chaining
// console.log(splittedArr) 
// console.log(arr)




// console.log("javaScript".split("").reverse())

// var word="NooN";
// var reversedWord="NooN".split("").reverse();
// for(var i=0;i<reversedWord.length;++i){
//     console.log(word[i]+"    "+  reversedWord[i])
// }

// arr.push(11)

// arr.sort()
// console.log(arr)

var customArr=[];
customArr["val1"]="123";
customArr["val2"]=1223;
customArr["firstName"]="Ali"
console.log(customArr)

console.log(customArr.length)   //0
console.log(customArr["val2"])   

for (var i in customArr){
    console.log(customArr[i])
}


var arr7=[1,2,3,8]
for (var i in arr7){
    console.log(arr7[i])
}

//dot notation
console.log(arr7.length)
// console.log(arr7.push(40))

//subscipt notation
console.log(arr7["length"])
console.log(arr7["join"]("_"))

arr7.join()

var prop="length";
console.log(arr7[prop])


























