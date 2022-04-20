import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import { FaPlay } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";

function Banner() {
	const [movie, setMovie] = useState([]);
	// movie is an array of objects
	// setMovie is a function that takes an array of objects

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				],
			);
			return request;
		}
		fetchData();
	}, []);
	// The fetchData function is called when the component is first rendered.
	// The fetchData function returns a promise.
	// The promise is then handled by the setMovie function.
	// The setMovie function is then called with the data from the promise.

	// function to minimize the amount of characters shown for a movie preview. Improves the UX.
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + " ...Read More" : str;
	}
	// The truncate function is called when the movie preview is rendered.
	// The truncate function takes two arguments:
	// str is a string
	// n is an integer
	// The truncate function returns a string.
	// The string is then returned by the truncate function.
	// The string is then passed to the movie preview.
	// The movie preview is then rendered with the truncated string.

	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
				backgroundPosition: "center center",
			}}
		>
			<div className="banner--fadeTop" />
			<div className="bannerContents">
				<h1 className="bannerTitle">
					{movie?.title || movie?.name || movie?.original_name}
					{/* 
					// The ternary is used to check if the movie has a title.
					// If the movie has a title, the title is returned.
					// If the movie does not have a title, the movie name is returned.
					// If the movie does not have a title or a name, the movie original name is returned.					
					*/}
				</h1>
				<div className="bannerButtons">
					<button className="bannerButton button1">
						<span className="playIcon">
							<FaPlay size={14} />
						</span>
						Play
					</button>
					<button className="bannerButton button2">
						<span className="plusIcon">
							<BsPlusCircle size={15} />
						</span>
						My List
					</button>
				</div>
				<h1 className="bannerDescription">{truncate(movie?.overview, 150)}</h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;
