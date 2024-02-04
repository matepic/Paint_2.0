var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

var    canvas = document.getElementById('myCanvas');
var    ctx = canvas.getContext("2d");
    
var    color = "black";
var    width_of_line = 1;
canvas.addEventListener("mousedown",my_mouseDown);


function my_mouseDown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseUp);

function my_mouseUp(e){
mouseEvent = "mouseup";

}
canvas.addEventListener("mouseleave",my_mouseLeave);

function my_mouseLeave(e){
mouseEvent = "mouseleave";

}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}






















































































































