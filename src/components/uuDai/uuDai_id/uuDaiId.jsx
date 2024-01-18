"use client";
import FormComment from "@/components/form/FormComment";
import LeftContent1 from "@/components/sections/LeftContent1";
import SectionContent from "@/components/sections/SectionContent";
import SectionFooter1 from "@/components/sections/SectionFooter1";
import { request } from "@/utils/request";
import moment from "moment";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiSolidMessageRoundedDetail, BiSolidUserCircle } from "react-icons/bi";
import { BsFillTagsFill } from "react-icons/bs";
import { GoClock } from "react-icons/go";

export default function UuDaiId() {
	const idDetailNews = usePathname().split("/")[2];
	const [dataNewsDetail, setDataNewsDetail] = useState([]);

	const [isDataNews, setIsDataNews] = useState([]);
	const getDataNews = async () => {
		try {
			const response = await request.get(
				`/news?access_token=flex.public.token`,
				{
					params: { q: { category_name: "Ưu đãi" }, limit: 100 },
				}
			);
			setIsDataNews(response?.data);
		} catch (error) {
			alert(error);
		}
	};

	const getDataNewsDetail = async () => {
		try {
			const response = await request.get(
				`/news?access_token=flex.public.token`,
				{
					params: {
						q: JSON.stringify({
							slug: idDetailNews,
						}),
					},
				}
			);
			setDataNewsDetail(response?.data);
			console.log(response?.data);
		} catch (error) {
			alert(error);
		}
	};
	useEffect(() => {
		getDataNewsDetail();
		getDataNews();
	}, [idDetailNews]);
	return (
		<React.Fragment>
			<div className="mt-20 max-lg:mt-10 max-md:mt-5 mb-16 max-md:mb-8">
				<div className="w-4/5 max-xl:w-[90%] mx-auto flex max-lg:flex-col justify-start items-start">
					<div className="w-2/3 max-lg:w-full flex flex-col justify-start items-start gap-3">
						<div className="flex gap-2 justify-start items-center text-[#155979] cursor-pointer hover:text-[#4ba3da]">
							<BsFillTagsFill className="text-[#4ba3da]" />{" "}
							{dataNewsDetail[0]?.category_name}
						</div>
						<div className="text-4xl font-semibold text-[#155979]">
							{dataNewsDetail[0]?.title}
						</div>
						<div className="flex justify-start items-center gap-4 max-md:flex-col max-md:items-start max-md:gap-2">
							<div className="flex gap-2 justify-start items-center text-[#155979] cursor-pointer hover:text-[#4ba3da]">
								<GoClock className="text-[#4ba3da] min-w-[16px]" />{" "}
								{moment(dataNewsDetail[0]?.date_created).format(
									"DD/MM/YYYY"
								)}
							</div>
							<div className="flex gap-2 justify-start items-center text-[#155979] cursor-pointer hover:text-[#4ba3da]">
								<BiSolidUserCircle className="text-[#4ba3da] min-w-[16px]" />{" "}
								{/* by {dataNewsDetail[0]?.name_user_created} */}
								by BS. Ninh
							</div>
							<div className="flex gap-2 justify-start items-center text-[#155979] cursor-pointer hover:text-[#4ba3da]">
								<BiSolidMessageRoundedDetail className="text-[#4ba3da] min-w-[16px]" />{" "}
								0
							</div>
						</div>
						{/* <SectionContent data={dataNewsDetail?.[0]?.content} /> */}
						<SectionContent
							data={dataNewsDetail?.[0]?.exfields?.testContent}
						/>
						<div className="w-full flex justify-start items-start max-lg:flex-col my-10 max-sm:my-5">
							<div className="flex justify-start items-start gap-1 flex-wrap w-2/3 max-lg:w-full">
								{dataNewsDetail?.[0]?.exfields?.tags?.map(
									(item, index) => {
										return (
											<div
												key={index}
												className="cursor-pointer transition-all px-3 py-1 flex justify-center items-center bg-[#cacaca] hover:bg-[#4ba3da] text-[#155979] hover:text-white rounded-sm text-xs"
											>
												{item}
											</div>
										);
									}
								)}
							</div>
						</div>
						<div className="bg-slate-200 rounded-lg w-4/5 max-lg:w-full my-5">
							<FormComment />
						</div>
						<hr className="w-4/5 max-lg:w-full h-[2px] bg-[#4ba3da]" />
						{/* <div className="w-4/5 max-lg:w-full flex justify-start items-start">
                    <Link
                        href={`blogId`}
                        className="w-1/2 py-1 flex justify-start items-center"
                    >
                        <div className="w-10 h-10 rounded-full bg-[#4ba3da]"></div>
                        <div className="w-[calc(100%-40px)] flex flex-col justify-start items-start ml-3">
                            <span className="text-[#8a8a8a] hover:text-[#4ba3da] text-xs">
                                Trở lại
                            </span>
                            <span
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                }}
                                className="text-[#155979] hover:text-[#4ba3da] overflow-hidden text-ellipsis text-left text-xl max-sm:text-sm w-[90%]"
                            >
                                Mẹ bầu bị sâu răng ảnh hưởng đến thai
                                nhi như thế nào? Cách chăm sóc răng
                                miệng mẹ bầu
                            </span>
                        </div>
                    </Link>
                    <Link
                        href={`blogId`}
                        className="w-1/2 py-1 flex justify-start items-center"
                    >
                        <div className="w-[calc(100%-40px)] flex flex-col justify-start items-end mr-3">
                            <span className="text-[#8a8a8a] hover:text-[#4ba3da] text-xs">
                                Kế tiếp
                            </span>
                            <span
                                style={{
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                }}
                                className="text-[#155979] overflow-hidden text-ellipsis text-right text-xl max-sm:text-sm w-[90%] hover:text-[#4ba3da]"
                            >
                                RĂNG SỨ: LÀM SAO ĐỂ MỖI NỤ CƯỜI LÀ MỘT
                                TÁC PHẨM?
                            </span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#4ba3da]"></div>
                    </Link>
                </div> */}
					</div>
					<div className="w-1/3 max-lg:w-full">
						<LeftContent1
							title="Ưu đãi liên quan"
							data={isDataNews}
							url="uu-dai"
						/>
					</div>
				</div>
			</div>
			<SectionFooter1 />
		</React.Fragment>
	);
}
