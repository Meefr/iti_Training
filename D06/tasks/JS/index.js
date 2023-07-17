let i = 0;
let win, id;
let arr= "typing message";

function typingMessage(){
    win.document.write(arr[i]);
    i++;
    if(i == arr.length)
        clearInterval(id);
}

function openNewWindow(){
    if(win == undefined||win.closed()){
        win = open("page2.html", "", "width=500,height=500");
        id = setInterval(typingMessage,100);
    }
}

document.write("UserName: "+location.search.split("&")[0].split("=")[1]+"<br>");
document.write("Age: "+location.search.split("&")[1].split("=")[1]+"<br>");
document.write("Email: "+location.search.split("&")[2].split("=")[1]+"<br>");

