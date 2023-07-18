function ChangeFont(font){
    document.getElementById("PAR").style.fontFamily = font;
}

function ChangeAlign(textAlign){
    document.getElementById("PAR").style.textAlign = textAlign;
}


function ChangeHeight(height){
    document.getElementById("PAR").style.lineHeight = height;
}

function ChangeLSpace(lSpace){
    document.getElementById("PAR").style.letterSpacing = lSpace;
}

function ChangeIndent(tIndent){
    document.getElementById("PAR").style.textIndent = tIndent;
}

function ChangeTransform(tTransform){
    document.getElementById("PAR").style.textTransform = tTransform;
}

function ChangeDecorate(tDecoration){
    document.getElementById("PAR").style.textDecoration = tDecoration;
}

function ChangeBorder(tBorder){
    document.getElementById("PAR").style.border = tBorder;
}

function ChangeBorderColor(bColoer){
    document.getElementById("PAR").style.borderColor = bColoer;
}


onload  = function(){   
    this.document.addEventListener("keydown",function(event){
        let message;
        if (event.altKey) 
            message = "Alt";        
        else if (event.ctrlKey) 
            message = "Ctrl";
        else 
        message = event.keyCode; 
        alert(message);
    }); 
    this.document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });
    
}
