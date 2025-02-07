'use strict';

//Exportamos a json
var dataCategorias = {
    categorias: [
        {
            id: 'tecnologia',
            nombre: 'Tecnología',
        },
        { 
            id: 'muebles', 
            nombre: 'Muebles',  
        },
		{ 
            id: 'deportes', 
            nombre: 'Deportes',  
        },
		{ 
            id: 'supermercado', 
            nombre: 'Supermercado',  
        },
		{ 
            id: 'ropa', 
            nombre: 'Ropa',  
        }
    ]
};

const {categorias} = dataCategorias;
const contenedorCategorias$1 = document.querySelector('.contenedor-menu ul');

//Iteramos sobre cada categoria
categorias.forEach((categoria) => {
    //Creamos un elemento
    const plantilla = `<li data-categoria=${categoria.id}>${categoria.nombre}</li>`;    
    //Le asignamos la plantilla
    contenedorCategorias$1.innerHTML += plantilla;      
});

var database = {
    categorias: {
        tecnologia: [
            {
                id: 1,
                nombre: '75 Q70A QLED 4K Smart TV 2021',
                descripcion: 'Experimenta el color envolvente con detalles y contrastes más profundos. Quantum HDR 8x te lleva a un nuevo nivel de HDR. Disfruta.',
                precio: 42999,
                votos: 3504,
                img: 'pantalla.webp',
            },
            {
                id: 2,
                nombre: 'Audífonos inalámbricos Beats Solo3 Wireless',
                descripcion: 'Los audífonos inalámbricos Beats Wireless son ideales para usar todos los días. Carga de 5 minutos te ofrece 3 horas de reproducción.',
                precio: 4499,
                votos: 2484,
                img: 'beats color rosa.jpg',
            },
            {
                id: 3,
                nombre: 'iPhone 13 Pro',
                descripcion: 'Gran avance en cámaras. El chip más rápido en un smartphone. Y una batería increíble. Saca tu lado Pro.',
                precio: 28999,
                votos: 7486,
                img: 'iphone-13-pro-max-blue-select.jpg',
            }
        ],
        muebles: [
            {
                id: 4,
                nombre: 'Sala esquinera Prisca - Azul',
                descripcion: 'Crea un ambiente de modernidad y comodidad con esta magnifica sala, su diseño e inspiración son los ideales para tu hogar.',
                precio: 8799,
                votos: 2364,
                img: 'sala_esquinera_prisca_azul_still1_v2.jpg',
            },
            {
                id: 5,
                nombre: 'Base de cama queen size Alva - Gris claro',
                descripcion: 'Encontrar la cama ideal, es un tema de vital importancia para nuestro descanso, y para crear el ambiente deseado. Te ofrecemos calidad.',
                precio: 6899,
                votos: 576,
                img: 'cama.jpg',
            },
            {
                id: 6,
                nombre: 'Mueble para tv 150cm Meztli B - Encino',
                descripcion: 'Este mueble para tv es la mejor opción para mantener un estilo, lograr equilibrio y sobre todo resaltar el orden dentro de tu espacio.',
                precio: 3499,
                votos: 65,
                img: 'Mueble.jpg',
            }
        ],
        deportes: [
            {
                id: 7,
                nombre: 'Zoom Freak 3',
                descripcion: 'UNO ha sido el juego favorito de Giannis y sus hermanos desde que eran niños. Esta edición especial de Giannis celebra diversión sana.',
                precio: 2999,
                votos: 1346,
                img: 'tenis.webp',
            },
            {
                id: 8,
                nombre: 'Premier League Flight alternativo',
                descripcion: 'El balón de fútbol Premiere League Flight alternativo, perfeccionado durante 8 años y 1700 horas de prueba, ofrece un vuelo uniforme.',
                precio: 4499,
                votos: 309,
                img: 'balon.webp',
            },
            {
                id: 9,
                nombre: 'Nike One',
                descripcion: 'La mochila Nike One tiene espacio para todos tus entrenamiento y cualquier otra cosa que necesites para el trabajo o la escuela.',
                precio: 1099,
                votos: 51,
                img: 'mochila.jpg',
            }
        ],
        supermercado: [
            {
                id: 10,
                nombre: 'Shampoo tresemmé blindaje y regeneración',
                descripcion: 'Con Nano-Shield Technology. Reeestructura el interior del cabello, reforzando y protegiendo contra daños externos.',
                precio: 64,
                votos: 5,
                img: 'shampoo.png',
            },
            {
                id: 11,
                nombre: 'Desodorante en Aerosol Axe Intense',
                descripcion: 'Mantente fresco y protegido con el nuevo desodorante en aerosol Axe Intense y su tecnología doble acciónque destruye el mal olor.',
                precio: 56.90,
                votos: 17,
                img: 'desodorante.jpg',
            },
            {
                id: 12,
                nombre: 'Detergente Líquido Ariel Revitacolor',
                descripcion: 'Ideal para tus prendas de color, pues lo mantiene intacto con la mejor limpieza. Penetra de una mejor manera las manchas.',
                precio: 149,
                votos: 3,
                img: 'detergente.jpg',
            },
        ],
        ropa: [
            {
                id: 13,
                nombre: 'Chamarra tiro adidas',
                descripcion: 'Hecha en materiales absorbentes con tecnología adidas AEROREADY que absorbe el sudor de tu cuerpo, manteniendo tu piel seca.',
                precio: 1119,
                votos: 578,
                img: 'sudadera.webp',
            },
            {
                id: 14,
                nombre: 'Nike Sportswear',
                descripcion: 'Confeccionada con un tejido de punto de algodón y un ajuste espacioso, esta playera proporciona una sensación cómoda e informal.',
                precio: 849,
                votos: 158,
                img: 'playera.webp',
            },
            {
                id: 15,
                nombre: 'NikeCourt Dri-FIT',
                descripcion: 'El polo NikeCourt Dri-FIT, confeccionado con un tejido de punto suave elaborado con fibras de poliéster 100% reciclado.',
                precio: 679,
                votos: 54,
                img: 'polo.webp',
            },
        ]
    }
};

