"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cottages } from "@/data/cottages";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import Metric from "./Metric";
import { useModal } from "@/context/ModalContext";

const CottagesSlider = () => {
	const t = useTranslations("sections.cottages");
	const btn = useTranslations("btnLabel");
	const locale = useLocale() as "en" | "uk";
	const cottageList = cottages[locale];
	const { toggle } = useModal();

	const [currentId, setCurrentId] = useState(2);
	const sliderRef = useRef<Slider | null>(null);

	const currentSlide = cottageList.find((c) => c.index === currentId);

	const handleNext = async () => {
		if (currentId < cottageList.length - 1) {
			await sliderRef.current?.slickNext();
			setCurrentId((prev) => prev + 1);
		}
	};

	const handlePrevious = async () => {
		if (currentId > 0) {
			await sliderRef.current?.slickPrev();
			setCurrentId((prev) => prev - 1);
		}
	};

	const settings = {
		dots: false,
		centerMode: true,
		infinite: false,
		centerPadding: "100px",
		slidesToScroll: 1,
		initialSlide: 2,
		arrows: false,
		swipe: true,
		className: "customCottageSlider",
	};

	return (
		<div
			className="overflow-hidden mt-4"
			data-aos="fade-up-left"
			data-aos-duration="700"
		>
			<Slider
				{...settings}
				afterChange={(i: number) => setCurrentId(i)}
				ref={sliderRef}
			>
				{cottageList.map((item) => (
					<Image
						key={item.index}
						src={item.imgUrl}
						alt={item.title}
						className="w-full"
					/>
				))}
			</Slider>

			<div className="relative flex flex-col justify-between">
				{currentSlide && (
					<motion.div
						key={currentSlide.index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col items-center gap-1 mt-4 min-h-[240px]"
					>
						<div className="flex gap-4 mb-4 justify-center mt-6">
							<p className="font-CodecPro500 text-gray-100 uppercase text-base leading-[22.4px]">
								{currentSlide.title}
							</p>
							<p className="font-CodecPro300 text-gray-70 text-base leading-[22.4px]">
								{currentSlide.type}
							</p>
						</div>

						<p className="font-CodecPro200 text-base leading-6 mx-auto max-w-[582px] text-gray-100 text-center">
							{currentSlide.description}
						</p>

						<div className="flex flex-wrap justify-center gap-2 mt-10">
							<Metric
								label={t("area")}
								value={
									<>
										{currentSlide.area} {t("mLabel")}
										<sup>2</sup>
									</>
								}
							/>
							<Metric label={t("cost")} value={currentSlide.price} />
							<Metric label={t("forSale")} value={currentSlide.count} />
						</div>
					</motion.div>
				)}

				{/* Arrows */}
				<button
					onClick={handlePrevious}
					disabled={currentId === 0}
					className={`absolute left-[30px] top-[-360px] transition-opacity ${
						currentId === 0
							? "opacity-30 cursor-default"
							: "opacity-100 cursor-pointer"
					}`}
				>
					<Image src={arrowLeft} alt="Previous slide" />
				</button>

				<button
					onClick={handleNext}
					disabled={currentId === cottageList.length - 1}
					className={`absolute right-[30px] top-[-360px] transition-opacity ${
						currentId === cottageList.length - 1
							? "opacity-30 cursor-default"
							: "opacity-100 cursor-pointer"
					}`}
				>
					<Image src={arrowRight} alt="Next slide" />
				</button>

				{/* Action buttons */}
				<div className="flex gap-6 mx-auto mt-[84px] mb-12 w-full max-w-[480px]">
					<button
						className="bg-primary-100 text-white font-CodecPro300 text-base h-12 py-3 px-5 w-full text-center hover:bg-primary-80 hover:cursor-pointer"
						onClick={() => toggle("contact")}
					>
						{btn("formBtn")}
					</button>
					<Link
						href="/cottages"
						className="border border-primary-40 text-primary-90 font-CodecPro300 text-base h-12 py-3 px-5 w-full text-center hover:bg-primary-50 hover:border-primary-50"
					>
						{btn("viewAll")}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CottagesSlider;
