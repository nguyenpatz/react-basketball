import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="header-navbar">
			<Link to="/">Home</Link>
			<Link to="/course">Course</Link>
			<Link to="/contact">Contact</Link>
			<Link to="/about">About</Link>
		</div>
	);
};

export default Navbar;
