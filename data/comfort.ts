import firstBullet from "@/public/assets/patterns/patterns1.svg";
import secondBullet from "@/public/assets/patterns/02.svg";
import thirdBullet from "@/public/assets/patterns/04.svg";
import fourthBullet from "@/public/assets/patterns/patterns.svg";
import fifthBullet from "@/public/assets/patterns/12.svg";
import sixthBullet from "@/public/assets/patterns/10.svg";

const baseComfortItems = [
	{
		icon: firstBullet,
		en: "A profitable investment",
		ua: "Вигідна інвестиція",
	},
	{
		icon: secondBullet,
		en: "A place for relaxation",
		ua: "Місце для відпочинку",
	},
	{ icon: thirdBullet, en: "Modern technologies", ua: "Сучасні технології" },
	{
		icon: fourthBullet,
		en: "Ecological materials",
		ua: "Екологічні матеріали",
	},
	{ icon: fifthBullet, en: "Ergonomic planning", ua: "Ергономічне планування" },
	{ icon: sixthBullet, en: "Designer interior", ua: "Дизайнерський інтер’єр" },
];

export const comfort = {
	en: baseComfortItems.map(({ icon, en }) => ({ icon, text: en })),
	ua: baseComfortItems.map(({ icon, ua }) => ({ icon, text: ua })),
};
