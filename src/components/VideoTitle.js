import React from 'react'
import PlayIcon from "../utils/images/play.svg";
import InfoIcon from "../utils/images/info.svg";
const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=""> 
        <button className='bg-white text-black p-4 px-12 w-30 text-lg rounded-lg'><image src={PlayIcon} alt="play-button"/> Play</button>
        <button className='mx-2 bg-gray-500 opacity-1 text-white p-4 px-12 w-30 text-lg rounded-lg'><image src={InfoIcon} alt="more info"/> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
