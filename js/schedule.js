let timeLinks=document.querySelectorAll('.time-link');
let content=document.querySelectorAll('.time-content');
content[0].classList.remove('time-content');

for(let i=0;i<timeLinks.length;i++){
    timeLinks[i].addEventListener('click', (e)=>{
        e.preventDefault();
        content.forEach(cnt=>cnt.classList.add('time-content'));
        timeLinks.forEach(btn=> btn.classList.remove('link-border'));
        timeLinks[i].classList.add('link-border');
        content[i].classList.remove('time-content');
    });
}