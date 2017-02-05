var canvas = document.getElementById("radarChart");
var ctx = canvas.getContext("2d");

//change these to variables
var score = [];
var length = 80; //max point

$('#detail tbody tr').each(function(){
     var currentRow = $(this);
     var currScore = 6 * parseFloat(currentRow.find("td:eq(2)").text());
     score.push(currScore);
});

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
ctx.fillText("Ac",100+ Math.cos(Math.PI/6)*length + 2,100+Math.sin(Math.PI/6)*length + 2);
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
ctx.moveTo(100+ Math.cos(Math.PI/6)*score[0],100-Math.sin(Math.PI/6)*score[0]);
ctx.lineTo(100,100 - score[1]);
ctx.lineTo(100-Math.cos(Math.PI/6)*score[2],100-Math.sin(Math.PI/6)*score[2]);
ctx.lineTo(100- Math.cos(Math.PI/6)*score[3],100+Math.sin(Math.PI/6)*score[3]);
ctx.lineTo(100,100+score[4]);
ctx.lineTo(100+ Math.cos(Math.PI/6)*score[5],100+Math.sin(Math.PI/6)*score[5]);
ctx.closePath();
ctx.fill();
