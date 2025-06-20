import Script from "next/script";
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
			<head></head>
			<body>
				{children}
				<Script
					id="fb-pixel"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
              (function (w,d,s,url,n,t,g){
                if (w.fbq) return;
                n = w.fbq = function(){ n.callMethod ?
                  n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
                if (!w._fbq) w._fbq = n;
                n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
                t = d.createElement(s); t.async = true; t.src = url;
                g = d.getElementsByTagName(s)[0]; g.parentNode.insertBefore(t,g);
              })(window, document, 'script',
                 'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '2157865064714473');
              fbq('track', 'PageView');
            `,
					}}
				/>

				<noscript
					dangerouslySetInnerHTML={{
						__html: `
              <img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=2157865064714473&ev=PageView&noscript=1" />
            `,
					}}
				/>
			</body>
		</html>
	);
}
