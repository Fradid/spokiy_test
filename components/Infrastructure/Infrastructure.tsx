import pattern from "@/public/assets/patterns/03.svg";
import clsx from "clsx";
import { useLocale } from "next-intl";
import Image, { StaticImageData } from "next/image";

interface InfrastructureItem {
	title: string;
	text: string;
	img: StaticImageData;
	reversed?: boolean;
}

interface InfrastructureProps {
	position: string;
	title: string;
	data: {
		en: InfrastructureItem[];
		ua: InfrastructureItem[];
	};
}

const Infrastructure = ({ position, title, data }: InfrastructureProps) => {
	const locale = useLocale() as "en" | "ua";
	const items = data[locale];

	return (
		<>
			<div
				className="flex flex-col items-center justify-center gap-4 bg-primary-100 p-10 my-10"
				data-aos="fade-down"
				data-aos-easing="linear"
				data-aos-duration="500"
			>
				<p className="text-4xl md:text-5xl text-secondary-100 font-CodecPro font-normal">
					{position}
				</p>
				<div className="flex items-center gap-3 mt-2">
					<Image src={pattern} alt="pattern" width={21} />
					<h2 className="text-base leading-5 uppercase text-gray-0 font-CodecPro500 md:text-2xl lg:leading-6">
						{title}
					</h2>
				</div>
			</div>

			<div className="flex flex-col gap-14">
				{items.map((item, index) => {
					const delay = [400, 600, 800, 1000, 1200, 1400, 1600];
					return (
						<div
							key={index}
							className={clsx(
								"flex border border-gray-70",
								item.reversed
									? "flex-col items-center pt-10 md:pt-0 md:flex-row-reverse rounded-tl-4xl rounded-bl-4xl ml-10"
									: "flex-col items-center pt-10 md:pt-0 md:flex-row rounded-tr-4xl rounded-br-4xl mr-10"
							)}
							data-aos="fade-up"
							data-aos-easing="linear"
							data-aos-duration="500"
							data-aos-delay={delay[index % delay.length]}
						>
							<div className="w-full md:w-[400px] h-[300px] flex-shrink-0 overflow-hidden">
								<Image
									src={item.img}
									alt={item.title}
									width={400}
									height={300}
									className="w-full h-full object-cover"
								/>
							</div>
							{/**max-w-3xs sm:max-w-xs md:max-w-sm lg:max-w-3xl */}
							<div className="flex flex-col justify-center items-center gap-6 p-6 md:p-14 md:w-1/2 lg:w-4/5">
								<h3 className="font-CodecPro500 text-base md:text-lg text-gray-100 uppercase">
									{item.title}
								</h3>
								<p className="font-CodecPro300 text-sm md:text-base text-gray-70 leading-6">
									{item.text}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Infrastructure;
