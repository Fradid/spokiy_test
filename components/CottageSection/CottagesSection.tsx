"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import CottagesSlider from "./CottageSlider/CottagesSlider";
import pattern from "@/public/assets/patterns/patterns2.svg";

const CottagesSection = () => {
	const t = useTranslations("sections.cottages");

	const commonAosProps = {
		"data-aos": "fade-down",
		"data-aos-easing": "linear",
		"data-aos-duration": "300",
	};

	return (
		<section id="cottages" className="relative overflow-visible">
			<div className="relative w-full max-w-6xl mx-auto pb-5 pt-14">
				{/* Pattern image */}
				<div className="absolute top-[-44px] left-[32%]" {...commonAosProps}>
					<Image
						src={pattern}
						alt="Decorative background pattern"
						className="w-[202px]"
					/>
				</div>

				{/* Heading */}
				<h2
					{...commonAosProps}
					className="text-center text-gray-100 text-2xl font-CodecPro500 uppercase leading-6"
				>
					{t("title")}
				</h2>

				{/* Description */}
				<p
					{...commonAosProps}
					className="mt-6 mx-auto w-full max-w-[596px] text-center text-base leading-6 font-CodecPro300"
				>
					{t("description")}
				</p>

				{/* Slider */}
				<CottagesSlider />
			</div>
		</section>
	);
};

export default CottagesSection;
