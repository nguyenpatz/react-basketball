import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import bongda from "../image/course/bongda.jpg";
import bongro from "../image/course/bongro.jpg";
import boiloi from "../image/course/boiloi.jpg";
const HomeCourse = () => {
	const { courses } = useGlobalContext();

	return (
		<div className="home-course-container">
			<div className="home-course-content">
				<div className="home-course-container-title">
					<h2>Các môn thể thao</h2>
				</div>
				<div className="home-course-category">
					{courses.map((course) => {
						const { name } = course;

						// return (
						// 	<div>className="course-card"
						// 			if(name === "bongda") {
						// 				<img src={bongda} alt="" />
						// 			}
						// 			else if(name === "bongro") {
						// 				<img src={bongro} alt="" />
						// 			}
						// 			else {
						// 				<img src={boiloi} alt="" />
						// 			}
						// 	</div>
						// );
						// {name === "bongda" ? <img src={bongda} alt="" /> ? name === "bongro" ? <img src={bongro} alt="" /> : <img src={boiloi} alt="" />}

						// {name === "Bóng đá" ? (
						// 	<img src={bongda} alt="" />
						// ) : (
						// 	<img src={bongro} alt="" />
						// )}

						// <img src={boiloi} alt="" />
						return (
							<div className="home-course-category-card">
								{name === "Bóng đá" ? (
									<img
										className="course-card"
										src={bongda}
										alt=""
									/>
								) : name === "Bóng rổ" ? (
									<img
										className="course-card"
										src={bongro}
										alt=""
									/>
								) : (
									<img
										className="course-card"
										src={boiloi}
										alt=""
									/>
								)}
								<a href="" className="link-course-card">
									{name}
								</a>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HomeCourse;
