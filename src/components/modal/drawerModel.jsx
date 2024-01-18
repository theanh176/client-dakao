import { Drawer } from "antd";

export default function DrawerModel({
	title,
	children,
	placement,
	closeIcon = false,
	open,
	onClose,
	width,
	height,
	extra,
	footer,
}) {
	return (
		<Drawer
			title={title}
			placement={placement}
			closeIcon={closeIcon}
			open={open}
			onClose={onClose}
			width={width}
			height={height}
			extra={extra}
			footer={footer}
		>
			{children}
		</Drawer>
	);
}
