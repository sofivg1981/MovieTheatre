import { get } from "../utils/httpCliente.js"
import {useState,useEffect} from "react"
import { PeliculasCard } from "./PeliculasCard.jsx"
import "./PeliculasGridPlataformas.css"
import { Spinner } from "./Spinner.jsx"
import {useQuery} from "../hooks/useQuery.jsx"

export const PeliculasGridNetflixs=()=>{
    
const [peliculas,setPeliculas] = useState([])
const [cargando,setCargando]= useState(true);

  //13 utilizo useQuery() para obtener lo que buscamos
  const query = useQuery()
  const search = query.get("search")
  /*  console.log(search);  */


useEffect (()=>{
    setCargando(true)
//15 hago un ternario, si hay busqueda asigna ese valor a una url sino muestra las peliculas de /discover/movie"
       const searchURL = search?"/search/movie?query=" + search : "/discover/movie?include_adult=false&include_video=false&language=ES&page=10&sort_by=popularity.desc&watch_region=AR&with_watch_providers=8"

get(searchURL).then((data)=>{
    /*         console.log(data); */
            setPeliculas(data.results);
        })
        setCargando(false)
},[search]) // 14 agregar search

  if(cargando){
    return <Spinner/>
  }
return(
    <ul className="moviesGrid">
        {peliculas.map((pelicula)=>(
        <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
        ))}
    </ul>
)


}