import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import logo from "../image/basket-logo.png";

const Header = () => {
	return (
		<header className="header">
			<div className="header-logo">
				<Link to="/">
					<img style={{ background: "orange"}} src={logo} alt="" className="logo" />
				</Link>
			</div>
			<Navbar />
		</header>
	);
};

export default Header;
