import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function Tarjetas(props) {
	return (
		<div className="card">
			<img
				src={props.img}
				className="card-img-top"
				width="100%"
				height="150px"
			/>
			<div className="card-body">
				<h5 className="card-title text-center">{props.titulo}</h5>
				<p className="card-text text-center">{props.text}</p>
			</div>
			<div className="card-footer  d-flex justify-content-center">
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
}
Tarjetas.propTypes = {
	titulo: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonUrl: PropTypes.string
};
