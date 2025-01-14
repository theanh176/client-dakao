"use client";
import { FloatButton } from "antd";
import React, { useEffect, useState } from "react";
import Section2 from "../sections/Section2";
import Section7_2 from "../sections/Section7_2";
import SectionBanner from "../sections/SectionBanner";
import SectionFooter1 from "../sections/SectionFooter1";
import { handleGetData } from "@/utils/utilsApi";

export default function Services() {
	// const [dataServices, setDataServices] = useState([]);
	// const [dataComment3, setDataComment3] = useState([]);

	// const handleGetDataAll = async () => {
	// 	try {
	// 		const [responseServices, responseComment3] = await Promise.all([
	// 			handleGetData({
	// 				api: "dmvt",
	// 				params: {
	// 					limit: 50,
	// 				},
	// 				q: { status: true, "exfields.loai_vat_tu": "Services" },
	// 			}),
	// 			handleGetData({ api: "comment3" }),
	// 		]);

	// 		setDataServices(responseServices);
	// 		setDataComment3(responseComment3);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	handleGetDataAll();
	// }, []);

	return (
		<React.Fragment>
			<SectionBanner title={"Dịch Vụ Nha Khoa ĐaKao"} />
			<Section2 />
			<Section7_2 />
			<SectionFooter1 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
