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
				<div
					className="flex items-center w-full"
					data-aos="fade-right"
					data-aos-easing="linear"
					data-aos-duration="300"
				>
					<Image
						src={sectionBG}
						alt="comfort and peace"
						className="object-cover"
					/>
				</div>
				<div className="flex flex-col w-full">
					<h2
						className="font-CodecPro500 text-base md:text-2xl text-white mt-6 uppercase leading-6"
						data-aos="fade-left-up"
						data-aos-easing="linear"
						data-aos-duration="300"
					>
						{t("title")}
					</h2>
					<p
						className="font-CodecPro200 text-sm md:text-base text-gray-30 mt-4 leading-6"
						data-aos="fade-left-up"
						data-aos-easing="linear"
						data-aos-duration="300"
					>
						{t("description")}
					</p>
					<p
						className="font-CodecPro200 text-sm md:text-base text-gray-30 mt-4 leading-6"
						data-aos="fade-up"
						data-aos-easing="linear"
						data-aos-duration="300"
					>
						{t("list")}
					</p>
					<ul className="grid grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-4 mt-6">
						{comfort[locale].map(({ icon, text }, i) => {
							const delay = [300, 500, 700, 900, 1100, 1300];

							return (
								<li
									key={i}
									className="flex items-center gap-4"
									data-aos="fade-up"
									data-aos-easing="linear"
									data-aos-duration="500"
									data-aos-delay={delay[i % delay.length]}
								>
									<Image
										src={icon}
										alt={`comfort-icon-${i + 1}`}
										className="w-6 h-6 shrink-0"
									/>
									<span className="font-CodecPro300 text-gray-30 text-sm md:text-base">
										{text}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ComfortSection;
