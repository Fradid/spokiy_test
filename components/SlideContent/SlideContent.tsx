"use client";

import { motion } from "framer-motion";

interface SlideContentProps {
	step: string;
	title: string;
	description: string;
	additionalText?: string;
}

const SlideContent = ({
	step,
	title,
	description,
	additionalText,
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
			<div className="flex flex-col gap-1 mt-4 pt-5 pl-3 pr-5 lg:pl-[30px] lg:pr-[110px]">
				<div className="flex gap-6 mb-3.5">
					<p className="font-CodecPro500 text-sm md:text-base leading-6 text-secondary-100">
						{step}
					</p>
					<p className="font-CodecPro500 text-sm md:text-base leading-6 text-gray-100 uppercase">
						{title}
					</p>
				</div>

				<div className="flex flex-col gap-6 text-sm md:text-base leading-6 text-gray-70 font-CodecPro200">
					<p>{description}</p>
					{additionalText && <p>{additionalText}</p>}
				</div>

				<div className="sm:border-b-2 sm:border-primary-40 sm:mt-6" />
			</div>
		</motion.div>
	);
};

export default SlideContent;
