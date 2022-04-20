import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
// Base URL for movie database API

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]); // movies is an array of objects
	const [trailerUrl, setTrailerUrl] = useState(""); // trailerUrl is a string

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);
	// fetchData is an async function that returns a promise.
	// The promise is then handled by the axios.get function.
	// The axios.get function returns a promise.
	// The promise is then handled by the setMovies function.
	// The setMovies function is then called with the data from the promise.
	// The data is then passed to the setMovies function.

	const opts = {
		height: "390", // movie trailer playback options
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.name || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};
	// The handleClick function is called when a movie is clicked.
	// The movie is passed to the movieTrailer function.
	// The movieTrailer function returns a promise.
	// The promise is then handled by the setTrailerUrl function.
	// The setTrailerUrl function is then called with the data from the promise.

	return (
		<div className="row">
			<h2 className="firstRow">{title}</h2>
			<div className="rowPosters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`rowPoster ${isLargeRow && "rowPosterLarge"}`} // classNames to determine row styling for larger posters
						src={`${base_url}${
							isLargeRow ? movie.poster_path : movie.poster_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>
			{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
		</div>
	);
}

export default Row;
