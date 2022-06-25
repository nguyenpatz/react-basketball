import React, { useState, useEffect } from "react";
import slides from "../slider";
import { useGlobalContext } from "../context";
const Slider = () => {
	const { images } = useGlobalContext();
	const [image, setImage] = useState();
	const [count, setCount] = useState(0);

	const image_array = [];
	for (let i = 3; i < 6; i++) {
		image_array.push(images[i]);
	}

	useEffect(() => {
		// setCount((prev) => prev ++);
		// 

		const interval = setInterval(() => {
			setImage(image_array[count]);
			setCount((prev) => prev +1);
		}, 1000);

		if (count > image_array.length - 1) {
			setCount(0);
		}

		return () => clearInterval(interval);
	}, [count]);

	return (
		<div className="slider-container">
			<div className="slider-item">
				<img src={image} alt="" className="image" />
			</div>
		</div>
	);
};

export default Slider;
