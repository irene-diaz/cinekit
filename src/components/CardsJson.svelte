<script>
	import { vermas } from '../stores/store';
	export let peliculas;
    
    export let genreColorAssociations;

    function saberColorJson(genero) {
    //console.log("Genero:", genero);
    // Verifica si genreColorAssociations está definido y es un array
    if (Array.isArray(genreColorAssociations)) {
        // Itera sobre cada entrada en genreColorAssociations
        for (const entry of genreColorAssociations) {
           // console.log("Entry.genre:", entry.genre);
            // Verifica si la propiedad 'genre' coincide con el género proporcionado
            if (entry.genre === genero) {
                // Devuelve el color correspondiente si hay una coincidencia
                return entry.color;
            }
        }
    }

    // Si no se encuentra el género, se devuelve un color predeterminado
    return 'red';
}

	
</script>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<div class="movie-cards">
    {#each peliculas as pelicula}
        <!--<h1>{title}</h1>-->
        <div class="card">
            <img src={pelicula.thumbnail} alt="" />
            <div class="titlecage">
                <h1 class="title">{pelicula.title}</h1>
            </div>
            <div class="content">
                <button class="vermas" on:click={() => vermas.update((value) => pelicula.title)}
                    >VER MÁS</button
                >
                <form action="/favoritos" method="post">
                    <button type="submit">*</button>
                </form>
               
                
                <div class="contentelements">
                    <h1 class="name">{pelicula.title}</h1>
                    <h3 class="info">
                        {pelicula.stars} <i class="fa-solid fa-star"></i>
                        | {pelicula.year} | {pelicula.duration} min
                    </h3>
                    
                    <div class="allgenders">
                        {#each pelicula.genres as genre}
                            <div class="gender" style="background-color: {saberColorJson(genre)};">
                                <p style="color:black">{genre}</p>
                            </div>
                        {/each}
                    </div>
                    
                </div>
            </div>
        </div>
    {/each}
</div>









<style>
.movie-cards{
    width: 100%;
    /*min-height: 10vh;*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: space-around;
}

.card{
    width: 14.38rem;
    height: 21.9rem;
    position: relative;
    color: #fff;
    border-radius: 0.3rem;
    cursor: pointer;
    overflow: hidden;
    margin: 2rem;
}

.titlecage{
    background-color: #7BA9CD;
    position: absolute;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 2rem;
    padding: 4%;
}

.card:hover .titlecage{
    opacity: 0;
}

.title{
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
}

.card img{
    width: 100%;
    height: 100%;
    transition: all 0.5s;
}

.card:hover img{
    transform: scale(1.05);
}

.content{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(rgba(0,0,0,0.2), #7BA9CD);
    
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 4%;
    opacity: 0;
    transition: all 0.2s;
    overflow: hidden;
}

.contentelements{
  padding: 0;
  margin: 0;
  position: absolute;
  bottom: 0;
}

.card:hover .content{
    opacity: 1;
}

.name{
    font-size: 1.5rem;
    font-weight: 700;
}

.info{
    font-size: 0.75rem;
    font-weight: 600;
}

.allgenders{
    width: 100%;
    min-height: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;
    flex-wrap: wrap;
}
.gender{
    font-size: 0.7rem;
    color: white;
    height: 1.5rem;
    min-width: 4rem;
    border-radius: 0.3rem;
    border: none;
    background-color: #404c4d;
    cursor: pointer;
    margin: 0.5rem;
    text-align: center;
    padding: 0.3rem;
}

.gender p{
    font-size: 1rem;
    font-weight: 600;
    transform: translateY(-0.9rem);
}



.vermas{
    position: absolute;
    right: 10%;
    top: 4%;
    font-size: 0.7rem;
    color: white;
    font-weight: 900;
    height: 1.9rem;
    width: 5rem;
    border-radius: 0.3rem;
    border: none;
    background-color: #7BA9CD;
    cursor: pointer;

}


















input[type="checkbox"] {
    transform: translate3D(-50%, -50%, 0);
    left: 10%;
    top: 8%;
    position: absolute;
}

input[type="checkbox"]:before,
input[type="checkbox"]:after {
    content: "";
    cursor: pointer;
    background-image: url(http://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2000px-Heart_coraz%C3%B3n.svg.png);
    background-size: cover;
    height: 2rem;
    width: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3D(-50%, -50%, 0);
    filter: grayscale(100%);
}

input[type="checkbox"]:after {
    opacity: 0;
    filter: grayscale(0%);
}

input[type="checkbox"]:checked:before {
    filter: grayscale(0%);
}

input[type="checkbox"]:checked:after {
    animation: ascend ease-in-out 800ms;
}

@-webkit-keyframes ascend {
    0% {
        transform: translate3D(-50%, -50%, 0);
        opacity: 1;
    }
    100% {
        transform: translate3D(-50%, -200%, 0);
        opacity: 0;
    }
}

@-moz-keyframes ascend {
    0% {
        transform: translate3D(-50%, -50%, 0);
        opacity: 1;
    }
    100% {
        transform: translate3D(-50%, -200%, 0);
        opacity: 0;
    }
}

@keyframes ascend {
    0% {
        transform: translate3D(-50%, -50%, 0);
        opacity: 1;
    }
    100% {
        transform: translate3D(-50%, -200%, 0);
        opacity: 0;
    }
}


















</style>