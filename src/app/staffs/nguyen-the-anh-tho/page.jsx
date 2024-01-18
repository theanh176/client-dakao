"use client";
import InfoStaff from "@/components/sections/InfoStaff";
import Section1 from "@/components/sections/Section1";
import Section2 from "@/components/sections/Section2";
import Section4 from "@/components/sections/Section4";
import SectionFooter1 from "@/components/sections/SectionFooter1";
import { Section5_3 } from "@/utils/images";
import { handleGetData } from "@/utils/utilsApi";
import { FloatButton } from "antd";
import React, { useEffect, useState } from "react";

const data = {
	id: 3,
	name: "Nguyễn Thế Anh Thơ",
	href: "nguyen-the-anh-tho",
	avatar: Section5_3,
	title: "Tiếp tân",
	description:
		"<p>Trẻ trung, năng động là ưu điểm của cô. Với bằng cấp chuyên môn về quản lý văn phòng, cô ấy giúp cho phòng khám vận hành một cách trơn tru và khoa học. Ngoài ra, cô ấy còn phụ trách truyền thông và chăm sóc khách hàng giúp cho phòng khám và khách hàng luôn có sự kết nối hoàn hảo.</p>",
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
