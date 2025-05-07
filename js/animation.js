document.addEventListener('DOMContentLoaded', () => {
    // Selección de los elementos de cada sección
    const primerNombre = document.querySelector('.texto:first-child');
    const segundoNombre = document.querySelector('.texto:nth-child(2)');
    const elemento = document.querySelector('.separador');
    const descripcion = document.querySelector('.descripcion');
    const imagen = document.querySelector('.img-zoro');

    const tituloMis = document.querySelector('.contenedor-titulo-proyectos .titulo:first-child');
    const proyecto1 = document.querySelector('.proyecto-1');
    const proyecto2 = document.querySelector('.proyecto-2');
    const proyecto3 = document.querySelector('.proyecto-3');
    const proyecto4 = document.querySelector('.proyecto-4');

    const tituloTecnologias = document.querySelector('.titulo-tecnologias');
    const iconosTecnologias = document.querySelectorAll('.contenedor-icono');

    // Observador para la primera sección
    const observerPresentacion = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si entra a pantalla
                if (primerNombre && segundoNombre && elemento && descripcion && imagen) {
                    primerNombre.classList.remove('animate-slideDownOut');
                    segundoNombre.classList.remove('animate-slideUpOut');
                    elemento.classList.remove('animate-fadeUpOut');
                    descripcion.classList.remove('animate-fadeUpOut');
                    imagen.classList.remove('animate-fadeUpOut');

                    primerNombre.classList.add('animate-slideDown');
                    segundoNombre.classList.add('animate-slideUp');

                    setTimeout(() => {
                        imagen.classList.add('animate-fadeUp', 'class--active');
                        elemento.classList.add('animate-fadeUp', 'class--active');
                        descripcion.classList.add('animate-fadeUp', 'class--active');
                    }, 600);
                }
            } else {
                if (primerNombre && segundoNombre && elemento && descripcion && imagen) {
                    primerNombre.classList.remove('animate-slideDown');
                    segundoNombre.classList.remove('animate-slideUp');
                    imagen.classList.remove('animate-fadeUp');
                    elemento.classList.remove('animate-fadeUp');
                    descripcion.classList.remove('animate-fadeUp');

                    primerNombre.classList.add('animate-slideDownOut');
                    segundoNombre.classList.add('animate-slideUpOut');
                    imagen.classList.add('animate-fadeUpOut');
                    elemento.classList.add('animate-fadeUpOut');
                    descripcion.classList.add('animate-fadeUpOut');
                }
            }
        });
    }, {
        threshold: 0.3
    });

    const contenedorPresentacion = document.querySelector('.contenedor-presentacion');
    if (contenedorPresentacion) {
        observerPresentacion.observe(contenedorPresentacion);
    }

    let observerProyectos;

    function createObserver(thresholdValue) {
        if (observerProyectos) {
            observerProyectos.disconnect();
        }

        observerProyectos = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (tituloMis) {
                        tituloMis.classList.remove('animate-fadeUpOut');

                        tituloMis.classList.add('animate-leftToRight');
                    }
                    setTimeout(() => {
                        proyecto1.classList.remove('animate-fadeUpOut');
                        proyecto2.classList.remove('animate-fadeUpOut');
                        proyecto3.classList.remove('animate-fadeUpOut');
                        proyecto4.classList.remove('animate-fadeUpOut');

                        proyecto1?.classList.add('animate-leftToRight');
                        proyecto2?.classList.add('animate-bottomToTop');
                        proyecto3?.classList.add('animate-rightToLeft');
                        proyecto4?.classList.add('animate-rightToLeft');
                    }, 500);
                } else {
                    tituloMis?.classList.remove('animate-leftToRight');
                    proyecto1?.classList.remove('animate-leftToRight');
                    proyecto2?.classList.remove('animate-bottomToTop');
                    proyecto3?.classList.remove('animate-rightToLeft');
                    proyecto4?.classList.remove('animate-rightToLeft');

                    tituloMis.classList.add('animate-fadeUpOut');
                    proyecto1.classList.add('animate-fadeUpOut');
                    proyecto2.classList.add('animate-fadeUpOut');
                    proyecto3.classList.add('animate-fadeUpOut');
                    proyecto4.classList.add('animate-fadeUpOut');
                }
            });
        }, { threshold: thresholdValue });

        const contenedorProyectos = document.querySelector('.contenedor-proyectos');
        if (contenedorProyectos) {
            observerProyectos.observe(contenedorProyectos);
        }
    }

    function setupResponsiveObserver() {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        function applyObserver(e) {
            const threshold = e.matches ? 0.1 : 0.3;
            createObserver(threshold);
        }

        applyObserver(mediaQuery);

        mediaQuery.addEventListener("change", applyObserver);
    }

    setupResponsiveObserver();

    const contenedorProyectos = document.querySelector('.contenedor-proyectos');
    if (contenedorProyectos) {
        observerProyectos.observe(contenedorProyectos);
    }
    const observerTecnologias = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (tituloTecnologias) {
                    tituloTecnologias.classList.add('animate-slideDown');
                }
                setTimeout(() => {
                    iconosTecnologias.forEach((icono, index) => {
                        setTimeout(() => {
                            icono.classList.add('animate-bottomToTop');
                        }, 200);
                    });
                }, 300);
            } else {
                tituloTecnologias?.classList.remove('animate-slideDown');
                iconosTecnologias.forEach(icono => {
                    icono.classList.remove('animate-bottomToTop');
                });
            }
        });
    }, { threshold: 0.3 });

    const contenedorTecnologias = document.querySelector('.contenedor-tecnologias');
    if (contenedorTecnologias) {
        observerTecnologias.observe(contenedorTecnologias);
    }
});