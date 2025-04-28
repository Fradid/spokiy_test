"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { infrastructure } from "@/data/infrastructure";
import { useLocale } from "next-intl";
import SlideContent from "@/components/SlideContent/SlideContent";
import ArrowControls from "@/components/ArrowControls/ArrowControls";

const InfrastructureSlider = () => {
	const locale = useLocale() as "en" | "uk";
	const infrastructureList = infrastructure[locale];
	const [carouselIndex, setCarouselIndex] = useState(0);
	const sliderRef = useRef<Slider | null>(null);
	const currentSlide = infrastructureList[carouselIndex];

	const next = () => sliderRef.current?.slickNext();
	const previous = () => sliderRef.current?.slickPrev();

	const settings = {
		dots: false,
		infinite: false,
		arrows: false,
		swipe: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: (index: number) => setCarouselIndex(index),
	};

	return (
		<div className="flex max-w-6xl">
			<div className="flex justify-center lg:h-[600px]">
				<div className="flex flex-col justify-between  lg:w-full">
					<SlideContent
						step={currentSlide.step}
						title={currentSlide.title}
						description={currentSlide.description}
						additionalText={currentSlide.additionalText}
					/>

					<ArrowControls
						currentIndex={carouselIndex}
						total={infrastructureList.length}
						onPrev={previous}
						onNext={next}
					/>
				</div>

				<div className="w-sm md:w-md lg:w-xl lg:h-full">
					<Slider ref={sliderRef} {...settings}>
						{infrastructureList.map((item) => (
							<div key={item.id}>
								<Image
									src={item.imageUrl}
									alt={item.title}
									className="w-sm md:w-md lg:w-xl lg:h-full px-5"
								/>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default InfrastructureSlider;
