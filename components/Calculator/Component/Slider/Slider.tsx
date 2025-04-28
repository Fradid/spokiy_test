import React from "react";

interface SliderProps {
  value: number;
  onChange: (val: number) => void;
}

const Slider = ({ value, onChange }: SliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="relative w-full max-w-md h-6">
      {/* Custom track (gray background) */}
      <div className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 rounded-full bg-gray-80 z-0" />

      {/* Fill (primary color based on value) */}
      <div
        className="absolute top-1/2 left-0 h-2 -translate-y-1/2 rounded-full bg-primary-100 z-10 transition-all duration-300 ease-out"
        style={{ width: `${value}%` }}
      />

      {/* Range input */}
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={handleChange}
        className="w-full absolute top-1 left-0 h-full appearance-none bg-transparent z-20 pointer-events-auto"
      />

      {/* Custom thumb styling */}
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--primary-100);
          cursor: pointer;
          margin-top: -9px;
        }

        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--primary-100);
          cursor: pointer;
        }

        input[type='range']::-webkit-slider-runnable-track {
          background: transparent;
        }

        input[type='range']::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default Slider;
