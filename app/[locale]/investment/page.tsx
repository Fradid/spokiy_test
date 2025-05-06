import ContactForm from "@/components/ContactForm/ContactForm";
import FAQSection from "@/components/FAQSection/FAQSection";
import MainBlock from "@/components/MainBlock/MainBlock";
import ReusableSection from "@/components/ReusableSection/ReusableSection";
import patternIcon from "@/public/assets/patterns/04.svg";
import patternLogo from "@/public/assets/patterns/10.svg";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import pattern from "@/public/assets/patterns/11.svg";
import QualitySection from "@/components/QualitySection/QualitySection";
import Section from "@/components/Calculator/Section";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const baseUrl = "https://spokiy-test.vercel.app";

	return {
		title: t("investment.metatags.title"),
		description: t("investment.metatags.description"),
		alternates: {
			canonical: `${baseUrl}/${locale}/investment`,
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
				title={t("investment.main.title")}
				description={t("investment.main.description")}
				btnLabel={t("btnLabel.leaveRequest")}
				bgClass="bg-[url('/assets/investment.png')]"
			/>
			<QualitySection />
			<Section />
			<section id="learnMore" className="text-white p-4 md:p-14">
				<div className="flex flex-col max-w-6xl mx-auto items-center bg-primary-100 md:flex-row gap-4 md:gap-12 justify-between px-5 md:px-20 py-14">
					<div className="flex flex-col max-w-md mx-auto px-4 sm:px-0">
						<Image src={pattern} alt="pattern" className="mb-8" />
						<h2
							className="text-2xl uppercase font-CodecPro500 leading-6 mb-2.5"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="300"
						>
							{t("sections.learnMore.title")}
						</h2>
						<p
							className="text-base font-CodecPro300 leading-6 text-gray-30"
							data-aos="fade-up"
							data-aos-easing="linear"
							data-aos-duration="300"
						>
							{t("sections.learnMore.description")}
						</p>
					</div>
					<div className="flex flex-col w-full md:w-1/2">
						<ContactForm />
					</div>
				</div>
			</section>
			<ReusableSection
				icon={patternIcon}
				title={t("sections.investIn.title")}
				pattern={patternLogo}
				textTitle={t("sections.investIn.textTitle")}
				firstText={t("sections.investIn.firstText")}
			/>
			<FAQSection />
		</>
	);
}
