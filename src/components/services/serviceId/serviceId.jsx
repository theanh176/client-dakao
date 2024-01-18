"use client";
import LeftContent2 from "@/components/sections/LeftContent2";
import LeftContent3 from "@/components/sections/LeftContent3";
import Section13 from "@/components/sections/Section13";
import SectionBannerId from "@/components/sections/SectionBannerId";
import SectionContent from "@/components/sections/SectionContent";
import SectionFooter1 from "@/components/sections/SectionFooter1";
import { handleGetData } from "@/utils/utilsApi";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ServiceId() {
	const idDetailServices = usePathname().split("/")[2];
	const [dataServicesDetail, setDataServicesDetail] = useState([]);
	const [isDataServices, setIsDataServices] = useState([]);

	const handleGetDataAll = async () => {
		try {
			const [responseServices, responseDetail] = await Promise.all([
				handleGetData({
					api: "dmvt",
					params: { limit: 50 },
					q: { status: true, "exfields.loai_vat_tu": "Services" },
				}),
				handleGetData({
					api: "dmvt",
					q: { "exfields.slug": idDetailServices },
				}),
			]);
			setIsDataServices(responseServices);
			setDataServicesDetail(responseDetail);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleGetDataAll();
	}, [idDetailServices]);
	return (
		<React.Fragment>
			<SectionBannerId
				title={dataServicesDetail?.[0]?.ten_vt || "Dịch Vụ"}
				content={
					dataServicesDetail?.[0]?.exfields?.mo_ta_ngan2 ||
					"Mô tả dịch vụ"
				}
				picture={dataServicesDetail?.[0]?.exfields?.banner}
			/>
			<div className="mt-20 max-lg:mt-10 max-md:mt-5 mb-16 max-md:mb-8">
				<div className="w-4/5 max-xl:w-[90%] mx-auto flex max-lg:flex-col justify-start items-start">
					<div className="w-2/3 max-lg:w-full flex flex-col justify-start items-start gap-3">
						<SectionContent
							data={
								dataServicesDetail?.[0]?.exfields?.testContent
							}
						/>
						<div className="w-full flex justify-start items-start max-lg:flex-col my-10 max-sm:my-5">
							<div className="flex justify-start items-start gap-1 flex-wrap w-2/3 max-lg:w-full">
								{dataServicesDetail?.[0]?.exfields?.tags?.map(
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
					</div>
					<div className="w-1/3 max-lg:w-full">
						<LeftContent2 />
						<br />
						<LeftContent3 />
					</div>
				</div>
			</div>
			<Section13 />
			<SectionFooter1 />
		</React.Fragment>
	);
}
