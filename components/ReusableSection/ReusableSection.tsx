"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";

interface ReusableSectionProps {
	icon: StaticImageData;
	title: string;
	pattern: StaticImageData;
	textTitle: string;
	firstText: string;
	secondText?: string;
}

const ReusableSection = ({
	icon,
	title,
	pattern,
	textTitle,
	firstText,
	secondText,
}: ReusableSectionProps) => {
	return (
		<section className="p-6 lg:p-14">
			<div className="flex flex-col items-center md:items-start justify-between md:flex-row max-w-6xl mx-auto">
				<div className="flex flex-col gap-8 w-full lg:w-1/2">
					<div className="flex items-center gap-4">
						<Image src={icon} alt="icon" width={30} />
						<h2 className="text-base md:text-2xl font-CodecPro500 uppercase text-gray-100">
							{title}
						</h2>
					</div>
					<div>
						<Image
							src={pattern}
							alt="pattern"
							width={500}
							className="opacity-20 scale-y-[-1] -rotate-180 pl-4"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-6 w-full lg:w-1/2">
					<h3 className="font-CodecPro200 text-base md:text-2xl text-gray-100 leading-[33.6px]">
						{textTitle}
					</h3>
					<p className="font-CodecPro300 text-sm md:text-base text-gray-70 leading-6">
						{firstText}
					</p>
					{secondText && (
						<p className="font-CodecPro300 text-sm md:text-base text-gray-70 leading-6">
							{secondText}
						</p>
					)}
				</div>
			</div>
		</section>
	);
};

export default ReusableSection;
