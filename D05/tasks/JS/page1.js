function task1(){
 
var nameRegExp = /[a-zA-Z]+$/;
var telephoneNumRegExp = /^(02)+[0-9]{6}$/; 
var mobileNumRegExp = /^(010|011|012)+[0-9]{8}$/;
var emailRegExp = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/; 

var username;
var telephoneNum;
var mobileNum
var email

var f1 = f2 = f3 = f4 = true;

while(f1 || f2 || f3 || f4){

    if(f1)
        username = prompt("Enter your User Name: ");
    if(f2)
        telephoneNum = prompt("enter your tele number");
    if(f3)
        mobileNum = prompt("Enter your mob number: ");
    if(f4)
        email = prompt("enter your email");

    if(!nameRegExp.test(username))
        alert("invalid username");
    else
        f1 = false;

    if(!telephoneNumRegExp.test(telephoneNum))
        alert("invalid telephone number");
    else
        f2 = false;

    if(!mobileNumRegExp.test(mobileNum))
        alert("invalid mobile number");
    else
        f3 = false;

    if(!emailRegExp.test(email))
        alert("invalid email");
    else
        f4 = false;
}

document.write("<style>p{color: blue;font-size: 24px;}  span{ color: black;margin-left: 10px;}</style>")
document.write("<p> Welcome dear guest: <span>"+ username + "</span></p> " );
document.write("<p> Your telephone number is: <span>"+ telephoneNum + "</span></p>");
document.write("<p> Your mobile number is: <span>"+ mobileNum + "</span></p>");
document.write("<p> Your email is: <span>"+ email + "</span></p>");
document.write("<a href='../HTML/index.html'>back</a>");
}

function task2(){
    let arr = [];
    let tmparr1 = [];
    let tmparr2 = [];
    for(var i = 1 ; i <= 5 ; i++){
        var x = prompt("enter data nubmer" + i);
        arr.push(x);
        tmparr1[i-1] = tmparr2[i-1] = arr[i-1];
    }
    arr.sort(function(a,b){return b - a});
    tmparr2.sort(function(a,b){return a - b});
    document.write("<style>p{color: blue;font-size: 24px;}  span{ color: black;margin-left: 10px;}</style>")
    document.write("<p> u've entered the values of <span>"+ tmparr1.join() + "</span></p>" );
    document.write("<p> ur values after being sorted descending <span>"+ arr.join() + "</span></p>");
    document.write("<p> ur values after being sorted ascecnding <span>"+ tmparr2.join() + "</span></p>" ); 
    document.write("<a href='../HTML/index.html'>back</a>");
}

function task3(){
    let raduis = prompt("What is the value of your circles raduis: ");
    alert("Total area of the circle is " + (raduis**2 * Math.PI) );

    let square = prompt("What is the value of you want to calculate its square root: ");
    alert("Total area of the circle is " + (Math.sqrt(square)) );

    let angle = prompt("What is the angle you want to calculate its cos value: ");
    let c = Math.cos(angle*(Math.PI/180))
    alert("Total area of the circle is " + c.toFixed(4));

}

