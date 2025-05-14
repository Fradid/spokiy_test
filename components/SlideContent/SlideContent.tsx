"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

interface SlideContentProps {
	step: string;
	title: string;
	description: string;
	additionalText?: string;
	location?: boolean;
}

const SlideContent = ({
	step,
	title,
	description,
	additionalText,
	location,
}: SlideContentProps) => {
	return (
		<motion.div
			key={step + title}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col justify-between"
		>
			<div
				className={clsx(
					location
						? "flex flex-col gap-1 p-10"
						: "flex flex-col gap-1 mt-4 pt-5 pl-3 pr-5 lg:pl-[30px] lg:pr-[110px]"
				)}
			>
				<div
					className="flex gap-6 mb-3.5"
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<p className="font-CodecPro500 text-sm md:text-base leading-6 text-secondary-100">
						{step}
					</p>
					{!location ? (
						<p className="font-CodecPro500 text-sm md:text-base leading-6 text-gray-100 uppercase">
							{title}
						</p>
					) : (
						<h3 className="font-CodecPro500 text-sm md:text-base leading-6 text-white uppercase">
							{title}
						</h3>
					)}
				</div>

				<div
					className={clsx(
						"flex flex-col gap-6 text-sm md:text-base leading-6 font-CodecPro200",
						location ? "text-[#C7C7C7]" : "text-gray-70"
					)}
					data-aos="fade-up"
					data-aos-duration="1200"
				>
					<p>{description}</p>
					{additionalText && <p>{additionalText}</p>}
				</div>

				<div
					className={clsx(
						"sm:border-b-2 sm:border-primary-40 sm:mt-6",
						location && "hidden"
					)}
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-duration="700"
					data-aos-delay="300"
					data-aos-offset="0"
				/>
			</div>
		</motion.div>
	);
};

export default SlideContent;
