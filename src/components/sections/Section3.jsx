import React, { useState } from "react";
import "./sections.scss";
import { VscDebugStart } from "react-icons/vsc";
import Image from "next/image";
import { Section2_2, Section4_1 } from "@/utils/images";
import PopupModel from "../modal/popupModel";

export default function Section3() {
	const [openVideo, setOpenVideo] = useState(false);

	return (
		<section className="py-16 max-md:py-8 flex flex-wrap">
			<div
				data-aos="fade-up"
				className="w-[47%] max-lg:w-full flex justify-center items-center bg-[#EEF7FF]"
			>
				<div
					data-aos="fade-right"
					data-aos-delay="500"
					className="w-3/5 max-xl:w-full max-xl:px-16 max-lg:p-20 max-md:px-10 max-sm:py-10 max-sm:px-5 mx-auto flex gap-5 flex-col justify-start items-start"
				>
					<div className="text-[#4ba3da] text-xs font-semibold tracking-[.13em] uppercase">
						Chào mừng đến với
					</div>
					<div className="text-[#155979] text-4xl font-semibold">
						Nha Khoa ĐaKao - Bác sĩ Ninh
					</div>
					<span className="text-base text-[#8a8a8a] text-justify">
						Tại{" "}
						<span className="text-[#4ba3da]">Nha Khoa ĐaKao</span>,
						chúng tôi tự hào cung cấp dịch vụ chăm sóc nha khoa uy
						tín và chất lượng cho mỗi bệnh nhân của chúng tôi.
						<span className="text-base text-[#8a8a8a]">
							Bác sĩ của chúng tôi không những giàu kinh nghiệm mà
							còn rất khéo léo và nhẹ nhàng kết hợp nghệ thuật với
							công nghệ, để mang đến cho bạn dịch vụ nha khoa thẩm
							mỹ tốt nhất và bạn sẽ luôn hài lòng.
						</span>
					</span>
				</div>
			</div>
			<div data-aos="fade-up" className="w-[53%] max-lg:w-full relative">
				<div className="max-lg:hidden absolute top-0 left-0 triangle"></div>
				<div className="max-lg:hidden absolute top-full h-[100px] w-full bg-white"></div>
				<div className=" cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex justify-center items-center bg-[#ffffff]">
					<VscDebugStart color="#4ba3da" className="w-8 h-8" />
				</div>
				<div
					onClick={() => {
						setOpenVideo(true);
					}}
					className="transition-all hover:w-24 hover:h-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#fff] flex justify-center items-center w-20 h-20 cursor-pointer"
				></div>
				<Image
					alt="image"
					src={Section2_2}
					width={1000}
					height={700}
					className="w-full object-fill max-h-[523px]"
				/>
			</div>
			<PopupModel
				open={openVideo}
				footer={null}
				onCancel={() => setOpenVideo(false)}
				style={{ top: "10vh" }}
				width={"fit-content"}
				height={"fit-content"}
				className="box_video_model mx-auto"
			>
				<iframe
					src="https://www.youtube.com/embed/09uE8hV9IMI?si=RgSYEmyl9vAsWN2h"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					// allowfullscreen=""
					className="transition-all w-[1060px] h-[615px] max-xl:w-[860px] max-xl:h-[500px] max-lg:w-[640px] max-lg:h-[400px] max-md:w-[560px] max-md:h-[315px] max-sm:w-[90vw] max-sm:h-[270px] rounded-lg"
				></iframe>
			</PopupModel>
		</section>
	);
}
