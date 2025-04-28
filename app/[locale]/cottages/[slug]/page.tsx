import { notFound } from "next/navigation";

const ALLOWED_SLUGS = ["podyh", "nebo", "solar3.1", "solar3.2", "svitanok", "dyvo"];

export default async function Home({
	params,
}: {
	params: Promise<{ slug: string; locale: string }>;
}) {
	const { slug } = await params;

	if (!ALLOWED_SLUGS.includes(slug)) {
		notFound();
	}

	return (
		<div>
			<h1>Cottage: {slug}</h1>
		</div>
	);
}
