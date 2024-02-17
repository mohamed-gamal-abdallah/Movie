import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




function Persons () {
    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmRiMGZkMzdjYzQyZDU0N2E2M2I2ZmI4NTFhNjRhNiIsInN1YiI6IjY1Y2YyODVmNmQxYmIyMDE3YjRjOThkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOcmc56E3GwHgHAavuV87H4qbo8iBPKZhUPtIsd8rHc'
        }
      };
const[persons,setpersons]=useState([])

async function getpersons(){
    let response=await axios.get("https://api.themoviedb.org/3/person/popular",options)
    console.log(response.data.results)
    setpersons(response.data.results)
}

useEffect(()=>{
    getpersons();
},[])


    return ( <>
    
<div className="min-vh-100 bg-black">
    <div className="container bg-black row mx-auto g-4">
    {persons.map((movie)=><div  key={movie.id} className="col-md-3 text-decoration-none">


    <div className=" " ><img src={"https://image.tmdb.org/t/p/w440_and_h660_face"+movie.profile_path} alt={movie.title}  className="w-100" />
<div className="mt-2 px-2">
    <h6 className="text-white">{movie.name?movie.name:<h6 className= "text-danger">Not Found Name</h6>}</h6>
    <h6 className="text-white">Gender : {(movie.gender==1)?"Female":"Male"}</h6>
    <h6 className="text-white">department : {movie.known_for_department}</h6>
</div></div>


</div>)}
    </div>


</div>

    </> );
}

export default Persons;