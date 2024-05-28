const btn_open_nav = document.querySelector(".manu__hamburguesa__icon_open");
const btn_close_nav = document.querySelector(".manu__hamburguesa__icon_close");
const nav_bar = document.querySelector(".menu__lista__container");

btn_open_nav.addEventListener("click", ()=>{
    btn_open_nav.classList.add("display__none");
    btn_close_nav.classList.remove("display__none");
    nav_bar.classList.remove("display__none");
  
});

btn_close_nav.addEventListener("click", ()=>{
    btn_open_nav.classList.remove("display__none");
    btn_close_nav.classList.add("display__none");
    nav_bar.classList.add("display__none");
});
