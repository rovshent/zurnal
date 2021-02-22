const sene = document.getElementsByClassName('sene');
for(let i=0;i<30;i++){
    sene[i].textContent=i+1;
}
const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.left');
const zurnal = document.querySelector('.zurnal');
var k=0;
menuBtn.addEventListener('click',removeMenu);
function removeMenu(e) {
    if (k%2==0){
        menu.style.display = 'none';
        zurnal.style.left = '0.5vw';

    }else{
        menu.style.display = 'block';
        zurnal.style.left = '7vw';
    }
    ++k;
}
