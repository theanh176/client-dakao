import Image from "next/image";
import "./sections.scss";
import {
	Section_Logo1,
	Section_Logo2,
	Section_Logo3,
	Section_Logo4,
	Section_Logo5,
	Section_Logo6,
} from "@/utils/images";

export default function SectionFooter2() {
	const ListImage = [
		Section_Logo1,
		Section_Logo2,
		Section_Logo3,
		Section_Logo4,
		Section_Logo5,
		Section_Logo6,
	];

	return (
		<section className="pt-16 max-md:pt-8">
			<div className="bg-[#f2f2f2] px-20 max-md:px-5 py-10 flex flex-wrap max-lg:gap-5 justify-center items-center">
				<div
					data-aos="fade-right"
					className="w-2/5 max-lg:w-full flex gap-4 flex-col items-start justify-start max-lg:items-center max-lg:text-center"
				>
					<div className="text-[#155979] text-4xl font-semibold text-left max-lg:text-center">
						Thành viên hợp tác
					</div>
					<span className="w-4/5 text-base text-[#4ba3da] text-left max-lg:text-center">
						Tự hào là một trong những nhà cung cấp sản phẩm nha
						chính hãng, là đối tác với các thương hiệu lớn từ Mỹ và
						Châu Âu.
					</span>
				</div>
				<div className="w-3/5 max-lg:w-full flex flex-wrap justify-start items-start">
					{ListImage.map((item, index) => {
						return (
							<div
								data-aos="zoom-in"
								key={index}
								className="w-1/3 max-sm:w-1/2 px-2 flex justify-center items-center"
							>
								<Image
									alt="image"
									src={item}
									width={225}
									height={84}
									className="w-4/5 object-contain"
								/>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
