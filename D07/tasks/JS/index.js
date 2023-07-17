let id;

function addNumber(button){
    document.getElementById("txt").value += button.value;
}

function deleteLast(){
    document.getElementById("txt").value = document.getElementById("txt").value.substring(0,document.getElementById("txt").value.length-1);
}

function deleteAll(){
   document.getElementById("txt").value = "";
}

function next(){
    if(document.images[0].title < 6)
    document.images[0].title++;
    document.images[0].src = "../SlideShow/" + document.images[0].title + ".jpg"
}

function prev(){
    if(document.images[0].title > 1)
    document.images[0].title--;
    document.images[0].src="../SlideShow/" + document.images[0].title + ".jpg"
}

function slider(){
    document.images[0].title++;
    if(document.images[0].title >= 6)
        document.images[0].title = "1";
    document.images[0].src = "../SlideShow/" + document.images[0].title + ".jpg"
}

function slide(){
    if(document.getElementById("slide").style.color == "red"){
        id = setInterval(slider,900);
        document.getElementById("slide").style.color = 'lightgreen';
    }
    else{
        document.getElementById("slide").style.color = 'red';
        clearInterval(id);
    }
}
document.getElementById("delOne").onclick = deleteLast;
document.getElementById("delAll").onclick = deleteAll;
