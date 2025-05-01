import podyh1 from "@/public/assets/images/podyh/1.webp"
import podyh2 from "@/public/assets/images/podyh/2.webp"
import podyh3 from "@/public/assets/images/podyh/3.webp"
import podyh4 from "@/public/assets/images/podyh/4.webp"
import podyh5 from "@/public/assets/images/podyh/5.webp"
import podyhBG from "@/public/assets/images/podyh/house-bg.jpg"
import nebo1 from "@/public/assets/images/nebo/1.jpg"
import nebo2 from "@/public/assets/images/nebo/2.jpg"
import nebo3 from "@/public/assets/images/nebo/3.jpg"
import nebo4 from "@/public/assets/images/nebo/4.jpg"
import nebo5 from "@/public/assets/images/nebo/5.jpg"
import neboBG from "@/public/assets/images/nebo/nebo.jpg"
import solar1 from "@/public/assets/images/solar/1.jpg"
import solar2 from "@/public/assets/images/solar/2.jpg"
import solar3 from "@/public/assets/images/solar/3.jpg"
import solar4 from "@/public/assets/images/solar/4.jpg"
import solar5 from "@/public/assets/images/solar/5.jpg"
import solarBG from "@/public/assets/images/solar/solar.jpg"
import svitanok1 from "@/public/assets/images/svitanok/1.jpg"
import svitanok2 from "@/public/assets/images/svitanok/2.jpg"
import svitanok3 from "@/public/assets/images/svitanok/3.jpg"
import svitanok4 from "@/public/assets/images/svitanok/4.jpg"
import svitanok5 from "@/public/assets/images/svitanok/5.jpg"
import svitanokBG from "@/public/assets/images/svitanok/svitanok.jpg"
import dyvo1 from "@/public/assets/images/dyvo/1.jpg"
import dyvo2 from "@/public/assets/images/dyvo/2.jpg"
import dyvo3 from "@/public/assets/images/dyvo/3.jpg"
import dyvo4 from "@/public/assets/images/dyvo/4.jpg"
import dyvo5 from "@/public/assets/images/dyvo/5.jpg"
import dyvoBG from "@/public/assets/images/dyvo/dyvo.jpg"
import plan1 from "@/public/assets/images/plans/1flor1.png"
import plan2 from "@/public/assets/images/plans/1flor2.png"
import plan3 from "@/public/assets/images/plans/2flor1.png"
import plan4 from "@/public/assets/images/plans/2flor2.png"
import plan5 from "@/public/assets/images/plans/31flor1.png"
import plan6 from "@/public/assets/images/plans/31flor2.png"
import plan7 from "@/public/assets/images/plans/32flor1.png"
import plan8 from "@/public/assets/images/plans/32flor2.png"
import plan9 from "@/public/assets/images/plans/4flor1.png"
import plan10 from "@/public/assets/images/plans/4flor2.png"
import plan11 from "@/public/assets/images/plans/5flor1.png"

