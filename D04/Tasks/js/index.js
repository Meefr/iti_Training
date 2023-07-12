
function palindrome(){
    var word = prompt("enter a word to cheak",);
    var check = confirm("check for upper or not");
    var flag = false;
    if(!check){
        // There is upper
        word = word.toLowerCase();
        }
        for(var i = 0 , j = word.length-1 ; i < j ; i++,j--){
            if(word[i] != word[j]){
                flag = true;
                break;
            }
        }
        if(flag){
            alert("Not palindrome");
        }
        else
            alert("palindrome");
}


function calculateE(){
    var word = prompt("enter a string",);

    var x = word.split('e');
    console.log(x.length);

    var numOfE = 0;
    for(var i = 0 ; i < word.length ; i++){
        if(word[i] == 'e')
            numOfE++;
    }

    alert(numOfE);
}

function oddEven(){
    var number = prompt("enter a number",);
    if(!isNaN(number)){
        if(parseInt(number)%2 == 0)
            alert("EVEN"); 
        else
            alert("ODD");
    }
    else{
        alert("invaled data!");
    }
}

