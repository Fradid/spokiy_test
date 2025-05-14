import "./globals.css";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
	return [{ locale: "ua" }, { locale: "en" }];
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
