import {
	Section13_1,
	Section13_2,
	Section13_3,
	Section13_4,
	Section_Service1,
	Section_Service2,
	Section_Service3,
	Section_Service4,
} from "@/utils/images";
import Image from "next/image";
import Link from "next/link";
const dataSection_6 = [
	{
		id: 1,
		picture: Section_Service1,
		ten_vt: "Cấp cứu nha khoa",
		exfields: {
			banner: Section13_1,
			mo_ta_ngan2:
				"Hiện đại đã phát triển nhanh chóng trong thời gian gần đây, cả về vật liệu và kỹ thuật giúp cho việc can thiệp thẩm mỹ trở nên nhẹ nhàng.",
		},
	},
	{
		id: 2,
		picture: Section_Service2,
		ten_vt: "Cấy ghép implant",
		exfields: {
			banner: Section13_2,
			mo_ta_ngan2:
				"Là một vít titan tương thích sinh học được đặt trong xương để thay thế một hoặc nhiều chân răng đã mất, có thể dùng để thay thế một vài răng.",
		},
	},
	{
		id: 3,
		picture: Section_Service3,
		ten_vt: "Niềng răng Invisalign",
		exfields: {
			banner: Section13_3,
			mo_ta_ngan2:
				"Khay bằng nhựa trong suốt được gắn vào răng của bạn và có thể tháo rời khi ăn nhai và khi vệ sinh răng miệng,tự tin trong sinh hoạt hàng ngày",
		},
	},
	{
		id: 4,
		picture: Section_Service4,
		ten_vt: "Khám và tư vấn",
		exfields: {
			banner: Section13_4,
			mo_ta_ngan2:
				"Tại Nha Khoa DaKao, mục tiêu cuối cùng của chúng tôi là bảo đảm sự toàn vẹn, vẻ đẹp và sức khỏe răng miệng ở mức hoàn hảo nhất.",
		},
	},
];
export default function Section13({ data = dataSection_6 }) {
	return (
		<section className="section_6 py-16 max-md:py-8">
			<div className="w-4/5 mx-auto max-lg:w-full max-lg:px-5 flex flex-col items-start max-lg:items-center justify-start">
				<div className="text-[#4ba3da] text-4xl max-lg:text-2xl font-medium max-lg:text-center">
					Những dịch vụ
				</div>
				<div className="text-[#155979] text-5xl max-lg:text-3xl font-semibold max-lg:text-center">
					Nha Khoa DaKao
				</div>
			</div>
			<div className="w-4/5 max-xl:w-[90%] mx-auto flex flex-wrap justify-start max-sm:justify-center items-start pt-10">
				{data.map((item, index) => {
					return (
						<Link
							href={`/services/${
								item?.exfields?.slug || "dich-vu"
							}`}
							data-aos="flip-right"
							key={index}
							className="px-2 flex flex-col justify-start items-start w-[25%] max-lg:w-[50%] max-lg:mb-10 max-sm:w-full"
						>
							<div className="w-full relative">
								<div className="w-full h-[180px] max-lg:h-[320px] bg-slate-200">
									{item?.exfields?.banner && (
										<Image
											alt="image"
											src={item?.exfields?.banner}
											width={1200}
											height={800}
											className="w-full h-full object-cover"
										/>
									)}
								</div>
								<div className="absolute -bottom-10 left-3">
									<div className="w-20 h-20 flex justify-center items-center bg-white">
										{item.picture && (
											<Image
												alt="image"
												src={item?.picture}
												width={500}
												height={500}
												className="w-1/2 h-1/2 object-cover"
											/>
										)}
									</div>
								</div>
							</div>
							<div className="min-h-[260px] max-xl:min-h-[300px] max-lg:min-h-[200px] max-md:min-h-[250px] max-sm:min-h-[150px] bg-[#155979] px-3 pt-14 pb-4 text-[#fff] w-full flex flex-col justify-start items-center">
								<div className="cursor-pointer hover:text-[#4ba3da] w-full text-2xl font-semibold text-left">
									{item?.ten_vt}
								</div>
								<div className="mt-2 w-full text-base text-left">
									{item?.exfields?.mo_ta_ngan2}
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</section>
	);
}
