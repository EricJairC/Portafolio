import cargarGeneros from "./cargarGeneros";
import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";
import './listenerFiltroTipo';
import './listenerFiltrosGeneros';
import './listenerBuscar';
import './paginacion';
import './listenerItems';
import './listenerPopup';

//Realizamos una petición
const cargar = async() =>{
    //Esperamos a la petición de populares
    const resultados = await fetchPopulares();
    cargarTitulos(resultados);
    cargarGeneros('movie');
};

cargar();
