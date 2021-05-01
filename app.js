var id=0;

const btns = document.querySelectorAll(".container .header .header-text .header-buttons .btn");
const items = document.querySelectorAll(".container .header .header-text .item");
const pics = document.querySelectorAll(".container .header .header-img .img");


btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains("btn-left")){
            id--;
            if(id<0){
                id=2;
            }
        }

        if (btn.classList.contains("btn-right")){
            id++;
            if(id>2){
                id=0;
            }
        }

        showItem(id);
    })
})

function showItem(id) {
    var idL=0;
    items.forEach((item)=>{
        item.classList.remove("show");
    });

    pics.forEach((pic)=>{
        pic.classList.remove("show");
    })

    items[id].classList.add("show");
    pics[id].classList.add("show");
}


const navigation = document.querySelector(".container .header .header-img .navigation .navigation-list");
const btn = document.querySelector(".navigation-hamb");

btn.addEventListener('click', ()=>{
    btn.classList.toggle('close');
    navigation.classList.toggle("close");
    document.querySelector(".container").classList.toggle("close");
})