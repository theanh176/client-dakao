import Search from "antd/es/input/Search";
import Link from "next/link";
import React from "react";
const DataListService = [
	{
		id: 1,
		ten_vt: "Cấp cứu nha khoa",
	},
	{
		id: 2,
		ten_vt: "Cấy ghép nha khoa (Implant)",
	},
	{
		id: 3,
		ten_vt: "Mão sứ",
	},
	{
		id: 4,
		ten_vt: "Khám - Tư vấn và lập kế hoạch điều trị",
	},
	{
		id: 5,
		ten_vt: "Răng giả tháo lắp",
	},
	{
		id: 6,
		ten_vt: "Nhổ răng",
	},
	{
		id: 7,
		ten_vt: "Trám răng thẩm mỹ",
	},
	{
		id: 8,
		ten_vt: "Tẩy trắng răng",
	},
	{
		id: 9,
		ten_vt: "Veneers - Mặt dán sứ",
	},
];
export default function LeftContent2({ data = DataListService }) {
	const onSearch = (value, _e, info) => console.log(info?.source, value);
	return (
		<section className="left_content1 w-full p-5 max-lg:px-0">
			<div className="border rounded-md p-5 h-full w-full flex flex-col justify-start items-start">
				{/* <span className="text-2xl text-[#4ba3da] font-semibold">
					Tìm kiếm
				</span>
				<hr className="w-1/5 h-[2px] bg-[#4ba3da] mb-5" />
				<Search
					placeholder="Nhập nội dung"
					allowClear
					enterButton="Tìm"
					size="large"
					onSearch={onSearch}
				/> */}
				<span className="text-2xl text-[#4ba3da] font-semibold">
					Danh sách dịch vụ
				</span>
				<hr className="w-1/5 h-[2px] bg-[#4ba3da] mb-5" />
				{data.map((item, index) => (
					<Link
						key={index}
						href={`${item?.exfields?.slug}`}
						className="w-full py-1 mb-2 border-b flex justify-start items-center"
					>
						<span
							style={{
								display: "-webkit-box",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: 2,
							}}
							className="text-[#155979] hover:text-[#4ba3da] overflow-hidden text-ellipsis text-left text-base max-sm:text-sm w-[calc(100%-56px)] ml-3"
						>
							{item.ten_vt}
						</span>
					</Link>
				))}
			</div>
		</section>
	);
}
