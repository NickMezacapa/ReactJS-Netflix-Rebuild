import React, { useEffect, useState } from "react";
import "./Nav.css";
import { FaSearch } from "react-icons/fa";

function Nav() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 25) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="logoContainer">
				<img
					className="navLogo"
					src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
					alt="Netflix Logo"
				/>
			</div>

			<div className="avatarContainer">
				<span className="searchIcon">
					<FaSearch
						style={{ marginTop: 9 }}
						/* onClick={() => {

					}} */
					/>
					<form className="searchForm">
						<input
							className="searchContainer"
							placeholder="Search movies, Tv shows, and more.."
						/>
						<button className="searchButton">Search</button>
					</form>
				</span>
				<img
					className="navAvatar"
					src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
					alt="Netflix Avatar Logo"
				/>
			</div>
		</div>
	);
}

export default Nav;
