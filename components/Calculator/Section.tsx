"use client";

import React from "react";
import Calculator from "./Component/Calculator";

const Section = () => {
	return (
		<section className="bg-gray-100 py-14 px-5">
			<div className="mx-auto max-w-4xl">
				<Calculator />
			</div>
		</section>
	);
};

export default Section;
