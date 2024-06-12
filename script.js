let list = document.querySelector(".sub-ul");
let toggle_button = document.querySelector(".main-list");
let plus = document.querySelector("#plus-icon-m");
toggle_button.addEventListener("click",()=>{
    list.classList.toggle("open");
    if(list.classList.contains("open")){
        plus.className = "fa-solid fa-minus";
    }
    else{
        plus.className = "fa-solid fa-plus";
    }
});