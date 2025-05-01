"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import CottagesSlider from "./CottageSlider/CottagesSlider";
import pattern from "@/public/assets/patterns/patterns2.svg";

const CottagesSection = () => {
	const t = useTranslations("sections.cottages");

	return (
		<section id="cottages" className="relative overflow-visible">
			<div className="relative w-full max-w-6xl mx-auto pb-5 pt-14">
				<div className="absolute -top-11 left-[32%]">
					<Image
						src={pattern}
						alt="Decorative background pattern"
						className="w-[202px]"
					/>
				</div>

				<h2 className="text-center text-gray-100 text-base md:text-2xl font-CodecPro500 uppercase leading-6 mx-3 lg:mx-0">
					{t("title")}
				</h2>

				<p className="mt-6 mx-auto max-w-[596px] text-center text-sm md:text-base leading-6 font-CodecPro300">
					{t("description")}
				</p>

				<CottagesSlider />
			</div>
		</section>
	);
};

export default CottagesSection;
