import React from "react";

export const metadata = {
	metadataBase: new URL("https://client-dakao.vercel.app"),
	title: "Nha Khoa DaKao - Nơi bạn gởi trọn niềm tin.",
	description: "Nha Khoa DaKao - Nơi bạn gởi trọn niềm tin.",
	openGraph: {
		title: "Nha Khoa DaKao - Nơi bạn gởi trọn niềm tin.",
		description: "Nha Khoa DaKao - Nơi bạn gởi trọn niềm tin.",
		type: "article",
		publishedTime: "2023-05-20",
		url: "https://client-dakao.vercel.app",
		images: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.235714f0.png&w=3840&q=75",
	},
	twitter: {
		card: "summary_large_image",
		title: "Nha Khoa DaKao - Nơi bạn gởi trọn niềm tin.",
		description: "Nha Khoa DaKao - Nơi bạn gởi trọn niềm tin.",
		images: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.235714f0.png&w=3840&q=75",
	},
	keywords: ["nha khoa hoa cuoi"],
};

export default function ServiceIdLayout({ children }) {
	return <React.Fragment>{children}</React.Fragment>;
}
