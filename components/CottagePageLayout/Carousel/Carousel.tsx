"use client";

import Slider from "react-slick";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import clsx from "clsx";

interface CarouselProps {
	images: StaticImageData[];
	section?: boolean;
	exterior?: boolean;
}

const Carousel = ({
	images,
	section = false,
	exterior = false,
}: CarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef<Slider | null>(null);

	const slidesToShow = section ? 2 : 1;

	const isFirstSlide = currentIndex === 0;
	const isLastSlide = currentIndex === images.length - slidesToShow;

	const aosAttributes = !section
		? {
				"data-aos": "fade-right",
				"data-aos-easing": "linear",
				"data-aos-duration": "500",
		  }
		: {
				"data-aos": "fade-up-left",
				"data-aos-easing": "linear",
				"data-aos-duration": "500",
				"data-aos-delay": "200",
		  };

	const handleNavigation = (direction: "next" | "prev") => {
		if (direction === "next" && !isLastSlide) {
			sliderRef.current?.slickNext();
		} else if (direction === "prev" && !isFirstSlide) {
			sliderRef.current?.slickPrev();
		}
	};

	const settings = {
		dots: false,
		infinite: false,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		arrows: false,
		beforeChange: (_: number, next: number) => setCurrentIndex(next),
		responsive: [
			{ breakpoint: 768, settings: { slidesToShow: 1 } },
			{ breakpoint: 320, settings: { slidesToShow: 1 } },
		],
	};

	return (
		<div
			className={clsx(
				"relative",
				section && !exterior && "max-w-7xl mt-7 mx-auto",
				!section && !exterior && "w-full max-w-xs md:max-w-sm mx-auto",
				exterior && section && "max-w-7xl mx-auto mt-0"
			)}
			{...aosAttributes}
		>
			{exterior && (
				<div
					className="flex justify-end gap-6 p-4"
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-duration="700"
					data-aos-offset="0"
					data-aos-delay="400"
				>
					{[
						{
							onClick: () => handleNavigation("prev"),
							disabled: isFirstSlide,
							icon: arrowLeft,
						},
						{
							onClick: () => handleNavigation("next"),
							disabled: isLastSlide,
							icon: arrowRight,
						},
					].map(({ onClick, disabled, icon }, i) => (
						<button
							key={i}
							onClick={onClick}
							disabled={disabled}
							className={clsx(
								"transition-opacity",
								disabled
									? "opacity-30 cursor-default"
									: "opacity-100 cursor-pointer"
							)}
						>
							<Image
								src={icon}
								alt={`arrow-${i}`}
								className="invert brightness-0"
							/>
						</button>
					))}
				</div>
			)}
			<Slider {...settings} ref={sliderRef}>
				{images.map((img, index) => (
					<Image
						src={img}
						alt={`Slide ${index + 1}`}
						key={index}
						className={clsx("w-full h-auto", section && "px-2")}
					/>
				))}
			</Slider>

			{!exterior && (
				<div
					className="flex justify-center gap-6 mt-4"
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-duration="700"
					data-aos-offset="0"
					data-aos-delay="400"
				>
					{[
						{
							onClick: () => handleNavigation("prev"),
							disabled: isFirstSlide,
							icon: arrowLeft,
						},
						{
							onClick: () => handleNavigation("next"),
							disabled: isLastSlide,
							icon: arrowRight,
						},
					].map(({ onClick, disabled, icon }, i) => (
						<button
							key={i}
							onClick={onClick}
							disabled={disabled}
							className={clsx(
								"transition-opacity",
								disabled
									? "opacity-30 cursor-default"
									: "opacity-100 cursor-pointer"
							)}
						>
							<Image src={icon} alt={`arrow-${i}`} />
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Carousel;
