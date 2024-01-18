import React from "react";
import "./sections.scss";
import Image from "next/image";
import {
	Section3_1,
	Section3_2,
	Section3_3,
	Section3_4,
	Section3_5,
	Section3_6,
} from "@/utils/images";
import Link from "next/link";
const dataSection_2 = [
	{
		id: 1,
		picture: Section3_1,
		ten_vt: "Cấp cứu Nha khoa",
		exfields: {
			mo_ta_ngan2:
				"Mão sứ là một chụp hình dạng giống răng của bạn được sử dụng để giúp thay thế răng không thể phục hồi bằng cách phục hồi composite.",
		},
	},
	{
		id: 2,
		picture: Section3_2,
		ten_vt: "Cấy ghép nha khoa (Implant)",
		exfields: {
			mo_ta_ngan2:
				"Mão sứ là một chụp hình dạng giống răng của bạn được sử dụng để giúp thay thế răng không thể phục hồi bằng cách phục hồi composite.",
		},
	},
	{
		id: 3,
		picture: Section3_3,
		ten_vt: "Trám răng thẩm mỹ",
		exfields: {
			mo_ta_ngan2:
				"Mão sứ là một chụp hình dạng giống răng của bạn được sử dụng để giúp thay thế răng không thể phục hồi bằng cách phục hồi composite.",
		},
	},
	{
		id: 4,
		picture: Section3_4,
		ten_vt: "Niềng răng không mắc cài (Invisalign)",
		exfields: {
			mo_ta_ngan2:
				"Mão sứ là một chụp hình dạng giống răng của bạn được sử dụng để giúp thay thế răng không thể phục hồi bằng cách phục hồi composite.",
		},
	},
	{
		id: 5,
		picture: Section3_5,
		ten_vt: "Tẩy trắng răng",
		exfields: {
			mo_ta_ngan2:
				"Mão sứ là một chụp hình dạng giống răng của bạn được sử dụng để giúp thay thế răng không thể phục hồi bằng cách phục hồi composite.",
		},
	},
	{
		id: 6,
		picture: Section3_6,
		ten_vt: "Mão sứ",
		exfields: {
			mo_ta_ngan2:
				"Mão sứ là một chụp hình dạng giống răng của bạn được sử dụng để giúp thay thế răng không thể phục hồi bằng cách phục hồi composite.",
		},
	},
];
export default function Section2({ data = dataSection_2 }) {
	return (
		<section className="bg_section2 py-16 max-md:py-8">
			<div className="w-5/6 mx-auto flex flex-wrap justify-start items-start gap-8 pt-[160px] relative">
				<div className="border-b pb-10 absolute top-0 w-full mx-auto max-lg:w-full max-lg:px-5 flex flex-col items-start max-lg:items-center justify-start">
					<div
						data-aos="fade-right"
						className="text-[#4ba3da] text-4xl max-lg:text-2xl font-medium max-lg:text-center"
					>
						Dịch vụ
					</div>
					<div
						data-aos="fade-right"
						className="text-[#155979] text-5xl max-lg:text-3xl font-semibold max-lg:text-center"
					>
						Nha Khoa DaKao
					</div>
				</div>
				{data.map((item, index) => {
					return (
						<Link
							href={`/services/${item?.exfields?.slug || "dich-vu"}`}
							data-aos="zoom-in"
							key={index}
							className="flex justify-start items-start gap-2 w-[calc(100%/3-24px)] max-lg:w-[calc(100%/2-24px)] max-md:w-4/5 max-md:mx-auto	 max-sm:w-full"
						>
							<div className="w-1/3 flex justify-center">
								{item?.picture && (
									<Image
										loading="lazy"
										alt="image"
										src={item?.picture}
										width={300}
										height={300}
										className="w-2/3 object-contain pb-4"
									/>
								)}
							</div>
							<div className="w-2/3 flex flex-col justify-start items-start gap-3">
								<span className="cursor-pointer hover:text-[#4ba3da] text-xl font-semibold text-[#155979]">
									{item.ten_vt}
								</span>
								<span className="text-base text-[#8a8a8a] text-justify">
									{item?.exfields?.mo_ta_ngan2}
								</span>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
}
