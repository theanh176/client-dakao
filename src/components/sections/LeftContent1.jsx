import Search from "antd/es/input/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LeftContent1({
	title = "Bài viết hiện tại",
	data,
	url = "blogs",
}) {
	const onSearch = (value, _e, info) => console.log(info?.source, value);
	return (
		<section className="left_content1 w-full p-5 max-lg:px-0">
			<div className="border rounded-md p-5 h-full w-full flex flex-col justify-start items-start">
				<span className="text-2xl text-[#4ba3da] font-semibold">
					Tìm kiếm
				</span>
				<hr className="w-1/5 h-[2px] bg-[#4ba3da] mb-5" />
				<Search
					placeholder="Nhập nội dung"
					allowClear
					enterButton="Tìm"
					size="large"
					onSearch={onSearch}
				/>
				<span className="text-2xl text-[#4ba3da] font-semibold mt-10">
					{title}
				</span>
				<hr className="w-1/5 h-[2px] bg-[#4ba3da] mb-5" />
				{data?.map((item, index) => {
					return (
						<Link
							key={index}
							href={`/${url}/${item?.slug}`}
							className="w-full py-1 mb-2 border-b flex justify-start items-center"
						>
							<div className="w-14 h-14 bg-[#4ba3da]">
								{item?.picture && (
									<Image
										src={item?.picture}
										alt="image"
										width={300}
										height={300}
										className="bg-slate-200 object-contain w-full h-full"
									/>
								)}
							</div>
							<span
								style={{
									display: "-webkit-box",
									WebkitBoxOrient: "vertical",
									WebkitLineClamp: 2,
								}}
								className="text-[#155979] hover:text-[#4ba3da] overflow-hidden text-ellipsis text-left text-base max-sm:text-sm w-[calc(100%-56px)] ml-3"
							>
								{item?.title}
							</span>
						</Link>
					);
				})}
			</div>
		</section>
	);
}
