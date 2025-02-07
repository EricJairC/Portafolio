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
}
export default fetchGeneros