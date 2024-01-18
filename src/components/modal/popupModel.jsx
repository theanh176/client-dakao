import { Modal } from "antd";

export default function PopupModel({
	title,
	children,
	placement,
	closeIcon,
	open,
	onOk,
	onCancel,
	width,
	height,
	footer,
	style = { top: 20 },
	className,
}) {
	return (
		<Modal
			title={title}
			placement={placement}
			closeIcon={closeIcon}
			open={open}
			onOk={onOk}
			onCancel={onCancel}
			width={width}
			height={height}
			footer={footer}
			style={style}
			className={className}
		>
			{children}
		</Modal>
	);
}
