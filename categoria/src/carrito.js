//Importamos la base de datos
import database from "./data/database";

//Obtenemos el contenedor de categorias
const contenedorProductos = document.querySelector('.contenedor-producto');
//Obtenemos el contenedor de categorias
const contenedorPromociones = document.querySelector('.contenedor-promociones');
//Obtenemos los botonens de abrir y cerrar carrito
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
//Ventana modal
const ventanaCarrito = document.querySelector('.carrito-modal');
//Notificacion
const notificacion = document.querySelector('.contenedor-notificacion')

//API conversion moneda
const formatearMoneda = new Intl.NumberFormat('es-MX', {style: 'currency',
currency: 'MXN'});

let carritoCompras = [];

//Render carrito
const renderCarrito = () => {
    //Mostrar el carrito
    ventanaCarrito.classList.add('carrito-modal--active');

    //Guardamos los productos guardados en el arreglo
    const productosAnteriores = ventanaCarrito.querySelectorAll('.carrito-producto');
    
    productosAnteriores.forEach((producto) => {
        producto.remove();
    });

    let total = 0;

    //Comprobamos si hay productos en el carrito
    if(carritoCompras.length < 1){
        document.querySelector('.carrito-sin-producto').classList.add('carrito-sin-producto--active');
        document.querySelector('.carrito-contenedor-total').classList.add('carrito-contenedor-total--active');
        document.querySelector('.carrito-contenedor-regresar').classList.add('carrito-contenedor-regresar--active');
        
    }else{
        document.querySelector('.carrito-sin-producto').classList.remove('carrito-sin-producto--active')
        document.querySelector('.carrito-contenedor-total').classList.remove('carrito-contenedor-total--active');
        document.querySelector('.carrito-contenedor-regresar').classList.remove('carrito-contenedor-regresar--active');
        carritoCompras.forEach((productoEnCarrito) => {
            // console.log(productoEnCarrito)
            let categoriaProducto = productoEnCarrito.categoria;
            database.categorias[categoriaProducto].forEach((productoBaseDatos) => {
                // console.log(productoBaseDatos)
                if(productoBaseDatos.id === productoEnCarrito.id){
                    productoEnCarrito.precio = productoBaseDatos.precio;

                    //Obtenemos el total
                    total += productoBaseDatos.precio * productoEnCarrito.cantidad;
                }
            })
            const plantillaProducto = `
            <div class="carrito-producto-info">
                <img class="imagen-carrito" src="img/${productoEnCarrito.img}" alt="">
                <div class="contenedor-informacion-prodcuto">
                    <p class="nombre-producto-carrito"><span class="carrito-producto-cantidad">${productoEnCarrito.cantidad} x</span> ${productoEnCarrito.nombre}</p>
                    <p class="codigo-producto">Código de producto: ${productoEnCarrito.id*13}</p>
                </div>
            </div>
            <div class="carrito-producto-contenedor-precio">
                <button class="carrito-btn-cerrar-producto" data-accion="eliminar-item-carrito"><i class="fas fa-window-close"></i></button>
                <p class="carrito-producto-precio">${formatearMoneda.format(productoEnCarrito.precio*productoEnCarrito.cantidad)}</p>
            </div>
            `;
            //Creamos el elemento DIV
            const itemCarrito = document.createElement('div')
            //Agregamos la clase producto carrito
            itemCarrito.classList.add('carrito-producto');
            //Insertamos la plantilla al elemento
            itemCarrito.innerHTML = plantillaProducto;
            //Agregamos el producto a la ventana del carrito
            ventanaCarrito.querySelector('.carrito-body').appendChild(itemCarrito);
        });
    }
    ventanaCarrito.querySelector('.precio-total').innerText = `${formatearMoneda.format(total)}`;
}

