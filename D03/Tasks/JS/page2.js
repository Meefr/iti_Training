var num = parseInt(prompt("Enter number to sum or just enter 0 to stop",));
var sum = 0;
while (num != 0){
    sum += num;
    num = parseInt(prompt("Enter number to sum or just enter 0 to stop",));  
}
alert("Sum is: " + sum);
