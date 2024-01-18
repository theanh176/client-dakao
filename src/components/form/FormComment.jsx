import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React, { useRef } from "react";

export default function FormComment() {
	const formRef = useRef(null);
	const onFinish = (values) => {
		console.log(values);
	};
	return (
		<div className="bg-transparent flex flex-col justify-start items-start gap-3 p-10 max-sm:p-5 !pb-0">
			<span className="text-3xl text-[#4ba3da] font-medium">
				Để lại lời nhắn
			</span>
			<hr className="w-full h-[2px] bg-[#4ba3da]" />
			<span className="text-[#155979] text-base">
				Để lại lời nhắn Địa chỉ email của bạn sẽ không được công bố. Các
				trường bắt buộc được đánh dấu *
			</span>
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
				<Row gutter={16}>
					<Col span={12}>
						<Form.Item>
							<Input placeholder="Tên" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item>
							<Input placeholder="Email" />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item>
							<Input.TextArea placeholder="Nội dung" rows={5} />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item>
							<Checkbox className="text-base text-[#8a8a8a]">
								Lưu tên, email và website của tôi trong trình
								duyệt này cho lần bình luận tiếp theo.
							</Checkbox>
						</Form.Item>
					</Col>
				</Row>
				<Form.Item>
					<Button className="btn_text_primary">
						<span className="text-sm">Gửi bình luận</span>
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}
