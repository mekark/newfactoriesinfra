"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Cog,
  Factory,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import { useEffect, useState } from "react";

const features = [
  {
    icon: <Factory size={16} strokeWidth={2.2} />,
    title: "IS 800-Compliant Fabrication Plant",
    description:
      "Every structural component fabricated to Indian Standard tolerances — controlled environment, not a site yard under a tarpaulin.",
  },

  {
    icon: <Cog size={16} strokeWidth={2.2} />,
    title: "CNC-Precision Steel Processing",
    description:
      "Automated cutting, drilling, and forming for every primary member. The dimensional precision that makes on-site erection fast and plumb.",
  },

  {
    icon: <ShieldCheck size={16} strokeWidth={2.2} />,
    title: "Three-Stage Quality Control",
    description:
      "In-process inspection, pre-dispatch QC, and on-site verification. No component leaves without passing dimensional and coating checks.",
  },

  {
    icon: <BadgeCheck size={16} strokeWidth={2.2} />,
    title: "Mill Test Certificates — Every Batch",
    description:
      "Every coil and section of primary steel is traceable. Full material certification at handover — mandatory for bank financing and insurance.",
  },

  {
    icon: <Truck size={16} strokeWidth={2.2} />,
    title: "Parallel Site-Factory Execution",
    description:
      "While your foundation is being poured, your structural steel is being fabricated. Two tracks simultaneously — this is how 150 days becomes possible.",
  },

  {
    icon: <Users size={16} strokeWidth={2.2} />,
    title: "Permanent, Trained Erection Crew",
    description:
      "Not daily labour hired from the gate. Our erection team works exclusively on Inbuilt Infra projects — trained in our methods, accountable to our timelines.",
  },
];

