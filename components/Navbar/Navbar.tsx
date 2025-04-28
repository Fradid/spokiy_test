"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import downloadIcon from "@/public/assets/icons/download.svg";
import chevronDownIcon from "@/public/assets/icons/chevron-down.svg";
import copyIcon from "@/public/assets/icons/copy-icon.svg";
import arrowIcon from "@/public/assets/icons/arrow-up-right.svg";
import burgerMenuIcon from "@/public/assets/icons/burger-menu.svg";
import closeIcon from "@/public/assets/icons/x.svg";
import { useModal } from "@/context/ModalContext";

const cottagePrices: Record<string, string> = {
	podyh: "199 101 $",
	nebo: "176 530 $",
	"solar3-1": "130 924 $",
	"solar3-2": "130 924 $",
	svitanok: "153 802 $",
	dyvo: "108 118 $",
	showAll: "",
};

const cottagesSections = [
	"podyh",
	"nebo",
	"solar3-1",
	"solar3-2",
	"svitanok",
	"dyvo",
	"showAll",
];

const contactItems = [
	{ label: "+380 73 808 11 88", copyText: "+380738081188" },
	{ label: "sales@lehit-village.com", copyText: "sales@lehit-village.com" },
	{ label: "Instagram", href: "https://www.instagram.com/lehit.village" },
	{
		label: "Facebook",
		href: "https://www.facebook.com/profile.php?id=61564299561261",
	},
];

