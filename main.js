canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

yodaWidth = 200;
yodaHeight = 200;

backgroundImage = "canva.jpg";

yodaImage = "baby.png";

yodaX = 10;
yodaY = 10;

function add() {
    //Definimos uma nova imagem para a variável  background_imgTag
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src= backgroundImage;

    yodaImgTag = new Image();
    yodaImgTag.onload = uploadyoda;
    yodaImgTag.src=yodaImage;
}

function uploadBackground(){
    // ctx.drawImage(img,x,y,width,height);
    ctx.drawImage(backgroundImgTag,0,0,canvas.width,canvas.height);
}

function uploadyoda(){
    ctx.drawImage(yodaImgTag, yodaX, yodaY,yodaWidth,yodaHeight);
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e){
    keyPressed=e.keyCode;
    if(keyPressed=="38"){
        up();
    }
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }
}

function up(){
    if (yodaY >= 0)
    {
        yodaY = yodaY - 10;
        uploadBackground();
        uploadyoda();
    } 
}

function down(){
    if(yodaY<=500){
        yodaY=yodaY+10;
        uploadBackground();
        uploadyoda();
    }
}

function left(){
    if (yodaX>=0){
        yodaX=yodaX-10;
        uploadBackground();
        uploadyoda();
    }
}

function right(){
    document.getElementById("audio1").play();
    if(yodaX <= 700){
        yodaX = yodaX +10;
        uploadBackground();
        uploadyoda();
    }
}