/* COUNTER */
function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const FactoryCapabilitiesSection = () => {
  return (
    <section  id= "plant" className="w-full bg-[#0B2347] px-4 py-[56px] sm:px-6 lg:px-0 lg:py-[72px]">

      <div className="mx-auto flex max-w-[1216px] flex-col gap-[40px] lg:flex-row lg:gap-[56px]">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[652px]">

          {/* TOP LABEL */}
          <div className="mb-[14px] flex items-center gap-[8px]">
            <div className="h-[2px] w-[24px] bg-[#FFC400]" />

            <span className="font-manrope text-[10px] font-extrabold uppercase tracking-[1px] text-[#FFC400] sm:text-[11px]">
              Our Fabrication Plant
            </span>
          </div>

          {/* HEADING */}
          <h2
            className="
            max-w-[640px]
            font-archivo
            text-[34px]
            font-bold
            leading-[38px]
            text-white

            sm:text-[46px]
            sm:leading-[48px]

            lg:text-[58px]
            lg:leading-[50px]
          "
          >
            The Factory That
            <br />

            <span className="text-[#FFC400]">
              Builds Your Factory.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
            mt-[18px]
            max-w-[765px]
            font-inter
            text-[14px]
            font-medium
            leading-[24px]
            text-[#CFCFCF]

            sm:text-[15px]
          "
          >
            Our fabrication plant is the operational
            backbone of every delivery guarantee we
            make. Factory precision is not a marketing
            term — it is the reason we can make a
            fixed-price, 120-day commitment and hold
            it.
          </p>

          {/* FEATURE LIST */}
          <div className="mt-[30px] flex flex-col gap-[14px]">

            {features.map((item, index) => (
              <div
                key={index}
                className="
                flex
                min-h-[110px]
                w-full
                items-start
                gap-[14px]
                border
                border-[rgba(255,196,0,0.10)]
                px-[16px]
                py-[18px]
                transition-all
                duration-300
                cursor-pointer

                hover:border-[rgba(255,196,0,0.35)]
                hover:bg-[rgba(255,196,0,0.04)]

                active:border-[rgba(255,196,0,0.35)]
                active:bg-[rgba(255,196,0,0.04)]

                sm:px-[20px]

                lg:min-h-[86px]
              "
              >
                {/* ICON */}
                <div className="mt-[2px] shrink-0 text-[#FFC400]">
                  {item.icon}
                </div>

                {/* CONTENT */}
                <div>
                  <h3
                    className="
                    font-manrope
                    text-[15px]
                    font-extrabold
                    leading-[22px]
                    text-white

                    sm:text-[16px]
                    sm:leading-[17px]
                  "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-[8px]
                    font-inter
                    text-[12px]
                    font-medium
                    leading-[20px]
                    text-[#CFCFCF]

                    sm:leading-[19.2px]
                  "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[519px]">

          {/* IMAGE */}
          <div className="overflow-hidden border border-[rgba(255,196,0,0.12)]">
            <Image
              src="/Images/Rectangle 16.png"
              alt="Factory"
              width={519}
              height={456}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* STATS */}
          <div
            className="
            mt-[18px]
            grid
            grid-cols-2
            border
            border-[rgba(255,196,0,0.12)]
          "
          >
            {/* ITEM */}
            <div className="flex min-h-[116px] flex-col items-center justify-center border-b border-r border-[rgba(255,196,0,0.12)] px-3 text-center">

              <h3
                className="
                font-barlow
                text-[38px]
                font-black
                leading-[40px]
                text-[#FFC400]

                sm:text-[52px]
                sm:leading-[52px]
              "
              >
                <Counter end={90} suffix="m" />
              </h3>

              <p
                className="
                mt-[10px]
                font-manrope
                text-[9px]
                font-bold
                uppercase
                tracking-[1.1px]
                text-[rgba(245,245,245,0.80)]

                sm:text-[10px]
                sm:tracking-[1.2px]
              "
              >
                Max Column-Free Span
              </p>
            </div>

            {/* ITEM */}
            <div className="flex min-h-[116px] flex-col items-center justify-center border-b border-[rgba(255,196,0,0.12)] px-3 text-center">

              <h3
                className="
                font-barlow
                text-[38px]
                font-black
                leading-[40px]
                text-[#FFC400]

                sm:text-[52px]
                sm:leading-[52px]
              "
              >
                <Counter end={30} suffix="MT" />
              </h3>

              <p
                className="
                mt-[10px]
                font-manrope
                text-[9px]
                font-bold
                uppercase
                tracking-[1.1px]
                text-[rgba(245,245,245,0.80)]

                sm:text-[10px]
              "
              >
                Max Crane Load Capacity
              </p>
            </div>

            {/* ITEM */}
            <div className="flex min-h-[116px] flex-col items-center justify-center border-r border-[rgba(255,196,0,0.12)] px-3 text-center">

              <h3
                className="
                font-barlow
                text-[38px]
                font-black
                leading-[40px]
                text-[#FFC400]

                sm:text-[52px]
                sm:leading-[52px]
              "
              >
                3-QC
              </h3>

              <p
                className="
                mt-[10px]
                font-manrope
                text-[9px]
                font-bold
                uppercase
                tracking-[1.1px]
                text-[rgba(245,245,245,0.80)]

                sm:text-[10px]
              "
              >
                Stage Quality Verification
              </p>
            </div>

            {/* ITEM */}
            <div className="flex min-h-[116px] flex-col items-center justify-center px-3 text-center">

              <h3
                className="
                font-barlow
                text-[38px]
                font-black
                leading-[40px]
                text-[#FFC400]

                sm:text-[52px]
                sm:leading-[52px]
              "
              >
                <Counter end={100} suffix="%" />
              </h3>

              <p
                className="
                mt-[10px]
                font-manrope
                text-[9px]
                font-bold
                uppercase
                tracking-[1.1px]
                text-[rgba(245,245,245,0.80)]

                sm:text-[10px]
              "
              >
                In-House Fabrication
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactoryCapabilitiesSection;