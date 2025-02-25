import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import "./sections.scss";
import Image from "next/image";
import {
	Section10_1,
	Section10_2,
	Section10_3,
	Section10_4,
} from "@/utils/images";

export default function Section10() {
	const [percent1, setPercent1] = useState(0);
	const [percent2, setPercent2] = useState(0);
	const [percent3, setPercent3] = useState(0);
	const [percent4, setPercent4] = useState(0);
	const twoColors = {
		"0%": "#155979",
		"100%": "#4ba3da",
	};
	useEffect(() => {
		setPercent1(99);
		setPercent2(97);
		setPercent3(100);
		setPercent4(95);
	}, []);
	return (
		<section className="pt-16 max-md:pt-8">
			<div
				data-aos="fade-up"
				className="flex gap-4 flex-col items-center justify-start"
			>
				<div className="text-[#4ba3da] text-xs font-semibold tracking-[.13em] uppercase">
					Tại sao nên chọn
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
			<div className="px-5 py-10 flex flex-wrap max-lg:gap-5 justify-between items-start">
				<div className="cursor-pointer w-[calc(100%/4-20px)] max-lg:w-[calc(100%/2-20px)] max-sm:w-4/5 mx-auto flex gap-3 flex-col justify-start items-center">
					<div
						className="w-full flex justify-center items-center"
						data-aos="zoom-in-up"
					>
						<Progress
							percent={percent1}
							size={200}
							type="circle"
							strokeColor={twoColors}
							className="custom-progress"
							format={() => (
								<div className="w-full flex justify-center item-center">
									<Image
										alt="image"
										src={Section10_1}
										width={126}
										height={126}
										className="w-2/5 object-contain"
									/>
								</div>
							)}
						/>
					</div>
					<div
						data-aos="fade-up"
						className="w-full flex flex-col justify-start items-center gap-3"
					>
						<div className="text-[#4ba3da] text-4xl font-semibold text-center">
							{percent1}%
						</div>
						<span className="w-4/5 text-base text-[#8a8a8a] text-center">
							Sự hài lòng của khách hàng
						</span>
					</div>
				</div>
				<div className="cursor-pointer w-[calc(100%/4-20px)] max-lg:w-[calc(100%/2-20px)] max-sm:w-4/5 mx-auto flex gap-3 flex-col justify-start items-center">
					<div
						className="w-full flex justify-center items-center"
						data-aos="zoom-in-up"
					>
						<Progress
							percent={percent2}
							size={200}
							type="circle"
							strokeColor={twoColors}
							className="custom-progress"
							format={() => (
								<div className="w-full flex justify-center item-center">
									<Image
										alt="image"
										src={Section10_2}
										width={126}
										height={126}
										className="w-2/5 object-contain"
									/>
								</div>
							)}
						/>
					</div>
					<div
						data-aos="fade-up"
						className="w-full flex flex-col justify-start items-center gap-3"
					>
						<div className="text-[#4ba3da] text-4xl font-semibold text-center">
							{percent2}%
						</div>
						<span className="w-4/5 text-base text-[#8a8a8a] text-center">
							Can thiệp thành công
						</span>
					</div>
				</div>
				<div className="cursor-pointer w-[calc(100%/4-20px)] max-lg:w-[calc(100%/2-20px)] max-sm:w-4/5 mx-auto flex gap-3 flex-col justify-start items-center">
					<div
						className="w-full flex justify-center items-center"
						data-aos="zoom-in-up"
					>
						<Progress
							percent={percent3}
							size={200}
							type="circle"
							strokeColor={twoColors}
							className="custom-progress"
							format={() => (
								<div className="w-full flex justify-center item-center">
									<Image
										alt="image"
										src={Section10_3}
										width={126}
										height={126}
										className="w-2/5 object-contain"
									/>
								</div>
							)}
						/>
					</div>
					<div
						data-aos="fade-up"
						className="w-full flex flex-col justify-start items-center gap-3"
					>
						<div className="text-[#4ba3da] text-4xl font-semibold text-center">
							{percent3}%
						</div>
						<span className="w-4/5 text-base text-[#8a8a8a] text-center">
							Thái độ nhân viên
						</span>
					</div>
				</div>
				<div className="cursor-pointer w-[calc(100%/4-20px)] max-lg:w-[calc(100%/2-20px)] max-sm:w-4/5 mx-auto flex gap-3 flex-col justify-start items-center">
					<div
						className="w-full flex justify-center items-center"
						data-aos="zoom-in-up"
					>
						<Progress
							percent={percent4}
							size={200}
							type="circle"
							strokeColor={twoColors}
							className="custom-progress"
							format={() => (
								<div className="w-full flex justify-center item-center">
									<Image
										alt="image"
										src={Section10_4}
										width={126}
										height={126}
										className="w-2/5 object-contain"
									/>
								</div>
							)}
						/>
					</div>
					<div
						data-aos="fade-up"
						className="w-full flex flex-col justify-start items-center gap-3"
					>
						<div className="text-[#4ba3da] text-4xl font-semibold text-center">
							{percent4}%
						</div>
						<span className="w-4/5 text-base text-[#8a8a8a] text-center">
							Xử lý nhanh chóng
						</span>
					</div>
				</div>
			</div>
			<hr className="w-4/5 mx-auto" />
			<br />
			<br />
			<div className="w-5/6 max-lg:w-full mx-auto flex flex-wrap gap-8 min-w-[1100px] max-xl:min-w-[960px] max-lg:min-w-[768px] max-md:min-w-[86%] justify-center items-start">
				<div
					data-aos="flip-right"
					className="w-[calc(100%/3-32px)] max-lg:w-4/5 flex gap-5 flex-col justify-between items-center px-6"
				>
					<div className="w-3/5 mx-auto h-[2px] bg-[#4ba3da]"></div>
					<span className="text-3xl w-full font-sans font-light text-center">
						<q>
							Nha Khoa ĐaKao đáp ứng được tất cả các dịch vụ giúp
							mang lại vẻ đẹp cho nụ cười của bạn.
						</q>
					</span>
					<div className="w-3/5 mx-auto h-[2px] bg-[#4ba3da]"></div>
				</div>
				<div
					data-aos="fade-right"
					className="w-[calc(100%/3-32px)] max-lg:w-4/5 flex gap-4 flex-col justify-start items-start"
				>
					<span className="text-justify">
						Được thành lập năm 2001 đến nay,{" "}
						<span className="text-[#4ba3da] font-semibold">
							Nha Khoa ĐaKao
						</span>{" "}
						được{" "}
						<span className="text-[#4ba3da] font-semibold">
							BS.Ninh
						</span>{" "}
						<span className="font-semibold text-[#1a1a1a] italic">
							là bác sĩ nha khoa giỏi chuyên sâu thẩm mỹ và nha
							khoa tổng quát
						</span>{" "}
						trực tiếp khám và điều trị cho bạn.
						<br />
						<br />{" "}
						<span className="text-[#4ba3da] font-semibold">
							Nha Khoa ĐaKao
						</span>{" "}
						là một nha khoa chuyên sâu về chất lượng điều trị và
						luôn đáp ứng được những nhu cầu điều trị chuyên sâu
						khác.
					</span>
				</div>
				<div
					data-aos="fade-up"
					className="text-justify w-[calc(100%/3-32px)] max-lg:w-4/5 flex gap-4 flex-col justify-start items-start"
				>
					Chúng tôi tự hào cung cấp dịch vụ chăm sóc nha khoa chất
					lượng cao nhất và cá nhân hóa cho mỗi bệnh nhân. Chúng tôi
					sẽ dành thời gian để đưa ra từng kế hoạch điều trị phù hợp
					với từng khách hàng và luôn thảo luận về tất cả các lựa chọn
					của bạn để bạn biết rằng bạn đang đưa ra quyết định tốt nhất
					cho bạn.
				</div>
			</div>
		</section>
	);
}
