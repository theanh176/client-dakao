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

// export async function generateMetadata({ params, searchParams }, parent) {
// 	// read route params
// 	const id = params.id;

// 	// fetch data
// 	const product = await fetch(`https://.../${id}`).then((res) => res.json());

// 	// optionally access and extend (rather than replace) parent metadata
// 	const previousImages = (await parent).openGraph?.images || [];

// 	return {
// 		title: product.title,
// 		openGraph: {
// 			images: ["/some-specific-page-image.jpg", ...previousImages],
// 		},
// 	};
// }

export default function UuDaiIdLayout({ children }) {
	return <React.Fragment>{children}</React.Fragment>;
}
