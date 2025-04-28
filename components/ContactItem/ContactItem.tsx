"use client";

import Link from "next/link";

interface ContactItemProps {
	label: string;
	value: string;
	link?: {
		href: string;
		text: string;
	};
}

const ContactItem = ({ label, value, link }: ContactItemProps) => {
	return (
		<div>
			<span className="font-CodecPro300 text-sm text-primary-80">{label}</span>
			<p className="text-base font-CodecPro300 leading-6 text-gray-20">
				{value}
			</p>
			{link && (
				<Link
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className="underline text-secondary-100 text-base font-CodecPro300"
				>
					{link.text}
				</Link>
			)}
		</div>
	);
};

export default ContactItem;
