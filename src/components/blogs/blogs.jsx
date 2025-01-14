"use client";
import React, { useEffect, useState } from "react";
import SectionBanner from "../sections/SectionBanner";
import SectionFooter1 from "../sections/SectionFooter1";
import { FloatButton } from "antd";
import Section6 from "../sections/Section6";
import Section7 from "../sections/Section7";
import { request } from "@/utils/request";

export default function Blogs() {
	// const [isDataNews, setIsDataNews] = useState([]);
	// const [dataComment3, setDataComment3] = useState([]);

	// const getDataNews = async () => {
	// 	try {
	// 		const groupsResponse = await request.get(
	// 			`/group?access_token=flex.public.token`,
	// 			{
	// 				params: { q: { group_type: "news" }, limit: 100 },
	// 			}
	// 		);

	// 		const newsPromises = groupsResponse?.data?.map(async (group) => {
	// 			const newsResponse = await request.get(
	// 				`/news?access_token=flex.public.token`,
	// 				{
	// 					params: { q: { category: group?._id }, limit: 100 },
	// 				}
	// 			);
	// 			return { data: newsResponse?.data, title: group?.group_name };
	// 		});

	// 		const newsData = await Promise.all(newsPromises);
	// 		setIsDataNews(newsData);
	// 	} catch (error) {
	// 		alert(error);
	// 	}
	// };

	// const handleGetData = async (api, q) => {
	// 	try {
	// 		const response = await request.get(`${api}`, {
	// 			params: {
	// 				...q,
	// 			},
	// 			headers: {
	// 				"X-Access-Token": "flex.public.token",
	// 				"Content-Type": "application/json",
	// 			},
	// 		});
	// 		return response?.data;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	// const handleGetDataAll = async () => {
	// 	try {
	// 		const [responseComment3] = await Promise.all([
	// 			handleGetData("comment3"),
	// 		]);

	// 		setDataComment3(responseComment3);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	handleGetDataAll();
	// 	getDataNews();
	// }, []);

	return (
		<React.Fragment>
			<SectionBanner title={"Blogs - Nha Khoa ĐaKao"} />
			{/* {isDataNews.map((item, index) => {
				return (
					item?.data.length > 0 && (
						<Section6
							key={index}
							data={item?.data}
							title={item?.title}
						/>
					)
				);
			})} */}
			<Section6 />
			<Section7 />
			<SectionFooter1 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
