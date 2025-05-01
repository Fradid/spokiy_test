"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Result from "./Result/Result";
import Slider from "./Slider/Slider";
import { calculator } from "@/data/cottages";
import chevronDownIcon from "@/public/assets/icons/chevron-down.svg";
import Image from "next/image";

type Cottage = {
	name: string;
	details: {
		cottages: number;
		area: number;
		price: number;
		price30: number;
		price50: number;
		price70: number;
		rent: number;
		fee_pct: number;
	};
};

const Calculator = () => {
	const t = useTranslations("sections.calculator");
	const btn = useTranslations("btnLabel");

	const [percentage, setPercentage] = useState(60);
	const [initialPaymentPercentage, setInitialPaymentPercentage] = useState(50);
	const [selectedCottage, setSelectedCottage] = useState<string>("");
	const [results, setResults] = useState({
		cost: 0,
		profit: 0,
		payback: 0,
		annualReturn: 0,
		initialPayment: 0,
	});

	const calculateResults = () => {
		if (!selectedCottage) {
			return setResults(resetValues());
		}

		// Now correctly find the cottage
		const cottage = (calculator as Cottage[]).find(
			(c) => c.name === selectedCottage
		);
		if (!cottage) return setResults(resetValues());

		const { rent, fee_pct, price, price30, price50, price70 } = cottage.details;

		const monthlyProfit = Number(
			((rent * 365 * (percentage / 100) * (1 - fee_pct / 100)) / 12).toFixed(1)
		);

		// pick the right price slab
		const slabMap: Record<number, number> = {
			30: price30,
			50: price50,
			70: price70,
			100: price,
		};
		const cost = Math.round(slabMap[initialPaymentPercentage] ?? price);

		const payback = Number((cost / (monthlyProfit * 12)).toFixed(1));
		const annualReturn = Number(((monthlyProfit * 12 * 100) / cost).toFixed(1));
		const initialPayment = Number(
			((cost * initialPaymentPercentage) / 100).toFixed(1)
		);

		setResults({
			cost,
			profit: monthlyProfit,
			payback,
			annualReturn,
			initialPayment,
		});
	};

	const resetValues = () => ({
		cost: 0,
		profit: 0,
		payback: 0,
		annualReturn: 0,
		initialPayment: 0,
	});

	const renderInitialPaymentValue = () => {
		if (!selectedCottage) return "$0";
		const slabMap: Record<number, number> = {
			30: calculator.find((c) => c.name === selectedCottage)!.details.price30,
			50: calculator.find((c) => c.name === selectedCottage)!.details.price50,
			70: calculator.find((c) => c.name === selectedCottage)!.details.price70,
			100: calculator.find((c) => c.name === selectedCottage)!.details.price,
		};
		const cost = Math.round(slabMap[initialPaymentPercentage] ?? 0);
		return `$${Math.floor((cost * initialPaymentPercentage) / 100)}`;
	};

	return (
		<div className="flex flex-col items-center px-4">
			<h2 className="uppercase font-CodecPro500 text-base md:text-2xl leading-6 text-white mb-6">
				{t("title")}
			</h2>
			<p className="font-CodecPro300 text-sm md:text-base leading-6 mb-8 lg:mb-12 text-gray-70 max-w-xl text-center">
				{t("description")}
			</p>

			<div className="flex flex-col sm:flex-row justify-between items-start w-full gap-6 lg:gap-10 max-w-4xl">
				{/* Inputs */}
				<div className="flex flex-col gap-8 w-full lg:w-1/2">
					{/* Cottage */}
					<div className="flex flex-col items-center gap-6 md:flex-row">
						<div className="flex flex-col gap-2 relative w-full md:w-1/2">
							<label
								htmlFor="cottage"
								className="font-CodecPro300 text-xs leading-3.5 text-gray-70"
							>
								{t("leftSection.cottage")}
							</label>
							<select
								id="cottage"
								value={selectedCottage}
								onChange={(e) => setSelectedCottage(e.target.value)}
								className="font-CodecPro300 text-sm h-9 leading-4 py-2 px-3 appearance-none bg-gray-0"
							>
								<option value="">{t("leftSection.choose")}</option>
								{(calculator as Cottage[]).map((c) => (
									<option key={c.name} value={c.name}>
										{c.name}
									</option>
								))}
							</select>

							<div className="pointer-events-none absolute top-8 right-2 flex items-center">
								<Image src={chevronDownIcon} alt="arrow" />
							</div>
						</div>
						<div className="flex flex-col gap-2 relative w-full md:w-1/2">
							{/* Initial payment */}
							<label
								htmlFor="initial"
								className="font-CodecPro300 text-xs leading-3.5 text-gray-70"
							>
								{t("leftSection.initialPayment")}
							</label>
							<div className="flex items-center justify-between gap-4 bg-gray-0 w-full">
								<select
									id="initial"
									value={initialPaymentPercentage}
									onChange={(e) =>
										setInitialPaymentPercentage(Number(e.target.value))
									}
									className="font-CodecPro300 text-sm h-9 leading-4 py-2 px-3 appearance-none w-1/2"
								>
									{[30, 50, 70, 100].map((p) => (
										<option key={p} value={p}>
											{p}%
										</option>
									))}
								</select>
								<input
									readOnly
									value={renderInitialPaymentValue()}
									className="border-l border-gray-40 text-right text-gray-60 py-0.5 px-2.5 w-1/2 outline-none"
								/>
							</div>
						</div>
					</div>

					{/* Occupancy slider */}
					<div className="flex flex-col ">
						<label
							htmlFor="occupancy"
							className="font-CodecPro300 text-xs leading-3.5 text-gray-70"
						>
							{t("leftSection.workload")}
						</label>
						<div className="flex items-center gap-4">
							<Slider value={percentage} onChange={setPercentage} />
							<input
								id="occupancy"
								readOnly
								value={`${percentage}%`}
								className="font-CodecPro300 text-sm text-gray-100 bg-gray-0 leading-4 p-2.5 outline-none w-1/6"
							/>
						</div>
					</div>

					<button
						onClick={calculateResults}
						className="w-full font-CodecPro300 text-sm md:text-base text-white border border-white py-3 px-5 leading-6 hover:bg-primary-80 transition hover:cursor-pointer"
					>
						{btn("calculate")}
					</button>
				</div>

				{/* Results */}
				<Result
					cost={results.cost}
					profit={results.profit}
					payback={results.payback}
					annualReturn={results.annualReturn}
				/>
			</div>
		</div>
	);
};

export default Calculator;
