import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
const VideoBackground = (movieId) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  //  console.log("moviedid",movieId);
  useMovieTrailer(movieId)

  return (
    <div className='w-screen h-screen'>
          <iframe 
          className='w-screen aspect-ratio h-full'
          src={"https://www.youtube.com/embed/"+trailerVideo?.key} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
