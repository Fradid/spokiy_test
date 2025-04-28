import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import Footer from "@/components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModalProvider } from "@/context/ModalContext";
import Modal from "@/components/Modal/Modal";

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
	const messages = await getMessages({ locale });

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<ModalProvider>
						<Header />
						{children}
						<Footer />
						<Modal />
					</ModalProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
