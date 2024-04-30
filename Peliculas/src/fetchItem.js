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
}

export default fetchItem;