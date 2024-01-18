import { AOSInit } from "@/components/aos/aos";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import dayjs from "dayjs";
import "dayjs/locale/vi"; // ES 2015
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

dayjs.extend(LocalizedFormat);
dayjs.locale("vi"); // use locale globally
dayjs().locale("vi").format(); // use locale in a specific instance

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

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<AOSInit />
			<body className="bg-white w-full">
				<Header />
				<div className="max-lg:pt-[70px] mx-auto mb-[500px] max-lg:mb-0 bg-white">
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
