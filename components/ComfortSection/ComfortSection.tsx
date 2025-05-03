"use client";

import { comfort } from "@/data/comfort";
import Image from "next/image";
import sectionBG from "@/public/assets/sectionBG.png";
import { useLocale, useTranslations } from "next-intl";

const ComfortSection = () => {
	const t = useTranslations("cottages.comfort");
	const locale = useLocale() as "en" | "uk";

	return (
		<section className="p-10 sm:p-14 bg-gray-100">
			<div className="flex flex-col md:flex-row sm:gap-10 lg:max-w-6xl lg:mx-auto">
				<Image
					src={sectionBG}
					alt="comfort and peace"
					className="object-cover w-full md:w-1/2"
				/>
				<div className="flex flex-col">
					<h2 className="font-CodecPro500 text-base md:text-2xl text-white mt-6 uppercase leading-6">
						{t("title")}
					</h2>
					<p className="font-CodecPro200 text-sm md:text-base text-gray-30 mt-4 leading-6">
						{t("description")}
					</p>
					<p className="font-CodecPro200 text-sm md:text-base text-gray-30 mt-4 leading-6">
						{t("list")}
					</p>
					<ul className="grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-4 mt-6">
						{comfort[locale].map(({ icon, text }, i) => (
							<li key={i} className="flex items-center gap-4">
								<Image
									src={icon}
									alt={`comfort-icon-${i + 1}`}
									className="w-6 h-6 shrink-0"
								/>
								<span className="font-CodecPro300 text-gray-30 text-sm md:text-base">
									{text}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ComfortSection;
