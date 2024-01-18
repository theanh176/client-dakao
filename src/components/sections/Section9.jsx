import { Progress } from "antd";
import React, { useEffect, useState } from "react";

export default function Section9() {
	const [percent1, setPercent1] = useState(0);
	const [percent2, setPercent2] = useState(0);
	const [percent3, setPercent3] = useState(0);
	const [percent4, setPercent4] = useState(0);
	const twoColors = {
		"0%": "#155979",
		"100%": "#4ba3da",
	};
	useEffect(() => {
		setPercent1(99);
		setPercent2(97);
		setPercent3(91);
		setPercent4(95);
	}, []);
	return (
		<section className="py-16 max-md:py-8 w-5/6 max-lg:w-full mx-auto flex flex-wrap gap-8 min-w-[1100px] max-xl:min-w-[960px] max-lg:min-w-[768px] max-md:min-w-[86%] justify-center items-start">
			<div
				data-aos="fade-right"
				className="w-[calc(100%/3-32px)] max-lg:w-4/5 flex gap-4 flex-col justify-start items-start"
			>
				<span className="text-justify">
					Tại{" "}
					<span className="text-[#4ba3da] font-semibold">
						Nha Khoa DaKao
					</span>
					, chúng tôi tự hào cung cấp dịch vụ chăm sóc nha khoa uy tín
					và chất lượng cho mỗi bệnh nhân của chúng tôi.
					<br />
					<br /> Cho dù bạn đến với chúng tôi để khám răng tổng quát
					và làm sạch răng định kỳ, hoặc đến vì những nhu cầu chuyên
					sâu như làm răng sứ hay implant . . . thì bạn vẫn luôn được
					đón tiếp và chăm sóc chu đáo. Nụ cười của bạn luôn là ưu
					tiên hàng đầu của chúng tôi. Chúng tôi cố gắng tạo ra một
					môi trường thân thiện, an toàn, hiệu quả và thoải mái cho
					bạn và người thân.
				</span>
			</div>
			<div
				data-aos="fade-up"
				className="text-justify w-[calc(100%/3-32px)] max-lg:w-4/5 flex gap-4 flex-col justify-start items-start"
			>
				Bác sĩ của chúng tôi không những giàu kinh nghiệm mà còn rất
				khéo léo và nhẹ nhàng kết hợp nghệ thuật với công nghệ, để mang
				đến cho bạn dịch vụ nha khoa thẩm mỹ tốt nhất và bạn sẽ luôn hài
				lòng.
				<br />
				<br /> Chúng tôi chỉ sử dụng các vật liệu chất lượng cao, có
				nguồn gốc rõ ràng. Các vật liệu chúng tôi sử dụng đều có xuất xứ
				từ Mỹ, châu Âu, Nhật Bản và Hàn Quốc và đều có thẻ bảo hành cho
				mỗi sản phẩm của chúng tôi.
			</div>
			<div
				data-aos="flip-right"
				className="w-[calc(100%/3-32px)] max-lg:w-4/5 flex gap-3 flex-col justify-start items-start bg-slate-100 py-10 px-6 rounded-lg"
			>
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<span>Sự hài lòng của khách hàng</span>
					<Progress strokeColor={twoColors} percent={percent1} />
				</div>
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<span>Những ca thành công</span>
					<Progress strokeColor={twoColors} percent={percent2} />
				</div>
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<span>Khách hàng quay lại</span>
					<Progress strokeColor={twoColors} percent={percent3} />
				</div>
				<div className="w-full flex flex-col justify-start items-start gap-1">
					<span>Chăm sóc và giá cả</span>
					<Progress strokeColor={twoColors} percent={percent4} />
				</div>
			</div>
		</section>
	);
}
