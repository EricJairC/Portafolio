//Obtenemos contenedor producto
const contenedorCategorias = document.querySelector('.contenedor-menu ul');


const consulta = contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();

    //Si hay un elemento con la clase activa la quita
    contenedorCategorias.querySelector('.categoria--activa')?.classList.remove('categoria--activa');

    //Agrega la categoria activa al target
    e.target.classList.add('categoria--activa');

    categoriaSeleccionada = e.target.dataset.categoria;
    //retorna el valor de la categoria
    return categoriaSeleccionada;
})

export default consulta;