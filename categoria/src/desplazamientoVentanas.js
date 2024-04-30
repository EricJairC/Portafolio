const ventanaLogin = document.querySelector('[data-accion="abrir-login"]');

ventanaLogin.addEventListener('click', (e) => {
    const pregunta = confirm('¿Seguro que quieres cambiar de ventana? Tu carrito quedará vacío.');
    if(!pregunta){
        e.preventDefault();
    }
})
