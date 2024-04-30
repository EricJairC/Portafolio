import cargarTitulos from "./cargarTitulos";
import fetchBusqueda from "./fetchBusqueda";

const btn = document.getElementById('btn-buscar');

btn.addEventListener('click', async(e) => {
    //Tenemos que recopilar información del filtro generos, si es película o serie
    const resultados = await fetchBusqueda();

    cargarTitulos(resultados);
})