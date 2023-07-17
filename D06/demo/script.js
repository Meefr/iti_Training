// var today=new Date();
// console.log(today.getMonth())
// console.log(today.getYear())

// // var y=today.getYear();
// // console.log(y+1900)

// console.log(today.getFullYear())
// console.log(today.getDay())
// console.log(today.getDate())

// today.setDate(25);
// console.log(today.getDate())
// console.log(today)  //Tue Jul 25 2023 10:25:59 GMT+0300 (Eastern European Summer Time)
// console.log(today.toLocaleString("ar-eg"))  //'٢٥‏/٧‏/٢٠٢٣ ١٠:٢٥:٥٩ ص'

// falsy valuse
// 0 ,false ,undefined , "",null ,NaN
var win;
var str= "hellopooooo"
function openWin(){
    
    if (win==undefined||win.closed){
    win=open("","","width=300,height=300")
    
//    win.document.write("hello" )
    }
}



function moveWin(){
    win.focus();
   win.moveBy(100,100)
}
 
function closeWin(){
    win.close();
}


// setInterval(func,duration)
var timer;
// function startCount(){
    // setInterval("alert('nnbj')",2000)
    // setInterval (alert,2000,"jhjj")
    // setInterval(func,2000)
    // anonynmouse function
//     timer=setInterval(function (){
//         alert('count');
    
//     },2000)
// }

// statement function
// function func(){
//     alert('count');

// }

// function stopCount(){
// // clearInterval(timer)
// }


// function goTo(){
//     console.log(location.toString())
//     // location.reload()
//     // location.assign("https://www.google.com/")
// }








