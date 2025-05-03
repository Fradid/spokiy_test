import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import firstColor from "@/public/assets/icons/Exterior1.svg";
import secondColor from "@/public/assets/icons/Exterior2.svg";
import thirdColor from "@/public/assets/icons/Exterior3.svg";
import fourthColor from "@/public/assets/icons/Exterior4.svg";
import { exterior } from "@/data/exterior";

const ExteriorSection = () => {
  const t = useTranslations("cottages.exterior");
  const locale = useLocale() as "uk" | "en"; // either "uk" or "en"

  const labelStyle =
    "font-CodecPro300 text-gray-70 text-base py-4 lg:py-10 md:w-1/4";
  const contentStyle = "font-CodecPro300 text-gray-100 text-base";
  const rowBaseStyle =
    "flex flex-col items-start gap-3 md:gap-0 lg:flex-row lg:items-center";
  const borderedRow = `${rowBaseStyle} pt-3 lg:pt-0 border-t border-gray-40`;

  return (
    <section className="max-w-7xl mx-auto p-14">
      <h2 className="text-base leading-5 uppercase text-gray-100 font-CodecPro500 md:text-2xl lg:leading-6">
        {t("title")}
      </h2>

      <ul className="flex flex-col mt-10 gap-6 lg:gap-0">
        {/* Static colors row */}
        <li className={rowBaseStyle}>
          <p className={labelStyle}>{t("color")}</p>
          <div className="flex gap-3 md:w-4/5">
            <Image src={firstColor} alt="first color" className="w-10" />
            <Image src={secondColor} alt="second color" className="w-10" />
            <Image src={thirdColor} alt="third color" className="w-10" />
            <Image src={fourthColor} alt="fourth color" className="w-10" />
          </div>
        </li>

        {/* Dynamic sections from data */}
        {exterior.map((block) => (
          <li key={block.key} className={borderedRow}>
            <p className={labelStyle}>{t(`${block.key}.title`)}</p>
            <div className={`flex flex-col gap-4 lg:py-10 md:w-4/5`}>
              {block.sections.map((section) => (
                <div key={section.key} className="flex flex-col sm:flex-row">
                  {/* Render the section title (e.g., 'thickness') once */}
                  <p className={`${contentStyle} w-full ${block.key !== "foundation" && "sm:w-1/3"}`}>
                    {t(`${block.key}.${section.key}`)} 
                  </p>
                  
                  {/* Iterate through all items in this section */}
                  <div className={`flex flex-col w-full ${block.key === "foundation" ? "hidden" : ""} sm:w-3/5`}>
                    {section.items.map((item, i) => (
                      <div key={i} className="flex gap-2">
                        <p className="font-CodecPro300 text-gray-70 text-base">
                          {/* Display the title and optional span */}
                          {item.title?.[locale]}
                          {"span" in item && item.span?.[locale] && (
                            <span className="text-gray-100">
                              {" "}
                              {item.span[locale]}
                            </span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExteriorSection;
