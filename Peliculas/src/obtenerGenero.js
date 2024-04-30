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
}   

export default obtenerGenero;