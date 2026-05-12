"use client";

import { useEffect, useState } from "react";

const numbersData = [
  {
    value: 150,
    suffix: "",
    label: "On-Time Delivery",
    description:
      "Written into your contract with penalty clause. Not an aspiration — a legal commitment.",
  },

  {
    value: 98,
    suffix: "%",
    label: "On-Time Delivery Rate",
    description:
      "Across all 500+ projects. Verified. Not marketing numbers — a contractual standard built through processes.",
  },

  {
    value: 0,
    prefix: "₹",
    suffix: "",
    label: "Cost Overruns — Ever",
    description:
      "Not one unannounced invoice in 15 years. Fixed-price means fixed-price — no provisional sums, no surprises.",
  },

  {
    value: 40,
    suffix: "%",
    label: "Faster Than RCC",
    description:
      "Factory fabrication and site preparation run simultaneously. Operational months before conventional RCC.",
  },

  {
    value: 800,
    prefix: "IS",
    suffix: "",
    label: "Structural Compliance — Every Build",
    description:
      "Every primary structural member meets Indian Standard specifications. Mill test certificates handed over.",
  },

  {
    value: 0,
    suffix: "",
    label: "Subcontractors — Ever",
    description:
      "Design, fabrication, civil, erection, and MEP — every scope executed by our permanent teams. One name. One accountability.",
  },
];

/* COUNTER */
function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const SixNumbersSection = () => {
  return (
    <section className="w-full bg-black px-4 py-[56px] sm:px-6 lg:px-0 lg:py-[72px]">
      <div className="mx-auto max-w-[1216px]">
        {/* HEADER */}
        <div className="mb-[42px] flex flex-col gap-[24px] lg:mb-[48px] lg:flex-row lg:items-start lg:justify-between lg:gap-[40px]">
          {/* LEFT */}
          <div className="w-full lg:max-w-[740px]">
            <h2
              className="
              font-archivo
              text-[34px]
              font-extrabold
              leading-[38px]
              tracking-[0%]
              text-[#F5F5F5]

              sm:text-[46px]
              sm:leading-[48px]

              lg:text-[58px]
              lg:leading-[55.1px]
            "
            >
              Six Numbers That
              <br />
              Define Our <span className="text-[#FFC400]">Standard.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <p
            className="
            w-full
            max-w-[609px]
            font-manrope
            text-[14px]
            font-normal
            leading-[24px]
            tracking-[0%]
            text-[rgba(245,245,245,0.45)]

            sm:text-[15px]
            sm:leading-[25px]

            lg:pt-[14px]
            lg:leading-[23.8px]
          "
          >
            These are not marketing claims assembled for a brochure. They are
            contractual benchmarks held across 500+ projects over 15 years — in
            multiple market cycles, material shortages, and project
            complexities.
          </p>
        </div>

        {/* GRID */}
        <div
          className="
          grid
          grid-cols-1
          border
          border-[rgba(255,196,0,0.08)]

          sm:grid-cols-2
          lg:grid-cols-3
        "
        >
          {numbersData.map((item, index) => (
            <div
              key={index}
              className="
              group
              border
              border-[rgba(255,196,0,0.08)]
              bg-black
              p-[24px]
              transition-all
              duration-300
              cursor-pointer

              hover:bg-[#08224A]
              hover:border-[#FFC40033]

              active:bg-[#08224A]
              active:border-[#FFC40033]

              sm:p-[30px]

              lg:min-h-[320px]
            "
            >
              {/* NUMBER */}
              <h3
                className="
                font-archivo
                text-[52px]
                font-black
                leading-[52px]
                tracking-[-0.03em]
                text-[#FFC400]
                transition-all
                duration-300

                sm:text-[64px]
                sm:leading-[64px]

                lg:text-[72px]
                lg:leading-[72px]
              "
              >
                <Counter
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              </h3>

              {/* LABEL */}
              <h4
                className="
                mt-[18px]
                font-archivo
                text-[20px]
                font-bold
                leading-[28px]
                text-[#F5F5F5]

                sm:text-[22px]
              "
              >
                {item.label}
              </h4>

              {/* DESCRIPTION */}
              <p
                className="
                mt-[14px]
                font-manrope
                text-[14px]
                leading-[24px]
                text-[#F5F5F5]/55

                sm:text-[15px]
                sm:leading-[25px]
              "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixNumbersSection;
