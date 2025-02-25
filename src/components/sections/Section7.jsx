import React, { useEffect, useState } from "react";
import "./sections.scss";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import {
	Section5_1,
	Section5_2,
	Section5_3,
	Section9_1,
	Section9_2,
	Section9_3,
} from "@/utils/images";
import Slider from "react-slick";

const dataSection_8 = [
	{
		id: 1,
		title: "Trần Thị Lan",
		picture: Section9_1,
		description: "Khách hàng niềng răng",
		content:
			"Tôi rất hài lòng với kết quả niềng răng tại đây. Bác sĩ tận tâm, chu đáo, giúp tôi có nụ cười tự tin hơn.",
	},
	// {
	// 	id: 2,
	// 	title: "Lê Văn Minh",
	// 	picture: Section5_2,
	// 	description: "Khách hàng cấy ghép implant",
	// 	content:
	// 		"Quá trình cấy ghép implant diễn ra nhẹ nhàng, không đau đớn. Đội ngũ bác sĩ chuyên nghiệp, tay nghề cao.",
	// },
	{
		id: 3,
		title: "Phạm Thu Hà",
		picture: Section9_3,
		description: "Khách hàng tẩy trắng răng",
		content:
			"Răng tôi trắng sáng hơn hẳn sau khi tẩy trắng tại phòng khám. Dịch vụ tuyệt vời, nhân viên thân thiện.",
	},
	{
		id: 4,
		title: "Hoàng Đức Anh",
		picture: Section9_2,
		description: "Khách hàng bọc răng sứ",
		content:
			"Tôi rất ưng ý với hàm răng sứ mới. Màu sắc tự nhiên, đẹp như răng thật. Cảm ơn bác sĩ đã tư vấn nhiệt tình.",
	},
	// {
	// 	id: 5,
	// 	title: "Đỗ Thị Hương",
	// 	picture: Section5_2,
	// 	description: "Khách hàng trám răng thẩm mỹ",
	// 	content:
	// 		"Bác sĩ trám răng rất khéo, vết trám gần như không thể nhận ra. Tôi hoàn toàn hài lòng với dịch vụ.",
	// },
	// {
	// 	id: 6,
	// 	title: "Vũ Quang Huy",
	// 	picture: Section5_3,
	// 	description: "Khách hàng lấy cao răng định kỳ",
	// 	content:
	// 		"Phòng khám sạch sẽ, hiện đại. Nhân viên lấy cao răng nhẹ nhàng, chu đáo. Tôi sẽ quay lại thường xuyên.",
	// },
];

export default function Section7({ data = dataSection_8 }) {
	const isTabletOrMobile = useMediaQuery({ minWidth: 1024 });
	const isMobile = useMediaQuery({ minWidth: 640 });
	const settings_5 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	const [isSetting_5, setIsSetting_5] = useState(settings_5);
	useEffect(() => {
		const updatedSettings = { ...settings_5 };

		if (!isTabletOrMobile) {
			updatedSettings.slidesToShow = 2;
			updatedSettings.slidesToScroll = 2;
		}
		if (!isMobile) {
			updatedSettings.slidesToShow = 1;
			updatedSettings.slidesToScroll = 1;
		}

		setIsSetting_5(updatedSettings);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isTabletOrMobile, isMobile] || []);

	return (
		<section className="section_cus_1 py-16 max-md:py-8 max-md:mb-8 bg-slate-50 mt-10">
			<div
				data-aos="fade-up"
				className="border-b pb-10 mx-auto w-4/5 max-lg:[90%] flex gap-4 flex-col items-start justify-start"
			>
				<div className="text-[#155979] text-5xl font-semibold text-start">
					<span className="text-[#4ba3da] text-2xl">
						Nhận xét của
					</span>{" "}
					<br />
					khách hàng
				</div>
			</div>
			<div className="w-4/5 mx-auto pt-10 h-full">
				<Slider {...isSetting_5}>
					{data.map((item, index) => (
						<div
							data-aos="zoom-in"
							key={index}
							className="!flex gap-4 flex-col justify-start items-center h-full"
						>
							<div className="w-[90%] flex justify-start gap-3 items-start">
								<div className="w-24 h-24 rounded-full border border-[#4ba3da] flex justify-center items-center">
									<Image
										alt="image"
										src={item.picture}
										width={300}
										height={300}
										className="bg-slate-200 rounded-full object-contain w-[95%] h-[95%]"
									/>
								</div>
								<div className="w-[calc(100%-96px)] flex flex-col justify-start items-start gap-3">
									<div className="w-5/6 text-[#4ba3da] text-xl font-semibold text-left">
										{item.title}
									</div>
									<div className="w-5/6 text-[#155979] text-sm font-semibold text-left">
										{item.description}
									</div>
								</div>
							</div>
							<span className="w-[90%] text-base text-[#8a8a8a] text-justify">
								{item.content}
							</span>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}
