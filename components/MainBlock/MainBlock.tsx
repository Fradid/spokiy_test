"use client";

import { useModal } from "@/context/ModalContext";
import React from "react";

interface MainBlockProps {
	title: string;
	description: string;
	btnLabel: string;
	bgClass: string;
}

const MainBlock = ({
	title,
	description,
	btnLabel,
	bgClass,
}: MainBlockProps) => {
	const { toggle } = useModal();

	return (
		<section
			id="main"
			className={`w-full h-[80%] ${bgClass} bg-cover bg-center bg-no-repeat flex flex-col items-center pt-28 sm:pt-[150px] px-8 lg:px-10 lg:h-[60.6vw]`}
		>
			<article
				data-aos="fade-down"
				data-aos-easing="linear"
				data-aos-duration="300"
				className="flex flex-col items-center md:gap-[30px] text-center max-w-4xl"
			>
				<h1 className="font-CodecPro500 text-primary-100 text-2xl uppercase lg:text-[56px] lg:leading-[67.2px]">
					{title}
				</h1>
				<p className="font-CodecPro300 text-gray-100 text-sm leading-6 max-w-[756px] md:text-base">
					{description}
				</p>
			</article>
			<div className="mt-10">
				<button
					className="font-CodecPro300 text-sm bg-gray-0/70 hover:bg-gray-0 text-primary-100 py-2 px-5 leading-6 transition md:text-base cursor-pointer lg:py-3"
					onClick={() => toggle("contact")}
				>
					{btnLabel}
				</button>
			</div>
		</section>
	);
};

export default MainBlock;
