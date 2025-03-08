"use client";
import { request } from "@/utils/request";
import { FloatButton } from "antd";
import React, { useEffect, useState } from "react";
import Section6 from "../sections/Section6";
import Section7 from "../sections/Section7";
import SectionBanner from "../sections/SectionBanner";
import SectionFooter1 from "../sections/SectionFooter1";

export default function UuDai() {
	const [isDataNews, setIsDataNews] = useState([]);
	const [dataComment3, setDataComment3] = useState([]);

	const getDataNews = async () => {
		try {
			const response = await request.get(
				`/news?access_token=flex.public.token`,
				{
					// params: { q: { category: group?._id }, limit: 100 },
					params: { q: { category_name: "Ưu đãi" }, limit: 100 },
				}
			);
			setIsDataNews(response?.data);
		} catch (error) {
			alert(error);
		}
	};

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
		getDataNews();
	}, []);
	return (
		<React.Fragment>
			<SectionBanner title={"Ưu Đãi - Nha Khoa ĐaKao"} />
			<Section6
				data={isDataNews}
				title={"Bài viết ưu đã"}
				url="uu-dai"
			/>
			<Section7 data={dataComment3} />
			<SectionFooter1 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
