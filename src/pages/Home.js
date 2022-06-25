import React from "react";
import Slider from "../components/Slider";
import Infomation from "../components/Infomation";
import HomeCourse from "../components/HomeCourse";

import Info from "./Info";
const Home = () => {
	return (
		<div className="home-container">
			<Slider />
			<Info />
			<Infomation />
			<HomeCourse />
		</div>
	);
}
export default Home;