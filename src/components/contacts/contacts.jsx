"use client";
import React from "react";
import SectionBanner from "../sections/SectionBanner";
import SectionFooter1 from "../sections/SectionFooter1";
import { FloatButton } from "antd";
import Section1 from "../sections/Section1";
import SectionFooter2 from "../sections/SectionFooter2";
import Section3 from "../sections/Section3";
import Section11 from "../sections/Section11";
import Section12 from "../sections/Section12";

export default function Contacts() {
	return (
		<React.Fragment>
			<Section11 />
			<SectionFooter1 />
			<Section12 />
			<SectionFooter2 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
