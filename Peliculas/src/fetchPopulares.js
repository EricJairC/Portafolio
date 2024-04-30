import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";

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

        })

        //Devolvemos los resultados 
        return resultados;
    } catch (error) {
        console.log(error);
    }
    
}

export default fetchPopulares;