import dataCategorias from './data/categorias';
const {categorias} = dataCategorias;
const contenedorCategorias = document.querySelector('.contenedor-menu ul');

//Iteramos sobre cada categoria
categorias.forEach((categoria) => {
    //Creamos un elemento
    const plantilla = `<li data-categoria=${categoria.id}>${categoria.nombre}</li>`;    
    //Le asignamos la plantilla
    contenedorCategorias.innerHTML += plantilla;      
});