export const cottages = {
	podyh: {
		slug: "podyh",
		imageSlides: [podyh1, podyh2, podyh3, podyh4, podyh5],
		planSlides: [plan1, plan2],
		bgImg: podyhBG,
		getData: (t: any) => ({
			cottageName: t("cottages.podyh"),
			area: `60 ${t("sections.cottages.mLabel")}²`,
			price: "199 101 $",
			paybackCount: `9 ${t("sections.quality.years")}`,
			bgUrl: `/assets/images/podyh.webp`,
			rooms: [
				{ id: 1, name: t("cottage.about.kitchen"), area: `30 ${t("sections.cottages.mLabel")}²` },
				{ id: 2, name: t("cottage.about.firstBedroom"), area: `7 ${t("sections.cottages.mLabel")}²` },
				{ id: 3, name: t("cottage.about.secondBedroom"), area: `13,7 ${t("sections.cottages.mLabel")}²` },
				{ id: 4, name: t("cottage.about.bathroom"), area: `4,7 ${t("sections.cottages.mLabel")}²` },
				{ id: 5, name: t("cottage.about.terrace"), area: `4,6 ${t("sections.cottages.mLabel")}²` },
			],
			totalArea: `60 ${t("sections.cottages.mLabel")}²`,
			text: t("cottage.podyh.description"),
			interior: t("cottage.podyh.interior"),
		}),
	},
	nebo: {
		slug: "nebo",
		imageSlides: [nebo1, nebo2, nebo3, nebo4, nebo5],
		planSlides: [plan3, plan4],
		bgImg: neboBG,
		getData: (t: any) => ({
			cottageName: t("cottages.nebo"),
			area: `52 ${t("sections.cottages.mLabel")}²`,
			price: "176 530 $",
			paybackCount: `9 ${t("sections.quality.years")}`,
			bgUrl: `/assets/images/nebo.png`,
			rooms: [
				{ id: 1, name: t("cottage.about.kitchen"), area: `26,3 ${t("sections.cottages.mLabel")}²` },
				{ id: 2, name: t("cottage.about.firstBedroom"), area: `13 ${t("sections.cottages.mLabel")}²` },
				{ id: 4, name: t("cottage.about.bathroom"), area: `7 ${t("sections.cottages.mLabel")}²` },
				{ id: 5, name: t("cottage.about.terrace"), area: `3 ${t("sections.cottages.mLabel")}²` },
			],
			totalArea: `50 ${t("sections.cottages.mLabel")}²`,
			text: t("cottage.nebo.description"),
			interior: t("cottage.nebo.interior"),
		}),
	},
	"solar3.1": {
		slug: "solar3.1",
		imageSlides: [solar1, solar2, solar3, solar4, solar5],
		planSlides: [plan5, plan6],
		bgImg: solarBG,
		getData: (t: any) => ({
			cottageName: t("cottages.solar3-1"),
			area: `53 ${t("sections.cottages.mLabel")}²`,
			price: "130 924 $",
			paybackCount: `9 ${t("sections.quality.years")}`,
			bgUrl: `/assets/images/solar.png`,
			rooms: [
				{ id: 1, name: t("cottage.about.kitchen"), area: `29 ${t("sections.cottages.mLabel")}²` },
				{ id: 2, name: t("cottage.about.firstBedroom"), area: `15,1 ${t("sections.cottages.mLabel")}²` },
				{ id: 4, name: t("cottage.about.bathroom"), area: `5,2 ${t("sections.cottages.mLabel")}²` },
				{ id: 5, name: t("cottage.about.terrace"), area: `3,7 ${t("sections.cottages.mLabel")}²` },
			],
			totalArea: `53 ${t("sections.cottages.mLabel")}²`,
			text: t("cottage.solar.description"),
			interior: t("cottage.solar.interior"),
		}),
	},
	"solar3.2": {
		slug: "solar3.2",
		imageSlides: [solar1, solar2, solar3, solar4, solar5],
		planSlides: [plan7, plan8],
		bgImg: solarBG,
		getData: (t: any) => ({
			cottageName: t("cottages.solar3-2"),
			area: `53 ${t("sections.cottages.mLabel")}²`,
			price: "130 924 $",
			paybackCount: `9 ${t("sections.quality.years")}`,
			bgUrl: `/assets/images/solar.png`,
			rooms: [
				{ id: 1, name: t("cottage.about.kitchen"), area: `29 ${t("sections.cottages.mLabel")}²` },
				{ id: 2, name: t("cottage.about.firstBedroom"), area: `15,1 ${t("sections.cottages.mLabel")}²` },
				{ id: 4, name: t("cottage.about.bathroom"), area: `5,2 ${t("sections.cottages.mLabel")}²` },
				{ id: 5, name: t("cottage.about.terrace"), area: `3,7 ${t("sections.cottages.mLabel")}²` },
			],
			totalArea: `53 ${t("sections.cottages.mLabel")}²`,
			text: t("cottage.solar.description"),
			interior: t("cottage.solar.interior"),
		}),
	},
	svitanok: {
		slug: "svitanok",
		imageSlides: [svitanok1, svitanok2, svitanok3, svitanok4, svitanok5],
		planSlides: [plan9, plan10],
		bgImg: svitanokBG,
		getData: (t: any) => ({
			cottageName: t("cottages.svitanok"),
			area: `52 ${t("sections.cottages.mLabel")}²`,
			price: "153 802 $",
			paybackCount: `9 ${t("sections.quality.years")}`,
			bgUrl: `/assets/images/svitanok.png`,
			rooms: [
				{ id: 1, name: t("cottage.about.kitchen"), area: `26,4 ${t("sections.cottages.mLabel")}²` },
				{ id: 2, name: t("cottage.about.firstBedroom"), area: `13,1 ${t("sections.cottages.mLabel")}²` },
				{ id: 4, name: t("cottage.about.bathroom"), area: `7,8 ${t("sections.cottages.mLabel")}²` },
				{ id: 5, name: t("cottage.about.terrace"), area: `4,7 ${t("sections.cottages.mLabel")}²` },
			],
			totalArea: `52 ${t("sections.cottages.mLabel")}²`,
			text: t("cottage.svitanok.description"),
			interior: t("cottage.svitanok.interior"),
		}),
	},
	dyvo: {
		slug: "dyvo",
		imageSlides: [dyvo1, dyvo2, dyvo3, dyvo4, dyvo5],
		planSlides: [plan11],
		bgImg: dyvoBG,
		getData: (t: any) => ({
			cottageName: t("cottages.dyvo"),
			area: `44 ${t("sections.cottages.mLabel")}²`,
			price: "108 118 $",
			paybackCount: `9 ${t("sections.quality.years")}`,
			bgUrl: `/assets/images/dyvo.png`,
			rooms: [
				{ id: 1, name: t("cottage.about.kitchen"), area: `23,2 ${t("sections.cottages.mLabel")}²` },
				{ id: 2, name: t("cottage.about.firstBedroom"), area: `10,3 ${t("sections.cottages.mLabel")}²` },
				{ id: 4, name: t("cottage.about.bathroom"), area: `5,8 ${t("sections.cottages.mLabel")}²` },
				{ id: 5, name: t("cottage.about.terrace"), area: `4,7 ${t("sections.cottages.mLabel")}²` },
			],
			totalArea: `44 ${t("sections.cottages.mLabel")}²`,
			text: t("cottage.dyvo.description"),
			interior: t("cottage.dyvo.interior"),
		}),
	},
};

