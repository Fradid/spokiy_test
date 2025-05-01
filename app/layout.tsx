import type { Metadata } from "next";
import "./globals.css";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
	title: "Something we need to write",
	description: "Description we need",
};

export async function generateStaticParams() {
	return [{ locale: "uk" }, { locale: "en" }];
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body>{children}</body>
		</html>
	);
}
