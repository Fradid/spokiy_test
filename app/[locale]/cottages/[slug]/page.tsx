import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Main from "@/components/CottagePageLayout/Main/Main";
import About from "@/components/CottagePageLayout/About/About";
import { cottages } from "@/data/cottagesPage";
import Facility from "@/components/CottagePageLayout/Facility/Facility";
import Carousel from "@/components/CottagePageLayout/Carousel/Carousel";
import Interior from "@/components/CottagePageLayout/Interior/Interior";
import Image from "next/image";
import Table from "@/components/CottagePageLayout/Table/Table";
import { notFound } from "next/navigation";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
	const { locale, slug } = await params;
	const t = await getTranslations({ locale });

	const baseUrl = "https://spokiy-test.vercel.app";

	return {
		title: t("home.metatags.title"),
		description: t("home.metatags.description"),
		alternates: {
			canonical: `${baseUrl}/${locale}/cottages/${slug}`,
		},
	};
}

const locales = ["ua", "en"];
export async function generateStaticParams() {
	return locales.flatMap((locale) =>
		Object.values(cottages).map((cottage) => ({
			locale,
			slug: cottage.slug,
		}))
	);
}

export const dynamicParams = false;

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string; slug: string }>;
}) {
	const { locale, slug } = await params;
	const t = await getTranslations({ locale });

	const cottage = Object.values(cottages).find((item) => item.slug === slug);

	if (!cottage || typeof cottage.getData !== "function") return notFound();

	const { imageSlides, planSlides, bgImg, getData } = cottage;
	const cottageData = {
		...getData(t),
		imageSlides,
		planSlides,
		bgImg,
		slug,
	};

	return (
		<>
			<Main data={cottageData} />
			<About data={cottageData} />
			<Facility />
			<Carousel images={imageSlides} section />
			<Interior description={cottageData.interior} />
			<div>
				<Image
					src={cottageData.bgImg}
					alt={cottageData.slug}
					className="w-full h-full object-cover"
					data-aos="fade-zoom-in"
					data-aos-easing="ease-in-back"
					data-aos-duration="800"
					data-aos-offset="0"
					data-aos-delay="600"
				/>
			</div>
			<Table activeIndex={Object.values(cottages).indexOf(cottage)} />
		</>
	);
}