//Obtener el boton de click
contenedorProductos.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.closest('.icono-carrito')){
        //Obtener categoria
        const categoriaSeleccionada = document.querySelector('.contenedor-tarjetas').dataset.categoria;

        //Categoria de la base de datos
        const productos = database.categorias[categoriaSeleccionada];

        //Producto id 
        const productoId = parseInt(e.target.closest('.contenedor-tarjetas').dataset.id);
    
        //Nombre
        const productoNombre = e.target.closest('.contenedor-tarjetas').dataset.nombre;

        // document.querySelector('.contenedor-tarjetas .nombre-producto').innerText;

        //Iteramos sobre la base
        productos.forEach((producto) => {
            //Comprobamos que el id seleccionado corresponde a la base
            if(producto.id === productoId){
                // console.log(productoId)
                if(carritoCompras.length > 0){
                    let productoEnCarrito = false;
                    let cantidadP = 1;
                    carritoCompras.forEach((item) => {
                        if(item.id === productoId){ 
                            item.cantidad += cantidadP;
                            productoEnCarrito = true;
                        }
                    });
                    if(productoEnCarrito === false){
                        carritoCompras.push({
                            id: productoId,
                            nombre: productoNombre,
                            img: producto.img,
                            cantidad: cantidadP,
                            categoria: categoriaSeleccionada
                        });
                    };
                }else{
                    carritoCompras.push({
                        id: productoId,
                        nombre: productoNombre,
                        img: producto.img,
                        cantidad: 1,
                        categoria: categoriaSeleccionada
                    })
                }
                //Obtenemos el id del producto
                const imgProductoSeleccionado = document.querySelector(`[data-id="${productoId}"] a img`);

                //Notificacion
                notificacion.querySelector('img').src = (imgProductoSeleccionado.src);

                //Agregamos clase activa
                notificacion.classList.add('contenedor-notificacion-active')

                //Duracion de la notificacion
                setTimeout(()  => {
                    notificacion.classList.remove('contenedor-notificacion-active')
                }, 1250);
            }
        })
    }
})


//Promociones
contenedorPromociones.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.closest('.icono-carrito'))
    if(e.target.closest('.icono-carrito')){
        //Obtener categoria
        const categoriaSeleccionada = e.target.closest('.contenedor-tarjetas-promociones').dataset.categoria;
        // console.log(categoriaSeleccionada)
        //Categoria de la base de datos
        const productos = database.categorias[categoriaSeleccionada];

        //Producto id 
        const productoId = parseInt(e.target.closest('.contenedor-tarjetas-promociones').dataset.id);
    
        //Nombre
        const productoNombre = e.target.closest('.contenedor-tarjetas-promociones').dataset.nombre;

        // document.querySelector('.contenedor-tarjetas .nombre-producto').innerText;

        //Iteramos sobre la base
        productos.forEach((producto) => {
            //Comprobamos que el id seleccionado corresponde a la base
            if(producto.id === productoId){
                if(carritoCompras.length > 0){
                    let productoEnCarrito = false;
                    let cantidadP = 1;
                    carritoCompras.forEach((item) => {
                        if(item.id === productoId){ 
                            item.cantidad += cantidadP;
                            productoEnCarrito = true;
                        }
                    });
                    if(productoEnCarrito === false){
                        carritoCompras.push({
                            id: productoId,
                            nombre: productoNombre,
                            img: producto.img,
                            cantidad: cantidadP,
                            categoria: categoriaSeleccionada
                        });
                    };
                }else{
                    carritoCompras.push({
                        id: productoId,
                        nombre: productoNombre,
                        img: producto.img,
                        cantidad: 1,
                        categoria: categoriaSeleccionada
                    })
                }
                //Obtenemos el id del producto
                const imgProductoSeleccionado = document.querySelector(`[data-id="${productoId}"] a img`);

                //Notificacion
                notificacion.querySelector('img').src = (imgProductoSeleccionado.src);

                //Agregamos clase activa
                notificacion.classList.add('contenedor-notificacion-active')

                //Duracion de la notificacion
                setTimeout(()  => {
                    notificacion.classList.remove('contenedor-notificacion-active')
                }, 1250);
            }
        })
    }
})

//Abrir carrito
botonesAbrirCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        renderCarrito();
    });
});

//Cerrar carrito
botonesCerrrarCarrito.forEach((boton) => {
    boton.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito-modal--active');
    });
});

//Eliminar productos del carrito
ventanaCarrito.addEventListener('click', (e) => {
    if(e.target.closest('button')?.dataset.accion == 'eliminar-item-carrito'){
        const producto = e.target.closest('.carrito-producto');
        const indexProducto = [...ventanaCarrito.querySelectorAll('.carrito-producto')].indexOf(producto);
        carritoCompras = carritoCompras.filter((item, index) => {
            if(index !== indexProducto){
                return item;
            }
        });
        renderCarrito();
    } 
});

ventanaCarrito.querySelector('.carrito-btn-comprar').addEventListener('click', () => {
    carritoCompras = [];
    renderCarrito();
})







