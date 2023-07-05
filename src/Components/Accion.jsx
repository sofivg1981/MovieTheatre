import { get } from "../utils/httpCliente"
import {useState,useEffect} from "react"
import { PlataformasCard } from "./PlataformasCard" 
import "../Components/PlataformasGrid.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const Accion=()=>{
    
const [visibleMovies, setVisibleMovies] = useState([]);
const [pagina, setPagina] = useState(1);

  useEffect(() => {
  
    get("/discover/movie?include_adult=false&include_video=false&language=ES&page="  +
    pagina + "&sort_by=popularity.desc&with_genres=28&watch_region=AR").then((data) => {
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
        <a href=""><img class="logoPlataforma" src="https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/357446406_10159756745218634_8004640448601687151_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=2a-KmOs2QEMAX_bzT8v&_nc_ht=scontent.fcor10-3.fna&oh=00_AfAmytE6p3yA41vohWDsE_1GyzGmgnYJrgoYG1wj0HJ0Jg&oe=64A9D5DD"></img></a>
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