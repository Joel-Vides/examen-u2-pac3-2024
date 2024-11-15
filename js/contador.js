console.log('Contador');
let cont = 0;

const aumentar = document.querySelector('#aumentar');
const numero = document.querySelector('#counter').textContent;

const disminuir = document.querySelector('#disminiuir')

disminuir.addEventListener('click', () => {
    cont--;
    // console.log(cont);
    document.querySelector('#counter').textContent = cont;
})


aumentar.addEventListener('click', () => {
    cont++;
    // console.log(cont);

    document.querySelector('#counter').textContent = cont;
    
})