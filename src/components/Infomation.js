import React from "react";
import { useGlobalContext } from "../context";
const Infomation = () => {
	const { address } = useGlobalContext();

	return (
		<div className="infor-wrapper">
			<div className="infor-content">
				<div className="infor-title">Địa điểm luyện tập</div>
				<div className="infor-address">
					{address.map((item) => {
						const {name, time} = item;
						return (
							<div className="infor-address-card">
								<h2>Địa điểm</h2>
								<div className="line"></div>
								<p>Địa điểm: <span>Trường tiểu học {name}</span></p>
								<p>Thời gian: <span>{time}</span></p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Infomation;
