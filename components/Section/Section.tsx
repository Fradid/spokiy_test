"use client"

import Image, { StaticImageData } from "next/image";

interface SectionProps {
	title: string;
	description: string;
	img: StaticImageData;
}

const Section = ({ title, description, img }: SectionProps) => {
	return (
		<section className="max-w-6xl flex flex-col md:flex-row gap-6 md:gap-0 mx-auto p-10 md:p-14">
			<div
				className="w-full flex gap-4 items-start"
				data-aos="fade-up-right"
				data-aos-easing="linear"
				data-aos-duration="300"
			>
				<Image src={img} alt="pattern" width={21} />
				<h2 className="text-base leading-5 uppercase text-gray-100 font-CodecPro500 md:text-2xl lg:leading-6">
					{title}
				</h2>
			</div>
			<p
				className="w-full font-CodecPro300 text-xs text-gray-70 leading-5 md:text-base lg:leading-6"
				data-aos="fade-down-left"
				data-aos-easing="linear"
				data-aos-duration="300"
			>
				{description}
			</p>
		</section>
	);
};

export default Section;
