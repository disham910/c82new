var mouseevent="";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
 mouseevent="mousedown";   
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
 currentx=e.clientX-canvas.offsetLeft;   
currenty=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){
	ctx.beginPath();
	ctx.moveTo(lastx,lasty);
	ctx.lineTo(currentx,currenty);
	ctx.stroke();
	
}
lastx=currentx;
lasty=currenty;

}



























