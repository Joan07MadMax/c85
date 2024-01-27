canvas = document. getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_width = 100;
car_height = 90;
car_x = 5;
car_y = 225;
background_image = "estacionamiento.png";
car_image = "coche.PNG";

function add() {
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag= new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = car_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38")
    {
        up();
        console.log("ariba");
    }
    if(keyPressed == "40")
    {
        down();
        console.log("abajo");
    }
    if(keyPressed == "37")
    {
        left();
        console.log("isquierda");
    }
    if(keyPressed == "39")
    {
        right();
        console.log("derecha");
    }
}

function up()
{
    if(car_y >=0)
    {
        car_y =car_y - 10;
        console.log("cuando tecla de flecha ariba es presionada, x = " + car_x + "| y =" + car_y);
        uploadBackground();
        uploadcar();
    }
}

function down()
{
    if(car_y <=500)
    {
        car_y =car_y + 10;
        console.log("cuando tecla de flecha abajo es presionada, x = " + car_x + "| y =" + car_y);
        uploadBackground();
        uploadcar();
    }
}

function left()
{
    if(car_x >=0)
    {
        car_x =car_x - 10;
        console.log("cuando tecla de flecha isquierda es presionada, x = " + car_x + "| y =" + car_y);
        uploadBackground();
        uploadcar();
    }
}

function right()
{
    if(car_x <=700)
    {
        car_x =car_x + 10;
        console.log("cuando tecla de flecha derecha es presionada, x = " + car_x + "| y =" + car_y);
        uploadBackground();
        uploadcar();
    }
}