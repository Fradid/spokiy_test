import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex justify-center items-center h-screen bg-primary-100 text-white">
			<div className="text-center space-y-4">
				<h1 className="font-CodecPro500 text-4xl text-red-400">
					404 - Page not found!
				</h1>
				<h2 className="font-CodecPro500 text-2xl">
					Oops! The page you’re looking for doesn’t exist.
				</h2>
				<Link
					href="/"
					className="font-CodecPro300 inline-block text-white text-base border border-white py-3 px-5 leading-6 hover:bg-primary-80 transition hover:cursor-pointer"
				>
					Go back to Home
				</Link>
			</div>
		</div>
	);
}
