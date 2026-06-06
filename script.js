let sayhello=document.querySelector(".sayhello")
let menus = document.querySelector(".menu-p")
let overlay = document.querySelector(".overlay")
let body = document.querySelector(".body")
let video = document.querySelector(".video")
let flag = 1
menus.addEventListener("click",()=>{
    if(flag){
        overlay.style.top = "0%"
        overlay.style.pointerEvents = "all"
        overlay.style.transform = "rotate(5deg) translateY(-8%)"
        menus.textContent ="CLOSE"
        body.style.overflow="hidden"
        flag = 0
    }
    else{
        overlay.style.top = "-120%"
        overlay.style.pointerEvents = "none"
        overlay.style.transform = "rotate(0deg) translateY(-8%)"
        menus.textContent ="MENU"
        body.style.overflow="auto"
        flag = 1
    }
})

let floow=document.querySelector(".follower")

let isHello = false;

sayhello.addEventListener("mouseenter",()=>{
    isHello = true;
});

sayhello.addEventListener("mouseleave",()=>{
    isHello = false;
});

document.addEventListener("mousemove",(m) => {

    let a = m.clientY
    let b = m.clientX
    if(isHello){
        floow.style.backgroundColor = "blue";
        floow.style.height = "40px";
        floow.style.width = "140px";
        floow.style.borderRadius = "10px";
        floow.style.transform = "rotate(-10deg)";
        floow.style.color = "white";
        floow.style.fontFamily = "PressuraBold";
        floow.style.fontSize = "25px";
        floow.innerHTML = "LET'S TALK";
        floow.style.top = m.clientY + "px";
        floow.style.left = m.clientX + "px";
        return;
    }
    else if(m.pageY <= 1025){
        floow.style.backgroundColor = "transparent"
        floow.style.height = "300px"
        floow.style.width = "200px"
        floow.style.borderRadius = "5%"
        floow.style.display = "flex"
        floow.style.alignItems = "center"
        floow.style.justifyContent = "center"
        floow.style.transform ="rotate(0deg)"
        floow.innerHTML = ""
        floow.appendChild(video)
        video.style.opacity = "1"
    }

    else if(m.pageY >= 3150 && m.pageY <= 3260 && m.pageX >= 555 && m.pageX <= 1360){
        floow.style.backgroundColor = "blue"
        floow.style.height = "50px"
        floow.style.width = "150px"
        floow.style.borderRadius = "10%"
        floow.style.transform ="rotate(-10deg)"
        floow.style.display = "flex"
        floow.style.alignItems = "center"
        floow.style.justifyContent = "center"
        floow.style.color = "white"
        floow.style.fontFamily = "PressuraBold"
        floow.style.fontSize = "25px"
        floow.innerHTML = "PORTFOLIO"
        video.style.opacity ="0"
    // }else(m.pageY > 1025 && m.pageY < 3150){
    }
    else if(m.pageY >= 3450 && m.pageY <= 4325 && m.pageX <= 950 && m.pageX >= 15){
        floow.style.backgroundColor = "blue"
        floow.style.height = "50px"
        floow.style.width = "90px"
        floow.style.borderRadius = "10%"
        floow.style.transform ="rotate(-10deg)"
        floow.style.display = "flex"
        floow.style.alignItems = "center"
        floow.style.justifyContent = "center"
        floow.style.color = "white"
        floow.style.fontFamily = "PressuraBold"
        floow.style.fontSize = "25px"
        floow.innerHTML = "MATERA"
        video.style.opacity ="0"
    }
    else if(m.pageY >= 3450 && m.pageY <= 4325 && m.pageX <= 2000 && m.pageX >= 977){
        floow.style.backgroundColor = "blue"
        floow.style.height = "50px"
        floow.style.width = "100px"
        floow.style.borderRadius = "10%"
        floow.style.transform ="rotate(-10deg)"
        floow.style.display = "flex"
        floow.style.alignItems = "center"
        floow.style.justifyContent = "center"
        floow.style.color = "white"
        floow.style.fontFamily = "PressuraBold"
        floow.style.fontSize = "25px"
        floow.innerHTML = "CHANCE"
        video.style.opacity ="0"
    }
    else if(m.pageY >= 4354 && m.pageY <= 5214 && m.pageX <= 950 && m.pageX >= 15){
        floow.style.backgroundColor = "blue"
        floow.style.height = "50px"
        floow.style.width = "80px"
        floow.style.borderRadius = "10%"
        floow.style.transform ="rotate(-10deg)"
        floow.style.display = "flex"
        floow.style.alignItems = "center"
        floow.style.justifyContent = "center"
        floow.style.color = "white"
        floow.style.fontFamily = "PressuraBold"
        floow.style.fontSize = "25px"
        floow.innerHTML = "SILVR"
        video.style.opacity ="0"
    }
    else if(m.pageY >= 4354 && m.pageY <= 5214 && m.pageX <= 2000 && m.pageX >= 977){
        floow.style.backgroundColor = "blue"
        floow.style.height = "50px"
        floow.style.width = "150px"
        floow.style.borderRadius = "10%"
        floow.style.transform ="rotate(-10deg)"
        floow.style.display = "flex"
        floow.style.alignItems = "center"
        floow.style.justifyContent = "center"
        floow.style.color = "white"
        floow.style.fontFamily = "PressuraBold"
        floow.style.fontSize = "25px"
        floow.innerHTML = "INTRAMUROS"
        video.style.opacity ="0"
    }
    else{
        floow.style.backgroundColor = "blue"
        floow.style.height = "15px"
        floow.style.width = "15px"
        floow.style.borderRadius = "50%"
        floow.innerHTML = ""
        video.style.opacity ="0"
    }
    floow.style.top = a + "px"
    floow.style.left = b + "px"
})

let detail = document.querySelector(".detail");
let imgs = document.querySelectorAll(".img1");
let interval;
let index = 0;
let zindx =2;
detail.addEventListener("mouseenter",()=>{
    interval = setInterval(()=>{
        if(index < imgs.length){
            imgs[index].style.opacity = "1";
            detail.style.zIndex= index;
            imgs[index].style.zIndex = zindx;
            index++;
            zindx++;
        }else{
            index=0;
        }
    },200);
});

detail.addEventListener("mouseleave",()=>{
    clearInterval(interval);
    imgs.forEach((img)=>{
        img.style.opacity = "0";
    });
    index = 0;
});


let playground = document.querySelector(".playground");
let imgs1 = document.querySelectorAll(".img2");

let index1 = 0;
let zindx1 = 2;

playground.addEventListener("mouseenter", () => {
    interval = setInterval(() => {
        if (index1 < imgs1.length) {
            imgs1[index1].style.opacity = "1";
            playground.style.zIndex = index1;
            imgs1[index1].style.zIndex = zindx1;
            index1++;
            zindx1++;
        } else {
            index1 = 0;
        }
    }, 200);
});

playground.addEventListener("mouseleave", () => {
    clearInterval(interval);
    imgs1.forEach((img) => {
        img.style.opacity = "0";
    });
    index1 = 0;
});

