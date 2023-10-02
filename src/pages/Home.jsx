import {useState, useEffect } from "react"
import env from "react-dotenv";

const moviesURL = env.API
// import.meta.env.API;
const apiKey = env.API_KEY
// import.meta.env.API_KEY;
const Home = () =>{
    const [topMovies, setTopMovies]=useState([])
    const getTopRateMovies= async (url)=>{
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
    }
    useEffect(()=>{
const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
getTopRateMovies(topRatedUrl)
    },[])
    return (
    <div className="container">
        <h2 className="title">Melhores filmes </h2>
        <div className="movies-container">
            {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length >0 && 
        topMovies.map((movie)=>
        <p>{movie.title}</p>)}</div>
        </div>)
}
export default Home