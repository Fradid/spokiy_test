"use client";

import { usePathname } from "@/i18n/navigation";
import { useLayoutEffect } from "react";

export default function Home() {
	const pathname = usePathname();

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
		window.addEventListener("message", function (e) {
			if (e.data?.event === "g_widget:load") {
				const iframe = document.getElementById(
					"layout-iframe"
				) as HTMLIFrameElement;
				if (iframe?.contentWindow) {
					iframe.contentWindow.postMessage(
						{
							action: "add_css",
							url: "https://lehit-village.g-plus.site/g-plus-visual-360.css",
						},
						"https://crm.g-plus.app"
					);
				}
			}
		});
	}, [pathname]);

	return (
		<div className="relative w-full">
			<iframe
				id="layout-iframe"
				src={
					"https://crm.g-plus.app/manage/buildings/25695/iframe_layout?lang=ua&token=b3a3b13db4794ce893a949d8b95aaf6a&utm_source=lehit-village.g-plus.site"
				}
				width={"100%"}
				height={"100%"}
				className="absolute top-[62px] left-0 w-full h-[calc(100vh-62px)]"
			></iframe>
		</div>
	);
}
