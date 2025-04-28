"use client";

import Image from "next/image";
import React from "react";
import cottage from "@/public/assets/images/cottage1.jpg";
import { useModal } from "@/context/ModalContext";
import { useTranslations } from "next-intl";

const PresentationSection = () => {
	const { toggle } = useModal();
	const t = useTranslations("sections.presentation");
	const btn = useTranslations("btnLabel")

	return (
		<section id="presentation">
			<div className="max-w-6xl p-6 lg:p-14 flex items-center flex-col md:flex-row gap-5 bg-primary-100 mx-auto">
				<div className="w-full md:w-1/2">
					<h2 className="font-CodecPro500 text-base lg:text-2xl text-white mt-6 uppercase leading-6">
						{t("title")}
					</h2>
					<p className="font-CodecPro200 text-sm lg:text-base text-gray-30 mt-4 leading-6">
						{t("text")}
					</p>
					<div className="flex flex-col gap-2">
						<p className="font-CodecPro200 text-sm lg:text-base text-gray-30 mt-4 leading-6">
							{t("btnText")}
						</p>
						<button
							className="text-white font-CodecPro300 text-sm lg:text-base border border-white leading-6 py-3 px-5 w-full text-center hover:bg-primary-80 hover:cursor-pointer"
							onClick={() => toggle("presentation")}
						>
							{btn("download")}
						</button>
					</div>
				</div>
				<Image src={cottage} alt="presentation image" width={500} className="w-full md:w-1/2" />
			</div>
		</section>
	);
};

export default PresentationSection;
