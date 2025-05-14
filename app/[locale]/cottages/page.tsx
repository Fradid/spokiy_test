import Table from "@/components/CottagePageLayout/Table/Table";
import MainBlock from "@/components/MainBlock/MainBlock";
import PresentationSection from "@/components/PresentationSection/PresentationSection";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import pattern from "@/public/assets/patterns/03.svg";
import rocks from "@/public/assets/patterns/02.svg";
import patternSect from "@/public/assets/patterns/08.svg";
import { Link } from "@/i18n/navigation";
import ComfortSection from "@/components/ComfortSection/ComfortSection";
import ExteriorSection from "@/components/ExteriorSection/ExteriorSection";
import Carousel from "@/components/CottagePageLayout/Carousel/Carousel";
import podyh1 from "@/public/assets/images/podyh/1.webp";
import podyh2 from "@/public/assets/images/podyh/2.webp";
import podyh3 from "@/public/assets/images/podyh/3.webp";
import podyh4 from "@/public/assets/images/podyh/4.webp";
import podyh5 from "@/public/assets/images/podyh/5.webp";
import Section from "@/components/Section/Section";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const baseUrl = "https://lehit-village.com";

	return {
		title: t("cottages.metatags.title"),
		description: t("cottages.metatags.description"),
		alternates: {
			canonical: `${baseUrl}/${locale}/cottages`,
			languages: {
				uk: `${baseUrl}/ua/cottages`,
				en: `${baseUrl}/en/cottages`,
				"x-default": `${baseUrl}/cottages`,
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

	const imageSlides = [podyh1, podyh2, podyh3, podyh4, podyh5];

	return (
		<>
			<MainBlock
				title={t("cottages.main.title")}
				description={t("cottages.main.description")}
				btnLabel={t("btnLabel.openGenplan")}
				bgClass="bg-[url('/assets/Hero.png')]"
				genplan
			/>

			<Section title={t('cottages.section.title')} description={t('cottages.section.description')} img={pattern} />

			<section className="flex flex-col">
				<div className="relative flex flex-col gap-4 max-w-sm px-4 sm:max-w-lg md:max-w-2xl mx-auto py-8 md:py-14">
					<Image
						src={patternSect}
						alt="patternGetToKnow"
						className="absolute left-24 -top-6 sm:left-44 sm:-top-10 max-w-28 md:left-64 md:-top-11 w-full md:max-w-40 opacity-20"
					/>
					<h2
						className="self-center text-center w-2/3 text-base leading-5 uppercase text-gray-100 font-CodecPro500 md:text-2xl lg:leading-6"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="400"
						data-aos-delay="100"
					>
						{t("cottages.genplan.title")}
					</h2>
					<p
						className="self-center text-center font-CodecPro300 text-xs text-gray-70 leading-5 md:text-base lg:leading-6"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="300"
						data-aos-delay="200"
					>
						{t("cottages.genplan.description")}
					</p>
					<Link
						href="/ganplan"
						className="self-center sm:max-w-2/5 bg-transparent border border-primary-40 text-primary-90 font-CodecPro300 text-sm leading-6 py-2 px-5 text-center hover:bg-primary-50 hover:border-primary-50 md:text-base lg:py-3"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="300"
						data-aos-delay="300"
					>
						{t("btnLabel.viewGenplan")}
					</Link>
				</div>
				<div
					className="w-full h-[40vh] sm:h-[70vh] md:h-[80vh] lg:h-screen bg-[url('/assets/cottagesSection.png')] bg-center bg-no-repeat bg-contain sm:bg-cover"
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-duration="800"
					data-aos-offset="0"
					data-aos-delay="600"
				/>
			</section>

			<ComfortSection />

			<ExteriorSection />

			<section className="bg-primary-100 py-5 sm:py-12">
				<div className="max-w-7xl mx-auto relative">
					<h2
						className="px-8 font-CodecPro500 text-base md:text-2xl text-white uppercase leading-6"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="300"
					>
						{t("cottages.carousel.title")}
					</h2>
					<Carousel images={imageSlides} section exterior />
				</div>
			</section>

			<section>
				<div
					className="flex flex-col items-center justify-center gap-6 pt-5 md:pt-10"
					data-aos="fade-down"
					data-aos-easing="linear"
					data-aos-duration="300"
				>
					<Image src={rocks} alt="pattern" width={21} />
					<h2 className="self-center text-center w-2/3 text-base leading-5 uppercase text-gray-100 font-CodecPro500 md:text-2xl lg:leading-6">
						{t("cottages.table.title")}
					</h2>
				</div>
				<Table showActiveColumn={false} />
			</section>

			<PresentationSection
				title={t("cottages.presentation.title")}
				text={t("cottages.presentation.text")}
			/>

			<div className="p-8"></div>
		</>
	);
}