export const cottagesTableData = [
  {
    name: "PODYH",
    details: {
      area: '60 м²',
      firstDeposit: '$ 211, 545',
      secondDeposit: '$ 207, 397',
      thirdDeposit: '$ 203, 249',
      fourthDeposit: '$ 199, 101',
      rent: '$ 200',
      payback_yrs: 9,
      profit: '$ 26, 280',
      monthly_profit: '$ 2, 190',
    },
    slug: 'cottages/podyh'
  },
  {
    name: "NEBO",
    details: {
      area: '52 м²',
      firstDeposit: '$ 187, 564',
      secondDeposit: '$ 183, 886',
      thirdDeposit: '$ 180, 208',
      fourthDeposit: '$ 176, 530',
      rent: '$ 180',
      payback_yrs: 9,
      profit: '$ 23, 652',
      monthly_profit: '$ 1, 917',
    },
    slug: 'cottages/nebo'
  },
  {
    name: "SOLAR 1",
    details: {
      area: '53 м²',
      firstDeposit: '$ 139, 107',
      secondDeposit: '$ 136, 379',
      thirdDeposit: '$ 133, 652',
      fourthDeposit: '$ 130, 924',
      rent: '$ 135',
      payback_yrs: 9,
      profit: '$ 17, 739',
      monthly_profit: '$ 1, 478',
    },
    slug: 'cottages/solar3.1'
  },
  {
    name: "SOLAR 2",
    details: {
      area: '53 м²',
      firstDeposit: '$ 139, 107',
      secondDeposit: '$ 136, 379',
      thirdDeposit: '$ 133, 652',
      fourthDeposit: '$ 130, 924',
      rent: '$ 135',
      payback_yrs: 9,
      profit: '$ 17, 739',
      monthly_profit: '$ 1, 478',
    },
    slug: 'cottages/solar3.2'
  },
  {
    name: "SVITANOK",
    details: {
      area: '52 м²',
      firstDeposit: '$ 163, 415',
      secondDeposit: '$ 160, 211',
      thirdDeposit: '$ 157, 007',
      fourthDeposit: '$ 153, 802',
      rent: '$ 155',
      payback_yrs: 9,
      profit: '$ 20, 367',
      monthly_profit: '$ 1, 697',
    },
    slug: 'cottages/svitanok'
  },
  {
    name: "DYVO",
    details: {
      area: '44 м²',
      firstDeposit: '$ 114, 876',
      secondDeposit: '$ 112, 624',
      thirdDeposit: '$ 110, 371',
      fourthDeposit: '$ 108, 118',
      rent: '$ 110',
      payback_yrs: 9,
      profit: '$ 14, 454',
      monthly_profit: '$ 1205',
    },
    slug: 'cottages/dyvo'
  },
];
