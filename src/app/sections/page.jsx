"use client";
import Section1 from "@/components/sections/Section1";
import Section10 from "@/components/sections/Section10";
import Section2 from "@/components/sections/Section2";
import Section3 from "@/components/sections/Section3";
import Section4 from "@/components/sections/Section4";
import Section5 from "@/components/sections/Section5";
import Section6 from "@/components/sections/Section6";
import Section7 from "@/components/sections/Section7";
import Section8 from "@/components/sections/Section8";
import SectionFooter1 from "@/components/sections/SectionFooter1";
import SectionBanner from "@/components/sections/SectionBanner";
import SectionBannerSlider from "@/components/sections/SectionBannerSlider";
import { FloatButton } from "antd";
import React from "react";
import Section9 from "@/components/sections/Section9";
import SectionFooter2 from "@/components/sections/SectionFooter2";
import Section11 from "@/components/sections/Section11";
import Section12 from "@/components/sections/Section12";
import Section13 from "@/components/sections/Section13";

export default function SectionsPage() {
	return (
		<React.Fragment>
			<SectionBanner title={"Sections"} />
			<SectionBannerSlider />
			1<Section1 />
			2<Section2 />
			3<Section3 />
			4<Section4 />
			5<Section5 />
			6<Section6 />
			7<Section7 />
			8<Section8 />
			9<Section9 />
			10
			<Section10 />
			11
			<Section11 />
			12
			<Section12 />
			13
			<Section13 />
			<SectionFooter1 />
			<SectionFooter2 />
			<FloatButton.BackTop
				shape="square"
				className="custom-float-button"
			/>
		</React.Fragment>
	);
}
