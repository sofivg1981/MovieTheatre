import { get } from "../utils/httpCliente"
import {useState,useEffect} from "react"
import { PlataformasCard } from "./PlataformasCard" 
import "../Components/PlataformasGrid.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Fantasia=()=>{
    
const [visibleMovies, setVisibleMovies] = useState([]);
const [pagina, setPagina] = useState(1);

  useEffect(() => {
  
    get("/discover/movie?include_adult=false&include_video=false&language=ES&page="  +
    pagina + "&sort_by=popularity.desc&with_genres=14&watch_region=AR").then((data) => {
        setVisibleMovies(data.results.slice(0, 7)); // Obtener las primeras 4 películas
      })
      .finally(() => {
      });
  }, [ , pagina]);
  
  const handlePaginaSiguiente = () => {
    setPagina(pagina + 1);
  };

  const handlePaginaAnterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  return (

    <div className="container">
    <div class="resultadosPlataformas">
        <div>
        <a href=""><img class="logoPlataforma" src="https://scontent.fcor10-4.fna.fbcdn.net/v/t39.30808-6/358430611_10159756745213634_1326791756614599147_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=RL1qmYyyVUgAX-qIcxu&_nc_ht=scontent.fcor10-4.fna&oh=00_AfDxo-6xoYXc2ULj96Z3Uv_1JpuP6PgthB5_Q15lUE-bZw&oe=64AAFAB6"></img></a>
    </div>
    <div className="paginacion">
    <div>
       <button className="botonIzq" onClick={handlePaginaAnterior} disabled={pagina === 1}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    </div>
        <div>
            <ul className="plataformasGrid">
                {visibleMovies.map((pelicula) => (<PlataformasCard key={pelicula.id} pelicula={pelicula} />))}
            </ul>
        </div>
        <div>
      <button className="botonDer" onClick={handlePaginaSiguiente}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
    </div>
    </div>
  );





}