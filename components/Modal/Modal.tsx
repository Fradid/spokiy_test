"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import closeIcon from "@/public/assets/icons/x.svg";
import logoSmall from "@/public/assets/logo-small.png";
import { useTranslations } from "next-intl";
import ContactForm from "../ContactForm/ContactForm";
import { useModal } from "@/context/ModalContext";

export default function Modal() {
	const t = useTranslations("modal");
	const { isOpen, modalType, close } = useModal();

	const content = {
		title: modalType ? t(`${modalType}.title`) : "",
		description: modalType ? t(`${modalType}.description`) : "",
		showTelegram: modalType === "presentation",
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={close}
				>
					<motion.div
						className="relative bg-white p-8 rounded-lg w-full max-w-[450px] mx-4"
						initial={{ scale: 0.9 }}
						animate={{ scale: 1 }}
						exit={{ scale: 0.9 }}
						onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
					>
						{/* Close Button */}
						<button
							onClick={close}
							className="absolute top-4 right-4 p-2 hover:opacity-70 transition cursor-pointer"
							aria-label="Close modal"
						>
							<Image src={closeIcon} alt="Close" width={20} height={20} />
						</button>

						{/* Modal Content */}
						<div className="flex flex-col items-center pb-6">
							<Image src={logoSmall} alt="Logo" className="mb-4" />
							<h2 className="font-CodecPro300 text-base text-gray-100 mb-1 text-center">
								{content.title}
							</h2>
							<p className="font-CodecPro300 text-sm text-gray-70 text-center">
								{content.description}
							</p>
						</div>

						{/* Contact Form */}
						<ContactForm showTelegram={content.showTelegram} btnModal />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
