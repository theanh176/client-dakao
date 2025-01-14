import React from "react";
import "./sections.scss";
import Image from "next/image";
import {
	AiFillFacebook,
	AiOutlineShareAlt,
	AiOutlineTwitter,
} from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { Section5_1, Section5_2, Section5_3 } from "@/utils/images";

export default function Section5() {
	const dataSection_6 = [
		{
			id: 1,
			name: "Nguyễn Văn  D",
			avatar: Section5_1,
			title: "Răng - Hàm - Mặt",
			description:
				"Chuyên sâu về Nha khoa Thẩm mỹ. Đây là yếu tố giúp chúng tôi điều trị hiệu quả đồng thời mang lại vẻ đẹp tự nhiên cho hàm răng và nụ cười của bạn.",
		},
		{
			id: 2,
			name: "Nguyễn Văn A",
			avatar: Section5_2,
			title: "Răng - Hàm - Mặt",
			description:
				"Chuyên sâu về Nha khoa Thẩm mỹ. Đây là yếu tố giúp chúng tôi điều trị hiệu quả đồng thời mang lại vẻ đẹp tự nhiên cho hàm răng và nụ cười của bạn.",
		},
		{
			id: 3,
			name: "Nguyễn Văn  B",
			avatar: Section5_3,
			title: "Răng - Hàm - Mặt",
			description:
				"Chuyên sâu về Nha khoa Thẩm mỹ. Đây là yếu tố giúp chúng tôi điều trị hiệu quả đồng thời mang lại vẻ đẹp tự nhiên cho hàm răng và nụ cười của bạn.",
		},
		{
			id: 4,
			name: "Nguyễn Văn C",
			avatar: Section5_1,
			title: "Răng - Hàm - Mặt",
			description:
				"Chuyên sâu về Nha khoa Thẩm mỹ. Đây là yếu tố giúp chúng tôi điều trị hiệu quả đồng thời mang lại vẻ đẹp tự nhiên cho hàm răng và nụ cười của bạn.",
		},
	];

	return (
		<section className="section_6 py-16 max-md:py-8">
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
			<div className="w-4/5 mx-auto flex flex-wrap justify-between max-sm:justify-center items-center pt-10">
				{dataSection_6.map((item, index) => {
					return (
						<div
							data-aos="flip-right"
							key={index}
							className="px-5 flex gap-2 flex-col justify-start items-center w-[25%] max-lg:w-[50%] max-lg:mb-10 max-sm:w-full"
						>
							<div className="w-4/5 max-xl:w-full mx-auto relative">
								<Image
									alt="image"
									src={item.avatar}
									width={500}
									height={500}
									className="mb-4 w-full h-[255px] max-lg:h-[400px] object-cover border"
								/>
								<div className="absolute cursor-pointer top-5 -left-5">
									<div className="transition-all w-10 h-10 hover:w-40 overflow-hidden rounded-md bg-[#155979] flex justify-start items-center">
										<div className="w-10 min-w-[40px] hover:bg-[#4ba3da] h-10 flex justify-center items-center">
											<AiOutlineShareAlt className="w-5 h-5 text-white" />
										</div>
										<div className="w-10 h-10 hover:bg-[#4ba3da] flex justify-center items-center">
											<AiOutlineTwitter className="w-5 h-5 text-white" />
										</div>
										<div className="w-10 h-10 hover:bg-[#4ba3da] flex justify-center items-center">
											<AiFillFacebook className="w-5 h-5 text-white" />
										</div>
										<div className="w-10 h-10 hover:bg-[#4ba3da] flex justify-center items-center">
											<SiZalo className="w-5 h-5 text-white" />
										</div>
									</div>
								</div>
							</div>
							<div className="w-full px-1 text-[#155979] text-2xl font-semibold text-center">
								{item.name}
							</div>
							<div className="w-5/6 text-[#4ba3da] text-xs font-semibold tracking-[.13em] uppercase text-center">
								{item.title}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
