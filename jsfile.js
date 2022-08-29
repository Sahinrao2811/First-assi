
const button1 = document.getElementById("btn1");
const button2=document.getElementById("btn2");
const button3=document.getElementById("btn3");
button1.addEventListener('click',()=>{
    const body =  document.getElementById("container");
    body.style.background = "green";
}
)

button2.addEventListener('click',()=>{
    const body =  document.getElementById("container");
    body.style.background = "red";
}
)
button3.addEventListener('click',()=>{
    const body =  document.getElementById("container");
    body.style.background = "blue";
}
)