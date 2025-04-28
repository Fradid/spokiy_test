"use client";

interface ProgressBarProps {
	current: number;
	total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
	return (
		<div className="relative w-20 md:w-40 h-[2.5px] bg-primary-40 rounded">
			<div
				className="absolute top-0 left-0 h-[2.5px] bg-secondary-100 rounded transition-all duration-500"
				style={{ width: `${(current / total) * 100}%` }}
			/>
		</div>
	);
};

export default ProgressBar;
