document.getElementById("submit").onclick = function(){
    let check = confirm("Are you sure!");
    if(!check)
        return false;
}   