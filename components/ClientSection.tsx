"use client";

import Image from "next/image";

const project = [
  {
    title: "Automotive Manufacturing",
    // category: "Industrial · Ambattur",
    area: "35,000 sq.ft Manufacturing Plant",
    image: "/Deliver/automative.jfif.jpeg",

    details: [
      "Optimized for production efficiency",
      "End-to-end industrial execution",
    ],
  },

  {
    title: "Institutional Infrastructure",
    // category: "Institutional · Chennai",
    area: "48,000 sq.ft academic block",
    image: "/Deliver/institutional.jfif.jpeg",

    details: [
      "Fast-track project delivery",
      "Built for long-term durability",
    ],
  },

  {
    title: "Logistics & Warehousing",
    // category: "Logistics · Chennai",
    area: "60,000 sq.ft logistics warehouse",
    image: "/Deliver/logistic.jfif.jpeg",

    details: [
      "High-clearance storage infrastructure",
      "Designed for scalable operations",
    ],
  },

  {
    title: "Industrial Project Recovery",
    // category: "Industrial · Ambattur",
    area: "Site recovered from stalled execution",
    image: "/Deliver/final.jfif.jpeg",

    details: [
      "Fixed-price commitment honoured",
      "Completed and handed over on schedule",
    ],
  },
];

const logos = [
  "/ClientLogos/image 1.svg",
  "/ClientLogos/image 2.svg",
  "/ClientLogos/image 3.svg",
  "/ClientLogos/image 4.svg",
  "/ClientLOgos/image 5.svg",
];

export default function ClientsSection() {
  return (
    <section className="bg-[#F5F4F4]">
      {/* Trusted Banner */}
      <div className="relative z-20 flex justify-center bg-[#F5F4F4] px-4">
        <div className="relative -mt-[14px] h-[48px] w-full max-w-[710px] sm:h-[57px]">
          <Image
            src="/Images/Text stip 1.png"
            alt="Trusted Banner"
            fill
            priority
            className="object-contain"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <p className="px-4 text-center font-[family:var(--font-manrope)] text-[11px] font-semibold tracking-[-0.01em] text-white sm:text-[17px]">
              Trusted By South India’s Most Demanding Clients
            </p>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="overflow-hidden bg-[#F5F4F4] px-4 pb-[24px] pt-[26px] sm:pt-[34px] sm:pb-[30px]">
        <div className="animate-marquee flex w-max items-center gap-[40px] sm:gap-[72px]">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative h-[42px] w-[90px] flex-shrink-0 opacity-[0.32] transition-all duration-300 hover:opacity-[0.7] sm:h-[58px] sm:w-[118px]"
            >
              <Image
                src={logo}
                alt="Client Logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1280px] px-4 pb-[70px] pt-[50px] text-center sm:px-6 sm:pb-[90px] sm:pt-[70px]">
        {/* Heading */}
        <h2 className="font-[family:var(--font-archivo)] text-[34px] font-bold leading-[40px] text-black sm:text-[52px] sm:leading-[54px] lg:text-[70px] lg:leading-[55px]">
          Real Projects.
          <span className="text-[#FFC400]"> Verifiable </span>
          Outcomes.
        </h2>

        {/* Paragraph */}
        <p className="mx-auto mt-4 max-w-[860px] px-2 font-[family:var(--font-manrope)] text-[14px] leading-[24px] text-[#666666] sm:text-[16px] sm:leading-[25.5px]">
          We don’t shelter behind anonymous logos. These are named clients,
          documented structures, and outcomes on record.
          <br className="hidden sm:block" />
          If SRM University trusted us with 42,000 sq.ft of campus
          infrastructure, your factory is in safe hands.
        </p>

        {/* Cards */}
        <div className="mt-[40px] grid grid-cols-1 gap-5 sm:mt-[52px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[22px]">
          {project.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[6px]"
            >
              <div className="relative h-[260px] w-full">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-[16px] text-left">
                  {/* Category */}
                  {/* <p className="text-[10px] font-semibold uppercase tracking-[1.6px] text-[#FFC400] sm:text-[11px]">
                    {item.category}
                  </p> */}

                  {/* Title */}
                  <h3 className="mt-[6px] text-[16px] font-bold leading-[21px] text-white sm:text-[17px]">
                    {item.title}
                  </h3>

                  {/* Area */}
                  <p className="mt-[6px] text-[12px] text-white/90 sm:text-[13px]">
                    • {item.area}
                  </p>

                  {/* Hover Content */}
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:max-h-[120px] group-hover:opacity-100">
                    <div className="space-y-[6px]">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="mt-[7px] h-[4px] w-[4px] shrink-0 rounded-full bg-white" />

                          <p className="text-[11px] leading-[17px] text-white/90 sm:text-[12px] sm:leading-[18px]">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
