"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import mount from "@/public/assets/images/cards/1.svg";
import sun from "@/public/assets/images/cards/2.svg";
import wave from "@/public/assets/images/cards/3.svg";
import wind from "@/public/assets/images/cards/4.svg";
import cup from "@/public/assets/images/cards/5.svg";
import plate from "@/public/assets/images/cards/6.svg";
import tv from "@/public/assets/images/cards/7.svg";
import wifi from "@/public/assets/images/cards/8.svg";

const facilities = [
	{ icon: mount, labelKey: "facility.mount" },
	{ icon: sun, labelKey: "facility.sun" },
	{ icon: wave, labelKey: "facility.wave" },
	{ icon: wind, labelKey: "facility.wind" },
	{ icon: cup, labelKey: "facility.cup" },
	{ icon: plate, labelKey: "facility.plate" },
	{ icon: tv, labelKey: "facility.tv" },
	{ icon: wifi, labelKey: "facility.wifi" },
];

const Facility = () => {
	const t = useTranslations("cottage");

	return (
		<section>
			<div className="flex flex-col max-w-7xl gap-10 py-14 px-10 mx-auto">
				<h2
					className="font-CodecPro500 text-base md:text-2xl uppercase text-gray-100"
					data-aos="fade-right"
					data-aos-easing="linear"
					data-aos-duration="500"
				>
					{t("facility.title")}
				</h2>
				<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					{facilities.map(({ icon, labelKey }, index) => {
						const delay = [0, 200, 400, 600, 800, 1000, 1200, 1400];

						return (
							<li
								key={index}
								className="bg-primary-30 flex items-center sm:flex-col sm:items-start gap-6 p-6"
								data-aos="fade-zoom-in"
								data-aos-easing="ease-in-back"
								data-aos-duration="800"
								data-aos-offset="0"
								data-aos-delay={delay[index % delay.length]}
							>
								<div className="bg-primary-20 flex items-center justify-center p-2 border border-secondary-20">
									<Image src={icon} alt={labelKey} />
								</div>
								<p className="font-CodecPro300 text-sm text-gray-100 md:text-base">
									{t(labelKey)}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Facility;
