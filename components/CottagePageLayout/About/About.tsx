"use client";

import Image from "next/image";

import pattern from "@/public/assets/patterns/patterns.svg";
import List from "../List/List";
import Carousel from "../Carousel/Carousel";
import { CottageData } from "@/types/types";

const About = ({ data }: { data: CottageData }) => {
	return (
		<section>
			<div className="max-w-7xl flex flex-col items-center gap-3 sm:gap-0 sm:flex-row sm:items-start justify-between mx-auto p-10">
				<div className="w-3xs sm:w-1/2 flex items-center gap-8">
					<Image src={pattern} alt="pattern" />
					<h2 className="font-CodecPro500 text-base uppercase text-gray-100 md:text-2xl">
						{data.cottageName}
					</h2>
				</div>
				<p className="w-3xs sm:w-1/2 font-CodecPro300 text-base text-gray-100 md:text-2xl">
					{data.text}
				</p>
			</div>

			<div className="max-w-7xl md:py-14 flex flex-col gap-8 sm:gap-0 sm:flex-row mx-auto">
				<Carousel images={data.planSlides} />

				<div className="flex flex-col items-center justify-center w-3xs md:w-sm mx-auto">
					<List rooms={data.rooms} totalArea={data.totalArea} />
				</div>
			</div>
		</section>
	);
};

export default About;
