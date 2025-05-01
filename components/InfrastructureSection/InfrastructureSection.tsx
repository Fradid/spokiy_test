"use client";

import Image from "next/image";
import React from "react";
import pattern from "@/public/assets/patterns/08.svg";
import { useTranslations } from "next-intl";
import InfrastructureSlider from "./InfrastructureSlider/InfrastructureSlider";

const InfrastructureSection = () => {
	const t = useTranslations("sections.infrastructure");

	return (
		<section id="infrastructure" className="flex justify-center items-center bg-[#f8f7f2]">
			<div className="flex flex-col items-start lg:h-[845px] p-5 lg:py-14 max-w-6xl mx-auto">
				<div className="flex items-start justify-start gap-4 mb-5">
					<Image src={pattern} alt="infrastructure" width={27} />
					<h2 className="text-base leading-6 uppercase text-gray-100 font-CodecPro500 md:text-2xl">
						{t("title")}
					</h2>
				</div>
				<InfrastructureSlider />
			</div>
		</section>
	);
};

export default InfrastructureSection;
