let msg1 = "Initialising Hacking";
let msg2 = "Reading your files";
let msg3 = "Password Files Detected";
let msg4 = "Sending all passwords and personal files to server";
let msg5 = "Cleaning up";

let dot = ".";

let start = (()=>{
    setTimeout(() => {
        document.body.style.backgroundColor = "darkgreen";
    }, 1000);
})

let cont = document.querySelector(".container");

let box1 = document.createElement("div");
box1.setAttribute("class","box");
cont.appendChild(box1);

let box2 = document.createElement("div");
box2.setAttribute("class","box");
cont.appendChild(box2);

let box3 = document.createElement("div");
box3.setAttribute("class","box");
cont.appendChild(box3);

let box4 = document.createElement("div");
box4.setAttribute("class","box");
cont.appendChild(box4);

let box5 = document.createElement("div");
box5.setAttribute("class","box");
cont.appendChild(box5);

let showmsg1 = ((msg)=>{
    console.log(msg);
    setTimeout(() => {
        box1.innerHTML = `${msg}`;
        dots(3,box1);
    }, 1500);
})
let showmsg2 = ((msg)=>{
    console.log(msg);
    setTimeout(() => {
        box2.innerHTML = `${msg}`;
        dots(3,box2);
    }, 3000);
})
let showmsg3 = ((msg)=>{
    console.log(msg);
    setTimeout(() => {
        box3.innerHTML = `${msg}`;
        dots(3,box3);
    }, 4500);
})
let showmsg4 = ((msg)=>{
    console.log(msg);
    setTimeout(() => {
        box4.innerHTML = `${msg}`;
        dots(3,box4);
    }, 6000);
})
let showmsg5 = ((msg)=>{
    console.log(msg);
    setTimeout(() => {
        box5.innerHTML = `${msg}`;
        dots(3,box5);
    }, 7500);
})

let dots = ((e,boxe)=> {
    let count=0;
    setInterval(() => {
        if(count==e) {
            return;
        }
        boxe.innerHTML = boxe.innerHTML + ".";
        count++;
    }, 300);
})

let clee = (()=> {
    setTimeout(() => {
        document.body.querySelector(".container").innerHTML = `YOU ARE HACKED`;
        // document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.body.querySelector(".container").style.display = "flex";

    }, 10000);
})

let main = ((msg1,msg2,msg3,msg4,msg5)=>{
    start();
    showmsg1(msg1);
    showmsg2(msg2);
    showmsg3(msg3);
    showmsg4(msg4);
    showmsg5(msg5);
    clee();
    
})
main(msg1,msg2,msg3,msg4,msg5);
