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
		uk: "Вигідна інвестиція",
	},
	{
		icon: secondBullet,
		en: "A place for relaxation",
		uk: "Місце для відпочинку",
	},
	{ icon: thirdBullet, en: "Modern technologies", uk: "Сучасні технології" },
	{
		icon: fourthBullet,
		en: "Ecological materials",
		uk: "Екологічні матеріали",
	},
	{ icon: fifthBullet, en: "Ergonomic planning", uk: "Ергономічне планування" },
	{ icon: sixthBullet, en: "Designer interior", uk: "Дизайнерський інтер’єр" },
];

export const comfort = {
	en: baseComfortItems.map(({ icon, en }) => ({ icon, text: en })),
	uk: baseComfortItems.map(({ icon, uk }) => ({ icon, text: uk })),
};
