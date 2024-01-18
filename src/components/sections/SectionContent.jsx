import { Parser } from "html-to-react";
import React from "react";

export default function SectionContent({ data = "<p></p>" }) {
	const htmlParser = new Parser();

	return (
		<section className="w-full text-justify">
			{htmlParser.parse(data)}
		</section>
	);
}
