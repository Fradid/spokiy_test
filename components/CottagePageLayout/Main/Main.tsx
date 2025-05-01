"use client";

import { CottageData } from "@/types/types";
import { useTranslations } from "next-intl";

const Main = ({ data }: { data: CottageData }) => {
	const t = useTranslations("cottage");

	const details = [
		{ label: t("main.area"), value: data.area },
		{ label: t("main.cost"), value: data.price },
		{ label: t("main.payback"), value: data.paybackCount },
	];

	return (
		<section>
			<div
				className="h-screen flex flex-col justify-end items-center p-5 bg-top bg-no-repeat bg-cover"
				style={{ backgroundImage: `url(${data.bgUrl})` }}
			>
				<div className="w-full max-w-7xl p-20 lg:p-10 text-left">
					<h2 className="font-CodecPro500 uppercase text-white text-5xl lg:text-8xl max-w-xs lg:max-w-2xl">
						{data.cottageName}
					</h2>

					{/* delete div on mobile */}
					<div className="hidden sm:flex flex-col mt-24">
						<p className="font-CodecPro500 text-white text-base sm:text-2xl mb-5 uppercase">
							{t("main.shortInfo")}
						</p>

						{/* Split Border */}
						<div className="relative w-full h-0.5">
							<div className="absolute bottom-0 left-0 h-0.5 w-[269px] bg-white" />
							<div className="absolute bottom-0 left-[269px] right-0 h-0.5 bg-gray-80" />
						</div>

						{/* Cottage details list */}
						<ul className="flex gap-9 mt-5 flex-wrap">
							{details.map(({ label, value }, index) => (
								<li key={index} className="flex flex-col gap-2">
									<p className="text-sm sm:text-lg text-gray-60 font-CodecPro300">
										{label}
									</p>
									<p className="text-gray-20 sm:text-lg font-CodecPro300">
										{value}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			{/* mobile version */}
			<div className="flex flex-col max-w-2xs p-5 gap-5 mx-auto sm:hidden">
				<p className="font-CodecPro500 text-gray-100 text-base sm:text-2xl uppercase">
					{t("main.shortInfo")}
				</p>

				{/* Split Border */}
				<div className="relative w-full h-0.5">
					<div className="absolute bottom-0 left-0 h-0.5 w-44 bg-gray-80" />
					<div className="absolute bottom-0 left-44 right-0 h-px bg-gray-60" />
				</div>

				{/* Cottage details list */}
				<ul className="flex gap-3 flex-wrap">
					{details.map(({ label, value }, index) => (
						<li key={index} className="flex flex-col gap-2">
							<p className="text-sm sm:text-lg text-gray-80 font-CodecPro300">
								{label}
							</p>
							<p className="text-gray-100 sm:text-lg font-CodecPro300">
								{value}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Main;
