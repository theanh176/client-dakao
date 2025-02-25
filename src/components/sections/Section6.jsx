import { Section8_1, Section8_2, Section8_3 } from "@/utils/images";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
const dataSection_7 = [
	{
		id: 1,
		name_user_created: "Trần Thị Lan",
		picture: Section8_1,
		title: "Niềng răng thẩm mỹ - Hành trình kiến tạo nụ cười tự tin",
		exfields: {
			mo_ta_ngan2:
				"Chuyên sâu về niềng răng trong suốt và mắc cài sứ, giúp bạn có nụ cười tự tin mà vẫn đảm bảo tính thẩm mỹ cao. Hành trình niềng răng không chỉ giúp cải thiện thẩm mỹ, mà còn mang lại nhiều lợi ích cho sức khỏe răng miệng.",
		},
		date_created: "10/06/2023",
	},
	{
		id: 2,
		name_user_created: "Lê Văn Minh",
		picture: Section8_2,
		title: "Cấy ghép Implant - Giải pháp phục hình răng tối ưu",
		exfields: {
			mo_ta_ngan2:
				"Phục hồi răng đã mất với công nghệ Implant hiện đại, đảm bảo chức năng ăn nhai và thẩm mỹ như răng thật. Cấy ghép implant là giải pháp phục hình răng tối ưu, mang lại nhiều ưu điểm vượt trội.",
		},
		date_created: "02/06/2024",
	},
	{
		id: 3,
		name_user_created: "Phạm Thu Hà",
		picture: Section8_3,
		title: "Tẩy trắng răng chuyên sâu - Bí quyết sở hữu nụ cười trắng sáng",
		exfields: {
			mo_ta_ngan2:
				"Mang lại hàm răng trắng sáng tự nhiên với phương pháp tẩy trắng răng an toàn, hiệu quả, không gây ê buốt. Tẩy trắng răng là phương pháp đơn giản và hiệu quả để cải thiện màu sắc răng, giúp bạn tự tin hơn trong giao tiếp.",
		},
		date_created: "06/09/2024",
	},
];
export default function Section6({
	data = dataSection_7,
	title = "Bài viết đánh giá",
	url = "blogs",
}) {
	return (
		<section className="py-16 max-md:py-8">
			<div
				data-aos="fade-right"
				className="flex gap-4 flex-col items-center justify-start pb-10"
			>
				<div className="text-[#155979] text-4xl font-semibold">
					{title}
				</div>
			</div>
			<div className="w-4/5 max-lg:w-[90%] max-md:w-full mx-auto flex flex-wrap justify-start max-sm:justify-center items-start">
				{data.map((item, index) => {
					return (
						<Link
							href={`/${url}/${item?.slug}`}
							data-aos="zoom-in-up"
							key={index}
							className="transaction-all px-4 flex flex-col justify-start items-center w-[calc(100%/3)] max-sm:mb-10 max-sm:w-full mb-3"
						>
							<div className="mb-6 w-full mx-auto overflow-hidden rounded-md">
								<Image
									alt="image"
									src={item?.picture || Section8_1}
									width={2000}
									height={1700}
									className="transition duration-500 ease-in-out cursor-pointer w-full scale-110 hover:translate-x-2 h-[215px] max-xl:h-[185px] max-lg:h-[145px] max-md:h-[125px] max-sm:h-auto object-cover"
								/>
							</div>
							<div className="w-full flex flex-col justify-start items-start gap-2">
								<div className="flex flex-col gap-1">
									<div className="text-[#c4996d] cursor-pointer hover:text-[#183147] text-sm font-semibold uppercase tracking-[.13em] text-left">
										{moment(item?.date_created).format(
											"DD/MM/YYYY"
										)}
										,
									</div>
									<div className="text-[#c4996d] cursor-pointer hover:text-[#183147] text-xs font-semibold uppercase tracking-[.13em] text-left">
										{item.name_user_created}
										{/* BS.CK1 Phạm Trịnh Tuấn Khanh */}
									</div>
								</div>
								<div className="hover:text-[#c4996d] text-[#183147] cursor-pointer text-xl font-semibold text-left">
									{item?.title}
								</div>
								<div className="text-[#8a8a8a] text-sm text-justify">
									{item?.exfields?.mo_ta_ngan2}
								</div>
								<div className="cursor-pointer uppercase text-xs text-[#183147] hover:text-[#c4996d] font-semibold flex gap-2 justify-start items-center">
									Xem thêm{" "}
									<div className="w-8 h-8 flex justify-center items-center">
										<BsArrowRightCircle className="w-7 h-7" />
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
}
