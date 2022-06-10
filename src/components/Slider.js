import React, { useState, useEffect } from "react";
import slides from "../slider";
import { useGlobalContext } from "../context";
const Slider = () => {
	const { images } = useGlobalContext();
	const [image, setImage] = useState(null);
	const [count, setCount] = useState(0);

	const image_array = [];
	for (let i = 3; i < 6; i++) {
		image_array.push(images[i]);
	}

	return (
		<div className="slider-container">
			{image_array.map((item, index) => (
					<img src={item} className="image" key={index} alt="" />
			))}
		</div>
	);
};

export default Slider;
