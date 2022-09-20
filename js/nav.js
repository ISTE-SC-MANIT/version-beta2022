const icon=document.querySelector('.icon');

const navContainer=document.getElementById('nav-container');
let visible=false;
icon.addEventListener('click', (e)=>{
    if(!visible){navContainer.style.transform="translateX(-5%)"; visible=true;}
    else {navContainer.style.transform = "translateX(100%)"; visible=false;}
});

const navLinks=document.querySelectorAll('.link');
navLinks.forEach(navlink=>{
    navlink.addEventListener('click', (e)=>{
        if(visible){
            visible=false;
            navContainer.style.transform = "translateX(100%)";
        }
    })
})
