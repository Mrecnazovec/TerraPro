let nav_item = document.querySelector('.i-nav-item');
let katalog = document.querySelector('.katalog')
let nav_bar = document.querySelector('.nav_bar')
let body = document.querySelector('body')
let btn_close = document.querySelector('.btn_close')

nav_item.addEventListener('click', function(e) {
    nav_item.classList.toggle("active");
    if(nav_item.classList[1]=="active"){
        katalog.classList.add("active");
        nav_bar.classList.add("active");
        body.classList.add("active");
    } else {
        katalog.classList.remove("active");
        nav_bar.classList.remove("active");
        body.classList.remove("active");
    }


})
btn_close.addEventListener("click", function(f){
    nav_item.classList.remove("active");
    if(nav_item.classList[1]=="active"){
        katalog.classList.add("active");
        nav_bar.classList.add("active");
        body.classList.add("active");
    } else {
        katalog.classList.remove("active");
        nav_bar.classList.remove("active");
        body.classList.remove("active");
    }
})
window.addEventListener('click', function(event) {
    // console.log(event.target);
    // parentElement = event.target.parentElement;
    // console.log(parentElement);
    if (event.target.classList == 'katalog_item_content_box' || event.target.classList == 'strelka') {
        mainElement = event.target.parentElement.parentElement;

    } else if (event.target.classList == 'container'){
        mainElement = event.target.parentElement;
        let strelka = mainElement.querySelector(".strelka")
        let katalog_info_box_ul = mainElement.querySelector(".katalog_info_box_ul")
        if(strelka.classList == "strelka disable"){
            strelka.classList.add("active")
            strelka.classList.remove("disable")
        } else {
            strelka.classList.remove("active")
            strelka.classList.add("disable")
        }
        if (strelka.classList == "strelka active") {
            katalog_info_box_ul.classList.add("active")
        } else {
            katalog_info_box_ul.classList.remove("active")
        }
    } else if (event.target.classList == 'clothe' || event.target.classList == 'clothe_text'){
        mainElement = event.target.parentElement.parentElement.parentElement
        let strelka = mainElement.querySelector(".strelka")
        let katalog_info_box_ul = mainElement.querySelector(".katalog_info_box_ul")
        if(strelka.classList == "strelka disable"){
            strelka.classList.add("active")
            strelka.classList.remove("disable")
        } else {
            strelka.classList.remove("active")
            strelka.classList.add("disable")
        }
        if (strelka.classList == "strelka active") {
            katalog_info_box_ul.classList.add("active")
        } else {
            katalog_info_box_ul.classList.remove("active")
        }
    } 

    
    // strelka.classList.toggle("active");

    



})
