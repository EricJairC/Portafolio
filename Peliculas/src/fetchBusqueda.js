import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

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
        })
        return resultados;
    } catch (error) {
        console.log(error);
    }
}

export default fetchBusqueda;