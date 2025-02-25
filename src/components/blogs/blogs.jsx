"use client";
import React, { useEffect, useState } from "react";
import SectionBanner from "../sections/SectionBanner";
import SectionFooter1 from "../sections/SectionFooter1";
import { FloatButton } from "antd";
import Section6 from "../sections/Section6";
import Section7 from "../sections/Section7";
import { request } from "@/utils/request";
import { handleGetData } from "@/utils/utilsApi";

export default function Blogs() {
	const [dataNews, setDataNews] = useState([]);
	// const [dataComment3, setDataComment3] = useState([]);

	const handleGetDataAll = async () => {
		try {
			const [
				responseNews,
				// responseComment3,
			] = await Promise.all([
				handleGetData({ api: "news", params: { limit: 3 } }),
				// handleGetData({ api: "comment3" }),
			]);
			setDataNews(responseNews);
			// setDataComment3(responseComment3);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleGetDataAll();
	}, []);
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
			<Section6 title="Tin tức nha khoa" data={dataNews} />
			<Section7 />
			<SectionFooter1 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
