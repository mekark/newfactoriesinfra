"use client";

interface NumberCardProps {
  value: string;
  label: string;
  description: string;
}

const NumberCard = ({ value, label, description }: NumberCardProps) => {
  return (
    <div
      className="
    flex
    min-h-[240px]
    flex-col
    items-center
    justify-center
    border
    border-[rgba(255,196,0,0.08)]
    px-[40px]
    py-[32px]
    text-center
    transition-all
    duration-300
    hover:border-t-[#FFC400]
    hover:border-t-[2px]
    hover:bg-[rgba(255,196,0,0.12)]
  "
    >
      {/* VALUE */}
      <div
        className="
      text-center
      align-middle
      font-barlow
      text-[72px]
      font-black
      leading-[72px]
      tracking-[0%]
      text-[#FFC400]
    "
      >
        {value}
      </div>

      {/* LABEL */}
      <div
        className="
      mt-[14px]
      font-manrope
      text-[11px]
      font-bold
      uppercase
      leading-[17.6px]
      tracking-[1.32px]
      text-[rgba(245,245,245,0.8)]
    "
      >
        {label}
      </div>

      {/* DESCRIPTION */}
      <p
        className="
      mt-[14px]
      max-w-[317px]
      font-manrope
      text-[12px]
      font-normal
      leading-[19.2px]
      text-[rgba(245,245,245,0.4)]
    "
      >
        {description}
      </p>
    </div>
  );
};

export default NumberCard;
