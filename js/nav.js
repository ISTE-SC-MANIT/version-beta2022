const icon=document.querySelector('.icon');

const navContainer=document.getElementById('nav-container');
let visible=false;
icon.addEventListener('click', (e)=>{
    console.log('helo');
    if(!visible){navContainer.style.transform="translateX(-5%)"; visible=true;}
    else {navContainer.style.transform = "translateX(100%)"; visible=false;}
});

