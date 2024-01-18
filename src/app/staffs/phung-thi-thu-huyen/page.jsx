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
	id: 2,
	name: "Phùng Thị Thu Huyền",
	href: "phung-thi-thu-huyen",
	avatar: Section5_2,
	title: "Quản trị phòng khám",
	description:
		"<p>Cô đã làm việc với Bác Sĩ từ năm 1999. Đầu tiên là trợ thủ nha khoa và bây giờ là quản trị phòng khám. Cô  rất tận tâm, nhiệt tình giúp đỡ bệnh nhân của mình đạt được mục tiêu về sức khỏe răng miệng. Và cô ấy là một điều phối viên điều trị giàu kinh nghiệm và sẽ luôn sát cánh cùng bạn trên mọi chặng đường. Ưu tiên hàng đầu của cô ấy là đảm bảo rằng bạn có trải nghiệm nha khoa thú vị và thư giãn. Cô ấy là một phụ nữ tuyệt vời, bạn sẽ cảm thấy điều đó khi tiếp xúc với cô ấy.</p>",
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
