"use client";

import React, { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { useTranslations } from "next-intl";
import clsx from "clsx";

interface ContactFormProps {
	onSuccess?: () => void;
	showTelegram?: boolean;
	btnModal?: boolean;
}

const inputBaseStyles =
	"w-full px-3 py-2 text-base font-CodecPro300 text-gray-100 outline-none transition bg-white";
const errorStyles = "border-2 border-[#fda29b]";
const validBorder = "border border-gray-40";
const ringFocus =
	"focus:ring-4 focus:ring-primary-80 hover:ring-4 hover:ring-primary-80";

const ContactForm = ({
	onSuccess,
	showTelegram = false,
	btnModal = false,
}: ContactFormProps) => {
	const t = useTranslations("form");
	const btn = useTranslations("btnLabel");

	const [form, setForm] = useState({ name: "", phone: "", telegram: "" });
	const [errors, setErrors] = useState({ name: "", phone: "", telegram: "" });
	const [sent, setSent] = useState(false);

	const handleChange = (field: string, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
		setErrors((prev) => ({ ...prev, [field]: "" }));
	};

	const isTelegramValid = (value: string): boolean => {
		return /^@.{2,}$/.test(value);
	};

	const handleSubmit = async (e?: React.FormEvent) => {
		e?.preventDefault();

		let hasError = false;
		const newErrors = { name: "", phone: "", telegram: "" };

		if (!form.name.trim()) {
			newErrors.name = t("errors.name");
			hasError = true;
		}

		if (!isValidPhoneNumber(form.phone || "")) {
			newErrors.phone = t("errors.phone");
			hasError = true;
		}

		if (showTelegram) {
			if (!form.telegram.trim() || !isTelegramValid(form.telegram.trim())) {
				newErrors.telegram = t("errors.telegram");
				hasError = true;
			}
		}

		setErrors(newErrors);
		if (hasError) return;

		try {
			const formData = new FormData();
			formData.append("name", form.name);
			formData.append("phone", form.phone || "");
			if (form.telegram) formData.append("telegram", form.telegram);
			formData.append("token", "x8IFhPMul6uAJ65yNUnOfM3Di9x0YTV874fGXOoY4kc");
			formData.append("partner_id", "19339");
			formData.append("action", "partner-custom-form");

			const res = await axios.post(
				"https://crm.g-plus.app/api/actions",
				formData
			);
			if (res.data.success) {
				setSent(true);
				onSuccess?.();
			} else {
				setErrors((prev) => ({ ...prev, phone: t("errors.smthingWrong") }));
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				setErrors((prev) => ({
					...prev,
					phone: `${t("errors.data")}: ${error.message}`,
				}));
			} else {
				setErrors((prev) => ({
					...prev,
					phone: `${t("errors.data")}: Unknown error`,
				}));
			}
		}
	};

	useEffect(() => {
		if (sent) {
			const timeout = setTimeout(() => {
				setSent(false);
				setForm({ name: "", phone: "", telegram: "" });
			}, 10000);
			return () => clearTimeout(timeout);
		}
	}, [sent]);

	return (
		<div className="w-full max-w-md mx-auto px-4">
			{sent ? (
				<div className="text-center space-y-2">
					<h3 className="text-lg font-medium text-green-700">
						{t("success.title")}
					</h3>
					<p className="text-sm text-gray-600">{t("success.description")}</p>
				</div>
			) : (
				<form onSubmit={handleSubmit} className="space-y-5">
					{/* Name */}
					<div>
						<label className="font-CodecPro300 text-sm mb-1 text-gray-80">
							{t("name")}
						</label>
						<input
							type="text"
							value={form.name}
							onChange={(e) => handleChange("name", e.target.value)}
							placeholder={t("placeholder")}
							className={`${inputBaseStyles} ${
								errors.name ? errorStyles : validBorder
							} ${ringFocus}`}
						/>
						{errors.name && (
							<p className="font-CodecPro300 text-sm text-[#f04438] mt-1">
								{errors.name}
							</p>
						)}
					</div>

					{/* Telegram */}
					{showTelegram && (
						<div>
							<label className="font-CodecPro300 text-sm mb-1 text-gray-80">
								{t("telegram")}
							</label>
							<input
								type="text"
								value={form.telegram}
								onChange={(e) => handleChange("telegram", e.target.value)}
								placeholder="@ElenaGritsyuk"
								className={`${inputBaseStyles} ${
									errors.telegram ? errorStyles : validBorder
								} ${ringFocus}`}
							/>
							{errors.telegram && (
								<p className="font-CodecPro300 text-sm text-[#f04438] mt-1">
									{errors.telegram}
								</p>
							)}
						</div>
					)}

					{/* Phone */}
					<div>
						<label className="font-CodecPro300 text-sm mb-1 text-gray-80">
							{t("phone")}
						</label>
						<PhoneInput
							defaultCountry="UA"
							value={form.phone}
							onChange={(value) => handleChange("phone", value || "")}
							placeholder="+380 93 955 01 25"
							className={`bg-white w-full text-gray-100 font-CodecPro300 text-base outline-none ${
								errors.phone ? errorStyles : validBorder
							}`}
						/>
						{errors.phone && (
							<p className="font-CodecPro300 text-sm text-[#f04438] mt-1">
								{errors.phone}
							</p>
						)}
					</div>

					{/* Submit */}
					<button
						type="submit"
						className={clsx(
							"transparent-btn text-white border border-white hover:bg-primary-80 hover:cursor-pointer",
							btnModal &&
								"bg-primary-100 text-white text-center hover:bg-primary-80"
						)}
					>
						{btn("formBtn")}
					</button>
				</form>
			)}
		</div>
	);
};

export default ContactForm;
