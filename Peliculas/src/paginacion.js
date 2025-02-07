import cargarTitulos from "./cargarTitulos";
import fetchBusqueda from "./fetchBusqueda";

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
})

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
})