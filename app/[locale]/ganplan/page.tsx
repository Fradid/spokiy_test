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

	const baseUrl = "https://spokiy-test.vercel.app";

	return {
		title: t("ganplan.metatags.title"),
		description: t("ganplan.metatags.description"),
		alternates: {
			canonical: `${baseUrl}/${locale}/ganplan`,
		},
	};
}

export default function Home() {

	return (
		<Ganplan />
	);
}
