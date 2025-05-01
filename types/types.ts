import { StaticImageData } from "next/image";

export interface Room {
	id: number;
	name: string;
	area: string;
}

export interface CottageData {
	slug: string;
	cottageName: string;
	area: string;
	price: string;
	paybackCount: string;
	bgUrl: string;
	rooms: Room[];
	totalArea: string;
	text: string;
	interior: string;
	planSlides: StaticImageData[];
}