//Importamos la base

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
    });
};

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
});

const categoriaInicial = () => {
    contenedorCategorias.querySelector('[data-categoria="tecnologia"]').classList.add('categoria--activa');
    cargarImagen('tecnologia');
};

categoriaInicial();

//Importamos la base de datos

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
const notificacion = document.querySelector('.contenedor-notificacion');

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
        
    }else {
        document.querySelector('.carrito-sin-producto').classList.remove('carrito-sin-producto--active');
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
            });
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
            const itemCarrito = document.createElement('div');
            //Agregamos la clase producto carrito
            itemCarrito.classList.add('carrito-producto');
            //Insertamos la plantilla al elemento
            itemCarrito.innerHTML = plantillaProducto;
            //Agregamos el producto a la ventana del carrito
            ventanaCarrito.querySelector('.carrito-body').appendChild(itemCarrito);
        });
    }
    ventanaCarrito.querySelector('.precio-total').innerText = `${formatearMoneda.format(total)}`;
};

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
                    }                }else {
                    carritoCompras.push({
                        id: productoId,
                        nombre: productoNombre,
                        img: producto.img,
                        cantidad: 1,
                        categoria: categoriaSeleccionada
                    });
                }
                //Obtenemos el id del producto
                const imgProductoSeleccionado = document.querySelector(`[data-id="${productoId}"] a img`);

                //Notificacion
                notificacion.querySelector('img').src = (imgProductoSeleccionado.src);

                //Agregamos clase activa
                notificacion.classList.add('contenedor-notificacion-active');

                //Duracion de la notificacion
                setTimeout(()  => {
                    notificacion.classList.remove('contenedor-notificacion-active');
                }, 1250);
            }
        });
    }
});


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
                    }                }else {
                    carritoCompras.push({
                        id: productoId,
                        nombre: productoNombre,
                        img: producto.img,
                        cantidad: 1,
                        categoria: categoriaSeleccionada
                    });
                }
                //Obtenemos el id del producto
                const imgProductoSeleccionado = document.querySelector(`[data-id="${productoId}"] a img`);

                //Notificacion
                notificacion.querySelector('img').src = (imgProductoSeleccionado.src);

                //Agregamos clase activa
                notificacion.classList.add('contenedor-notificacion-active');

                //Duracion de la notificacion
                setTimeout(()  => {
                    notificacion.classList.remove('contenedor-notificacion-active');
                }, 1250);
            }
        });
    }
});

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
});

const contenedorOpciones = document.querySelector('.contenedor-opciones > nav');

contenedorOpciones.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.closest('.contenedor-opciones [data-opcion="mostrarInicio"]')){
        document.querySelector('.contenedor-promociones').scrollIntoView({
            inline: 'start',
            behavior: 'smooth'
        });
    }else if(e.target.closest('.contenedor-opciones [data-opcion="mostrarCategorias"]')){
        document.querySelector('.contenedor-categoria').scrollIntoView({
            inline: 'start',
            behavior: 'smooth'
        });
    }else {
        return
    }
});

const ventanaLogin = document.querySelector('[data-accion="abrir-login"]');

ventanaLogin.addEventListener('click', (e) => {
    const pregunta = confirm('¿Seguro que quieres cambiar de ventana? Tu carrito quedará vacío.');
    if(!pregunta){
        e.preventDefault();
    }
});
