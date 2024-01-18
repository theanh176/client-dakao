import { Section_Banner, ServiceBanner } from "@/utils/images";
import Image from "next/image";
import React from "react";

export default function SectionBannerId({
	title = "...",
	content = "...",
	picture,
}) {
	return (
		<section className="mb-16 max-md:mb-8 flex max-lg:flex-col bg-[#EEF7FF]">
			<div className="w-1/2 max-lg:w-full relative bg-[#155979] max-lg:py-10">
				<Image
					alt="bg_banner"
					src={Section_Banner}
					width={2000}
					height={1700}
					className="w-full h-full object-cover max-lg:hidden"
				/>
				<span className="absolute max-lg:relative h-full w-full top-0 left-0 py-10 text-center bg-[#155979de] text-white">
					<div className="w-4/5 max-lg:w-full mx-auto h-full flex gap-3 flex-col justify-center items-start">
						<div className="w-4/5 mx-auto text-left text-4xl font-semibold">
							{title}
						</div>
						<div className="w-4/5 mx-auto text-left text-base">
							{content}
						</div>
					</div>
				</span>
			</div>
			<div className="w-1/2 max-lg:w-full bg-slate-50">
				{picture && (
					<Image
						alt="bg_banner"
						src={picture}
						width={2000}
						height={1700}
						className="w-full h-full object-cover"
					/>
				)}
			</div>
		</section>
	);
}
