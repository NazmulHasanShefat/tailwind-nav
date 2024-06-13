let list = document.querySelector(".sub-ul");
let list2 = document.querySelector(".sub-ul2");
let toggle_button = document.querySelector(".main-list");
let toggle_button2 = document.querySelector(".main-list2");
let plus = document.querySelector("#plus-icon-m");
let toggle_btn_bar = document.querySelector(".toggle-btn");
let cheang_hamb = document.querySelectorAll(".toggle-btn .bar");
let al_list = document.querySelector(".all-ul-nav");

toggle_button.addEventListener("click",()=>{
    list.classList.toggle("open");
    if(list.classList.contains("open")){
        plus.className = "fa-solid fa-minus";
    }
    else{
        plus.className = "fa-solid fa-plus";
    }
});

toggle_button2.addEventListener("click",()=>{
    list2.classList.toggle("open");
    if(list.classList.contains("open")){
        plus.className = "fa-solid fa-minus";
    }
    else{
        plus.className = "fa-solid fa-plus";
    }
})

let isactive = false;
  toggle_btn_bar.addEventListener("click",()=>{
        al_list.classList.toggle("open_all");
        if(!isactive){
           cheang_hamb[0].style.transform = 'rotate(45deg)'
           cheang_hamb[1].style.opacity = '0'
           cheang_hamb[2].style.transform = 'rotate(-45deg)'
           isactive = true;
       }
       else{
           cheang_hamb[0].style.transform = 'rotate(0deg)'
           cheang_hamb[1].style.opacity = '1'
           cheang_hamb[2].style.transform = 'rotate(0deg)'
           isactive = false;
       }
   })