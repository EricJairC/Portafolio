const contenedor = document.getElementById('filtro-generos');

contenedor.addEventListener('click', (e) =>{
    //Prevenimos el comportamiento
    e.preventDefault();

    
    //Solo admite click en el boton
    if(e.target.closest('button')){
        //Removiendo cualquier boton que este activo
        //Si hay una clase con la clase .btn--active remueve la clase btn--active '?' operador ternario
        contenedor.querySelector('.btn--active')?.classList.remove('btn--active');
        //Para marcar el boton
        e.target.classList.add('btn--active');
    }    
})
