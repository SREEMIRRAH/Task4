document.getElementById("btn1").onclick = function(){
    document.getElementById("content1").style.transform = "translateX(0)";
    document.getElementById("content2").style.transform = "translateX(100%)";
    document.getElementById("content3").style.transform = "translateX(100%)";
    btn1.style.color = "#ff7846";
    btn2.style.color = "#000";
    btn3.style.color = "#000";
}
document.getElementById("btn2").onclick = function(){
    document.getElementById("content1").style.transform = "translateX(100%)";
    document.getElementById("content2").style.transform = "translateX(0)";
    document.getElementById("content3").style.transform = "translateX(100%)";
    btn2.style.color = "#ff7846";
    btn1.style.color = "#000";
    btn3.style.color = "#000";
}
document.getElementById("btn3").onclick = function(){
    document.getElementById("content1").style.transform = "translateX(100%)";
    document.getElementById("content2").style.transform = "translateX(100%)";
    document.getElementById("content3").style.transform = "translateX(0)";
    btn3.style.color = "#ff7846";
    btn2.style.color = "#000";
    btn2.style.color = "#000";
}