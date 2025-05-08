"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useModal } from "@/context/ModalContext";
import { cottages } from "@/data/cottages";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import Metric from "./Metric";
import clsx from "clsx";

const CottagesSlider = () => {
	const t = useTranslations("sections.cottages");
	const btn = useTranslations("btnLabel");
	const locale = useLocale() as "en" | "ua";
	const cottageList = cottages[locale];
	const { toggle } = useModal();

	const [currentId, setCurrentId] = useState(2);
	const sliderRef = useRef<Slider | null>(null);

	const currentSlide = cottageList.find((c) => c.index === currentId);
	const isFirstSlide = currentId === 0;
	const isLastSlide = currentId === cottageList.length - 1;

	const handleNext = () => {
		if (!isLastSlide) {
			sliderRef.current?.slickNext();
			setCurrentId((prev) => prev + 1);
		}
	};

	const handlePrevious = () => {
		if (!isFirstSlide) {
			sliderRef.current?.slickPrev();
			setCurrentId((prev) => prev - 1);
		}
	};

	const sliderSettings = {
		dots: false,
		centerMode: true,
		infinite: false,
		slidesToScroll: 1,
		initialSlide: 2,
		arrows: false,
		swipe: true,
		className: "customCottageSlider",
		centerPadding: "100px",
		responsive: [
			{ breakpoint: 1024, settings: { centerPadding: "60px" } },
			{ breakpoint: 768, settings: { centerPadding: "0px" } },
		],
	};

	return (
		<div
			className="overflow-hidden mt-4 mx-8 lg:mx-0"
			data-aos="fade-up-left"
			data-aos-duration="700"
		>
			<Slider {...sliderSettings} afterChange={setCurrentId} ref={sliderRef}>
				{cottageList.map(({ index, imgUrl, title }) => (
					<Image
						key={index}
						src={imgUrl}
						alt={title}
						className="w-full"
						width={1200}
						height={600}
						priority={index === 2}
					/>
				))}
			</Slider>

			{/* Arrows */}
			<div className="flex justify-center mt-4 lg:mt-0">
				{[
					{
						onClick: handlePrevious,
						disabled: isFirstSlide,
						position: "left",
						icon: arrowLeft,
					},
					{
						onClick: handleNext,
						disabled: isLastSlide,
						position: "right",
						icon: arrowRight,
					},
				].map(({ onClick, disabled, position, icon }) => (
					<button
						key={position}
						onClick={onClick}
						disabled={disabled}
						className={clsx(
							"lg:absolute lg:top-[550px] transition-opacity",
							position === "left" ? "lg:left-7" : "lg:right-7",
							disabled
								? "opacity-30 cursor-default"
								: "opacity-100 cursor-pointer"
						)}
					>
						<Image src={icon} alt={`${position} arrow`} />
					</button>
				))}
			</div>

			{/* Text content and metrics */}
			<div className="relative flex flex-col justify-between">
				{currentSlide && (
					<motion.div
						key={currentSlide.index}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col items-center gap-1 mt-4 min-h-[240px]"
					>
						<div
							className="flex gap-4 mb-4 justify-center mt-6"
							data-aos="fade-up"
							data-aos-duration="500"
						>
							<p className="font-CodecPro500 text-gray-100 uppercase text-sm md:text-base leading-[22.4px]">
								{currentSlide.title}
							</p>
							<p className="font-CodecPro300 text-gray-70 text-sm md:text-base leading-[22.4px]">
								{currentSlide.type}
							</p>
						</div>

						<p
							className="font-CodecPro200 text-sm md:text-base leading-6 mx-auto max-w-[582px] text-gray-100 text-center"
							data-aos="fade-up"
							data-aos-duration="500"
						>
							{currentSlide.description}
						</p>

						<div
							className="flex flex-wrap justify-center gap-2 mt-10"
							data-aos="fade-up"
							data-aos-duration="500"
						>
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

				{/* Action buttons */}
				<div
					className="flex flex-col gap-6 mx-auto mt-[84px] mb-12 w-full max-w-[480px] md:flex-row"
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-duration="700"
					data-aos-delay="300"
					data-aos-offset="0"
				>
					<button
						className="grey-btn"
						onClick={() => toggle("contact")}
					>
						{btn("formBtn")}
					</button>
					<Link
						href="/cottages"
						className="transparent-btn border border-primary-40 text-primary-90 hover:bg-primary-50 hover:border-primary-50"
					>
						{btn("viewAll")}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CottagesSlider;
