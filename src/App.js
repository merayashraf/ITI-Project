import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/navbar';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/Contact';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SignUp from './components/SignUp/SignUp';
import Join from './components/Join/Join';
import Movies from './components/tmdb/Movie';
import MovieDetails from './components/MoviesDetails/MovieDetails';
import CartComponent from './components/favorites/Fav';
import Favorites from './components/Redux/Rxd';
import Footer from './components/footer/Footer';
function App() {
  return (<div className='App'>
    <Navbar />
    <div className='container'>
      <Routes >
        <Route path='/' element={ <Home/>} />
        <Route path='/movies' element={ <Movies/>} />
        <Route path='/movieDetails/:id' element={ <MovieDetails/>} />
        <Route path='/fav' element={<CartComponent />} />
        <Route path="/fav" element={<Favorites />} />
        <Route path='/contactUs' element={ <ContactUs/>} />
        <Route path='/join' element={<Join />}>
          <Route path='' element={ <Login/>} />
          <Route path='login' element={ <Login/>} />
          <Route path='signUp' element={ <SignUp/>} />
        </Route>
        <Route path='*' element={ <NotFound/>} />
      </Routes>
      </div>
    <Footer/>
    </div>);
}

export default App;
