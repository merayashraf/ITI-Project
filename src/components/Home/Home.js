import './Home.css'
import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { Link } from 'react-router-dom';

function Home() {
    const api = '056e2960bcf791f2ff55a5da1371ace7';
    const path = 'https://image.tmdb.org/t/p/w500';
    const [movies, setMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axiosInstance.get('/3/movie/popular', {
                    params: {
                        api_key: api,
                    },
                });
                if (response.status !== 200) {
                    throw new Error(`Failed to fetch data: ${response.status}`);
                }
                const data = response.data;
                setMovies(data.results);
                console.log(data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
         const interval = setInterval(() => {
            handleNextSlide();
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const handleNextSlide = () => {
      setCurrentIndex((prevIndex) => {
          if (prevIndex === movies.length - 1) {
              return 0;
          } else {
              return prevIndex + 1;
          }
      });
  };

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1));
    };

     return (
       <section className="featured-movies">
         <div className="background-container">
            <h1 className="welcome-text">
             Welcome to our movie website, your ultimate destination for all things cinema!
             <br></br>
             <br></br>
             Our movie website is designed to be your go-to resource for comprehensive information about movies,
             <br></br>
             <br></br>
             including reviews, trailers, cast and crew details, and much more.
            </h1>
          </div>
      <h2>Featured Movies</h2>
      <div className="slider-container">
        <div className="movie-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <Link to={'/movieDetails/' + movie.id} style={{ textDecoration: 'none' }}>
                <img src={path + movie.poster_path} alt={movie.title} />
              </Link>
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={handlePrevSlide}>&lt;</button>
        <button className="next-button" onClick={handleNextSlide}>&gt;</button>
      </div>
    </section>
  );
}

export default Home;
