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
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col justify-between"
		>
			<div className="flex flex-col gap-1 mt-4 pl-3 lg:pl-[30px] pr-5 pt-5 lg:pr-[180px]">
				<div className="flex gap-6 mb-3.5">
					<p className="font-CodecPro500 text-sm text-secondary-100 leading-6 lg:text-base">
						{step}
					</p>
					<p className="font-CodecPro500 text-sm text-gray-100 leading-6 uppercase lg:text-base">
						{title}
					</p>
				</div>
				<div className="flex flex-col gap-6">
					<p className="font-CodecPro200 text-sm leading-6 text-gray-70 lg:text-base">
						{description}
					</p>
					{additionalText && (
						<p className="font-CodecPro200 text-sm leading-6 text-gray-70 lg:text-base">
							{additionalText}
						</p>
					)}
				</div>
				<div className="border-b-2 border-primary-40 w-[390px] mt-6" />
			</div>
		</motion.div>
	);
};

export default SlideContent;
