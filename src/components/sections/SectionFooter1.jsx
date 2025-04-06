import React from "react";
import "./sections.scss";
import Image from "next/image";
import { Section7_1, Section7_2, Section7_3, Section7_4 } from "@/utils/images";

export default function SectionFooter1() {
	const dataSection_10 = [
		{
			id: 1,
			image: Section7_1,
			title: "Số điện thoại",
			content: (
				<span className="text-center text-[#9c9c9c]">
					<a href={`tel:0766110086`} className="hover:text-[#4ba3da]">
						0766 110 086
					</a>{" "}
					{/* -{" "}
					<a
						href={`tel:0908327787`}
						className="text-center !text-base hover:text-[#4ba3da]"
					>
						0908 327 787
					</a>
					-{" "}
					<a
						href={`tel:0789327787`}
						className="text-center !text-base hover:text-[#4ba3da]"
					>
						0789 327 787
					</a>{" "} */}
				</span>
			),
		},
		{
			id: 2,
			image: Section7_2,
			title: "Địa chỉ",
			content: (
				<a
					className="flex gap-3 justify-start items-center hover:text-[#4ba3da]"
					itemProp="location"
					href={`https://maps.app.goo.gl/VLPGJQG89b46bxQQ9`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="text-center text-base text-[#9c9c9c] hover:text-[#4ba3da]">
						123B Nơ Trang Long, Phường 11, Quận Bình Thạnh, TP.HCM
					</span>
				</a>
			),
		},
		{
			id: 3,
			image: Section7_3,
			title: "Đặt lịch",
			content: (
				<span className="text-center text-base text-[#9c9c9c] hover:text-[#4ba3da]">
					Kiểm tra lịch hẹn tại website.
				</span>
			),
		},
		{
			id: 4,
			image: Section7_4,
			title: "Email chúng tôi",
			content: (
				<a
					href={`mailto:nhakhoa.dakao@gmail.com`}
					className="text-center text-base text-[#9c9c9c] hover:text-[#4ba3da]"
				>
					nhakhoa.dakao@gmail.com
				</a>
			),
		},
	];
	return (
		<section className="pt-16 max-md:pt-8">
			<div className="bg-[#f2f2f2] px-5 py-10 flex flex-wrap max-lg:gap-5 justify-between items-start">
				{dataSection_10.map((item, index) => {
					return (
						<div
							data-aos="zoom-in"
							key={index}
							className="cursor-pointer w-[calc(100%/4-20px)] max-lg:w-[calc(100%/2-20px)] max-sm:w-4/5 mx-auto flex gap-3 flex-col justify-start items-center"
						>
							<Image
								alt="image"
								src={item.image}
								width={135}
								height={130}
								className="w-1/5 object-contain"
							/>
							<div className="flex flex-col justify-start items-center gap-1">
								<span className="text-center text-xl font-semibold text-[#155979]">
									{item.title}
								</span>
								{item.content}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
