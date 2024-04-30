const contenedorOpciones = document.querySelector('.contenedor-opciones > nav');

contenedorOpciones.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.closest('.contenedor-opciones [data-opcion="mostrarInicio"]')){
        document.querySelector('.contenedor-promociones').scrollIntoView({
            inline: 'start',
            behavior: 'smooth'
        })
    }else if(e.target.closest('.contenedor-opciones [data-opcion="mostrarCategorias"]')){
        document.querySelector('.contenedor-categoria').scrollIntoView({
            inline: 'start',
            behavior: 'smooth'
        })
    }else{
        return
    }
})
