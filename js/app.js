const canvas= document.getElementById('canvasJs');
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("colorJs");
const range = document.getElementById("rangeJs");
const fill = document.getElementById("fillJs");
const saveBtn = document.getElementById("saveJs");
/* const save = documnet.getElementById("saveJs");
 */
 ctx.strokeStyle = "#2c2c2c";
 ctx.lineWidth = 2.5;
 ctx.fillStyle = "#2c2c2c";
 ctx.fillStyle = "White";
 canvas.width = 450;
 canvas.height = 450;
/* */
let painting = false;
function startPainting(){
    painting = true;
}
function stopPainting(){
    painting = false;
}
function onMouseMove(event){
    const x= event.offsetX;
    const y= event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}
function onMouseDown(event){
    painting = true;    
}
if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);   
    canvas.addEventListener("click", changeColorCanvas);
    canvas.addEventListener("contextmenu", handCM);
}
//Thay doi mau khi click
function changeColor(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
Array.from(colors).forEach(color => color.addEventListener("click", changeColor));
//thay doi khi kheo dong range
 function changeRange(event){
     const size = event.target.value;
     ctx.lineWidth = size;
 }
 if(range){
     range.addEventListener("input", changeRange);  
 }
 /* Array.from(range).forEach(size => size.addEventListener("input", changeRange)); */
 
 //dieu chinh nut fill 
 let filling = false;
function mode(){
    if(filling === true){
        filling = false;
        fill.innerText = "Fill";
    }
    else{
        filling = true;
        fill.innerText = "Paint";
    }
}
if(fill){
    fill.addEventListener("click", mode)
}
// doi mau nen canvas
 function changeColorCanvas(){
     if(filling){
        ctx.fillRect(0, 0, 450, 450);
     }
 }

 // nút lưu trong pain
 function handCM(event){
     event.preventDefault();
 }
  function handlesaveJs(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PainJs";
    link.click();
  }
  if(saveBtn){
      saveBtn.addEventListener("click", handlesaveJs, false);
  }