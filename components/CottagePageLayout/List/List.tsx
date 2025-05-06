import { Room } from "@/types/types";
import { useTranslations } from "next-intl";
import React from "react";

interface ListProps {
	rooms: Room[];
	totalArea: string;
}

const List = ({ rooms, totalArea }: ListProps) => {
	const t = useTranslations("cottage");

	return (
		<>
			<h2
				className="font-CodecPro500 text-base md:text-2xl uppercase text-gray-100 w-full"
				data-aos="fade-right"
				data-aos-easing="linear"
				data-aos-duration="500"
			>
				{t("about.explication")}
			</h2>
			<div className="mt-6 w-full">
				{rooms.map((room, index) => (
					<div
						key={room.id}
						className={`flex justify-between items-center py-2 ${
							index !== rooms.length - 1 ? "border-b border-primary-40" : ""
						}`}
					>
						<div
							className="flex items-center gap-2"
							data-aos="fade-right"
							data-aos-easing="linear"
							data-aos-duration="500"
						>
							<span className="items-center text-center font-CodecPro300 text-sm h-5 w-5 border border-primary-50 rounded-full">
								{room.id}
							</span>
							<span className="font-CodecPro300 text-gray-100 text-base">
								{room.name}
							</span>
						</div>
						<span
							className="font-CodecPro300 text-gray-100 text-base"
							data-aos="fade-left"
							data-aos-easing="linear"
							data-aos-duration="500"
						>
							{room.area}
						</span>
					</div>
				))}

				<div
					className="flex justify-between mt-8"
					data-aos="fade-up"
					data-aos-easing="linear"
					data-aos-duration="500"
				>
					<span className="font-CodecPro300 text-gray-100 text-base">
						{t("main.area")}
					</span>
					<span className="font-CodecPro300 text-gray-100 text-base">
						{totalArea}
					</span>
				</div>
			</div>
		</>
	);
};

export default List;
