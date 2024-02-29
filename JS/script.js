
const container =document.querySelector('.container');
const commas = document.querySelector('.commas');
const blackComma = document.querySelector('.design');
const whiteComma = document.querySelector('.delete');
let color = 'black';

blackComma.addEventListener('click', e => {
    color = 'black';
    blackComma.style.border = '2px solid #777';
    whiteComma.style.border = '1px solid black';
})
whiteComma.addEventListener('click', e => {
    color = 'white';
    whiteComma.style.border = '2px solid #777';
    blackComma.style.border = '1px solid black';
})
let x = false;
commas.addEventListener('mousedown', e => {
    x=true;
    addComma(e);
    
})
commas.addEventListener('mouseup', e => {
    x=false;
})

commas.addEventListener('mousemove', e => {
    if(x){
        addComma(e);
    }
})
let array = [];
let allCommas = document.querySelectorAll('.commas span');
function addComma(e){
    if(e.clientX > 100 && e.clientX < 1818 && e.clientY > 75 && e.clientY < 935){
    const addLign = document.createElement('span');
    addLign.setAttribute('class','add-comma');
    addLign.style.backgroundColor = color;
    addLign.style.top = `calc(${e.clientY}px - 10vh)`;
    addLign.style.left = `calc(${e.clientX}px - 5%)`;
    commas.appendChild(addLign);
    }
}
    



