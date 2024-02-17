import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";




function Details() {


    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmRiMGZkMzdjYzQyZDU0N2E2M2I2ZmI4NTFhNjRhNiIsInN1YiI6IjY1Y2YyODVmNmQxYmIyMDE3YjRjOThkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOcmc56E3GwHgHAavuV87H4qbo8iBPKZhUPtIsd8rHc'
        }
      };

const[details,setdetails]=useState({})

let params=useParams()
async function getdetailes(movie_id,kind){
    let response=await axios.get(`https://api.themoviedb.org/3/${kind}/${movie_id}`,options)
    setdetails(response.data)
    console.log(response.data)
}

useEffect(()=>{
    getdetailes(params.id,params.kind);
},[])

    return ( <>

    <div className="bg-black min-vh-100 py-3">
<div className="container border1 row mx-auto bg-black px-0">
<div className="col-md-4 p-0"><img className="w-100" src={"https://image.tmdb.org/t/p/w440_and_h660_face"+details.poster_path}  /></div>
<div className="col-md-8 align-items-center py-5">
    <h2 className="text-white">{details.original_title}</h2>
    <h4 className="text-white mt-3">overview : </h4>
    <p className="text-white">{details.overview}</p>
    <h6 className="text-white mt-3">release_date : {details.release_date} </h6>
    <h6 className="text-white mt-3">budget : {details.budget} $ </h6>
<div className="d-flex align-items-center">
    <h6 className="text-white" >Rating : </h6>
    <p className="m-0 ms-2 text-white">{details.vote_average}</p>
<i className="fa-solid fa-star text-warning ms-1"></i>
</div>
</div>
</div>
    </div>
    
    
    </> );
}

export default Details;


