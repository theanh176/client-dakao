import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "./sections.scss";

export default function SectionBannerSlider({ data }) {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<section className="section_1 mb-16 max-md:mb-8 relative h-[510px] max-lg:h-[440px] max-md:h-[360px] max-sm:h-[240px] bg-[#EEF7FF]">
			<Slider {...settings}>
				{data?.map((item, index) => (
					<div
						key={index}
						className="transition-all h-[510px] max-lg:h-[440px] max-md:h-[360px] max-sm:h-[240px] bg-slate-50"
					>
						<Image
							alt="slider"
							src={
								item?.storage
									? item?.url_banner
									: `https://api.goodapp.vn${item?.url_banner}`
							}
							width={3000}
							height={1500}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</Slider>
			{/* <div className="absolute top-1/2 !-translate-y-1/2 left-[15%]">
				<div
					data-aos="fade-down"
					className="flex flex-col justify-start items-start gap-2"
				>
					<div className="text-xs tracking-[.2em] font-semibold uppercase text-white bg-[#4ba3da] p-2 rounded-md">
						Nha Khoa ĐaKao
					</div>
					<div className="text-5xl font-semibold text-[#2e3192] bg-[#fff] px-2 py-4 rounded-md">
						Chúng tôi sẽ mang lại cho bạn
					</div>
					<div className="text-5xl font-semibold text-[#2e3192] bg-[#fff] px-2 py-4 rounded-md">
						những nụ cười tuyệt vời!
					</div>
					<div className="flex justify-start items-center">
						<Button className="btn_text_primary">
							<span className="text-sm">
								Đặt hẹn theo dịch vụ
							</span>
						</Button>
					</div>
				</div>
			</div> */}
		</section>
	);
}
