"use client";

import Image from "next/image";
import React from "react";
import pattern from "@/public/assets/patterns/11.svg";
import logo from "@/public/assets/logo.svg";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import ContactItem from "../ContactItem/ContactItem";
import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
	const t = useTranslations("footer");
	const ct = useTranslations("cottages");
	const n = useTranslations("navbar");
	const btn = useTranslations("btnLabel");

	const pathname = usePathname()

	if (pathname.includes('ganplan')) return null

	const cottagesSections = [
		"podyh",
		"nebo",
		"solar3-1",
		"solar3-2",
		"svitanok",
		"dyvo",
	];

	const menu = ["cottages", "investment"];

	const contactItems = [
		{
			label: t("contactsLabels.telephone"),
			value: "+380 73 808 11 88",
		},
		{
			label: t("contactsLabels.email"),
			value: "sales@lehit-village.com",
		},
		{
			label: t("contactsLabels.route"),
			value: t("address"),
			link: {
				href: "https://maps.app.goo.gl/mHspxA17DuSdXMAc7",
				text: btn("ourLocation"),
			},
		},
		{
			label: t("contactsLabels.sales"),
			value: t("salesAddress"),
			link: {
				href: "https://maps.app.goo.gl/2vtoy78QBBSqo1Zm8",
				text: btn("ourLocation"),
			},
		},
	];

	const socialLinks = [
		{
			href: "https://www.instagram.com/lehit.village",
			label: "Instagram",
			icon: (
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path
						d="M12 16C14.21 16 16 14.21 16 12s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
						stroke="#F2F3EC"
					/>
					<path
						d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"
						stroke="#F2F3EC"
					/>
					<path d="m17.5 6.51.01-.01" stroke="#F2F3EC" />
				</svg>
			),
		},
		{
			href: "https://www.facebook.com/profile.php?id=61564299561261",
			label: "Facebook",
			icon: (
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
					<path
						d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"
						stroke="#F2F3EC"
					/>
				</svg>
			),
		},
	];

	return (
		<footer className="bg-gray-100 text-white">
			<div className="flex flex-col md:flex-row gap-12 justify-between px-5 md:px-20 py-14">
				<div className="flex flex-col max-w-md mx-auto">
					<Image src={pattern} alt="pattern" className="mb-8" />
					<h2 className="text-2xl uppercase font-CodecPro500 leading-6 mb-2.5">
						{t("title")}
					</h2>
					<p className="text-base font-CodecPro300 leading-6 text-gray-70">
						{t("description")}
					</p>
				</div>
				<div className="flex flex-col w-full md:w-1/2">
					<ContactForm />
				</div>
			</div>

			<div className="flex flex-col items-center justify-center border-t border-primary-90">
				<div className="max-w-7xl mx-auto p-8 md:p-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Logo + description */}
					<div className="flex flex-col gap-6">
						<Image src={logo} alt="logo" />
						<p className="font-CodecPro300 text-base text-gray-70 leading-6">
							{t("logoText")}
						</p>
					</div>

					{/* Menu */}
					<div className="flex flex-col gap-6">
						<p className="font-CodecPro200 text-2xl text-secondary-100">
							{t("labels.menu")}
						</p>
						<ul className="space-y-2">
							{menu.map((item) => (
								<li key={item} className="font-CodecPro300 text-base">
									<Link href={`/${item}`}>{n(item)}</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Cottages */}
					<div className="flex flex-col gap-6">
						<p className="font-CodecPro200 text-2xl text-secondary-100">
							{t("labels.cottages")}
						</p>
						<ul className="space-y-2">
							{cottagesSections.map((cottage) => (
								<li key={cottage} className="font-CodecPro300 text-base">
									<Link href={`/cottages/${cottage.replace("-", ".")}`}>
										{ct(cottage)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contacts */}
					<div className="flex flex-col gap-6">
						<p className="font-CodecPro200 text-2xl text-secondary-100">
							{t("labels.contacts")}
						</p>
						{contactItems.map((item, idx) => (
							<ContactItem key={idx} {...item} />
						))}

						<div>
							<span className="font-CodecPro300 text-sm text-primary-80">
								{t("contactsLabels.socialMedia")}
							</span>
							<div className="flex gap-[18px] mt-2">
								{socialLinks.map(({ href, label, icon }) => (
									<Link
										key={label}
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={label}
									>
										{icon}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="flex items-center justify-center w-[90%] p-6 h-[72px] border-t border-[#2d2f33]">
					<p className="font-CodecPro300 text-base text-gray-70">
						{t("allRights")}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
