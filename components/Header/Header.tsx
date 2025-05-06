"use client";

import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { Link, usePathname } from "@/i18n/navigation";
import Navbar from "../Navbar/Navbar";
import { useLocale } from "next-intl";

const Header = () => {
	const pathname = usePathname();
	const locale = useLocale();

	// Generate language button classes
	const getLangButtonClasses = (lang: string) => {
		const baseClasses =
			"px-3 py-4 transition hover:border-b hover:border-gray-100 hover:border-solid hover:mb-[-1px]";
		const activeClasses = "border-b border-gray-100 border-solid mb-[-1px]";
		return `${baseClasses} ${locale === lang ? activeClasses : ""}`;
	};

	return (
		<header className="fixed top-0 w-full h-[62px] z-50 flex justify-between items-center p-4 bg-primary-20 border-b border-[#e5e7eb] lg:px-14">
			<Link href="/" aria-label="Homepage">
				<Image src={logo} alt="Lehit Logo" />
			</Link>

			<div className="flex flex-row-reverse items-center gap-6 lg:flex-row">
				<Navbar />
				<div className="flex gap-3 text-lg font-CodecPro200 text-gray-70 leading-[18px]">
					{["uk", "en"].map((lang) => (
						<Link
							key={lang}
							href={pathname}
							locale={lang}
							scroll={false}
							className={getLangButtonClasses(lang)}
						>
							{lang.toUpperCase()}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
