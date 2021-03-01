import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-link" href="#">
						About
					</a>
					<a className="nav-link" href="#">
						Services
					</a>
					<a className="nav-link" href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}
