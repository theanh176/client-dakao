"use client";
import InfoStaff from "@/components/sections/InfoStaff";
import Section1 from "@/components/sections/Section1";
import Section2 from "@/components/sections/Section2";
import Section4 from "@/components/sections/Section4";
import SectionFooter1 from "@/components/sections/SectionFooter1";
import { Section5_2 } from "@/utils/images";
import { handleGetData } from "@/utils/utilsApi";
import { FloatButton } from "antd";
import React, { useEffect, useState } from "react";

const data = {
	id: 1,
	name: "Nguyễn Đổ Tú Linh",
	href: "nguyen-do-tu-linh",
	avatar: Section5_2,
	title: "Lẽ Tân",
	description:
		"<p>Xin chào quý khách! Tôi là Nguyễn Đỗ Tú Linh, lễ tân của Nha Khoa ĐaKao. Tôi rất vui được chào đón quý khách đến với phòng khám của chúng tôi.</p>",
};
export default function StaffsPage() {
	const [dataServices, setDataServices] = useState([]);

	const handleGetDataAll = async () => {
		try {
			const [responseServices] = await Promise.all([
				handleGetData({
					api: "dmvt",
					params: { limit: 6 },
					q: { status: true, "exfields.loai_vat_tu": "Services" },
				}),
			]);
			setDataServices(responseServices);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleGetDataAll();
	}, []);
	return (
		<React.Fragment>
			<InfoStaff data={data} />
			<Section4 />
			<Section2 data={dataServices} />
			<Section1 />
			<SectionFooter1 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
