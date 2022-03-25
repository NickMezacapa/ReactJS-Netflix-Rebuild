import React from "react";
import "./Footer.css";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

function Footer() {
	return (
		<div className="footer">
			<div
				className="footerIconContainer"
				style={{ color: "#fff", fontSize: "30px" }}
			>
				<FiFacebook />
				<FiInstagram />
				<FiTwitter />
				<FiYoutube />
			</div>
			<div className="footerListContainer">
				<ul className="footerList-1">
					<li>Audio and Subtitles</li>
					<li>Audio Description</li>
					<li>Help Center</li>
					<li>Gift Cards</li>
				</ul>
				<ul className="footerList-2">
					<li>Privacy</li>
					<li>Legal Notices</li>
					<li>Cookie Preferences</li>
					<li>Corporate Information</li>
				</ul>
				<ul className="footerList-3">
					<li>Media Center</li>
					<li>Investor Relations</li>
					<li>Jobs</li>
					<li>Terms of Use</li>
				</ul>
			</div>
			<div className="footerExtra">
				This is a rebuild of the Netflix app by Nick Mezacapa - 2022
			</div>
		</div>
	);
}

export default Footer;
