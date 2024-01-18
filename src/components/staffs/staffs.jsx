"use client";
import React from "react";
import SectionBanner from "../sections/SectionBanner";
import Section4 from "../sections/Section4";
import SectionFooter1 from "../sections/SectionFooter1";
import { FloatButton } from "antd";

export default function Staffs() {
	return (
		<React.Fragment>
			<SectionBanner title={"Nhân viên Nha Khoa DaKao"} />
			<Section4 />
			<SectionFooter1 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
