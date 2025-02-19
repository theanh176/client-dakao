import { Section_Banner, Slider1 } from "@/utils/images";
import Image from "next/image";
import React from "react";

export default function SectionBanner({ title }) {
	return (
		<section className="mb-16 max-md:mb-8 relative h-[510px] max-lg:h-[440px] max-md:h-[360px] max-sm:h-[240px] bg-[#EEF7FF]">
			<Image
				alt="bg_banner"
				src={Slider1}
				width={2000}
				height={1700}
				className="w-full h-full object-cover"
			/>
			<span className="absolute top-[55%] left-1/2 !-translate-x-1/2 text-4xl tracking-[.2em] max-lg:text-2xl max-md:text-xl max-sm:text-base max-lg:tracking-[.13em] font-semibold text-[#155979] w-full py-10 text-center uppercase bg-[#ffffff98]">
				<div data-aos="fade-right" className="w-full text-center">
					{title}
				</div>
			</span>
		</section>
	);
}
