"use client";
import InfoStaff from "@/components/sections/InfoStaff";
import Section1 from "@/components/sections/Section1";
import Section2 from "@/components/sections/Section2";
import Section4 from "@/components/sections/Section4";
import SectionFooter1 from "@/components/sections/SectionFooter1";
import { Section5_1 } from "@/utils/images";
import { handleGetData } from "@/utils/utilsApi";
import { FloatButton } from "antd";
import React, { useEffect, useState } from "react";

const data = {
	id: 1,
	name: "Thạc sỹ Bác Sỹ Tô Thành Ninh",
	href: "to-thanh-ninh",
	avatar: Section5_1,
	title: "Bác sĩ điều trị",
	description:
		"<p>Tốt nghiệp chính quy tại trường Đại học Y Dược thành phố Hồ Chí Minh năm 1999, Bác sĩ đã có gần 25 năm thực hành điều trị nha khoa. Trong sự nghiệp của mình, bác sĩ đã mang lại vẻ đẹp nụ cười cho hàng ngàn người trong và ngoài nước. Với đôi tay khéo léo, óc thẩm mỹ và kỹ năng thực hành được trau dồi không ngừng nghỉ, bác sĩ rất yêu thích khía cạnh nghệ thuật của nha khoa và biết thế mạnh của mình là NHA KHOA THẨM MỸ nên đã tìm tòi, nghiên cứu, học hỏi đi sâu về lĩnh vực này. <br/> <br/>Để nắm bắt những tiến bộ nha khoa trên thế giới, bác sĩ đã tham gia các khóa học ngắn và dại hạn trong nước và cũng như nước ngoài nhằm cập nhật những kiến thức, kỹ thuật mới về áp dung cho khách hàng của nha khoa. <br/> <br/> Những nỗ lực không ngừng nghỉ của mình, bác sĩ Thạc sỹ Bác Sỹ Tô Thành Ninh đã tốt nghiệp Bác sĩ Chuyên khoa 1 với bằng loại Giỏi. Và hơn thế nữa, bác sĩ rất hạnh phúc vì vời kiến thức và kỹ năng của mình bác sĩ đã mang lại những nụ cười tuyệt vời cho khách hàng. Những ánh mắt hạnh phúc của bệnh nhân chính là phần thưởng quý giá cho những nổ lực và nhiệt tâm của bác sĩ.</p>",
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
