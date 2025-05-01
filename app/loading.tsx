"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import loading from "@/public/assets/logo_loading.png";

const Loading = () => {
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setFadeOut(true);
		}, 500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`fixed inset-0 z-[9999] flex justify-center items-center bg-primary-100 transition-opacity duration-700 overflow-hidden ${
				fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
			}`}
		>
			<Image src={loading} alt="loading" className="animate-pulse" priority />
		</div>
	);
};

export default Loading;
