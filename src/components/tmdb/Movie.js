import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig/instance';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../Redux/Rxd";
import './movies.css';
import { FaStar } from 'react-icons/fa'; 

function Movies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [addToFavoritesSuccess, setAddToFavoritesSuccess] = useState(Array(movies.length).fill(false));

  const dispatch = useDispatch();
  const [lang, setLang] = useState('en-US');
  const favorites = useSelector((state) => state.favorites);
  const api = '056e2960bcf791f2ff55a5da1371ace7';
  const path = 'https://image.tmdb.org/t/p/w500';
  const isFavorite = (id) => favorites.some((item) => item.id === id);
  const handleToggleFavorites = (id, title, imgSrc, index) => {
    if (isFavorite(id)) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({ id, title, imgSrc }));
      const updatedSuccessMessages = [...addToFavoritesSuccess];
      updatedSuccessMessages[index] = true;
      setAddToFavoritesSuccess(updatedSuccessMessages);
      setTimeout(() => {
        updatedSuccessMessages[index] = false;
        setAddToFavoritesSuccess(updatedSuccessMessages);
      }, 3000);
    }
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/3/movie/popular', {
          params: {
            api_key: api,
            language: lang,
            page: currentPage,
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
  }, [currentPage, lang]);

  const changeLanguage = () => {
    setLang(lang === 'en-US' ? 'ar-SA' : 'en-US');
  };

  return (
    <div>
      <div className="row movie-element">
          <button type="button" className="btn btn-primary float-end my-3" onClick={changeLanguage}>
            {lang}
          </button>
      </div>
      <h1 className='popmovies'>Popular Movies - Page {currentPage}</h1>
      <div className="row">
        {movies.map((movie,index) => (
          <div className="col-md-6 col-lg-4 col-xl-4 movie-element" key={movie.id}>
            <div className="card text-black">
              <div className="card-body">
                {addToFavoritesSuccess[index] && (
                  <div className="alert alert-success" role="alert">
                    Added to favorites successfully!
                  </div>
                )}
                <button
                  onClick={() =>
                    handleToggleFavorites(
                      movie.id,
                      movie.title,
                      `${path}${movie.poster_path}`,
                      index
                    )
                  }
                  className={`btn ${
                    isFavorite(movie.id) ? "btn-danger" : "btn-primary"
                  }`}
                >
                  <FaStar />
                </button>
                <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                  <Link to={'/movieDetails/' + movie.id} style={{ textDecoration: 'none' }}>
                    <img src={path + movie.poster_path} className="card-img-top" alt="Apple Computer" />
                  </Link>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>Year</span>
                    <span>{movie.release_date}</span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="pagination-button">
          <button
            onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
        </div>
        <div className="pagination-button">
          <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Movies;
