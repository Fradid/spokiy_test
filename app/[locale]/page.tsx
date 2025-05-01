import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import MainBlock from "@/components/MainBlock/MainBlock";
import AboutSection from "@/components/AboutSection/AboutSection";
import CottagesSection from "@/components/CottageSection/CottagesSection";
import Image from "next/image";
import pattern from "@/public/assets/patterns/03.svg";
import patternAcc from "@/public/assets/patterns/16.svg";
import patternIcon from "@/public/assets/patterns/04.svg";
import patternLogo from "@/public/assets/patterns/10.svg";
import InfrastructureSection from "@/components/InfrastructureSection/InfrastructureSection";
import Accordion from "@/components/Accordion/Accordion";
import { advantages } from "@/data/advantages";
import plus from "@/public/assets/icons/plus.svg";
import minus from "@/public/assets/icons/minus.svg";
import ReusableSection from "@/components/ReusableSection/ReusableSection";
import FAQSection from "@/components/FAQSection/FAQSection";
import PresentationSection from "@/components/PresentationSection/PresentationSection";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	return {
		title: t("home.metatags.title"),
		description: t("home.metatags.description"),
	};
}

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const paybackSections = [
		t("sections.payback.sections.first"),
		t("sections.payback.sections.second"),
		t("sections.payback.sections.third"),
		t("sections.payback.sections.fourth"),
	];

	const backgroundColors = ["bg-primary-70", "bg-primary-90"];

	return (
		<>
			<MainBlock
				title={t("home.main.title")}
				description={t("home.main.description")}
				btnLabel={t("btnLabel.leaveRequest")}
				bgClass="bg-[url('/assets/home_bg.webp')]"
			/>

			<AboutSection />
			<CottagesSection />

			<section id="payback" className="bg-primary-100">
				<div className="w-full max-w-6xl mx-auto py-14 flex flex-col items-center px-4 sm:px-6">
					<Image src={pattern} alt="pattern" width={21} />

					<h2 className="mt-6 text-white uppercase text-base font-CodecPro500 leading-6 text-center md:text-2xl">
						{t("sections.payback.title")}
					</h2>

					<p className="mt-4 text-sm leading-6 text-gray-30 font-CodecPro200 text-center px-10 lg:px-0 md:text-base">
						{t("sections.payback.intro")}
					</p>

					<p className="mt-4 text-sm leading-6 text-gray-30 font-CodecPro200 text-center px-10 lg:px-0 md:text-base">
						{t("sections.payback.potential")}
					</p>

					<div className="flex flex-wrap flex-col gap-4 justify-center mt-12 md:flex-row md:gap-0">
						{paybackSections.map((section, idx) => (
							<div
								key={idx}
								className={`flex-1 h-[57px] px-5 py-5 flex items-center justify-center text-[14px] leading-[19.6px] font-CodecPro300 text-secondary-10 text-center lg:py-0 ${
									backgroundColors[idx % backgroundColors.length]
								}`}
							>
								{section}
							</div>
						))}
					</div>
				</div>
			</section>

			<InfrastructureSection />

			<section id="advantages">
				<div className="flex flex-col items-center pt-14 h-[700px] lg:h-[819px] bg-[url('/assets/treasures-bg.jpg')] bg-bottom bg-no-repeat bg-cover relative">
					<div className="absolute lg:w-6xl">
						<Accordion
							data={advantages}
							title={t("sections.advantages.title")}
							openIcon={plus}
							closeIcon={minus}
							className="border-t border-primary-40 py-2"
							classContainer="mx-5 md:w-md px-8 pt-8 pb-2 relative"
						>
							<Image
								src={patternAcc}
								alt="pattern-accordion"
								className="h-[349px] w-[296px] opacity-80"
							/>
						</Accordion>
					</div>
				</div>
			</section>

			<ReusableSection
				icon={patternIcon}
				title={t("sections.whyYouNeed.title")}
				pattern={patternLogo}
				textTitle={t("sections.whyYouNeed.textTitle")}
				firstText={t("sections.whyYouNeed.firstText")}
				secondText={t("sections.whyYouNeed.secondText")}
			/>

			<PresentationSection />

			<FAQSection />
		</>
	);
}
