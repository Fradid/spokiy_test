"use client";

import { useTranslations } from "next-intl";
// import Image from "next/image"; // Uncomment if you restore the pattern
// import pattern from "@/public/assets/patterns/08.svg";

interface InteriorProps {
	description: string;
}

const Interior = ({ description }: InteriorProps) => {
	const t = useTranslations("cottage");

	const labelStyle =
		"font-CodecPro300 text-gray-70 text-base md:py-10 md:w-1/4";
	const contentStyle = "font-CodecPro300 text-gray-100 text-base md:w-4/5";
	const rowBaseStyle =
		"flex flex-col items-start gap-3 md:gap-0 md:flex-row md:items-center";
	const borderedRow = `${rowBaseStyle} pt-3 md:pt-0 border-t border-gray-40`;

	const colorClasses = [
		"bg-brown",
		"bg-brown-100",
		"bg-brown-200",
		"bg-brown-300",
		"bg-brown-400",
	];

	return (
		<section className="max-w-7xl p-14 mx-auto relative">
			<h2 className="font-CodecPro500 text-base md:text-2xl uppercase text-gray-100">
				{t("interior.title")}
			</h2>

			<ul className="flex flex-col mt-6 gap-6 md:gap-0">
				<li className={rowBaseStyle}>
					<p className={labelStyle}>{t("interior.color")}</p>
					<div className="flex gap-3 md:w-4/5">
						{colorClasses.map((color, idx) => (
							<div
								key={idx}
								className={`h-6 w-6 lg:h-10 lg:w-10 border border-primary-50 rounded-full ${color}`}
							/>
						))}
					</div>
				</li>

				<li className={borderedRow}>
					<p className={labelStyle}>{t("interior.style.title")}</p>
					<p className={contentStyle}>{t("interior.style.description")}</p>
				</li>

				<li className={borderedRow}>
					<p className={labelStyle}>{t("interior.design")}</p>
					<p className={contentStyle}>{description}</p>
				</li>
			</ul>

			{/* Uncomment below to include the background pattern */}
			{/* <Image src={pattern} alt="pattern" className="absolute right-16 -top-24 w-72 opacity-20" /> */}
		</section>
	);
};

export default Interior;
