"use client";

import ProgressBar from "../ProgressBar/ProgressBar";
import Image from "next/image";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import clsx from "clsx";

interface ArrowControlsProps {
	currentIndex: number;
	total: number;
	onPrev: () => void;
	onNext: () => void;
	location?: boolean;
}

const ArrowControls = ({
	currentIndex,
	total,
	onPrev,
	onNext,
	location,
}: ArrowControlsProps) => {
	return (
		<div
			className="flex items-center justify-between gap-6 pl-5 sm:justify-start"
			data-aos="fade-zoom-in"
			data-aos-easing="ease-in-back"
			data-aos-duration="700"
			data-aos-delay="300"
			data-aos-offset="0"
		>
			{!location && (
				<p className="w-[44px]">
					<span className="font-CodecPro300 md:text-base text-sm leading-5">
						{currentIndex + 1}
					</span>
					<span className="font-CodecPro200 md:text-base text-sm leading-6">
						{" "}
						з {total}
					</span>
				</p>
			)}
			{!location && <ProgressBar current={currentIndex + 1} total={total} />}
			<div
				className={clsx(
					"flex items-center justify-center gap-3",
					location ? "py-4" : "px-4"
				)}
			>
				<button onClick={onPrev} disabled={currentIndex === 0}>
					<Image
						src={arrowLeft}
						alt="Previous"
						className={clsx(
							"cursor-pointer transition-opacity lg:w-full",
							currentIndex === 0 ? "opacity-30" : "opacity-100",
							location ? "w-full" : "w-7"
						)}
					/>
				</button>
				<button onClick={onNext} disabled={currentIndex === total - 1}>
					<Image
						src={arrowRight}
						alt="Next"
						className={clsx(
							"cursor-pointer transition-opacity lg:w-full",
							currentIndex === total - 1 ? "opacity-30" : "opacity-100",
							location ? "w-full" : "w-7"
						)}
					/>
				</button>
			</div>
		</div>
	);
};

export default ArrowControls;
