"use client";

import { useModal } from "@/context/ModalContext";
import { useTranslations } from "next-intl";
import React from "react";

interface ResultProps {
	cost: number;
	profit: number;
	payback: number;
	annualReturn: number;
}

const Result = ({ cost, profit, payback, annualReturn }: ResultProps) => {
	const t = useTranslations("sections.calculator.result");
	const btn = useTranslations("btnLabel");
	const { toggle } = useModal();

	const labelClass = "font-CodecPro300 text-base text-gray-100 leading-6";
	const subLabelClass = "font-CodecPro200 text-base leading-6 text-gray-70";
	const valueClass = "font-CodecPro300 text-base text-gray-100 leading-6";

	const resultItems = [
		{
			label: t("profit"),
			sublabel: `$/ ${t("month")}`,
			value: `$${profit.toFixed(1)}`,
		},
		{
			label: t("payback"),
			sublabel: t("years"),
			value: payback.toFixed(1),
		},
		{
			label: t("payback"),
			sublabel: `% ${t("annual")}`,
			value: `${annualReturn.toFixed(1)} %`,
		},
	];

	return (
		<div className="lg:ml-10 flex flex-col bg-gray-20 justify-around w-full lg:w-2/5">
			<div className="bg-primary-100 p-8">
				<p className="font-CodecPro300 text-xs leading-4 mb-2 text-gray-60">
					{t("totalCost")}
				</p>
				<div className="font-CodecPro500 text-base leading-6 text-white">
					${cost.toLocaleString()}
				</div>
			</div>

			<ul className="p-6 space-y-2">
				{resultItems.map(({ label, sublabel, value }, i) => (
					<li key={i} className="flex justify-between">
						<span className={labelClass}>
							{label} <span className={subLabelClass}>({sublabel})</span>
						</span>
						<span className={valueClass}>{value}</span>
					</li>
				))}
			</ul>

			<div className="border-t border-primary-40 p-6">
				<button
					className="w-full py-3 px-5 text-center text-primary-90 font-CodecPro300 text-sm md:text-base leading-6 border border-primary-40 bg-transparent hover:bg-primary-50 hover:border-primary-50 cursor-pointer"
					onClick={() => {toggle("contact")}}
				>
					{btn("formBtn")}
				</button>
			</div>
		</div>
	);
};

export default Result;
