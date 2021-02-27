const sene = document.getElementsByClassName('sene');
for(let i=0;i<30;i++){
    sene[i].textContent=i+1;
}
const ders = document.querySelector('#ders');
const mug = document.querySelector('#mug');
const synp = document.querySelector('#synp');
let SynpaGaras = new Promise(function(myResolve){
    if(synp.value!='def'){
        myResolve(synp.value);
    }
})
SynpaGaras.then(function(val){
    
})
function clear() {
    mug.forEach(x => {
        x.style.display = block;
    });
    ders.forEach(x => {
        x.style.display = block;
    });
}