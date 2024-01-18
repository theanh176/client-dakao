import { Section7_1, Section7_4 } from "@/utils/images";
import { handleCreate } from "@/utils/utilsApi";
import { Button, Input, Form, Row, Col, Alert } from "antd";
import Search from "antd/es/input/Search";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

export default function LeftContent3() {
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
		<section className="left_content1 w-full p-5 max-lg:px-0">
			<div className="border rounded-md p-5 h-full w-full flex flex-col justify-start items-start">
				<span className="text-2xl text-[#4ba3da] font-semibold">
					Liên hệ với chúng tôi
				</span>
				<hr className="w-1/5 h-[2px] bg-[#4ba3da] mb-5" />
				<div className="overflow-hidden w-full py-1 mb-2 border-b flex justify-start items-center">
					<div className="w-24 h-24 flex justify-center items-center">
						<Image
							alt="image_phone"
							src={Section7_1}
							width={60}
							height={60}
						/>
					</div>
					<span className="gap-1 text-[#155979] text-left max-sm:text-sm w-[calc(100%-110px)] ml-3 flex flex-col justify-start items-start">
						<span className="text-2xl font-semibold">Hotlines</span>
						<span className="flex flex-col justify-start items-start gap-0">
							<a
								href={`tel:0836031153`}
								className="hover:text-[#4ba3da]"
							>
								083 603 1153
							</a>
							{/* <a
								href={`tel:0908327787`}
								className="text-center !text-sm hover:text-[#4ba3da]"
							>
								0908 327 787
							</a>
							<a
								href={`tel:0789327787`}
								className="text-center !text-sm hover:text-[#4ba3da]"
							>
								0789 327 787
							</a> */}
						</span>
					</span>
				</div>
				<div className="overflow-hidden w-full py-1 mb-2 border-b flex justify-start items-center">
					<div className="w-24 h-24 flex justify-center items-center">
						<Image
							alt="image_email"
							src={Section7_4}
							width={60}
							height={60}
						/>
					</div>
					<span className="gap-1 text-[#155979] text-left max-sm:text-sm w-[calc(100%-110px)] ml-3 flex flex-col justify-start items-start">
						<span className="text-2xl font-semibold">Email</span>
						<span className="flex flex-col justify-start items-start gap-0">
							<a
								title="nhakhoa.dakao@gmail.com"
								href={`mailto:nhakhoa.dakao@gmail.com`}
								className="text-center text-base text-[#9c9c9c] hover:text-[#4ba3da]"
							>
								nhakhoa.dakao@gmail.com
							</a>
						</span>
					</span>
				</div>
				<span className="text-2xl text-[#4ba3da] font-semibold mt-10">
					Đặt lịch hẹn
				</span>
				<hr className="w-1/5 h-[2px] bg-[#4ba3da] mb-5" />
				<span className="text-left text-base text-[#9c9c9c]">
					Đặt lịch hẹn tới Nha Khoa Cười bằng cách điền vào thông tin
					bên dưới
				</span>
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
						<Button
							htmlType="submit"
							className="btn_text_primary !bg-[#e4e4e4] !mt-2"
						>
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
			</div>
		</section>
	);
}
