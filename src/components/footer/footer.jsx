"use client";
import { FullLogoDaKao } from "@/utils/images";
import { MenuHeader } from "@/utils/menu";
import Image from "next/image";
import { BiMessageDetail } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";
import { FiPhoneOutgoing } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { TbWorldWww } from "react-icons/tb";
import "./footer.scss";

export default function Footer() {
	return (
		<div className="fixed max-lg:relative bottom-0 -z-10 max-lg:z-10 w-full">
			<div className="px-20 max-xl:px-5 w-full bg-[#155979] py-20 max-md:py-10">
				<div className="w-full max-lg:w-4/5 min-w-[940px] max-lg:min-w-[200px] gap-3 mx-auto flex max-xl:flex-wrap justify-between items-start text-white">
					<div className="w-[calc(25%-10px)] max-lg:w-[calc(50%-10px)]  max-lg:min-w-[100px] min-w-[235px] max-sm:w-full flex gap-4 flex-col justify-start items-start">
						<div className="rounded-full flex justify-center items-center bg-slate-50 w-[135px] h-[135px]">
							<Image
								alt="logo"
								src={FullLogoDaKao}
								width={135}
								height={100}
								className="rounded-full"
							/>
						</div>
						<span className="text-sm">
							Được thành lập năm 2001 đến nay,{" "}
							<span className="text-[#4ba3da]">
								Nha Khoa ĐaKao
							</span>{" "}
							tự hào đã đã điều trị cho hơn{" "}
							<span className="text-[#4ba3da]">
								15.000 khách hàng
							</span>
							, và phần lớn trong số đó đã trở thành khách hàng
							thân thiết của chúng tôi.
						</span>
						<div className="flex justify-start items-center gap-2">
							<a
								href="https://www.facebook.com/nhakhoa.dakao"
								target="_blank"
								rel="noreferrer"
								className="w-10 h-10 bg-white cursor-pointer hover:scale-105 transition-all rounded-md flex justify-center items-center"
							>
								<BsFacebook
									width={20}
									height={20}
									color="#3b5998"
								/>
							</a>
						</div>
					</div>
					<div className="w-[calc(25%-10px)] max-lg:w-[calc(50%-10px)] max-lg:min-w-[100px] min-w-[235px] max-sm:w-full">
						<div className="w-fit max-lg:w-full mx-auto flex gap-4 flex-col justify-start items-start">
							<div className="font-semibold text-lg text-[#4ba3da]">
								Menu
							</div>
							<div className="flex flex-col max-lg:flex-row max-lg:flex-wrap justify-start items-start gap-2">
								{MenuHeader.map((item, index) => (
									<div
										key={index}
										className="max-lg:w-[calc(100%/3-10px)] text-base hover:text-[#4ba3da] cursor-pointer"
									>
										{item.title}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="w-[calc(25%-10px)] max-lg:w-[calc(50%-10px)]  max-lg:min-w-[100px] min-w-[235px] max-sm:w-full flex gap-4 flex-col justify-start items-start">
						<div className="font-semibold text-lg text-[#4ba3da]">
							Thông tin
						</div>
						<div className="text-base flex gap-4 justify-start items-start">
							<div className="w-5">
								<FiPhoneOutgoing
									width={20}
									height={20}
									className="mt-1"
								/>
							</div>
							<span className="flex flex-col max-sm:flex-row max-sm:gap-2">
								<a
									href={`tel:0766110086`}
									className="hover:text-[#4ba3da]"
								>
									0766 110 086
								</a>
								{/* <span className="sm:hidden">-</span>
								<a
									href={`tel:0907327787`}
									className="hover:text-[#4ba3da]"
								>
									0907 327 787
								</a>{" "}
								<span className="sm:hidden">-</span>
								<a
									href={`tel:0789327787`}
									className="hover:text-[#4ba3da]"
								>
									0789 327 787
								</a>{" "} */}
							</span>
						</div>
						<div className="text-base flex gap-4 justify-start items-center">
							<div className="w-5">
								<BiMessageDetail height={20} width={20} />
							</div>
							<a
								href={`mailto:nhakhoa.dakao@gmail.com`}
								className="hover:text-[#4ba3da]"
							>
								nhakhoa.dakao@gmail.com
							</a>
						</div>
						<div className="text-base flex gap-4 justify-start items-center">
							<div className="w-5">
								<GoLocation width={20} height={20} />
							</div>
							<a
								className="hover:text-[#4ba3da]"
								itemProp="location"
								href={`https://maps.app.goo.gl/eWLSTAdSr4RwFSqbA`}
								target="_blank"
								rel="noopener noreferrer"
							>
								123B Nơ Trang Long, Phường 11,
								<br className="max-sm:hidden" />
								Quận Bình Thạnh, TP.HCM
							</a>
						</div>
					</div>
					<div className="w-[calc(25%-10px)] max-lg:w-[calc(50%-10px)]  max-lg:min-w-[100px] min-w-[235px] max-sm:w-full flex gap-4 flex-col justify-start items-start">
						<div className="font-semibold text-lg text-[#4ba3da]">
							Địa chỉ
						</div>
						<div className="w-full h-[225px] max-xl:h-[200px] max-lg:h-auto max-sm:h-[225px]">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.001857461015!2d106.69268787570358!3d10.81116895855061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c1e6dd982f%3A0xd928d60a459636af!2sNha%20khoa%20Dakao!5e0!3m2!1svi!2s!4v1705554013716!5m2!1svi!2s"
								// allowfullscreen=""
								loading="lazy"
								// referrerpolicy="no-referrer-when-downgrade"
								className="rounded-lg w-full h-full"
							></iframe>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#fff] w-full text-[#4ba3da] py-4 px-20 max-xl:px-5 text-xs flex justify-between">
				<span className="max-lg:w-full text-center !font-semibold">
					Bản quyền thuộc Nha Khoa ĐaKao
				</span>
				<span className="max-lg:hidden !font-semibold">
					Thứ 2-Thứ 7 08:00-12:00 + 14:00-19:00
				</span>
			</div>
		</div>
	);
}
