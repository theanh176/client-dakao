import { Section_Banner } from "@/utils/images";
import { handleCreate } from "@/utils/utilsApi";
import { Button, Input, Form, Row, Col, Alert } from "antd";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Section12() {
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
		<section className="py-16 max-md:py-8 flex flex-wrap max-lg:flex-col-reverse">
			<div
				data-aos="fade-up"
				className="w-1/2 max-lg:w-full flex justify-center items-center bg-[#EEF7FF]"
			>
				<Image
					alt="bg_banner"
					src={Section_Banner}
					width={2000}
					height={1700}
					className="w-full h-full object-cover"
				/>
			</div>
			<div
				data-aos="fade-up"
				className="w-1/2 max-lg:w-full flex justify-start items-center bg-slate-100"
			>
				<div className="w-4/5 max-xl:w-full max-xl:px-16 max-lg:p-10 max-md:px-10 max-sm:py-10 max-sm:px-5 mx-auto flex flex-col justify-start items-start">
					<div className="text-[#4ba3da] text-2xl font-medium">
						Đặt lịch sử dụng
					</div>
					<div className="text-[#155979] text-4xl font-semibold">
						dịch vụ của chúng tôi
					</div>
					<br />
					<span className="w-4/5 max-lg:w-full text-base text-[#181818]">
						Liên hệ với phòng khám của chúng tôi và chúng tôi sẽ
						liên hệ lại với bạn để tư vấn rõ yêu cầu.
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
								className="btn_text_primary"
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
			</div>
		</section>
	);
}
