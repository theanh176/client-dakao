import React, { useEffect, useState } from "react";
import "./sections.scss";
import Slider from "react-slick";
import Image from "next/image";
import { Section5_1, Section5_2, Section5_3 } from "@/utils/images";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export default function Section4() {
	const dataSection_5 = [
		{
			id: 1,
			name: "Thạc sỹ Bác Sỹ Tô Thành Ninh",
			href: "to-thanh-ninh",
			avatar: Section5_1,
			title: "Bác sĩ điều trị",
			description:
				"Tốt nghiệp chính quy tại trường Đại học Y Dược thành phố Hồ Chí Minh năm 1999, Bác sĩ đã có gần 25 năm thực hành điều trị nha khoa. Trong sự nghiệp của mình..",
		},
		{
			id: 2,
			name: "Phùng Thị Thu Huyền",
			href: "phung-thi-thu-huyen",
			avatar: Section5_2,
			title: "Quản trị phòng khám",
			description:
				"Cô đã làm việc với Bác Sĩ từ năm 1999.  Đầu tiên là trợ thủ nha khoa và bây giờ là quản trị phòng khám. Cô  rất tận tâm, nhiệt tình giúp đỡ bệnh nhân của mình...",
		},
		{
			id: 3,
			name: "Nguyễn Thế Anh Thơ",
			href: "nguyen-the-anh-tho",
			avatar: Section5_3,
			title: "Tiếp tân",
			description:
				"Trẻ trung, năng động là ưu điểm của cô. Với bằng cấp chuyên môn về quản lý văn phòng, cô ấy giúp cho phòng khám vận hành một cách trơn tru và khoa học...",
		},
		// {
		// 	id: 4,
		// 	name: "Nguyễn Văn C",
		// 	avatar: Section5_1,
		// 	title: "Bác sĩ lĩnh vực Răng - Hàm - Mặt",
		// 	description:
		// 		"Chuyên sâu về Nha khoa Thẩm mỹ. Đây là yếu tố giúp chúng tôi điều trị hiệu quả đồng thời mang lại vẻ đẹp tự nhiên cho hàm răng và nụ cười của bạn.",
		// },
		// {
		// 	id: 5,
		// 	name: "Nguyễn Văn D",
		// 	avatar: Section5_2,
		// 	title: "Bác sĩ lĩnh vực Răng - Hàm - Mặt",
		// 	description:
		// 		"Chuyên sâu về Nha khoa Thẩm mỹ. Đây là yếu tố giúp chúng tôi điều trị hiệu quả đồng thời mang lại vẻ đẹp tự nhiên cho hàm răng và nụ cười của bạn.",
		// },
		// {
		// 	id: 6,
		// 	name: "Nguyễn Văn E",
		// 	avatar: Section5_3,
		// 	title: "Bác sĩ lĩnh vực Răng - Hàm - Mặt",
		// 	description:
		// 		"Chuyên sâu về Nha khoa Thẩm mỹ. Đây là yếu tố giúp chúng tôi điều trị hiệu quả đồng thời mang lại vẻ đẹp tự nhiên cho hàm răng và nụ cười của bạn.",
		// },
	];
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
		<section className="section_cus_1 py-16 max-md:pt-8">
			<div
				data-aos="fade-up"
				className="flex gap-4 flex-col items-center justify-start"
			>
				<div className="text-[#4ba3da] text-xs font-semibold tracking-[.13em] uppercase">
					Chào mừng đến với
				</div>
				<div className="text-[#155979] text-4xl font-semibold">
					Nha Khoa ĐaKao
				</div>
				<span className="w-4/5 text-base text-[#8a8a8a] text-center">
					Tại <span className="text-[#4ba3da]">Nha Khoa ĐaKao</span>,
					chúng tôi tự hào cung cấp dịch vụ chăm sóc nha khoa uy tín
					và chất lượng cho mỗi bệnh nhân của chúng tôi.
				</span>
			</div>
			<div className="w-4/5 mx-auto pt-10">
				<Slider {...isSetting_5}>
					{dataSection_5.map((item, index) => (
						<Link
							href={`/staffs/${item.href}`}
							data-aos="zoom-in"
							key={index}
							className="!flex gap-4 flex-col justify-start items-center"
						>
							<div className="mb-4 rounded-full border flex justify-center items-center w-32 h-32">
								<Image
									alt="image"
									src={item.avatar}
									width={300}
									height={300}
									className="bg-slate-200 p-2 rounded-full object-contain w-5/6 h-5/6"
								/>
							</div>
							<div className="w-5/6 text-[#155979] hover:text-[#4ba3da] text-2xl font-semibold text-center">
								{item.title}
							</div>
							<span className="w-4/5 text-base text-[#8a8a8a] text-justify">
								{item.description}
							</span>
							<div className="w-5/6 text-[#4ba3da] hover:text-[#155979] text-xs font-semibold tracking-[.13em] uppercase text-center">
								{item.name}
							</div>
						</Link>
					))}
				</Slider>
			</div>
		</section>
	);
}
