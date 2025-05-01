"use client";

import Image from "next/image";
import Accordion from "../Accordion/Accordion";
import { questions, investmentQuestions } from "@/data/questions";

import pattern from "@/public/assets/patterns/patterns1.svg";
import open from "@/public/assets/icons/plus-circle.svg";
import close from "@/public/assets/icons/minus-circle.svg";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useModal } from "@/context/ModalContext";

const FAQSection = () => {
	const t = useTranslations("sections.faq");
	const btn = useTranslations("btnLabel");
	const pathname = usePathname();
	const investmentPath = pathname.includes("investment");
	const { toggle } = useModal();

	return (
		<section className="max-w-7xl mx-auto p-6 lg:p-14">
			<div className="mb-2.5 flex flex-col items-center justify-center gap-2 lg:gap-8">
				<Image src={pattern} alt="Decorative pattern" />
				<h2 className="text-base md:text-2xl uppercase leading-6 text-gray-100 font-CodecPro500">
					{t("title")}
				</h2>
			</div>
			<div className="flex items-center lg:items-start justify-between flex-col lg:flex-row gap-8 lg:mt-[45px]">
				<Accordion
					data={investmentPath ? investmentQuestions : questions}
					faqMode
					openIcon={open}
					closeIcon={close}
				/>
				<div className="flex flex-col items-center justify-between gap-6 lg:h-[576px] w-4/5 lg:w-[32.6%] py-10 px-8 bg-primary-100">
					<div className="flex flex-col gap-2 w-full">
						<p className="font-CodecPro300 text-white text-base leading-[22.4px] uppercase">
							{t("blockTitle")}
						</p>
						<p className="font-CodecPro300 text-gray-70 text-base leading-[19.6px]">
							{t("blockText")}
						</p>
					</div>
					<div className="flex flex-col md:flex-row lg:flex-col gap-4 w-full">
						<button className="text-white font-CodecPro300 text-sm md:text-base border border-white leading-6 py-3 px-5 w-full text-center hover:bg-primary-80 hover:cursor-pointer">
							+380 73 808 11 88
						</button>
						<button
							className="bg-white text-primary-100 font-CodecPro300 text-sm md:text-base leading-6 py-3 px-5 w-full text-center hover:bg-primary-50 hover:cursor-pointer"
							onClick={() => toggle("contact")}
						>
							{btn("formBtn")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQSection;
