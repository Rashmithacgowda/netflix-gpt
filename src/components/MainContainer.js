import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector(store =>store.movies?.nowPlayingMovies)
    // console.log("movies",movies);
    if(movies === null)
        return;

    const mainMovie = movies[0];
    // console.log("mainMovie",mainMovie)

    const {original_title,overview,id} = mainMovie;
    // console.log("id",id);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
