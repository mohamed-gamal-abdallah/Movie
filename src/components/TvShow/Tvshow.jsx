import { Link } from "react-router-dom";

import { useState,useEffect } from "react";
import axios from "axios";


function Tvshow() {
    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmRiMGZkMzdjYzQyZDU0N2E2M2I2ZmI4NTFhNjRhNiIsInN1YiI6IjY1Y2YyODVmNmQxYmIyMDE3YjRjOThkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOcmc56E3GwHgHAavuV87H4qbo8iBPKZhUPtIsd8rHc'
        }
      };
const[movies,setmovies]=useState([])

async function getmovies(){
    let response=await axios.get("https://api.themoviedb.org/3/tv/popular",options)
    console.log(response.data.results)
    setmovies(response.data.results)
}

useEffect(()=>{
    getmovies();
},[])


    return ( <>
    
<div className="min-vh-100 bg-black">
    <div className="container bg-black row mx-auto g-4">
    {movies.map((movie)=><Link to={`/details/tv/${movie.id}`} key={movie.id} className="col-md-3 text-decoration-none">


    <div className="border2 " ><img src={"https://image.tmdb.org/t/p/w440_and_h660_face"+movie.poster_path} alt={movie.title}  className="w-100" />
<div className="mt-2 px-2">
    <h6 className="text-white">{movie.name?movie.name:<h6 className= "text-danger">Not Found Name</h6>}</h6>
    <p className="text-white">{movie.overview.split(" ").slice(0,10).join(' ')}</p>
    <div className="d-flex align-items-center justify-content-between">
        <p className="text-white m-0">{movie.vote_average}</p>
    <i className="fa-solid fa-star text-warning"></i>
    </div>
</div></div>


</Link>)}
    </div>


</div>

    </> );
}

export default Tvshow;