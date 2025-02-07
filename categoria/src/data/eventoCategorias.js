//Importamos la base
import database from "./database";

//Obtenemos contenedor producto
const contenedorProducto = document.querySelector(".contenedor-producto");
const contenedorCategorias = document.querySelector('.contenedor-menu ul');

const cargarImagen = (categoriaSeleccionada) => {
    //Extraemos la información de los productos de la categoria seleccionada
    const productos = database.categorias[categoriaSeleccionada];
    contenedorProducto.innerHTML = '';        
    productos.forEach((producto) => {
        const plantillaProducto = `
        <div class="contenedor-tarjetas" data-id="${producto.id}" data-nombre="${producto.nombre}" data-categoria="${categoriaSeleccionada}">
        <a class="link">
            <img src="img/${producto.img}">
            <div class="contenedor-informacion">
                <h2 class="nombre-producto">${producto.nombre}</h2>
                <p class="descripcion-producto">${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
            </div>
            <div class="contenedor-estrella">
                <span>
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                    <span class="votos">${producto.votos}</span>
                </span>                    
                <i class="fas fa-shopping-cart icono-carrito"></i>
            </div>
        </a>
        </div>
        `;
        contenedorProducto.innerHTML += plantillaProducto;
    })
}

contenedorCategorias.addEventListener('click', (e) => {
    let categoriaSeleccionada;
    e.preventDefault();
    if (e.target.dataset.categoria) {
        //Si hay un elemento con la clase activa la quita
        contenedorCategorias.querySelector('.categoria--activa')?.classList.remove('categoria--activa');

        //Agrega la categoria activa al target
        e.target.classList.add('categoria--activa');

        categoriaSeleccionada = e.target.dataset.categoria;
    }
    //retorna el valor de la categoria
    cargarImagen(categoriaSeleccionada);
})

const categoriaInicial = () => {
    contenedorCategorias.querySelector('[data-categoria="tecnologia"]').classList.add('categoria--activa')
    cargarImagen('tecnologia')
}

categoriaInicial();