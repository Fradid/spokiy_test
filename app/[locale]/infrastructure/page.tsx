import MainBlock from "@/components/MainBlock/MainBlock";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import pattern from "@/public/assets/patterns/03.svg";
import icon from "@/public/assets/patterns/08.svg";
import Image from "next/image";
import Infrastructure from "@/components/Infrastructure/Infrastructure";
import {
	atmosphere,
	family,
	moments,
	retreat,
} from "@/data/infrastructureBlock";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const baseUrl = "https://lehit-village.com";

	return {
		title: t("infrastructure.metatags.title"),
		description: t("infrastructure.metatags.description"),
		alternates: {
			canonical: `${baseUrl}/${locale}/infrastructure`,
			languages: {
				uk: `${baseUrl}/ua/infrastructure`,
				en: `${baseUrl}/en/infrastructure`,
				"x-default": `${baseUrl}/infrastructure`,
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
				title={t("infrastructure.main.title")}
				description={t("infrastructure.main.description")}
				bgClass="bg-[url('/assets/infrastructure.png')]"
				genplan
			/>

			<section>
				<div className="flex items-center gap-3 px-14 pt-14">
					<Image src={icon} alt="pattern" width={21} />
					<h2 className="text-base leading-5 uppercase text-gray-100 font-CodecPro500 md:text-2xl lg:leading-6">
						{t("navbar.infrastructure")}
					</h2>
				</div>

				<Infrastructure
					position="01"
					title={t("infrastructure.section.first")}
					data={atmosphere}
				/>
				<Infrastructure
					position="02"
					title={t("infrastructure.section.second")}
					data={retreat}
				/>
				<Infrastructure
					position="03"
					title={t("infrastructure.section.third")}
					data={moments}
				/>
				<Infrastructure
					position="04"
					title={t("infrastructure.section.fourth")}
					data={family}
				/>
			</section>

			<section className="w-full h-full bg-[url('/assets/images/section.jpg')] bg-cover bg-center bg-no-repeat flex flex-col justify-center mt-14">
				<div className="flex flex-col gap-3 bg-primary-100 md:w-1/2 p-10">
					<div className="flex items-center gap-3 mt-2">
						<Image src={pattern} alt="pattern" width={21} />
						<h2 className="text-base leading-5 uppercase text-gray-0 font-CodecPro500 md:text-2xl lg:leading-6">
							{t("infrastructure.activities.title")}
						</h2>
					</div>
					<p className="font-CodecPro300 text-sm md:text-base text-gray-70 leading-6">
						{t("infrastructure.activities.text")}
					</p>
				</div>
			</section>
		</>
	);
}
