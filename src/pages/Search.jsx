import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard  from "../components/MovieCard"
import env from "react-dotenv"
import "./MovieGrid.css"
const searchUrl = env.SEARCH
// console.log(searchUrl)
const apiKey = env.API_KEY
// console.log(apiKey)
const Search = () =>{
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query=searchParams.get("q");
    console.log(query)
    const getSearchMovies= async (url)=>{
        const res = await fetch(url)
        console.log(res)
        const data = await res.json()
        console.log(data)
        setMovies(data.results)
    }
    useEffect(()=>{
        const searchWithQueryUrl =  `${searchUrl}?${apiKey}&query=${query}`;
        getSearchMovies(searchWithQueryUrl)
    },[query])
    return (
    <div className="container">
        <h2 className="title">
            Resultados para:<span className="query-text">
                {query}</span>
                </h2>
                <div className="movies-container">
                    {movies.length === 0 && <p>Carregando...</p>}
                    {movies.length>0 && movies.map((movie)=>
                    <MovieCard key={movie.id} 
                    movie={movie}/>)}
                    </div></div>
)}
export default Search