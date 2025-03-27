import "./style.scss"
import React from "react";
import Button from '../../components/button'
import Header from "../../components/header";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	return (
		<div className="home">
			<Header />
			<main className="main">
				<div className="btn_contain">


					<Link to="/registration">
						<Button child="Registration" />
					</Link>

					<Link to="/login">
						<Button child="Login" />
					</Link>


				</div>
				<Link to="/orders">
					<Button child="Orders" />
				</Link>
			</main>
		</div>
	)

}

export default Home