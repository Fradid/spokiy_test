"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import icon from "@/public/assets/patterns/02.svg";
import pattern from "@/public/assets/patterns/11.svg";
import liFirst from "@/public/assets/patterns/13.svg";
import liSecond from "@/public/assets/patterns/14.svg";
import { company, investor } from "@/data/quality";

const stats = [
	{
		amount: "2000$",
		labelKey: "monthlyProfit",
		prefixKey: "upTo",
	},
	{
		amount: "9",
		unitKey: "years",
		labelKey: "payback",
		prefixKey: "upTo",
	},
	{
		amount: "11%",
		labelKey: "annualIncome",
	},
];

const QualitySection = () => {
	const t = useTranslations("sections.quality");
	const locale = useLocale() as "en" | "uk";

	return (
		<section className="p-6 md:px-14">
			<div className="flex flex-col items-start md:flex-row justify-between gap-10 max-w-6xl mx-auto mb-10">
				<div className="flex items-center gap-4 md:w-1/2">
					<Image src={icon} alt="icon" width={30} />
					<h2 className="text-base lg:text-2xl font-CodecPro500 uppercase text-gray-100">
						{t("title")}
					</h2>
				</div>

				<div className="flex flex-col gap-6 md:w-1/2">
					<p className="font-CodecPro300 text-sm lg:text-base text-gray-70 leading-6">
						{t("firstText")}
					</p>
					<p className="font-CodecPro300 text-sm lg:text-base text-gray-70 leading-6">
						{t("secondText")}
					</p>
				</div>
			</div>

			<div className="flex flex-col justify-around gap-5 max-w-6xl mx-auto text-center sm:flex-row">
				{stats.map(({ amount, labelKey, prefixKey, unitKey }, index) => (
					<React.Fragment key={index}>
						<div className="flex flex-col items-center">
							<p className="text-4xl lg:text-5xl text-secondary-100 font-CodecPro200">
								{prefixKey && (
									<span className="text-sm lg:text-base font-CodecPro300 text-secondary-100">
										{t(prefixKey)}
									</span>
								)}{" "}
								{amount}{" "}
								{unitKey && <span className="text-base">{t(unitKey)}</span>}
							</p>
							<p className="text-sm lg:text-base font-CodecPro300 text-gray-70 mt-2">
								{t(labelKey)}
							</p>
						</div>
						{index < stats.length - 1 && (
							<div className="self-auto w-full h-px sm:h-auto sm:w-px bg-primary-40"></div>
						)}
					</React.Fragment>
				))}
			</div>

			<div className="flex items-center justify-center m-[50px]">
				<Image src={pattern} alt="pattern" className="opacity-20" />
			</div>

			<div className="mx-auto flex flex-col max-w-6xl justify-around gap-10 sm:flex-row">
				{/* Investor List */}
				<div className="self-end ">
					<h3 className="mb-5 font-CodecPro200 leading-[33.6px] text-base lg:text-2xl text-gray-100">
						{t("investor")}
					</h3>
					<ul>
						{investor[locale].map((item, idx) => (
							<li key={idx} className="flex flex-row-reverse sm:flex-row gap-4 mb-4">
								<Image src={liFirst} alt={`bullet point ${idx}`} width={16} />
								<p className="text-sm lg:text-base font-CodecPro300 text-gray-70 leading-6">
									{item}
								</p>
							</li>
						))}
					</ul>
				</div>

				{/* Divider */}
				<div className="self-stretch w-full h-px sm:h-auto sm:w-px bg-primary-40" />

				{/* Company List */}
				<div>
					<h3 className="mb-5 font-CodecPro200 leading-[33.6px] text-base lg:text-2xl text-gray-100">
						{t("company")}
					</h3>
					<ul>
						{company[locale].map((item, idx) => (
							<li key={idx} className="flex gap-4 mb-4">
								<Image src={liSecond} alt={`bullet point ${idx}`} width={16} />
								<p className="text-sm lg:text-base font-CodecPro300 text-gray-70 leading-6">
									{item}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default QualitySection;
