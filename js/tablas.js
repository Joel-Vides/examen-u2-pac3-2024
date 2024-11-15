console.log('Tablas');
const numero = document.querySelector('#number').textContent;
const limite = document.querySelector('#limit').textContent;
const boton = document.querySelector('#generar-tabla');
const texto = document.querySelector('#result');
const resultado = 0; 


boton.addEventListener('click', () => {
    for (let i = 0; i < limite; i++) {
        resultado = numero * i;
    }

    console.log(resultado);
    
})