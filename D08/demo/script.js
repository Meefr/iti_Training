// function init (){
//     document.getElementById("d1").innerHTML="Hello ya G1"
    

//         // elem.onclick=function(){
    
    
    
    
//         //     alert("Hello");
//         //   return false;
//         //     location.assign(elem.href)
    
//         // }
// }
// onerror=function(msg,url,l,c,err){
//     console.log(msg);
//     console.log(url);
//     console.log(l);
//     console.log(c);
//     console.log(err);

//     return true
// }
onload = function (){

    function wait(){}
    function fun(){
        setTimeout(function(){
            console.log("time out immd")
        },0)
    }

console.log("start");
wait();
fun();
console.log("end");
this.setTimeout(function(){
    console.log("time after 1 sec")
},1000)

//start 
// "time out immd"
// time after 1 sec
// end

//start 
// end
// time out immd
// time after 1 sec

// start 
// time out immd
// end
// time after 1 sec

// types of error

// 1)syntax 
// alert("hello"

// 2)type error
// var n=10;
// console.log(n.toUpperCase())

// 3)RangeError
// console.log(n.toFixed(150))

// 4)ref error
// console.log(h)

// 5)URI error
// decodeURI("%%%")
// console.log(decodeURIComponent("%40"))

// create error
// var ourError=new RangeError("this is our Error")
// console.log(ourError.name)
// console.log(ourError.message)


// throw ourError
// parseInt,Number(),+
// try{
// var num = +prompt("enter your num");
// // console.log(num)
// if(num<100)
//       throw "invalid"
// else if(num>200)
//     throw "invalid"
// else 
// alert('valid')
// }
// catch(err){
//     console.log(" error");
//     throw "new error"
//     // if (err instanceof TypeError)
//     //     console.log("type error");
//     // else if (err instanceof RangeError)
//     //      console.log("Range error");
// }
// finally{
//     console.log("finally code ")
// }

// console.log("after try,catch")

        



    // create your own event
    // 1-create event 
    // 2-addEventListener
    // 3-fireEvent
    // 1-
    // var ourEvent=new Event("seen");
    // // 2-
    // document.getElementById("whatsApp").addEventListener("seen",function(){
    //     this.innerHTML += "<sub>✓✓</sub>"
    // })
    // // 3-
    // setTimeout(function(){
    //     document.getElementById("whatsApp").dispatchEvent(ourEvent)
    // },3000)
  
// document.onkeyup=function(){
//     console.log(event.key);
//     console.log(event.ctrlKey);
//     console.log(event.shiftKey)
// }



//     document.getElementById("d1").innerHTML="Hello ya G1"
//     // document.getElementById("h1").onclick=fun;
    
//  document.getElementById("h1").addEventListener("click",function (){ // anonymouse fun
//         alert ("from header")
//     })
    // statement function
    // function fun(){
    //     alert("from header")
    // }
    

        // elem.onclick=function(){
    
    
    
    
        //     alert("Hello");
        //   return false;
        //     location.assign(elem.href)
    
        // }
}