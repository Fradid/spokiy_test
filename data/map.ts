import icon1 from "@/public/assets/icons/locations/icon1.svg";
import icon2 from "@/public/assets/icons/locations/icon2.svg";
import icon3 from "@/public/assets/icons/locations/icon3.svg";
import icon4 from "@/public/assets/icons/locations/icon4.svg";
import icon5 from "@/public/assets/icons/locations/icon5.svg";
import icon6 from "@/public/assets/icons/locations/icon6.svg";
import icon7 from "@/public/assets/icons/locations/icon7.svg";
import icon8 from "@/public/assets/icons/locations/icon8.svg";
import line from "@/public/assets/icons/locations/line.svg";
import lineRev from "@/public/assets/icons/locations/line-reverse.svg";

export const mapLocations = {
	en: [
		{
			id: 1,
			title: "Skhidnytsia",
			distance: "5 km 14 min",
			icon: icon1,
			line: line,
			top: "top-[700px] md:top-[438px] lg:top-[496px]",
			left: "left-[230px] md:left-[412px] lg:left-[626px]",
		},
		{
			id: 2,
			title: "Stryi river",
			icon: icon2,
			line: lineRev,
			top: "top-[784px] md:top-[520px] lg:top-[587px]",
			left: "left-[60px] md:left-[54px] lg:left-[139px]",
		},
		{
			id: 3,
			title: "LEHIT Wellness Village",
			icon: icon3,
			line: lineRev,
			top: "top-[900px] md:top-[646px] lg:top-[688px]",
			left: "left-[126px] md:left-[292px] lg:left-[528px]",
		},
		{
			id: 4,
			title: "Observation deck",
			distance: "3.1 km 7 min",
			icon: icon4,
			line: lineRev,
			top: "top-[968px] md:top-[764px] lg:top-[827px]",
			left: "left-[25px] md:left-[37px] lg:left-[202px]",
		},
		{
			id: 5,
			title: "Island on the river Stryi",
			distance: "3.1 km 7 min",
			icon: icon5,
			line: lineRev,
			top: "top-[980px] md:top-[795px] lg:top-[839px]",
			left: "left-[158px] md:left-[347px] lg:left-[561px]",
		},
		{
			id: 6,
			title: "Mountain of the Heavenly Hundred Heroes",
			distance: "7.7 km 20 min",
			icon: icon6,
			line: lineRev,
			top: "top-[1056px] md:top-[940px] lg:top-[978px]",
			left: "left-[61px] md:left-[194px] lg:left-[350px]",
		},
		{
			id: 7,
			title: "Laznyi waterfall",
			distance: "8.2 km 24 min",
			icon: icon7,
			line: line,
			top: "top-[1123px] md:top-[1044px] lg:top-[1086px]",
			left: "left-[163px] md:left-[380px] lg:left-[552px]",
		},
		{
			id: 8,
			title: "Tustan Reserve",
			distance: "15 km 26 min",
			icon: icon8,
			line: line,
			top: "hidden md:top-[636px] lg:top-[673px]",
			left: "left-[1123px] md:left-[551px] lg:left-[771px]",
		},
	],
	ua: [
		{
			id: 1,
			title: "Східниця",
			distance: "5 км 14 хв",
			icon: icon1,
			line: line,
			top: "top-[700px] md:top-[438px] lg:top-[496px]",
			left: "left-[230px] md:left-[412px] lg:left-[626px]",
		},
		{
			id: 2,
			title: "р. Стрий",
			icon: icon2,
			line: lineRev,
			top: "top-[784px] md:top-[520px] lg:top-[587px]",
			left: "left-[60px] md:left-[54px] lg:left-[139px]",
		},
		{
			id: 3,
			title: "LEHIT Wellness Village",
			icon: icon3,
			line: lineRev,
			top: "top-[900px] md:top-[646px] lg:top-[688px]",
			left: "left-[126px] md:left-[292px] lg:left-[528px]",
		},
		{
			id: 4,
			title: "Оглядовий майданчик",
			distance: "3.1 км 7 хв",
			icon: icon4,
			line: lineRev,
			top: "top-[968px] md:top-[764px] lg:top-[827px]",
			left: "left-[25px] md:left-[37px] lg:left-[202px]",
		},
		{
			id: 5,
			title: "Острів на р. Стрий",
			distance: "3.1 км 7 хв",
			icon: icon5,
			line: lineRev,
			top: "top-[980px] md:top-[795px] lg:top-[839px]",
			left: "left-[158px] md:left-[347px] lg:left-[561px]",
		},
		{
			id: 6,
			title: "Гора Героїв Небесної сотні",
			distance: "7.7 км 20 хв",
			icon: icon6,
			line: lineRev,
			top: "top-[1056px] md:top-[940px] lg:top-[978px]",
			left: "left-[61px] md:left-[194px] lg:left-[350px]",
		},
		{
			id: 7,
			title: "Водоспад Лазний",
			distance: "8.2 км 24 хв",
			icon: icon7,
			line: line,
			top: "top-[1123px] md:top-[1044px] lg:top-[1086px]",
			left: "left-[163px] md:left-[380px] lg:left-[552px]",
		},
		{
			id: 8,
			title: "Заповідник Тустань",
			distance: "15 км 26 хв",
			icon: icon8,
			line: line,
			top: "hidden md:top-[636px] lg:top-[673px]",
			left: "left-[1123px] md:left-[551px] lg:left-[771px]",
		},
	],
};

export const around = {
	en: [
		{
			title: "Krutohir 365",
			distance: "13 km",
			time: "20 min",
		},
		{
			title: "Tsyukhiv Verkh",
			distance: "15 km",
			time: "32 min",
		},
		{
			title: "Bukovytsia",
			distance: "22 km",
			time: "36 min",
		},
		{
			title: "Sopit Waterfall",
			distance: "24 km",
			time: "43 min",
		},
		{
			title: "Skole Beskydy",
			distance: "46 km",
			time: "55 min",
		},
	],
	ua: [
		{
			title: "Крутогір 365",
			distance: "13 км",
			time: "20 хв",
		},
		{
			title: "Цюхів Верх",
			distance: "15 км",
			time: "32 хв",
		},
		{
			title: "Буковиця",
			distance: "22 км",
			time: "36 хв",
		},
		{
			title: "Водоспад Сопіт",
			distance: "24 км",
			time: "43 хв",
		},
		{
			title: "Сколівські Бескиди",
			distance: "46 км",
			time: "55 хв",
		},
	],
};
