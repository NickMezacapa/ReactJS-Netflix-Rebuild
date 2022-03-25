import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
import { FaPlay } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";

function Banner() {
	const [movie, setMovie] = useState([]);

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

	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + " ...Read More" : str;
	}

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
