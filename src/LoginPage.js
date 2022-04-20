import React, { useState } from "react";
import "./LoginPage.css";
import SignupScreen from "./SignupScreen";

function LoginPage() {
	const [signIn, setSignIn] = useState(false);
	// signIn is a boolean.
	// setSignIn is a function that takes a boolean as an argument.
	// setSignIn is a function that sets the state of signIn to the argument.
	// setSignIn is a function that is called when the sign in button is clicked.

	return (
		<div className="loginScreen">
			<div className="loginScreen-background">
				<img
					src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt="Netflix Logo"
					className="loginScreen-logo"
				/>
				{/* Call setSignIn on button click */}
				<button onClick={() => setSignIn(true)} className="loginScreen-button">
					Sign in
				</button>
				<div className="loginScreen-gradient" />
			</div>
			<div className="loginScreen-body">
				{/* If signIn is true, render SignupScreen */}
				{signIn ? (
					<SignupScreen />
				) : (
					<>
						<h1>Unlimited films, TV programs and more.</h1>
						<h2>Watch anywhere. Cancel at any time.</h2>
						<h3>
							Ready to watch? Enter your email to create or restart your
							membership.
						</h3>
						<div className="loginScreen-input">
							<form>
								<input type="email" placeholder="Email Address" />
								<button
									onClick={() => setSignIn(true)}
									className="loginScreen-getStarted"
								>
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default LoginPage;
