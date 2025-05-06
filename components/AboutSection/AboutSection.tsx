"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";
import logo from "@/public/assets/logo.svg";
import pattern from "@/public/assets/patterns/patterns.svg";
import { useTranslations } from "next-intl";

const AboutSection = () => {
	const t = useTranslations("");

	return (
		<section id="about" className="p-6 lg:p-14">
			<div className="flex items-center max-w-6xl mx-auto flex-col md:flex-row md:items-start gap-10">
				{/* Left Column */}
				<div className="flex flex-col gap-8 w-full">
					<div className="flex items-center gap-4">
						<Image src={pattern} alt="pattern" width={30} height={29} />
						<h2 className="text-base leading-5 uppercase text-gray-100 font-CodecPro500 md:text-2xl lg:leading-6">
							{t("home.about.title")}
						</h2>
					</div>
					<Image
						src={logo}
						alt="logo"
						width={500}
						height={500}
						className="opacity-20 pr-4"
					/>
				</div>

				{/* Right Column */}
				<div className="flex flex-col gap-6 w-full">
					<h3 className="font-CodecPro200 text-sm text-gray-100 leading-7 md:text-2xl lg:leading-8">
						{t("home.about.description")}
					</h3>
					<p className="font-CodecPro300 text-xs text-gray-70 leading-5 md:text-base lg:leading-6">
						{t("home.about.text")}
					</p>

					{/* Location + Area Info */}
					<div className="flex flex-col gap-4">
						{[
							{ title: "location", key: "home.location" },
							{ title: "area", key: "home.area" },
						].map(({ key }, index) => (
							<div key={key}>
								<div className="flex mb-2.5">
									<h3 className="text-xs leading-5 uppercase text-gray-100 font-CodecPro500 w-1/2 md:text-base lg:leading-6">
										{t(`${key}.title`)}
									</h3>
									<p className="font-CodecPro300 text-xs text-gray-70 leading-5 w-1/2 md:text-base lg:leading-6">
										{t(`${key}.text`)}
									</p>
								</div>
								{index === 0 && (
									<div className="border-b border-primary-40 w-full" />
								)}
							</div>
						))}

						{/* Action Buttons */}
						<div className="flex flex-col lg:flex-row gap-4 pt-2">
							<Link
								href="https://maps.app.goo.gl/mHspxA17DuSdXMAc7"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center bg-primary-100 text-white font-CodecPro300 text-sm leading-6 py-2 px-5 w-full text-center hover:bg-primary-80 md:text-base lg:py-3"
							>
								{t("btnLabel.ourLocation")}
							</Link>
							<Link
								href="/ganplan"
								className="bg-transparent border border-primary-40 text-primary-90 font-CodecPro300 text-sm leading-6 py-2 px-5 w-full text-center hover:bg-primary-50 hover:border-primary-50 md:text-base lg:py-3"
							>
								{t("btnLabel.viewGenplan")}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
