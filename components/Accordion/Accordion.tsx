"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useLocale } from "next-intl";
import clsx from "clsx";

// Default icons
import defaultPlus from "@/public/assets/icons/plus.svg";
import defaultMinus from "@/public/assets/icons/minus.svg";

export interface AccordionItem {
	title: string;
	content: string;
}

interface AccordionProps {
	children?: React.ReactNode;
	data: {
		en: AccordionItem[];
		uk: AccordionItem[];
	};
	title?: string;
	defaultOpenIndexes?: number[];
	className?: string;
	classContainer?: string;
	openIcon?: StaticImageData;
	closeIcon?: StaticImageData;
	faqMode?: boolean;
}

export default function Accordion({
	children,
	data,
	title,
	defaultOpenIndexes = [],
	className = "",
	classContainer = "",
	openIcon = defaultPlus,
	closeIcon = defaultMinus,
	faqMode = false,
}: AccordionProps) {
	const locale = useLocale() as "en" | "uk";
	const items = data[locale] || [];

	const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpenIndexes);

	const toggleIndex = (idx: number) => {
		setOpenIndexes((prev) =>
			prev.includes(idx)
				? prev.filter((i) => i !== idx)
				: faqMode
				? [...prev, idx]
				: [idx]
		);
	};

	return (
		<div className={clsx("bg-primary-20", faqMode && "w-4/5 lg:w-full", classContainer)}>
			{title && (
				<h2 className="mb-8 lg:mb-[72px] text-base lg:text-2xl font-CodecPro500 uppercase text-gray-100">
					{title}
				</h2>
			)}

			{children && (
				<div className="absolute top-0 right-0 z-10 lg:h-[349px] lg:w-[296px]">
					{children}
				</div>
			)}

			{items.map((item, idx) => {
				const isOpen = openIndexes.includes(idx);

				return (
					<div
						key={idx}
						className={clsx(
							"relative z-30",
							className,
							faqMode && isOpen && "bg-primary-30"
						)}
						onClick={() => toggleIndex(idx)}
					>
						<div
							className={clsx(
								"flex cursor-pointer",
								faqMode
									? "p-3.5 lg:px-8 lg:pt-6 lg:pb-2 justify-between flex-row-reverse lg:flex-row"
									: "w-full items-center gap-3 py-3"
							)}
						>
							{faqMode && (
								<button className="shrink-0">
									<Image
										src={isOpen ? closeIcon : openIcon}
										alt={isOpen ? "Collapse" : "Expand"}
										width={17}
									/>
								</button>
							)}

							<p
								className={`font-CodecPro300 text-sm lg:text-base leading-6 ${
									faqMode && "w-[95%]"
								}`}
							>
								{item.title}
							</p>

							{!faqMode && (
								<button className="ml-auto shrink-0">
									<Image
										src={isOpen ? closeIcon : openIcon}
										alt={isOpen ? "Collapse" : "Expand"}
										width={17}
									/>
								</button>
							)}
						</div>

						<AnimatePresence initial={false}>
							{isOpen && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: "auto", opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.5 }}
									className={clsx(
										"relative overflow-hidden",
										faqMode && "px-4 lg:pl-[78px] pr-4"
									)}
								>
									<p
										className={clsx(
											"font-CodecPro200 text-sm lg:text-base text-gray-70",
											faqMode && "text-sm leading-[19.6px] pb-6 w-[95%]"
										)}
									>
										{item.content}
									</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				);
			})}
		</div>
	);
}
