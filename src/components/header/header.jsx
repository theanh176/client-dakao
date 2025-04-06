"use client";
import { FullLogoDaKao } from "@/utils/images";
import { ItemMenuLeft, MenuHeader } from "@/utils/menu";
import { Button, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FiPhoneOutgoing } from "react-icons/fi";
import { GoClock, GoLocation } from "react-icons/go";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import DrawerModel from "../modal/drawerModel";
import "./header.scss";

export default function Header() {
	const router = useRouter();
	const isTabletOrMobile = useMediaQuery({ minWidth: 1024 });
	const [openMenuMobile, setOpenMenuMobile] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	const handleScroll = () => {
		const header = document.querySelector("header");
		if (window.scrollY > 140) {
			header.classList.add("visible");
		} else {
			header.classList.remove("visible");
		}
	};

	const [isTabItem, setIsTabItem] = useState(1);
	const pathName = usePathname();
	useEffect(() => {
		const pathName1 = "/" + pathName.split("/")[1];
		setIsTabItem(pathName1);
		setOpenMenuMobile(false);
	}, [pathName]);

	const [current, setCurrent] = useState("1");
	const onClickLeftMenu = (e) => {
		router.push(e.key);
		setCurrent(e.key);
	};
	useEffect(() => {
		setCurrent(isTabItem);
	}, [isTabItem]);
	function getItem(label, key, icon, children, type) {
		return {
			key,
			icon,
			children,
			label,
			type,
		};
	}
	const items = [
		...ItemMenuLeft?.map((item, index) => {
			return getItem(
				item?.name,
				item?.path
				// item?.icon,
				// item?.tabItem && [
				// 	...item?.tabItem?.map((tabItem) => {
				// 		return getItem(tabItem?.name, tabItem?.path);
				// 	}),
				// ]
			);
		}),
	];

	return (
		<React.Fragment>
			<header className="h-[70px] px-20 max-lg:px-10 max-sm:px-5 flex justify-between items-center">
				<Link href={"/"} className="cursor-pointer w-10">
					<Image
						alt="logo"
						src={FullLogoDaKao}
						width={135}
						height={100}
					/>
				</Link>
				<div className="max-lg:hidden relative h-full flex justify-between items-center w-[calc(100%-275px)] px-20 max-xl:px-4">
					{/* <div className="line_follow"></div> */}
					{MenuHeader.map((item, index) => (
						<Link
							href={item.href}
							key={index}
							className={`!text-xs !tracking-[.2em] !font-semibold !uppercase h-full flex justify-center items-center cursor-pointer ${
								current === item.href
									? "text-[#4ba3da] border-[#4ba3da]"
									: "hover:text-[#4ba3da] border-transparent"
							} border-t-2`}
						>
							{item.title}
						</Link>
					))}
				</div>
				<div className="!text-xs !tracking-[.2em] !font-semibold !uppercase max-lg:hidden flex justify-end items-center gap-4">
					{/* <span className="cursor-pointer hover:text-[#4ba3da] border-transparent border-t-2">
						Tìm kiếm
					</span> */}
					<div className="w-[70px]"></div>
				</div>
				<div className="lg:hidden flex justify-end items-center gap-4">
					<Button
						onClick={() => setOpenMenuMobile(true)}
						className="btn_icon_primary"
					>
						<HiOutlineMenuAlt2 className="w-6 h-6" />
					</Button>
				</div>
			</header>

			{/* Menu mobile */}
			<DrawerModel
				title={
					<header className="h-[70px] w-[320px] text-xs tracking-[.2em] font-semibold uppercase px-5 flex justify-between items-center">
						<Link href={"/"} className="cursor-pointer">
							<Image
								alt="logo"
								src={FullLogoDaKao}
								width={135}
								height={100}
							/>
						</Link>
						<div className="flex justify-end items-center gap-4">
							<Button
								onClick={() => setOpenMenuMobile(false)}
								className="btn_icon_primary"
							>
								<AiOutlineClose className="w-5 h-5" />
							</Button>
						</div>
					</header>
				}
				placement={"left"}
				height={"fit-content"}
				width={330}
				open={isTabletOrMobile ? false : openMenuMobile}
				onClose={() => setOpenMenuMobile(false)}
			>
				<div className="box_leftmenu_mobile pt-5 max-h-[calc(90vh)] overflow-hidden">
					<div className="max-h-[85vh] overflow-y-auto">
						<div className="h-fit">
							<Menu
								onClick={onClickLeftMenu}
								style={{
									width: 250,
								}}
								defaultOpenKeys={["/"]}
								selectedKeys={[current]}
								mode="inline"
								items={items}
							/>
						</div>
					</div>
				</div>
			</DrawerModel>

			<div className="bg-white max-lg:hidden">
				<div className="h-[40px] px-10 bg-[#8bc63b] text-white flex justify-between items-center">
					<div className="h-full flex gap-3 justify-start items-center">
						<GoClock />
						<span className="text-xs">Thứ 2 - Thứ 7 8AM 7PM</span>
					</div>
					<div className="h-full flex gap-10 justify-end items-center">
						<div className="flex gap-3 justify-start items-center">
							<FiPhoneOutgoing />
							<span>
								<a
									href={`tel:0766110086`}
									className="hover:text-[#4ba3da]"
								>
									0766 110 086
								</a>{" "}
								{/* -{" "}
								<a
									href={`tel:0907327787`}
									className="hover:text-[#4ba3da] text-xs"
								>
									0907 327 787
								</a>{" "} */}
							</span>
						</div>
						<div className="flex gap-3 justify-start items-center hover:text-[#4ba3da]">
							<BiMessageDetail />
							<a
								href={`mailto:nhakhoa.dakao@gmail.com`}
								className="text-xs"
							>
								nhakhoa.dakao@gmail.com
							</a>
						</div>
						<a
							className="flex gap-3 justify-start items-center hover:text-[#4ba3da]"
							itemProp="location"
							href={`https://maps.app.goo.gl/eWLSTAdSr4RwFSqbA`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<GoLocation />
							<span className="text-xs">
								123B Nơ Trang Long, Phường 11, Quận Bình Thạnh,
								TP.HCM
							</span>
						</a>
					</div>
				</div>
				<div className="h-[100px] px-10 flex justify-between items-center">
					<Link href={"/"} className="cursor-pointer w-16">
						<Image
							alt="logo"
							src={FullLogoDaKao}
							width={135}
							height={100}
						/>
					</Link>
					<div className="h-full flex justify-between items-center w-[calc(100%-275px)] px-20 max-xl:px-4">
						{MenuHeader.map((item, index) => (
							<Link
								href={item.href}
								key={index}
								className={`!text-xs !tracking-[.2em] !font-semibold !uppercase h-full flex justify-center items-center cursor-pointer ${
									current === item.href
										? "text-[#4ba3da] border-[#4ba3da]"
										: "hover:text-[#4ba3da] border-transparent"
								} border-t-2`}
							>
								{item.title}
							</Link>
						))}
					</div>
					<div className="w-[135px] !text-xs !tracking-[.2em] !font-semibold !uppercase flex justify-end items-center gap-4">
						{/* <span className="cursor-pointer hover:text-[#4ba3da] border-transparent border-t-2">
							Tìm kiếm
						</span>
						<Button className="btn_icon_primary">
							<HiOutlineMenuAlt2 className="w-6 h-6" />
						</Button> */}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
