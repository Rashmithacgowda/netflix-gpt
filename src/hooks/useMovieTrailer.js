import React, { useState,useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const [trailerId,setTrailerId] = useState(null);
    console.log("gsgag",movieId)
    const getMovieVideos = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/939243/videos?language=en-US", API_OPTIONS);
            const json = await data.json();
            
            // Check if `json.results` exists and is an array
            if (json.results && Array.isArray(json.results)) {
                const filterData = json.results.filter((video) => video.type === "Teaser");
                const trailer = filterData.length ? filterData[0] : json.results[0];
                setTrailerId(trailer.key);
                dispatch(addTrailerVideo(trailer));
            } else {
                console.error("No video results found or results is not an array:", json);
            }
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    };
    useEffect(() => {
        console.log("Fetching videos for movieId:", movieId);  // Debugging line
        getMovieVideos();
    }, [movieId]);  // Run the effect when movieId changes
    
}

export default useMovieTrailer;