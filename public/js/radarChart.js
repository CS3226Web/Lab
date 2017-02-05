var canvas = document.getElementById("radarChart");//name your canvas id="radarChart"
var ctx = canvas.getContext("2d");

//change these to variables
var length = 80; //max point
var firstScore = 60;//MC
var secondScore = 70;//TC
var thirdScore = 10;//HW
var fourthScore = 50;//Bs
var fifthScore = 10;//KS
var sixthScore = 80;//Ac

//Radar chart outline
ctx.font = "15px Arial";
drawLine(100,100,100+ Math.cos(Math.PI/6)*length,100-Math.sin(Math.PI/6)*length);
ctx.fillText("MC",100+ Math.cos(Math.PI/6)*length + 2,100-Math.sin(Math.PI/6)*length - 2);
drawLine(100,100,100,100-length);
ctx.fillText("TC",100 - 10,100-length - 2);
drawLine(100,100,100-Math.cos(Math.PI/6)*length,100-Math.sin(Math.PI/6)*length);
ctx.fillText("HW",100-Math.cos(Math.PI/6)*length -22,100-Math.sin(Math.PI/6)*length -2);
drawLine(100,100,100- Math.cos(Math.PI/6)*length,100+Math.sin(Math.PI/6)*length);
ctx.fillText("Bs",100-Math.cos(Math.PI/6)*length -22,100+Math.sin(Math.PI/6)*length +12);
drawLine(100,100,100,100+length);
ctx.fillText("KS",100 - 10, 100 + length + 15);
drawLine(100,100,100+ Math.cos(Math.PI/6)*length,100+Math.sin(Math.PI/6)*length);
ctx.fillText("Ac",100+ Math.cos(Math.PI/6)*length + 2,100+Math.sin(Math.PI/6)*length + 2)
drawLine(100+ Math.cos(Math.PI/6)*length,100-Math.sin(Math.PI/6)*length,100,100-length);
drawLine(100,100-length,100-Math.cos(Math.PI/6)*length,100-Math.sin(Math.PI/6)*length);
drawLine(100-Math.cos(Math.PI/6)*length,100-Math.sin(Math.PI/6)*length,100- Math.cos(Math.PI/6)*length,100+Math.sin(Math.PI/6)*length);
drawLine(100- Math.cos(Math.PI/6)*length,100+Math.sin(Math.PI/6)*length,100,100+length);
drawLine(100,100+length,100+ Math.cos(Math.PI/6)*length,100+Math.sin(Math.PI/6)*length);
drawLine(100+ Math.cos(Math.PI/6)*length,100+Math.sin(Math.PI/6)*length,100+ Math.cos(Math.PI/6)*length,100-Math.sin(Math.PI/6)*length);
function drawLine(startX, startY, endX, endY) {
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}

//Radar Chart info
ctx.fillStyle ='#99FF99';
ctx.beginPath();
ctx.moveTo(100+ Math.cos(Math.PI/6)*firstScore,100-Math.sin(Math.PI/6)*firstScore);
ctx.lineTo(100,100 - secondScore);
ctx.lineTo(100-Math.cos(Math.PI/6)*thirdScore,100-Math.sin(Math.PI/6)*thirdScore);
ctx.lineTo(100- Math.cos(Math.PI/6)*fourthScore,100+Math.sin(Math.PI/6)*fourthScore);
ctx.lineTo(100,100+fifthScore);
ctx.lineTo(100+ Math.cos(Math.PI/6)*sixthScore,100+Math.sin(Math.PI/6)*sixthScore);
ctx.closePath();
ctx.fill();
