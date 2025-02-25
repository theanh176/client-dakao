"use client";
import React, { useEffect, useState } from "react";
import SectionBanner from "../sections/SectionBanner";
import SectionFooter1 from "../sections/SectionFooter1";
import { FloatButton } from "antd";
import Section9 from "../sections/Section9";
import Section10 from "../sections/Section10";
import Section3 from "../sections/Section3";
import Section7 from "../sections/Section7";
import { request } from "@/utils/request";

export default function Introduce() {
	const [dataComment3, setDataComment3] = useState([]);

	const handleGetData = async (api, q) => {
		try {
			const response = await request.get(`${api}`, {
				params: {
					...q,
				},
				headers: {
					"X-Access-Token": "flex.public.token",
					"Content-Type": "application/json",
				},
			});
			return response?.data;
		} catch (error) {
			console.log(error);
		}
	};
	const handleGetDataAll = async () => {
		try {
			const [responseComment3] = await Promise.all([
				handleGetData("comment3"),
			]);

			setDataComment3(responseComment3);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleGetDataAll();
	}, []);
	return (
		<React.Fragment>
			<SectionBanner title={"Giới thiệu - Nha Khoa ĐaKao"} />
			<Section9 />
			<Section3 />
			<Section10 />
			{/* <Section7 data={dataComment3} /> */}
			<Section7 />
			<SectionFooter1 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
