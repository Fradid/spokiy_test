"use client";

interface MetricProps {
	label: string;
	value: React.ReactNode;
}

const Metric = ({ label, value }: MetricProps) => {
	return (
		<div className="flex items-center pl-3 pr-1 py-1 gap-2 bg-primary-30">
			<p className="text-[14px] leading-[19.6px] font-CodecPro300 text-primary-90">
				{label}
			</p>
			<div className="text-[14px] leading-[19.6px] font-CodecPro300 bg-gray-30 p-2 text-gray-100 shadow-sm">
				{value}
			</div>
		</div>
	);
};

export default Metric;
