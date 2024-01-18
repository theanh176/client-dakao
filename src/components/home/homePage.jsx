"use client";
import { FullLogoDaKao } from "@/utils/images";
import { handleCreate, handleGetData } from "@/utils/utilsApi";
import { Alert, Button, Col, FloatButton, Form, Input, Row } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import PopupModel from "../modal/popupModel";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import Section6 from "../sections/Section6";
import Section7 from "../sections/Section7";
import SectionBannerSlider from "../sections/SectionBannerSlider";
import SectionFooter1 from "../sections/SectionFooter1";

export default function HomePage() {
	const [alertVisible, setAlertVisible] = useState(false);
	const formPopupRef = useRef(null);
	const onFinish = (values) => {
		handleSaveData({
			ten_kh: values.ten_kh,
			dien_thoai: values.dien_thoai,
			exfields: {
				thoi_gian_hen: new Date(
					new Date(new Date()).getTime() + 7 * 60 * 60 * 1000
				).toISOString(),
				trang_thai_hen: "Chưa đến",
				nguon_tao: "Website",
				trang_thai_hd: "Lập chứng từ",
				loai_lich_hen: "Đặt lịch online",
			},
			trang_thai: 0,
		});
	};
	const handleSaveData = async (data) => {
		const response = await handleCreate({
			api: "so1?access_token=flex.public.token",
			data,
			privateToken: false,
		});
		setIsOpen(false);
		if (response) {
			setAlertVisible(true);
			setTimeout(() => {
				setAlertVisible(false);
			}, 5000);
		}
	};
	const [isOpen, setIsOpen] = useState(false);
	// const [dataServices, setDataServices] = useState([]);
	// const [dataNews, setDataNews] = useState([]);
	// const [dataComment3, setDataComment3] = useState([]);

	// const handleGetDataAll = async () => {
	// 	try {
	// 		const [responseServices, responseNews, responseComment3] =
	// 			await Promise.all([
	// 				handleGetData({
	// 					api: "dmvt",
	// 					params: { limit: 6 },
	// 					q: { status: true, "exfields.loai_vat_tu": "Services" },
	// 				}),
	// 				handleGetData({ api: "news", params: { limit: 3 } }),
	// 				handleGetData({ api: "comment3" }),
	// 			]);
	// 		setDataServices(responseServices);
	// 		setDataNews(responseNews);
	// 		setDataComment3(responseComment3);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		// handleGetDataAll();
		setIsOpen(true);
	}, []);
	return (
		<React.Fragment>
			<SectionBannerSlider />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section7 />
			{/* <Section5 /> */}
			<Section6 title="Tin tức nha khoa" />
			<SectionFooter1 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
			{alertVisible && (
				<Alert
					message="Đặt lịch thành công!"
					type="success"
					showIcon
					className="fixed top-2 right-2 z-[99999]"
					closeIcon
					onClose={() => setAlertVisible(false)}
				/>
			)}
			<PopupModel
				open={isOpen}
				onCancel={() => setIsOpen(false)}
				footer={false}
				style={{
					top: "20%",
				}}
				width={450}
			>
				<div className="flex flex-col gap-4">
					<div className="flex justify-center">
						<Image
							alt="logo"
							src={FullLogoDaKao}
							width={135}
							height={100}
						/>
					</div>
					<h1 className="text-xl font-bold uppercase text-center text-[#155979]">
						Đăng ký tư vấn
					</h1>
					<span className="text-base text-[#8a8a8a] text-justify">
						Tại{" "}
						<span className="text-[#4ba3da]">Nha Khoa DaKao</span>,
						chúng tôi tự hào cung cấp dịch vụ chăm sóc nha khoa uy
						tín và chất lượng cho mỗi bệnh nhân của chúng tôi.
					</span>
					<div className="flex justify-start items-center gap-2 max-sm:flex-col max-sm:items-start mt-4">
						<Form
							id="form-create-popup"
							ref={formPopupRef}
							name="control-popup-ref"
							onFinish={onFinish}
							layout="horizontal"
							labelCol={{
								span: 2,
							}}
							className="w-full"
						>
							<Row gutter={8}>
								<Col span={24}>
									<Form.Item name="ten_kh">
										<Input
											className="!min-h-[38px]"
											placeholder="Tên"
										/>
									</Form.Item>
								</Col>
								<Col span={24}>
									<Form.Item name="dien_thoai">
										<Input
											className="!min-h-[38px]"
											placeholder="Số điện thoại"
										/>
									</Form.Item>
								</Col>
								<Col span={24}>
									<Button
										htmlType="submit"
										className="btn_text_primary_2 !my-0 w-full"
									>
										<span className="text-sm">
											Đặt lịch
										</span>
									</Button>
								</Col>
							</Row>
						</Form>
					</div>
				</div>
			</PopupModel>
		</React.Fragment>
	);
}
