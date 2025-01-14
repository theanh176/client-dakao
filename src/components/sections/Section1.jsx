import React, { useRef, useState } from "react";
import "./sections.scss";
import { Button, Input, Form, Row, Col, Alert } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { Section2_1, Section2_2 } from "@/utils/images";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import { handleCreate } from "@/utils/utilsApi";

export default function Section1() {
	const [alertVisible, setAlertVisible] = useState(false);
	const formRef = useRef(null);
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
		if (response) {
			setAlertVisible(true);
			setTimeout(() => {
				setAlertVisible(false);
			}, 5000);
		}
	};
	return (
		<section className="py-16 max-md:py-8 w-5/6 max-xl:w-full mx-auto flex flex-wrap gap-8 max-lg:gap-4 min-w-[1100px] max-xl:min-w-[960px] max-lg:min-w-[768px] max-md:min-w-[86%] justify-center items-start">
			<Link
				href="/introduce"
				data-aos="fade-right"
				className="w-[calc(100%/3-32px)]
				max-lg:w-4/5 max-md:w-[95%] flex gap-4 flex-col justify-start items-start"
			>
				<div className="w-full overflow-hidden rounded-lg mb-4">
					<Image
						alt="image"
						src={Section2_1}
						width={300}
						height={300}
						className="transition duration-500 ease-in-out cursor-pointer scale-110 hover:translate-x-2 w-full object-contain"
					/>
				</div>
				<span className="text-[#155979] text-2xl font-semibold hover:text-[#4ba3da] cursor-pointer">
					Chào mừng đến với Nha Khoa ĐaKao
				</span>
				<span className="text-base text-[#8a8a8a] text-justify">
					Tại <span className="text-[#4ba3da]">Nha Khoa ĐaKao</span>,
					chúng tôi tự hào cung cấp dịch vụ chăm sóc nha khoa uy tín
					và chất lượng cho mỗi bệnh nhân của chúng tôi.
				</span>
				<div className="cursor-pointer uppercase text-xs text-[#155979] hover:text-[#4ba3da] font-semibold flex gap-2 justify-start items-center">
					Xem thêm{" "}
					<div className="w-8 h-8 flex justify-center items-center">
						<BsArrowRightCircle className="w-7 h-7" />
					</div>
				</div>
			</Link>
			<div
				data-aos="fade-up"
				className="w-[calc(100%/3-32px)] max-lg:w-4/5 max-md:w-[95%] flex gap-4 flex-col justify-start items-start"
			>
				<div className="w-full overflow-hidden rounded-lg mb-4">
					<Image
						alt="image"
						src={Section2_2}
						width={300}
						height={300}
						className="transition duration-500 ease-in-out cursor-pointer scale-110 hover:translate-x-2 w-full object-contain"
					/>
				</div>
				<div className="w-11/12 mx-auto flex gap-2 flex-col justify-start items-start">
					<span className="text-base text-[#8a8a8a] flex gap-2 items-center justify-start">
						<AiOutlinePlus color="#4ba3da" />
						Cấp cứu Nha khoa
					</span>
					<span className="text-base text-[#8a8a8a] flex gap-2 items-center justify-start">
						<AiOutlinePlus color="#4ba3da" />
						Cấy ghép nha khoa (Implant)
					</span>
					<span className="text-base text-[#8a8a8a] flex gap-2 items-center justify-start">
						<AiOutlinePlus color="#4ba3da" />
						Trám răng thẩm mỹ
					</span>
					<span className="text-base text-[#8a8a8a] flex gap-2 items-center justify-start">
						<AiOutlinePlus color="#4ba3da" />
						Niềng răng không mắc cài (Invisalign)
					</span>
					<span className="text-base text-[#8a8a8a] flex gap-2 items-center justify-start">
						<AiOutlinePlus color="#4ba3da" />
						Tẩy trắng răng
					</span>
					<span className="text-base text-[#8a8a8a] flex gap-2 items-center justify-start">
						<AiOutlinePlus color="#4ba3da" />
						Mão sứ
					</span>
				</div>
			</div>
			<div
				data-aos="flip-right"
				className="w-[calc(100%/3-32px)] max-lg:w-4/5 max-md:w-[95%] flex gap-3 flex-col justify-start items-start bg-slate-100 py-10 px-6 rounded-lg"
			>
				<span className="text-center w-full text-3xl font-semibold text-[#155979] pb-7">
					Giờ làm việc
				</span>
				<div className="w-full mx-auto flex gap-4 flex-col justify-start items-start">
					<span className="w-full text-base text-[#8a8a8a] flex gap-2 items-baseline justify-between">
						Thứ 2{" "}
						<div className="border-b border-dotted border-[#4ba3da] w-1/2 max-xl:w-1/3"></div>{" "}
						8AM-7PM
					</span>
					<span className="w-full text-base text-[#8a8a8a] flex gap-2 items-baseline justify-between">
						Thứ 3{" "}
						<div className="border-b border-dotted border-[#4ba3da] w-1/2 max-xl:w-1/3"></div>
						8AM-7PM
					</span>
					<span className="w-full text-base text-[#8a8a8a] flex gap-2 items-baseline justify-between">
						Thứ 4{" "}
						<div className="border-b border-dotted border-[#4ba3da] w-2/5 max-xl:w-1/3"></div>
						8AM-7PM
					</span>
					<span className="w-full text-base text-[#8a8a8a] flex gap-2 items-baseline justify-between">
						Thứ 5{" "}
						<div className="border-b border-dotted border-[#4ba3da] w-1/2 max-xl:w-1/3"></div>
						8AM-7PM
					</span>
					<span className="w-full text-base text-[#8a8a8a] flex gap-2 items-baseline justify-between">
						Thứ 6{" "}
						<div className="border-b border-dotted border-[#4ba3da] w-1/2 max-xl:w-1/3"></div>
						8AM-7PM
					</span>
					<span className="w-full text-base text-[#8a8a8a] flex gap-2 items-baseline justify-between">
						Thứ 7{" "}
						<div className="border-b border-dotted border-[#4ba3da] w-1/2 max-xl:w-1/3"></div>
						8AM-7PM
					</span>
				</div>
				<div className="flex justify-start items-center gap-2 max-sm:flex-col max-sm:items-start">
					<Form
						id="form-create-customer"
						ref={formRef}
						name="control-ref"
						onFinish={onFinish}
						layout="horizontal"
						labelCol={{
							span: 2,
						}}
						className="w-full"
					>
						<Button htmlType="submit" className="btn_text_primary">
							<span className="text-sm">Đặt lịch</span>
						</Button>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item name="ten_kh">
									<Input
										className="!min-h-[38px]"
										placeholder="Tên"
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item name="dien_thoai">
									<Input
										className="!min-h-[38px]"
										placeholder="Số điện thoại"
									/>
								</Form.Item>
							</Col>
						</Row>
					</Form>
				</div>
			</div>
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
		</section>
	);
}
