import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Tarjetas } from "./tarjetas";
import { Footer } from "./footer";
//create your first component
export function Home() {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />

			<div className="row">
				<div className="col-sm-12 col-lg-3">
					<Tarjetas
						titulo="Tarjeta1"
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
						img="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/04/08/15863374252712.jpg"
						buttonLabel="Find out More"
						buttonUrl="Redireccion"
					/>
				</div>
				<div className="col-sm-12 col-lg-3">
					<Tarjetas
						titulo="Tarjeta1"
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
						img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHtwKJIaaZ4EgsieER7dcr0KYj7wzhHAmag&usqp=CAU"
						buttonLabel="Find out More"
						buttonUrl="Redireccion"
					/>
				</div>
				<div className="col-sm-12 col-lg-3">
					<Tarjetas
						titulo="Tarjeta1"
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
						img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQaA07FCb1pPkHrivXKPbXwmLs_X9vDQo1w&usqp=CAU"
						buttonLabel="Find out More"
						buttonUrl="Redireccion"
					/>
				</div>
				<div className="col-sm-12 col-lg-3">
					<Tarjetas
						titulo="Tarjeta1"
						text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
						img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-jwB39V4ps5UloyiKaQx3pdrq3ENpWy4utw&usqp=CAU"
						buttonLabel="Find out More"
						buttonUrl="Redireccion"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
