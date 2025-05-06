"use client";

import ProgressBar from "../ProgressBar/ProgressBar";
import Image from "next/image";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";
import arrowRight from "@/public/assets/icons/arrow-right.svg";

interface ArrowControlsProps {
	currentIndex: number;
	total: number;
	onPrev: () => void;
	onNext: () => void;
}

const ArrowControls = ({
	currentIndex,
	total,
	onPrev,
	onNext,
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
			<p className="w-[44px]">
				<span className="font-CodecPro300 md:text-base text-sm leading-5">
					{currentIndex + 1}
				</span>
				<span className="font-CodecPro200 md:text-base text-sm leading-6">
					{" "}
					з {total}
				</span>
			</p>
			<ProgressBar current={currentIndex + 1} total={total} />
			<div className="flex items-center justify-center px-4 gap-3">
				<button onClick={onPrev} disabled={currentIndex === 0}>
					<Image
						src={arrowLeft}
						alt="Previous"
						className={`cursor-pointer w-7 lg:w-full ${
							currentIndex === 0 ? "opacity-30" : "opacity-100"
						}`}
					/>
				</button>
				<button onClick={onNext} disabled={currentIndex === total - 1}>
					<Image
						src={arrowRight}
						alt="Next"
						className={`cursor-pointer w-7 transition-opacity lg:w-full ${
							currentIndex === total - 1 ? "opacity-30" : "opacity-100"
						}`}
					/>
				</button>
			</div>
		</div>
	);
};

export default ArrowControls;
