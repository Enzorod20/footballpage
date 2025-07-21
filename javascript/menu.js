document.querySelectorAll('.desplegable').forEach(function(link){
        link.addEventListener('click', function(e){
            e.preventDefault();
            const barra = document.getElementById("barra-desplegable");
            const idioma = this.getAttribute('data-bar');
            let contenido = '';
            if(idioma === 'espana') contenido = `
                <ul>
                    <li><a href="/ligas/laliga.html">LaLiga</a></li>
                    <li><a href="/clubes/clubesesp.html">Clubes de España</a></li>
                </ul>`;
            if(idioma === 'italia') contenido = `
                <ul>
                    <li><a href="/ligas/seriea.html">Serie A</a></li>
                    <li><a href="/clubes/clubesitl.html">Clubes de Italia</a></li>
                </ul>`;
            if(idioma === 'inglaterra') contenido = `
                <ul>
                    <li><a href="/ligas/premier.html">Premier League</a></li>
                    <li><a href="/clubes/clubesing.html">Clubes de Inglaterra</a></li>
                </ul>`;
            if(idioma === 'alemania') contenido = `
                <ul>
                    <li><a href="/ligas/bundesliga.html">Bundesliga</a></li>
                    <li><a href="/clubes/clubesale.html">Clubes de Alemania</a></li>
                </ul>`;
            if(idioma === 'francia') contenido = `
                <ul>
                    <li><a href="/ligas/ligue1.html">Ligue 1</a></li>
                    <li><a href="/clubes/clubesfra.html">Clubes de Francia</a></li>
                </ul>`;
            if(idioma === 'argentina') contenido = `
                <ul>
                    <li><a href="/ligas/primera.html">Primera division</a></li>
                    <li><a href="/clubes/clubesarg.html">Clubes de Argentina</a></li>
                </ul>`;
            if(idioma === 'brasil') contenido = `
                <ul>
                    <li><a href="/ligas/brasilerao.html">Brasilerao</a></li>
                    <li><a href="/clubes/clubesbra.html">Clubes de Brasil</a></li>
                </ul>`;
            if(idioma === 'estados-unidos') contenido = `
                <ul>
                    <li><a href="/ligas/mls.html">MLS</a></li>
                    <li><a href="/clubes/clubeseeuu.html">Clubes de Estados Unidos</a></li>
                </ul>`;
            if(idioma === 'holanda') contenido = `
                <ul>
                    <li><a href="/ligas/erediviese.html">Erediviese</a></li>
                    <li><a href="/clubes/clubeshol.html">Clubes de Holanda</a></li>
                </ul>`;
            if(idioma === 'mexico') contenido = `
                <ul>
                    <li><a href="/ligas/ligamx.html">Liga MX</a></li>
                    <li><a href="/clubes/clubesmex.html">Clubes de mexico</a></li>
                </ul>`;
            if(idioma === 'portugal') contenido = `
                <ul>
                    <li><a href="/ligas/primeira.html">Primeira liga</a></li>
                    <li><a href="/clubes/clubesport.html">Clubes de Portugal</a></li>
                </ul>`;
            // Agrega más idiomas si quieres

            if(contenido){
                barra.style.display = 'block';
                barra.innerHTML = contenido;
                const rect = this.getBoundingClientRect();
                const headerRect = this.closest('header').getBoundingClientRect();
                barra.style.left = (rect.left - headerRect.left) + "px";
                barra.style.top = (rect.bottom - headerRect.top + 5) + "px";
            } else{
                barra.style.display= 'none';
            }
        });
    });

    // Ocultar el menú si se hace click fuera
    document.addEventListener('click', function(e){
        const barra = document.getElementById("barra-desplegable");
        if (!e.target.classList.contains('desplegable') && !barra.contains(e.target)) {
            barra.style.display = 'none';
        }
    });

    document.querySelectorAll('.desplegable-era').forEach(function(titulo) {
        titulo.addEventListener('click', function() {
            const contenido = this.nextElementSibling;
            contenido.classList.toggle('minimizada');
        });
    });

    // Opcional: inicia todas minimizadas
    document.querySelectorAll('.era-contenido').forEach(function(contenido) {
        contenido.classList.add('minimizada');
    });
