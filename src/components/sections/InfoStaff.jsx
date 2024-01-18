import { Parser } from "html-to-react";
import Image from "next/image";

export default function InfoStaff({ data }) {
	const htmlParser = new Parser();
	return (
		<section className="w-4/5 mx-auto max-xl:w-[90%] max-lg:w-[95%] py-16 max-md:py-8">
			<div className="flex justify-start items-start max-lg:flex-col max-lg:gap-5">
				<div className="mx-auto w-1/3 max-lg:w-4/5 flex flex-col justify-start items-start gap-3">
					<div className="bg-slate-50 min-h-[300px] min-w-[300px]">
						{data?.avatar && (
							<Image
								alt="image"
								src={data?.avatar}
								width={300}
								height={300}
								className="object-contain mb-3"
							/>
						)}
					</div>
					<div className="w-5/6 max-md:w-full text-[#155979] text-2xl max-sm:text-xl font-semibold">
						{data?.name || "..."}
					</div>
					<div className="w-5/6 max-md:w-full text-[#4ba3da] text-xs font-semibold tracking-[.13em] uppercase">
						{data?.title || "..."}
					</div>
				</div>
				<div className="w-2/3 max-lg:w-full flex">
					<span className="w-5/6 max-lg:w-4/5 mx-auto text-base text-[#1a1a1a] text-justify">
						{htmlParser.parse(data?.description || "<p>...</p>")}
					</span>
				</div>
			</div>
		</section>
	);
}
