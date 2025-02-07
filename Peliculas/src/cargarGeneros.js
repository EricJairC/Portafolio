import fetchGeneros from "./fetchGeneros";
const contenedorGeneros = document.getElementById('filtro-generos')

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

        contenedorGeneros.appendChild(btn);
    })
};

export default cargarGeneros;