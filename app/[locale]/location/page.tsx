import MainBlock from "@/components/MainBlock/MainBlock";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import pattern from "@/public/assets/patterns/04.svg";
import icon from "@/public/assets/patterns/02.svg";
import Section from "@/components/Section/Section";
import PresentationSection from "@/components/PresentationSection/PresentationSection";
import InfrastructureSection from "@/components/InfrastructureSection/InfrastructureSection";
import patternInf from "@/public/assets/patterns/14.svg";
import Image from "next/image";
import { around, mapLocations } from "@/data/map";
import Link from "next/link";
import clsx from "clsx";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const baseUrl = "https://lehit-village.com";

	return {
		title: t("location.metatags.title"),
		description: t("location.metatags.description"),
		alternates: {
			canonical: `${baseUrl}/${locale}/location`,
			languages: {
				uk: `${baseUrl}/ua/location`,
				en: `${baseUrl}/en/location`,
				"x-default": `${baseUrl}/location`,
			},
		},
	};
}

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	return (
		<>
			<MainBlock
				title={t("location.main.title")}
				description={t("location.main.description")}
				btnLabel={t("btnLabel.leaveRequest")}
				bgClass="bg-[url('/assets/location.png')]"
				genplan
			/>

			<Section
				title={t("location.section.title")}
				description={t("location.section.description")}
				img={pattern}
			/>

			<section className="relative w-full bg-[url('/assets/map.webp')] h-[1560px] md:h-[1236px] bg-cover bg-no-repeat flex flex-col justify-center items-center">
				<div className="absolute top-0 left-0 z-3 w-full h-[70%] bg-[linear-gradient(180deg,_#131313_0%,_rgba(19,_19,_19,_0)_100%)]" />

				<div className="absolute top-0 right-0 z-2 w-1/2 h-full bg-[linear-gradient(270deg,_#131313_0%,_rgba(19,_19,_19,_0)_100%)]" />

				<div className="absolute bottom-0 right-0 z-2 w-full h-[70%] opacity-80 bg-[linear-gradient(0deg,_#131313_0%,_rgba(19,_19,_19,_0)_100%)]" />

				<div className="w-full max-w-7xl h-full relative flex flex-col items-start">
					<div className="absolute w-full h-[706px] md:h-[1260px] lg:h-[1187px] bg-[url('/assets/map-lines.svg')] md:bg-[url('/assets/map-tablet.svg')] lg:bg-[url('/assets/map-desktop.svg')] bg-cover bg-center bg-no-repeat bottom-10 md:bottom-0 right-0" />

					{mapLocations[locale as "en" | "ua"].map((point) => {
						const isReversed = ![1, 5, 7, 8].includes(point.id);
						const delays = [300, 100, 400, 500, 600, 700, 800, 100];

						return (
							<div
								key={point.id}
								className={`absolute ${point.top} ${point.left} z-5`}
								data-aos="fade-zoom-in"
								data-aos-easing="ease-in-back"
								data-aos-duration="700"
								data-aos-delay={delays[point.id % delays.length]}
								data-aos-offset="0"
							>
								<div
									className={clsx(
										"flex",
										isReversed ? "flex-col-reverse" : "flex-col"
									)}
								>
									<div className="pl-5">
										<Image src={point.line} alt="line" className="h-6" />
									</div>
									<div className="flex justify-center items-center gap-2 pl-2.5 md:pl-0">
										<Image
											src={point.icon}
											alt="icon"
											className="w-5 h-5 md:w-10 md:h-10"
										/>
										<div>
											<p className="font-CodecPro500 text-xs md:text-base leading-6 text-white">
												{point.title}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}

					<div className="absolute left-1/4 right-auto bottom-6 md:bottom-10 md:right-4 md:left-auto z-20">
						<Link
							href="https://maps.app.goo.gl/mHspxA17DuSdXMAc7"
							target="_blank"
							rel="noopener noreferrer"
							className="transparent-btn py-4 text-white border border-white hover:bg-primary-80 hover:cursor-pointer"
						>
							{t("btnLabel.openGoogleMaps")}
						</Link>
					</div>

					<div className="max-w-7xl flex flex-col md:flex-row items-start justify-between p-10 z-10 gap-8">
						<div className="flex items-center gap-4 lg:w-1/2">
							<Image src={icon} alt="icon" width={30} />
							<h2 className="text-base md:text-2xl font-CodecPro500 uppercase text-gray-0">
								{t("location.map.title")}
							</h2>
						</div>
						<div
							className="flex flex-col gap-4 w-full lg:w-1/2"
							data-aos="fade-up"
							data-aos-duration="500"
						>
							<p className="font-CodecPro200 text-base md:text-2xl text-gray-0 leading-[33.6px]">
								{t("location.map.header")}
							</p>
							<p className="font-CodecPro300 text-sm md:text-base text-primary-30 leading-6">
								{t("location.map.text")}
							</p>
						</div>
					</div>

					<div
						className="relative w-10/12 self-center border border-primary-100"
						data-aos="fade-up"
						data-aos-easing="linear"
						data-aos-duration="500"
					/>

					<div className="relative w-full grid grid-cols-1 md:flex md:flex-row md:justify-between lg:px-6 z-5">
						{around[locale as "en" | "ua"].map(
							({ title, distance, time }, idx) => {
								const delays = [0, 200, 400, 600, 800, 1000];
								const isEven = idx % 2 === 1;

								return (
									<div
										key={idx}
										className={clsx(
											"flex flex-1 lg:flex-none md:flex-col gap-3 px-2 py-3",
											isEven ? "flex-row-reverse" : ""
										)}
										data-aos="fade-up"
										data-aos-duration="500"
										data-aos-delay={delays[idx % delays.length]}
									>
										<div
											className={clsx(
												"h-full flex-1 flex flex-col justify-between gap-3",
												isEven && "items-end md:items-start"
											)}
										>
											<p className="font-CodecPro300 text-sm md:text-base text-gray-0 leading-6">
												{title}
											</p>
											<div
												className={clsx(
													"flex gap-2 md:justify-normal",
													isEven ? "justify-end" : "justify-start"
												)}
											>
												<div className="bg-primary-70/40 py-1 px-2 md:px-3 md:py-2 font-CodecPro300 text-xs md:text-sm text-gray-0 leading-6">
													{distance}
												</div>
												<div className="bg-primary-70/40 py-1 px-2 md:px-3 md:py-2 font-CodecPro300 text-xs md:text-sm text-gray-0 leading-6">
													{time}
												</div>
											</div>
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>
			</section>

			<InfrastructureSection
				title={t("location.slider.title")}
				img={patternInf}
				location
			/>

			<PresentationSection
				title={t("location.presentation.title")}
				text={t("location.presentation.text")}
			/>

			<div className="p-8"></div>
		</>
	);
}
