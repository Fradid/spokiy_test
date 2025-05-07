"use client";

import Image from "next/image";
import React from "react";
import cottage from "@/public/assets/images/cottage1.jpg";
import { useModal } from "@/context/ModalContext";
import { useTranslations } from "next-intl";

interface PresentationProps {
	title: string;
	text: string;
}

const PresentationSection = ({ title, text }: PresentationProps) => {
	const { toggle } = useModal();
	const t = useTranslations("sections.presentation");
	const btn = useTranslations("btnLabel");

	return (
		<section id="presentation">
			<div className="max-w-6xl p-6 lg:p-14 flex items-center flex-col md:flex-row gap-5 bg-primary-100 mx-auto">
				<div className="w-full md:w-1/2">
					<h2
						className="font-CodecPro500 text-base md:text-2xl text-white mt-6 uppercase leading-6"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="300"
					>
						{title}
					</h2>
					<p
						className="font-CodecPro200 text-sm md:text-base text-gray-30 mt-4 leading-6"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="300"
					>
						{text}
					</p>
					<div
						className="flex flex-col gap-2"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="300"
					>
						<p className="font-CodecPro200 text-sm md:text-base text-gray-30 mt-4 leading-6">
							{t("btnText")}
						</p>
						<button
							className="transparent-btn text-white border border-white hover:bg-primary-80 hover:cursor-pointer"
							onClick={() => toggle("presentation")}
						>
							{btn("download")}
						</button>
					</div>
				</div>
				<Image
					src={cottage}
					alt="presentation image"
					width={500}
					className="w-full md:w-1/2"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="300"
				/>
			</div>
		</section>
	);
};

export default PresentationSection;
