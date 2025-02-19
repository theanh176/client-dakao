import React from "react";
import "./sections.scss";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";
import { LuArrowUpRight } from "react-icons/lu";
import {
	Section3_1,
	Section3_2,
	Section3_3,
	Section3_4,
	Section3_5,
	Section3_6,
} from "@/utils/images";
import Link from "next/link";
import { Button } from "antd";
const dataSection_9 = [
	{
		id: 1,
		picture: Section3_1,
		gia_ban_le: 5000000,
		ten_vt: "Cấp cứu Nha khoa",
		exfields: {
			mandates: ["Chức năng 1", "Chức năng 2"],
		},
		description:
			"Xử lý nhanh chóng, hiệu quả các trường hợp chấn thương, các cơn đau cấp tính và viêm nhiễm ở răng miệng.",
	},
	{
		id: 2,
		picture: Section3_2,
		gia_ban_le: 5000000,
		ten_vt: "Cấy ghép nha khoa (Implant)",
		exfields: {
			mandates: ["Chức năng 1", "Chức năng 2"],
		},
		description:
			"Implant nha khoa là một vít titan tương thích sinh học được đặt trong xương để thay thế một hoặc nhiều chân răng đã mất.",
	},
	{
		id: 3,
		picture: Section3_3,
		gia_ban_le: 5000000,
		ten_vt: "Trám răng thẩm mỹ",
		exfields: {
			mandates: ["Chức năng 1", "Chức năng 2"],
		},
		description:
			"Composite là một vật liệu trám răng màu trắng, phù hợp với màu sắc tự nhiên của răng kế cận của bạn.",
	},
	{
		id: 4,
		picture: Section3_4,
		gia_ban_le: 5000000,
		ten_vt: "Niềng răng không mắc cài (Invisalign)",
		exfields: {
			mandates: ["Chức năng 1", "Chức năng 2"],
		},
		description:
			"Invisalign là cách chỉnh răng cho bạn mà không cần mắc cài, có thể tháo rời khi ăn nhai và khi vệ sinh răng miệng.",
	},
	{
		id: 5,
		picture: Section3_5,
		gia_ban_le: 5000000,
		ten_vt: "Tẩy trắng răng",
		exfields: {
			mandates: ["Chức năng 1", "Chức năng 2"],
		},
		description:
			"Là một thủ thuật phổ biến để làm sáng nụ cười của bạn, nhưng nó không trắng vĩnh viễn mà sẽ xuống màu theo thời gian.",
	},
	{
		id: 6,
		picture: Section3_6,
		gia_ban_le: 5000000,
		ten_vt: "Mão sứ",
		exfields: {
			mandates: ["Chức năng 1", "Chức năng 2"],
		},
		description:
			"Mão sứ là một chụp hình dạng giống răng của bạn được sử dụng để giúp thay thế răng không thể phục hồi bằng cách phục hồi composite.",
	},
];
export default function Section8({ data = dataSection_9 }) {
	return (
		<section className="py-16 max-md:py-8">
			{/* <div
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
					Tại{" "}
					<span className="text-[#4ba3da]">Nha Khoa ĐaKao</span>,
					chúng tôi tự hào cung cấp dịch vụ chăm sóc nha khoa uy tín
					và chất lượng cho mỗi bệnh nhân của chúng tôi.
				</span>
			</div> */}
			<div data-aos="fade-right" className="w-4/5 mx-auto max-lg:w-full">
				<div className="w-3/5 max-lg:w-full max-lg:px-5 flex flex-col items-start max-lg:items-center justify-start">
					<div className="text-[#4ba3da] text-4xl font-medium max-lg:text-center">
						Bảng giá
					</div>
					<div className="text-[#155979] text-4xl font-semibold max-lg:text-center">
						Chi phí dịch vụ
					</div>
					<span className="mt-2 w-4/5 max-lg:w-full text-base text-[#181818] max-lg:text-center">
						Nếu bạn đang cần một nha khoa uy tín, chất lượng thì Nha
						khoa ĐaKao là một lựa chọn tin cậy cho bạn.
						<br />
						<br />
						Xin cám ơn quý khách đã lựa chọn{" "}
						<span className="font-semibold">Nha Khoa ĐaKao</span>
					</span>
				</div>
			</div>
			<div className="w-5/6 mx-auto flex flex-wrap justify-start items-start gap-8 pt-10">
				{data.map((item, index) => {
					return (
						<Link
							href={`/services/${
								item?.exfields?.slug || "dich-vu"
							}`}
							data-aos="zoom-in"
							key={index}
							className="flex flex-col justify-start items-center gap-2 w-[calc(100%/3-24px)] max-lg:w-[calc(100%/2-24px)] max-md:w-4/5 max-md:mx-auto max-sm:w-full"
						>
							<div className="w-1/3 h-24 flex justify-center">
								{item?.picture && (
									<Image
										alt="image"
										src={item?.picture}
										width={300}
										height={300}
										className="rounded-lg w-2/3 object-contain pb-4"
									/>
								)}
							</div>
							<span className="text-center text-sm font-semibold text-[red]">
								{item?.gia_ban_le !== 0 ? (
									new Intl.NumberFormat("vi-VN").format(
										item.gia_ban_le
									) + " VND"
								) : (
									<span
										onClick={(e) => {
											e.preventDefault();
											window.location.href = `tel:0836031153`;
										}}
										className="hover:text-[#60d670]"
									>
										Liên hệ - 083 603 1153
									</span>
								)}
							</span>
							<div className="w-[90%] mx-auto flex flex-col justify-start items-center gap-3">
								<span className="text-center cursor-pointer hover:text-[#4ba3da] text-xl uppercase font-semibold text-[#155979]">
									{item?.exfields?.name_price}
								</span>
								<div className="w-11/12 mx-auto flex gap-2 flex-col justify-start items-start">
									{item?.exfields?.mandates?.map(
										(item, index) => {
											return (
												<span
													key={index}
													className="text-base text-[#8a8a8a] flex gap-2 items-center justify-start"
												>
													<div className="w-4 h-4">
														<AiOutlineCheck color="#4ba3da" />
													</div>
													{item}
												</span>
											);
										}
									)}
									<span className="cursor-pointer text-base text-[#4ba3da] hover:text-[#155979] flex gap-2 items-center justify-start">
										<AiOutlineCheck color="#4ba3da" />
										<div className="flex justify-start items-center">
											... xem thêm{" "}
											<div className="w-8 h-8 flex justify-center items-center">
												<LuArrowUpRight className="w-4 h-4" />
											</div>
										</div>
									</span>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
}
