'use strict';

const fetchGeneros = async (filtro = 'movie') =>{//Realizando peticion
    const tipo = filtro === 'movie' ? 'movie' : 'tv';
    const url = `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=b4c7c33be3da20e65ce13659d3831bd8&language=es-MX&page=1`;

    try {
        //Quiero que esperes a que termine
        const respuesta = await fetch(url);

        //Accedemos a los datos con .json
        const datos = await respuesta.json();

        //Devolvemos los resultados 
        return datos.genres;
    } catch (error) {
        console.log(error);
    }
};

const contenedorGeneros = document.getElementById('filtro-generos');

const cargarGeneros = async(filtro) =>{
    const generos = await fetchGeneros(filtro);
    

    //Se borran los botones de generos y crea los botones
    contenedorGeneros.innerHTML = '';

    //Función para obtener los generos
    generos.forEach((genero) => {
        //Crear variable para guardar
        const btn = document.createElement('button');

        //Agragar clase
        btn.classList.add('btn');

        //Le incrustamos el nombre del genero
        btn.innerText = genero.name;

        //Le agregamos un atributo personalizado de id
        btn.setAttribute('data-id', genero.id);

        //
        contenedorGeneros.appendChild(btn);
        

    });
};

const cargarTitulos = (resultados) =>{
    const contenedor = document.querySelector('#populares .main__grid');
    //Reiniciamos los resultados antes de cargarlos
    contenedor.innerHTML = '';
    resultados.forEach((resultado) => {
        //Creando la plantilla
        const plantilla = `
            <div class="main__media" data-id="${resultado.id}">
	        	<a href="#" class="main__media-thumb">
	        		<img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}" alt="" />
	        	</a>
	        	<p class="main__media-titulo">${resultado.title || resultado.name}</p>
	        	<p class="main__media-fecha">${resultado.genero}</p>
	        </div>
        `;
        //Colocando la plantilla en el contenedor
        contenedor.insertAdjacentHTML('beforeend', plantilla);
    });
};

//Obtenemos el id y la lista de generos 
const obtenerGenero = (id, generos) =>{
    let nombre;
    //Por cada genero 
    generos.forEach((elemento) =>{
        //Busca si el id que te pasaron es igual a el id del elemento
        if(id === elemento.id){
            //Accedemos al nombre del genero
            nombre = elemento.name;
        }
    });
    return nombre;
};

//Función para cargar las películas populares
const fetchPopulares = async(filtro = 'movie') =>{
    //Aqui va quitar el display
    const contenedorBotones = document.querySelector('.main__paginacion');
    contenedorBotones.setAttribute('style', 'display: none');
    //Operador ternario
    const tipo = filtro === 'movie' ? 'movie' : 'tv';
    //Realizando peticion
    const url = `https://api.themoviedb.org/3/${tipo}/popular?api_key=b4c7c33be3da20e65ce13659d3831bd8&language=es-MX&page=1`;

    try {
        //Quiero que esperes a que termine
        const respuesta = await fetch(url);
        //Accedemos a los datos con .json
        const datos = await respuesta.json();
        //Guardamos los resultados totales
        const resultados = datos.results;

        //Accedemos a los datos de generos
        const generos = await fetchGeneros();

        //Por cada resultado 
        resultados.forEach((resultado) =>{
            //Ejecuta obtener genero, dale el id junto con la lista de generos y guardalo
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);

        });

        //Devolvemos los resultados 
        return resultados;
    } catch (error) {
        console.log(error);
    }
    
};

const filtroPelicula = document.getElementById('movie');
const filtroShow = document.getElementById('tv');

filtroPelicula.addEventListener('click', async(e) => {
    //Detenemos el evento
    e.preventDefault();

    //Cargamos los generos de películas
    cargarGeneros('movie');

    //Fetch
    fetchPopulares('movie');

    const resultados = await fetchPopulares('movie');

    //Llamamos a cargar titulos
    cargarTitulos(resultados);

    //Cambiamos boton seleccionado
    filtroShow.classList.remove('btn--active');
    filtroPelicula.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Películas Populares'; 
});

filtroShow.addEventListener('click', async(e) => {
    //Detenemos el evento
    e.preventDefault();

    //Cargar los generos de televisión
    cargarGeneros('tv');

    //Obtenemos los resultados
    const resultados = await fetchPopulares('tv');

    //Llamamos cargarTitulos
    cargarTitulos(resultados);

    //Cambiamos boton seleccionado
    filtroPelicula.classList.remove('btn--active');
    filtroShow.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Series Populares'; 
});

const contenedor$1 = document.getElementById('filtro-generos');

contenedor$1.addEventListener('click', (e) =>{
    //Prevenimos el comportamiento
    e.preventDefault();

    
    //Solo admite click en el boton
    if(e.target.closest('button')){
        //Removiendo cualquier boton que este activo
        //Si hay una clase con la clase .btn--active remueve la clase btn--active '?' operador ternario
        contenedor$1.querySelector('.btn--active')?.classList.remove('btn--active');
        //Para marcar el boton
        e.target.classList.add('btn--active');
    }    
});

