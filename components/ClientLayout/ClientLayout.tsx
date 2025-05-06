"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return <>{children}</>;
};

export default ClientLayout;