const Navbar = () => {
	const t = useTranslations("navbar");
	const ct = useTranslations("cottages");
	const { toggle } = useModal();

	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [expandedSection, setExpandedSection] = useState<string | null>(null);

	const menuItems = [
		{ name: t("cottages"), dropdownKey: "cottages" },
		{ name: t("investment"), href: "/investment" },
		{ name: t("presentation"), isButton: true, icon: downloadIcon },
		{ name: t("contacts"), dropdownKey: "contacts" },
	];

	const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

	const handleExpand = (key: string) =>
		setExpandedSection((prev) => (prev === key ? null : key));

	const renderDropdown = (dropdownKey: string) => {
		if (dropdownKey === "contacts") {
			return contactItems.map(({ label, href, copyText }, idx) => (
				<li
					key={idx}
					className="flex justify-between items-center py-4 pl-4 pr-3 hover:bg-primary-30 cursor-pointer"
					onClick={() => copyText && copyToClipboard(copyText)}
				>
					{href ? (
						<Link
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full flex items-center justify-between"
						>
							{label}
							<Image src={arrowIcon} alt="open" />
						</Link>
					) : (
						<span className="w-full flex items-center justify-between">
							{label}
							<Image src={copyIcon} alt="copy" />
						</span>
					)}
				</li>
			));
		}

		return cottagesSections.map((key) => (
			<li
				key={key}
				className="py-4 pl-4 pr-3 hover:bg-primary-30 cursor-pointer"
			>
				<Link
					href={`/cottages/${key.replace("-", ".")}`}
					onClick={() => setMobileMenuOpen(false)}
				>
					<div className="flex flex-col gap-1">
						<p className="font-CodecPro300 leading-6 text-gray-100">
							{ct(key)}
						</p>
						{cottagePrices[key] && (
							<p className="font-CodecPro300 text-sm text-gray-70">
								{cottagePrices[key]}
							</p>
						)}
					</div>
				</Link>
			</li>
		));
	};

	return (
		<nav className="relative font-CodecPro200">
			{/* Desktop Navbar */}
			<div className="hidden lg:flex items-center gap-1.5 text-lg">
				<ul className="flex flex-wrap items-center gap-1.5">
					{menuItems.map(({ name, href, isButton, icon, dropdownKey }, idx) => (
						<li
							key={idx}
							className="relative group hover:border-b hover:border-gray-100 hover:mb-[-1px]"
						>
							{isButton ? (
								<button
									className="flex items-center gap-3 py-4 pl-4 pr-3 leading-[18px] cursor-pointer"
									onClick={() => toggle("presentation")}
								>
									{name}
									{icon && <Image src={icon} alt="icon" />}
								</button>
							) : href ? (
								<Link
									href={href}
									className="flex py-4 pl-4 pr-3 leading-[18px]"
								>
									{name}
								</Link>
							) : (
								<>
									<button className="flex items-center gap-3 py-4 pl-4 pr-3 leading-[18px]">
										{name}
										<Image
											src={chevronDownIcon}
											alt="toggle"
											className="transition-transform group-hover:rotate-180"
										/>
									</button>
									<ul className="absolute top-full right-0 w-max bg-[#F5F5ED] shadow-lg text-base z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity -mt-px">
										{renderDropdown(dropdownKey!)}
									</ul>
								</>
							)}
						</li>
					))}
				</ul>
			</div>

			{/* Mobile Navbar Toggle */}
			<div className="flex items-center justify-between lg:hidden">
				<button onClick={() => setMobileMenuOpen((prev) => !prev)}>
					<Image
						src={isMobileMenuOpen ? closeIcon : burgerMenuIcon}
						alt="menu"
						width={24}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="fixed top-[62px] right-0 bg-[#F5F5ED] z-40 shadow-md overflow-hidden w-full"
					>
						<ul className="flex flex-col p-5 text-sm">
							{/* Section: Cottages and Investment */}
							<li className="flex flex-col gap-4">
								<button
									className="flex items-center justify-between"
									onClick={() => handleExpand("cottages")}
								>
									<span>{t("cottages")}</span>
									<Image
										src={chevronDownIcon}
										alt="expand"
										className={`transition-transform ${
											expandedSection === "cottages" ? "rotate-180" : ""
										}`}
									/>
								</button>
								<AnimatePresence>
									{expandedSection === "cottages" && (
										<motion.ul
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.2 }}
											className="flex flex-col gap-2 pl-4"
										>
											{cottagesSections.map((key) => (
												<li key={key}>
													<Link
														href={`/cottages/${key.replace("-", ".")}`}
														onClick={() => setMobileMenuOpen(false)}
														className="flex justify-between"
													>
														<p className="font-CodecPro300 leading-6 text-gray-100">
															{ct(key)}
														</p>
														{cottagePrices[key] && (
															<p className="font-CodecPro300 text-sm text-gray-70">
																{cottagePrices[key]}
															</p>
														)}
													</Link>
												</li>
											))}
										</motion.ul>
									)}
								</AnimatePresence>

								<Link
									href="/investment"
									onClick={() => setMobileMenuOpen(false)}
								>
									{t("investment")}
								</Link>

								<button
									className="flex items-center gap-2 cursor-pointer"
									onClick={() => {
										toggle("presentation");
										setMobileMenuOpen(false);
									}}
								>
									{t("presentation")}
									<Image src={downloadIcon} alt="download" />
								</button>
							</li>

							{/* Divider */}
							<div className="border-t my-4 border-primary-40" />

							{/* Section: Phones and Emails */}
							<li className="flex flex-col gap-4">
								{contactItems.slice(0, 2).map(({ label, copyText }, idx) => (
									<div
										key={idx}
										className="flex items-center justify-between cursor-pointer"
										onClick={() => copyText && copyToClipboard(copyText)}
									>
										{label}
										<Image src={copyIcon} alt="copy" />
									</div>
								))}
							</li>

							{/* Divider between phone/email and social media */}
							<div className="border-t my-4 border-primary-40" />

							{/* Section: Social Media Links */}
							<li className="flex flex-col gap-4">
								{contactItems.slice(2).map(({ label, href }, idx) => (
									<Link
										key={idx}
										href={href!}
										target="_blank"
										className="flex justify-between items-center"
									>
										{label}
										<Image src={arrowIcon} alt="open" />
									</Link>
								))}
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
