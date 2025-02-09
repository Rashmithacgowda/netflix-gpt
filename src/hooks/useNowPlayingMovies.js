import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const json = await response.json();
      // console.log('Fetched Movies:', json.results);  // Check the data fetched
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error('Error fetching now playing movies:', error);
    }
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