const fetchBusqueda = async(pagina = 1) =>{
    //Accedemos a la sección de filtros y buscamos el boton con la clase activa, si esto se cumple entonces extraemos el id
    const tipo = document.querySelector('.main__filtros .btn--active')?.id;
    //Buscamos el contenedor de generos y buscamos la clase btn active y en el data set extraemos el id
    const idGenero = document.querySelector('.sidebar__contenedor-generos .btn--active')?.dataset.id || 12;
    //Extraemos el valor de daño inicial y en caso de que no haya nada por defecto pon 1950
    const anoInicial = document.getElementById('años-min').value || 2024;

    //Aqui va quitar el display
    const contenedorBotones = document.querySelector('.main__paginacion');
    contenedorBotones.setAttribute('style', 'display: flex');
    
    let url;
    //Establecemos las url
    if(tipo === 'movie'){
        url = `https://api.themoviedb.org/3/discover/movie?api_key=b4c7c33be3da20e65ce13659d3831bd8&language=es-MX&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagina}&primary_release_year=${anoInicial}&with_genres=${idGenero}&with_watch_monetization_types=flatrate`;
        
    }else if(tipo === 'tv'){
        url = `https://api.themoviedb.org/3/discover/tv?api_key=b4c7c33be3da20e65ce13659d3831bd8&first_air_date_year=${anoInicial}&include_adult=false&include_null_first_air_dates=false&language=es-MX&page=${pagina}&sort_by=popularity.desc&with_genres=${idGenero}`;
    }

    //Hacemos la petición
    try {
        //Trabajamos con la función fetch
        const respuesta = await fetch(url);

        //Extraemos la información de la respuesta con .json()
        const datos = await respuesta.json();

        //Accedemos a los datos de generos
        const generos = await fetchGeneros();
        //Accedemos a los resultados del objeto
        const resultados = datos.results;

        //Por cada resultado 
        resultados.forEach((resultado) =>{
            //Ejecuta obtener genero, dale el id junto con la lista de generos y guardalo
            resultado.genero = obtenerGenero(resultado.genre_ids[0], generos);
        });
        return resultados;
    } catch (error) {
        console.log(error);
    }
};

const btn = document.getElementById('btn-buscar');

btn.addEventListener('click', async(e) => {
    //Tenemos que recopilar información del filtro generos, si es película o serie
    const resultados = await fetchBusqueda();

    cargarTitulos(resultados);
});

const anterior = document.getElementById('pagina-anterior');
const siguiente = document.getElementById('pagina-siguiente');

siguiente.addEventListener('click', async (e) => {
    //Obtenemos la página actual por medio del id pagina
    const paginaActual = parseInt(document.getElementById('populares').dataset.pagina);
    
    //Hacemos una petición de pagina 2
    try{
        //Mandamos a fetchBusqueda la paginación
        const resultados = await fetchBusqueda(paginaActual + 1);
        
        //Aumentamos en uno 
        document.getElementById('populares').setAttribute('data-pagina', paginaActual + 1);
        
        //Cargamos los resultados a titulos
        cargarTitulos(resultados);

        //Mandamos arriba la página
        window.scrollTo(0, 0);

    } catch (error){
        console.log(error);
    }
});

anterior.addEventListener('click', async(e) =>{
    //Obtenemos la página actual por medio del id pagina
    const paginaActual = document.getElementById('populares').dataset.pagina;


    if(paginaActual > 1){
        //Hacemos una petición de pagina 
        try{
            //Mandamos a fetchBusqueda la paginación
            const resultados = await fetchBusqueda(paginaActual - 1);
            
            //Aumentamos en uno 
            document.getElementById('populares').setAttribute('data-pagina', parseInt(paginaActual) - 1);

            //Cargamos los resultados a titulos
            cargarTitulos(resultados);

            //Mandamos arriba la página
            window.scrollTo(0, 0);
        } catch (error){
            console.log(error);
        }  
    }
});

const fetchItem = async(id) =>{
    //Buscamos por propagación el div de filtros y que tenga la clase btn--active y extraemos el id
    const tipo = document.querySelector('.main__filtros .btn--active').id;

    try {
        //Obtenemos la url
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=b4c7c33be3da20e65ce13659d3831bd8&language=es-MX`;

        //Hacemos una petición a la url
        const respuesta = await fetch(url);

        //Extraemos los datos del resultado
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log(error);
    }
};

const contenedor = document.getElementById('populares');
const popup$1 = document.getElementById('media');

//Detectamos con propagación que solo le demos click al main media
contenedor.addEventListener('click', async(e) => {
    if(e.target.closest('.main__media')){
        //Agregamos el active en el media
        popup$1.classList.add('media--active');

        //Obtenemos el id de la película
        const id = e.target.closest('.main__media').dataset.id;

        //Hacemos petición
        const resultado = await fetchItem(id);

        //Hacemos la plantilla a incrustar
        const plantilla = `
        <div class="media__backdrop">
            <img
                src="https://image.tmdb.org/t/p/w500/${resultado.backdrop_path}" class="media__backdrop-image"
            />
        </div>
        <div class="media__imagen">
            <img
                src="https://image.tmdb.org/t/p/w500/${resultado.poster_path}"
                class="media__poster"
            />
        </div>
        <div class="media__info">
            <h1 class="media__titulo">${resultado.title || resultado.name}</h1>
            <p class="media__fecha">${resultado.release_date || resultado.first_air_date}</p>
            <p class="media__overview">${resultado.overview}</    p>
        </div>
        <button class="media__btn">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                class="media__btn-icono"
            >
            <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
            />
            </svg>
        </button>
        `;
    document.querySelector('#media .media__contenedor').innerHTML = plantilla;
    }
});

const popup = document.getElementById('media');

popup.addEventListener('click', (e) =>{
    if(e.target.closest('button')){
        popup.classList.remove('media--active');
    }
});

//Realizamos una petición
const cargar = async() =>{
    //Esperamos a la petición de populares
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
    cargarGeneros('movie');
};

cargar();
//# sourceMappingURL=bundle.js.map
