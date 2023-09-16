import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import axiosInstance from "../../axiosConfig/instance";
import './details.css'

function MovieDetails() {
  const { id } = useParams();
  const api = "ed28eb94318601461e6122f853363392";
  const path = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  

  useEffect(() => {
    axiosInstance.get(`/3/movie/${id}`, { params: { api_key: api } })
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axiosInstance.get(`/3/movie/${id}/videos`, { params: { api_key: api } })
      .then((response) => {
        if (response.data.results.length > 0) {
          setTrailerUrl(response.data.results[0].key);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="containerDetails">
        <h1 className="Movietitle">{movie.title}</h1>
        <p className="txt">{movie.overview}</p>
        <p className="txt">This movie was released in cinema in { movie.release_date}</p>
        <div className="image-and-video-container">
          <img
            src={path + movie.poster_path}
            className="cardd-img-top"
            alt={movie.title}
          />
          {trailerUrl && <YouTube className="Vid" videoId={trailerUrl} opts={opts} />}
        </div>
      </div>

    </>
  );
}

export default MovieDetails;
