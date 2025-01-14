import React, { useEffect, useState } from "react";
import "./sections.scss";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Section5_1, Section5_2, Section5_3 } from "@/utils/images";
import Slider from "react-slick";

const dataSection_8 = [
	{
		id: 1,
		title: "Nguyễn Văn D",
		picture: Section5_1,
		description: "Khách hàng sử dụng dich vụ",
		content:
			"Chính sự tận tâm, phong thái chuyên nghiệp của bác sĩ đã làm tôi cảm thấy hoàn toàn tin tưởng, biết rõ ràng mọi vấn đề và cảm thấy tin tưởng thực sự thì sẽ không còn sợ nữa.",
	},
	{
		id: 2,
		title: "Nguyễn Văn A",
		picture: Section5_2,
		description: "Khách hàng sử dụng dich vụ chăm sóc răng toàn diện",
		content:
			"Chính sự tận tâm, phong thái chuyên nghiệp của bác sĩ đã làm tôi cảm thấy hoàn toàn tin tưởng, biết rõ ràng mọi vấn đề và cảm thấy tin tưởng thực sự thì sẽ không còn sợ nữa.",
	},
	{
		id: 3,
		title: "Nguyễn Văn  B",
		picture: Section5_3,
		description: "Khách hàng mới",
		content:
			"Chính sự tận tâm, phong thái chuyên nghiệp của bác sĩ đã làm tôi cảm thấy hoàn toàn tin tưởng, biết rõ ràng mọi vấn đề và cảm thấy tin tưởng thực sự thì sẽ không còn sợ nữa.",
	},
	{
		id: 4,
		title: "Nguyễn Văn C",
		picture: Section5_1,
		description: "Khách hàng VIP",
		content:
			"Chính sự tận tâm, phong thái chuyên nghiệp của bác sĩ đã làm tôi cảm thấy hoàn toàn tin tưởng, biết rõ ràng mọi vấn đề và cảm thấy tin tưởng thực sự thì sẽ không còn sợ nữa.",
	},
	{
		id: 5,
		title: "Nguyễn Văn D",
		picture: Section5_2,
		description: "Khách hàng sử dụng dich vụ chăm sóc răng toàn diện",
		content:
			"Chính sự tận tâm, phong thái chuyên nghiệp của bác sĩ đã làm tôi cảm thấy hoàn toàn tin tưởng, biết rõ ràng mọi vấn đề và cảm thấy tin tưởng thực sự thì sẽ không còn sợ nữa.",
	},
	{
		id: 6,
		title: "Nguyễn Văn E",
		picture: Section5_3,
		description: "Khách hàng mới",
		content:
			"Chính sự tận tâm, phong thái chuyên nghiệp của bác sĩ đã làm tôi cảm thấy hoàn toàn tin tưởng, biết rõ ràng mọi vấn đề và cảm thấy tin tưởng thực sự thì sẽ không còn sợ nữa.",
	},
];

export default function Section7_2({ data = dataSection_8 }) {
	const isTabletOrMobile = useMediaQuery({ minWidth: 1280 });
	const isMobile = useMediaQuery({ minWidth: 640 });
	const settings_5 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
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
		<section className="section_cus_1 py-16 max-md:py-8 max-md:mb-8 flex flex-wrap px-14 max-sm:px-1">
			<div
				data-aos="fade-up"
				className="flex gap-4 flex-col items-start justify-center w-1/5 max-xl:w-1/4 max-lg:w-4/5 max-md:w-[90%] mx-auto"
			>
				<div className="text-[#155979] text-4xl font-semibold text-start">
					<span className="text-[#4ba3da] text-xl">Nhận xét</span>
					<br /> của khách hàng
				</div>
				<span className="max-lg:w-full text-justify text-base text-[#8a8a8a]">
					Tại <span className="text-[#4ba3da]">Nha Khoa ĐaKao</span>,
					đến với chúng tôi để khám răng tổng quát và làm sạch răng
					định kỳ, hoặc đến vì những nhu cầu chuyên sâu như làm răng
					sứ hay implant
				</span>
			</div>
			<div className="w-4/5 max-xl:w-3/4 max-lg:w-full">
				<div className="w-[calc(100%-60px)] mx-auto pt-10 h-full">
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
										<div className="w-full text-[#4ba3da] text-xl font-semibold text-left">
											{item.title}
										</div>
										<div className="w-full text-[#155979] text-sm font-semibold text-left">
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
			</div>
		</section>
	);
}
