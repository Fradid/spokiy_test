import Table from "@/components/CottagePageLayout/Table/Table";
import MainBlock from "@/components/MainBlock/MainBlock";
import PresentationSection from "@/components/PresentationSection/PresentationSection";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import pattern from "@/public/assets/patterns/03.svg";
import rocks from "@/public/assets/patterns/02.svg";
import patternSect from "@/public/assets/patterns/08.svg";
import { Link } from "@/i18n/routing";
import ComfortSection from "@/components/ComfortSection/ComfortSection";
import ExteriorSection from "@/components/ExteriorSection/ExteriorSection";
import Carousel from "@/components/CottagePageLayout/Carousel/Carousel";
import podyh1 from "@/public/assets/images/podyh/1.webp";
import podyh2 from "@/public/assets/images/podyh/2.webp";
import podyh3 from "@/public/assets/images/podyh/3.webp";
import podyh4 from "@/public/assets/images/podyh/4.webp";
import podyh5 from "@/public/assets/images/podyh/5.webp";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	return {
		title: t("cottages.metatags.title"),
		description: t("cottages.metatags.description"),
	};
}

export default function Home() {
	const t = useTranslations();

	const imageSlides = [podyh1, podyh2, podyh3, podyh4, podyh5];

	return (
		<>
			<MainBlock
				title={t("cottages.main.title")}
				description={t("cottages.main.description")}
				btnLabel={t("btnLabel.openGenplan")}
				bgClass="bg-[url('/assets/Hero.png')]"
			/>

			<section className="max-w-6xl flex flex-col md:flex-row gap-6 md:gap-0 mx-auto p-10 md:p-14">
				<div className="w-full flex gap-4 items-start">
					<Image src={pattern} alt="pattern" width={21} />
					<h2 className="text-base leading-5 uppercase text-gray-100 font-CodecPro500 md:text-2xl lg:leading-6">
						{t("cottages.section.title")}
					</h2>
				</div>
				<p className="w-full font-CodecPro300 text-xs text-gray-70 leading-5 md:text-base lg:leading-6">
					{t("cottages.section.description")}
				</p>
			</section>

			<section className="flex flex-col">
				<div className="relative flex flex-col gap-4 max-w-sm px-4 sm:max-w-lg md:max-w-2xl mx-auto py-8 md:py-14">
					<Image
						src={patternSect}
						alt="patternGetToKnow"
						className="absolute left-24 -top-6 sm:left-44 sm:-top-10 max-w-28 md:left-64 md:-top-11 w-full md:max-w-40 opacity-20"
					/>
					<h2 className="self-center text-center w-2/3 text-base leading-5 uppercase text-gray-100 font-CodecPro500 md:text-2xl lg:leading-6">
						{t("cottages.genplan.title")}
					</h2>
					<p className="self-center text-center font-CodecPro300 text-xs text-gray-70 leading-5 md:text-base lg:leading-6">
						{t("cottages.genplan.description")}
					</p>
					<Link
						href="/ganplan"
						className="self-center sm:max-w-2/5 bg-transparent border border-primary-40 text-primary-90 font-CodecPro300 text-sm leading-6 py-2 px-5 text-center hover:bg-primary-50 hover:border-primary-50 md:text-base lg:py-3"
					>
						{t("btnLabel.viewGenplan")}
					</Link>
				</div>
				<div className="w-full h-screen bg-[url('/assets/cottagesSection.png')] bg-cover bg-center bg-no-repeat" />
			</section>

			<ComfortSection />

			<ExteriorSection />

			<section className="bg-primary-100 py-5 sm:py-12">
				<div className="max-w-7xl mx-auto relative">
					<h2 className="px-8 font-CodecPro500 text-base md:text-2xl text-white uppercase leading-6">
						{t("cottages.carousel.title")}
					</h2>
					<Carousel images={imageSlides} section exterior />
				</div>
			</section>

			<section>
				<div className="flex flex-col items-center justify-center gap-6 pt-5 md:pt-10">
					<Image src={rocks} alt="pattern" width={21} />
					<h2 className="self-center text-center w-2/3 text-base leading-5 uppercase text-gray-100 font-CodecPro500 md:text-2xl lg:leading-6">
						{t("cottages.table.title")}
					</h2>
				</div>
				<Table showActiveColumn={false} />
			</section>

			<PresentationSection title={t('cottages.presentation.title')} text={t('cottages.presentation.text')} />

			<div className="p-8"></div>
		</>
	);
}
