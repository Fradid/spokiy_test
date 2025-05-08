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
import ClientLayout from "@/components/ClientLayout/ClientLayout";

export const metadata: Metadata = {
	title: "Something we need to write",
	description: "Description we need",
};

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
	const messages = await getMessages({ locale });

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<ModalProvider>
				<Header />
				<ClientLayout>{children}</ClientLayout>
				<Footer />
				<Modal />
			</ModalProvider>
		</NextIntlClientProvider>
	);
}
