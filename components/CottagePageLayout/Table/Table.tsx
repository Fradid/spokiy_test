"use client";

import arrow from "@/public/assets/icons/arrow-up-right.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { cottagesTableData } from "@/data/cottagesPage";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";
import arrowRight from "@/public/assets/icons/arrow-right.svg";

const metrics = [
	{ key: "area", label: "table.square" },
	{ key: "firstDeposit", label: "table.cost30" },
	{ key: "secondDeposit", label: "table.cost50" },
	{ key: "thirdDeposit", label: "table.cost70" },
	{ key: "fourthDeposit", label: "table.cost100" },
	{ key: "rent", label: "table.average" },
	{ key: "payback_yrs", label: "main.payback" },
	{ key: "profit", label: "table.calculate" },
	{ key: "monthly_profit", label: "table.profit" },
];

interface TableProps {
	activeIndex?: number;
	showActiveColumn?: boolean;
}

const Table = ({ activeIndex, showActiveColumn = true }: TableProps) => {
	const t = useTranslations("cottage");
	const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);
	const [activeColumn, setActiveColumn] = useState<number>(activeIndex || 0);

	const orderedCottages = [
				cottagesTableData[activeColumn],
				cottagesTableData[activeColumn + 1],
				...cottagesTableData.filter(
					(_, index) => index !== activeColumn && index !== activeColumn + 1
				),
		  ].filter(Boolean)
		// : cottagesTableData;

	const handleNavigation = (direction: "next" | "prev") => {
		if (direction === "next" && activeColumn < cottagesTableData.length - 1) {
			setActiveColumn(activeColumn + 1);
		} else if (direction === "prev" && activeColumn > 0) {
			setActiveColumn(activeColumn - 1);
		}
	};

	return (
		<section className="md:max-w-4xl lg:max-w-6xl mx-auto md:mt-11 overflow-x-auto">
			<div className="flex justify-end max-w-4/5 gap-6 my-4 md:hidden">
				{/* Navigation buttons */}
				{[
					{
						onClick: () => handleNavigation("prev"),
						icon: arrowLeft,
						disabled: activeColumn === 0,
					},
					{
						onClick: () => handleNavigation("next"),
						icon: arrowRight,
						disabled: activeColumn >= cottagesTableData.length - 2, // stop when last visible pair reached
					},
				].map(({ onClick, icon, disabled }, i) => (
					<button
						key={i}
						onClick={onClick}
						disabled={disabled}
						className={clsx(
							"transition-opacity",
							disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
						)}
					>
						<Image src={icon} alt={`arrow-${i}`} />
					</button>
				))}
			</div>
			<table className="border-collapse w-11/12 mx-auto md:w-full">
				<thead>
					<tr>
						<th className="py-4 pl-1.5 max-w-3xs h-[101px] text-left border-b border-gray-40"></th>
						{orderedCottages.map(({ name, slug }, index) => {
							const isActive = index === 0;
							const isHovered = index === hoveredColumn;

							return (
								<th
									key={index}
									onMouseEnter={() => setHoveredColumn(index)}
									onMouseLeave={() => setHoveredColumn(null)}
									className={clsx("pl-3.5 max-w-32 border-b border-gray-40", {
										"hidden md:table-cell": index > 1,
										// "hidden sm:table-cell": index > 0,
										"bg-primary-30 border border-secondary-100":
											showActiveColumn && isActive && isHovered,
										"bg-secondary-20 border border-secondary-100":
											showActiveColumn && isActive && !isHovered,
										"bg-primary-30": isHovered,
									})}
								>
									<div className="flex flex-col items-start justify-center">
										<span className="font-CodecPro500 text-base lg:text-2xl uppercase text-gray-100">
											{name}
										</span>
										<Link
											href={`/${slug}`}
											className="flex items-center gap-1 font-CodecPro300 font-normal text-xs lg:text-sm text-gray-70"
										>
											{t("table.read")}
											<Image
												src={arrow}
												alt="arrow"
												className="w-full max-w-5 sm:max-w-6 lg:max-w-8"
											/>
										</Link>
									</div>
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{metrics.map(({ key, label }) => (
						<tr key={key}>
							<td className="py-4 pl-1.5 border-b border-gray-40 max-w-24 lg:max-w-48 h-[88px]">
								<p className="font-CodecPro300 text-sm lg:text-base text-gray-100">
									{t(label)}
								</p>
							</td>
							{orderedCottages.map((cottage, index) => {
								const isActive = index === 0;
								const isHovered = index === hoveredColumn;

								return (
									<td
										key={index}
										onMouseEnter={() => setHoveredColumn(index)}
										onMouseLeave={() => setHoveredColumn(null)}
										className={clsx("pl-3.5 border-b border-gray-40", {
											"hidden md:table-cell": index > 1,
											// "hidden sm:table-cell": index > 0,
											"bg-primary-30 border-b-gray-40 border-x border-secondary-100":
												isActive && showActiveColumn,
											"bg-primary-30": isHovered && (isActive || isHovered),
										})}
									>
										<p className="font-CodecPro300 text-sm md:text-base text-gray-100">
											{cottage.details[key as keyof typeof cottage.details]}
										</p>
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex flex-col items-center justify-center md:flex-row py-10">
				<div className="flex items-center justify-end gap-3 px-8">
					<p className="font-CodecPro300 text-sm md:text-base text-gray-100">
						{t("table.management")}
					</p>
					<p className="font-CodecPro300 text-sm md:text-base text-gray-100">
						40 %
					</p>
				</div>
				<div className="flex items-center justify-start gap-3 px-8">
					<p className="font-CodecPro300 text-sm md:text-base text-gray-100">
						{t("table.workload")}
					</p>
					<p className="font-CodecPro300 text-sm md:text-base text-gray-100">
						60 %
					</p>
				</div>
			</div>
		</section>
	);
};

export default Table;
