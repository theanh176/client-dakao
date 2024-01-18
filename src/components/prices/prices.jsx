"use client";
import React, { useEffect, useState } from "react";
import SectionBanner from "../sections/SectionBanner";
import Section8 from "../sections/Section8";
import SectionFooter1 from "../sections/SectionFooter1";
import { FloatButton } from "antd";
import Section1 from "../sections/Section1";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import { handleGetData } from "@/utils/utilsApi";

export default function Prices() {
	// const [dataServices, setDataServices] = useState([]);

	// const handleGetDataAll = async () => {
	// 	try {
	// 		const [responseServices] = await Promise.all([
	// 			handleGetData({
	// 				api: "dmvt",
	// 				params: {
	// 					limit: 50,
	// 				},
	// 				q: { status: true, "exfields.loai_vat_tu": "Services" },
	// 			}),
	// 		]);

	// 		setDataServices(responseServices);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	handleGetDataAll();
	// }, []);
	return (
		<React.Fragment>
			<SectionBanner title={"bảng giá chi phí dịch vụ"} />
			<Section8 />
			<Section3 />
			<Section4 />
			<Section1 />
			<SectionFooter1 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
