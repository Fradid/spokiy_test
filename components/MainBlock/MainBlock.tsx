"use client";

import { useModal } from "@/context/ModalContext";
import { Link } from "@/i18n/navigation";
import React from "react";

interface MainBlockProps {
	title: string;
	description: string;
	btnLabel: string;
	bgClass: string;
	genplan?: boolean;
}

const MainBlock = ({
	title,
	description,
	btnLabel,
	bgClass,
	genplan = false,
}: MainBlockProps) => {
	const { toggle } = useModal();

	return (
		<section
			id="main"
			className={`w-full h-[80%] ${bgClass} bg-cover ${genplan ? "bg-bottom" : "bg-center"} bg-no-repeat flex flex-col items-center pt-28 sm:pt-[150px] px-8 lg:px-10 lg:h-[60.6vw]`}
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
			<div
				className="mt-10"
				data-aos="fade-zoom-in"
				data-aos-easing="ease-in-back"
				data-aos-duration="300"
				data-aos-offset="0"
			>
				{!genplan ? (
					<button className="white-btn" onClick={() => toggle("contact")}>
						{btnLabel}
					</button>
				) : (
					<Link href="/ganplan" className="white-btn py-4">
						{btnLabel}
					</Link>
				)}
			</div>
		</section>
	);
};

export default MainBlock;
