console.log('Lista de Tareas');

const tarea = document.querySelector('#taskInput').textContent;
const texto = document.querySelector('#agregar');



texto.addEventListener('click', () => {
    console.log(tarea.textContent);
    const parrafo1 = document.createElement('li');
    parrafo1.textContent = tarea.textContent;
    parrafo1.classList.add('#taskList', tarea.textContent);
    
})

