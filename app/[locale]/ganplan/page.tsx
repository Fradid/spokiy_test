import Ganplan from "@/components/Ganplan/Ganplan";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const baseUrl = "https://lehit-village.com";

	return {
		title: t("ganplan.metatags.title"),
		description: t("ganplan.metatags.description"),
		alternates: {
			canonical: `${baseUrl}/${locale}/ganplan`,
			languages: {
				uk: `${baseUrl}/ua/ganplan`,
				en: `${baseUrl}/en/ganplan`,
				"x-default": `${baseUrl}/ganplan`,
			},
		},
	};
}

export default function Home() {

	return (
		<Ganplan />
	);
}
