import cargarGeneros from "./cargarGeneros";
import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

const filtroPelicula = document.getElementById('movie');
const filtroShow = document.getElementById('tv');
const url = 'https://api.themoviedb.org/3/tv/popular?api_key=b4c7c33be3da20e65ce13659d3831bd8&language=es-MX&page=1';

filtroPelicula.addEventListener('click', async(e) => {
    //Detenemos el evento
    e.preventDefault();

    //Cargamos los generos de películas
    cargarGeneros('movie');

    //Fetch
    fetchPopulares('movie');

    const resultados = await fetchPopulares('movie');

    //Llamamos a cargar titulos
    cargarTitulos(resultados)

    //Cambiamos boton seleccionado
    filtroShow.classList.remove('btn--active')
    filtroPelicula.classList.add('btn--active');
    document.querySelector('#populares .main__titulo').innerText = 'Películas Populares'; 
})

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
})

