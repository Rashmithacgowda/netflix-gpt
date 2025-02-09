import React from 'react'
import { Header } from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browser = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* Main Container
      -videoBackground
      -videoTitle
      *SecondaryContainer
      -list of movies */}
    </div>
  )
}
export default Browser

