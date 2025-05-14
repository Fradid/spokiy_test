"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { infrastructure } from "@/data/infrastructure";
import { useLocale } from "next-intl";
import SlideContent from "@/components/SlideContent/SlideContent";
import ArrowControls from "@/components/ArrowControls/ArrowControls";
import clsx from "clsx";
import { locations } from "@/data/location";

interface SliderProps {
	location: boolean;
}

const InfrastructureSlider = ({ location }: SliderProps) => {
	const locale = useLocale() as "en" | "ua";
	const list = !location ? infrastructure[locale] : locations[locale];
	const [carouselIndex, setCarouselIndex] = useState(0);
	const sliderRef = useRef<Slider | null>(null);
	const currentSlide = list[carouselIndex];

	const next = () => sliderRef.current?.slickNext();
	const previous = () => sliderRef.current?.slickPrev();

	const settings = {
		dots: false,
		infinite: false,
		arrows: false,
		swipe: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: (index: number) => setCarouselIndex(index),
	};

	return (
		<div
			className={clsx(
				location ? "flex flex-col justify-end items-end w-full" : "flex max-w-6xl"
			)}
		>
			{location && (
				<ArrowControls
					currentIndex={carouselIndex}
					total={list.length}
					onPrev={previous}
					onNext={next}
					location={location}
				/>
			)}
			<div
				className={clsx(
					"flex flex-col-reverse sm:items-start",
					location ? "md:relative w-full justify-start items-start md:h-[400px]" : "justify-center items-center sm:flex-row lg:h-[600px]"
				)}
			>
				<div
					className={clsx(
						"flex flex-col",
						location
							? "md:relative z-30 w-full md:max-w-md lg:max-w-xl left-2/5 2xl:left-3/5 lg:-top-1/6 md:-top-1/12 bg-gray-100"
							: "lg:w-full h-full justify-between"
					)}
				>
					<SlideContent
						step={currentSlide.step}
						title={currentSlide.title}
						description={currentSlide.description}
						additionalText={currentSlide.additionalText}
						location={location}
					/>

					{!location && (
						<ArrowControls
							currentIndex={carouselIndex}
							total={list.length}
							onPrev={previous}
							onNext={next}
							location={location}
						/>
					)}
				</div>

				<div
					className={clsx(
						location ? "md:absolute w-full h-full md:w-3/4" : "w-xs md:w-md lg:w-xl lg:h-full"
					)}
				>
					<Slider ref={sliderRef} {...settings}>
						{list.map((item) => (
							<div
								key={item.id}
								className={clsx(location ? "md:relative md:w-full h-[400px] object-fill" : "")}
							>
								{!location ? (
									<Image
										src={item.imageUrl}
										alt={item.title}
										className="w-sm md:w-md lg:w-xl lg:h-full sm:px-5"
										data-aos="fade-left"
										data-aos-delay="300"
										data-aos-duration="500"
									/>
								) : (
									<Image
										src={item.imageUrl}
										alt={item.title}
										className="object-cover md:object-cover w-full h-full"
										data-aos="fade-left"
										data-aos-delay="300"
										data-aos-duration="500"
										// sizes="(max-width: 1024px) 100vw, 1024px"
									/>
								)}
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default InfrastructureSlider;
