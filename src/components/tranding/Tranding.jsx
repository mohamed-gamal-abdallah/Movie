import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function MoviesTranding() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 10
      };


    let [trandingMovies,settrandingMovies ] = useState([])
    let [trandingshow,settrandingshow ] = useState([])
    let [trandingall,settrandingall ] = useState([])

    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmRiMGZkMzdjYzQyZDU0N2E2M2I2ZmI4NTFhNjRhNiIsInN1YiI6IjY1Y2YyODVmNmQxYmIyMDE3YjRjOThkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOcmc56E3GwHgHAavuV87H4qbo8iBPKZhUPtIsd8rHc'
        }
      };

    async function getTranding(){
        let response=await axios.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",options)
        console.log(response.data.results)

        settrandingMovies(response.data.results)
    }

    async function getTrandingshow(){
        let response=await axios.get("https://api.themoviedb.org/3/trending/tv/day?language=en-US'",options)
        console.log(response.data.results)

        settrandingshow(response.data.results)
    }


    async function getTrandingall(){
        let response=await axios.get("https://api.themoviedb.org/3/trending/all/day?language=en-US",options)
        console.log(response.data.results)

        settrandingall(response.data.results)
    }


    useEffect(()=>{
        getTranding();
        getTrandingshow();
        getTrandingall();
    },[])

        

    return (<>
<div className="container mt-3">
<h2 className="text-white">Trandig Movies :</h2>
<Slider {...settings}>
{trandingMovies?.map((movie)=><img key={movie.id} src={"https://image.tmdb.org/t/p/w440_and_h660_face"+movie.poster_path} className="w-100"/> )}
</Slider>
</div>


<div className="container mt-5">
<h2 className="text-white">Trandig Series :</h2>
<Slider {...settings}>
{trandingshow?.map((show)=><img key={show.id} src={"https://image.tmdb.org/t/p/w440_and_h660_face"+show.poster_path} className="w-100"/> )}
</Slider>
</div>  

<div className="row g-3 mt-5 container mx-auto">
<h2 className="text-white">Trandig :</h2>

    {trandingall.map((total)=><Link to={(total.media_type =="tv")?`/details/tv/${total.id}`:`/details/movie/${total.id}`} key={total.id} className="col-md-2 text-decoration-none">

        <div className="border1 " ><img src={"https://image.tmdb.org/t/p/w440_and_h660_face"+total.poster_path} alt={total.title}  className="w-100" />
<div className="mt-2 px-2">
    <h6 className="text-white">{total.original_title?total.original_title:total.name}</h6>
    <p className="text-white">{total.overview.split(" ").slice(0,4).join(' ')}</p>
    <div className="d-flex align-items-center justify-content-between">
        <p className="text-white m-0">{total.vote_average}</p>
    <i className="fa-solid fa-star text-warning"></i>
    </div>
</div></div>

    </Link>)}
</div>



    
    </>  );
}

export default MoviesTranding


;