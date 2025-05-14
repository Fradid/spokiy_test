"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import InfrastructureSlider from "./InfrastructureSlider/InfrastructureSlider";
import clsx from "clsx";

interface SectionProps {
	title: string;
	img: StaticImageData;
	location?: boolean;
}

const InfrastructureSection = ({ title, img, location = false }: SectionProps) => {

	return (
		<section
			id="infrastructure"
			className={clsx("flex justify-center items-center", !location && "bg-[#f8f7f2]")}
		>
			<div className={clsx("flex flex-col items-start p-4 lg:py-14 max-w-6xl mx-auto", location ? "md:w-6xl w-full" : "lg:h-[845px]")}>
				<div
					className="flex items-start justify-start gap-4 mb-5"
					data-aos="fade-right"
					data-aos-delay="300"
				>
					<Image src={img} alt="infrastructure" width={27} />
					<h2 className="text-base leading-6 uppercase text-gray-100 font-CodecPro500 md:text-2xl">
						{title}
					</h2>
				</div>
				<InfrastructureSlider location={location} />
			</div>
		</section>
	);
};

export default InfrastructureSection;
