import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
// import {FaBars} from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const Navbar = () => {

	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
		<div className="header-navbar">
			<Link to="/">Trang chủ</Link>
			<Link to="/course">Khóa học</Link>
			<Link to="/contact">Liên hệ</Link>
			<Link to="/about">Về chúng tôi</Link>
		</div>
		<div className="navbar-mobile">
			<button className="navbar-btn" onClick={()=>setOpenMenu(!openMenu)}>
				<FaBars />
			</button>
			{
				openMenu ? (<div className="header-mobile">
					<Link to="/">Trang chủ</Link>
					<Link to="/course">Khóa học</Link>
					<Link to="/contact">Liên hệ</Link>
					<Link to="/about">Về chúng tôi</Link>
				</div>) : null
			}
		</div>
		</>
	);
};

export default Navbar;
