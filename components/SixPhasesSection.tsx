"use client";

const phases = [
  {
    number: "01",
    day: "DAY 1 – 5",
    title: "Site Visit & Structural Scoping",
    description:
      "Our structural engineer is at your site within days of enquiry. We assess soil bearing capacity, topography, access constraints, and operational requirements. No assumptions — your estimate is built on actual site intelligence, not a template.",
  },

  {
    number: "02",
    day: "DAY 6 – 12",
    title: "Fixed-Price BOQ & Engineering Estimate",
    description:
      "A detailed bill of quantities — every structural member, roofing panel, fastener, and finishing element listed with quantities and unit rates. No provisional items. No contingency buffers. The number you see on Day 12 is the number on your final invoice.",
  },

  {
    number: "03",
    day: "DAY 13 – 35",
    title: "In-House Engineering Design",
    description:
      "Structural design, load calculations, and approval-ready drawings produced by our in-house team. Foundation design. Crane girder engineering. Statutory document preparation — all under one roof. Nothing outsourced. Nothing lost in translation.",
  },

  {
    number: "04",
    day: "DAY 36 – 100",
    title:
      "Factory Fabrication — Parallel with Site Civil Works",
    description:
      "While your site is prepared — foundation poured, civil works executed, utility trenching done — your structural steel is being precision-fabricated in our plant simultaneously. Two tracks, one timeline. This parallel execution is how we deliver significantly faster than conventional sequential RCC construction.",
  },

  {
    number: "05",
    day: "DAY 101 – 135",
    title:
      "Structural Erection & Three-Stage QC",
    description:
      "Our dedicated erection crew assembles your structure. Quality verification at every stage: plumb and level checks, bolt torque testing, weld inspection, and coating thickness validation. Nothing proceeds past a failed QC point — regardless of schedule pressure.",
  },

  {
    number: "06",
    day: "DAY 136 – 150",
    title:
      "Handover — Complete, Documented, Operational",
    description:
      "As-built drawings. IS 800 structural certificate. Operations & Maintenance manual. Warranty documentation. Final client walkthrough. Your building is handed over complete — operational from Day 1. Not Day 1 of a snagging period that drags into month three.",
  },
];

const SixPhasesSection = () => {
  return (
    <section id ="why-choose-us" className="w-full bg-black px-4 py-[56px] sm:px-6 lg:px-0 lg:py-[96px]">

      <div className="mx-auto max-w-[1312px]">

        {/* HEADER */}
        <div className="mx-auto mb-[40px] max-w-[980px] text-center sm:mb-[56px]">

          <h2
            className="
            font-archivo
            text-[36px]
            font-bold
            leading-[42px]
            text-[#F5F5F5]

            sm:text-[52px]
            sm:leading-[56px]

            lg:text-[64px]
            lg:leading-[64px]
          "
          >
            Six Phases.
            <br />

            <span className="text-[#FFC400]">
              Zero Ambiguity.
            </span>{" "}
            150 Days.
          </h2>

          <p
            className="
            mx-auto
            mt-[18px]
            max-w-[900px]
            font-manrope
            text-[14px]
            font-normal
            leading-[24px]
            text-[rgba(245,245,245,0.40)]

            sm:mt-[20px]
            sm:text-[15px]
          "
          >
            Every project follows the same
            rigorously tested execution framework —
            built across 500+ projects to eliminate
            the delay points, miscommunications, and
            cost overruns that define conventional
            construction.
          </p>
        </div>

        {/* TABLE */}
        <div className="overflow-hidden rounded-[6px] border border-[rgba(255,255,255,0.06)]">

          {phases.map((phase, index) => (
            <div
              key={index}
              className="
              grid
              grid-cols-[52px_1fr]
              border-b
              border-[rgba(255,255,255,0.06)]
              bg-[#0B0B0B]

              last:border-b-0

              sm:grid-cols-[68px_1fr]
            "
            >
              {/* LEFT NUMBER COLUMN */}
              <div
                className="
                flex
                items-start
                justify-center
                border-r
                border-[rgba(255,255,255,0.06)]
                pt-[24px]

                sm:pt-[42px]
              "
              >
                <span
                  className="
                  font-barlow
                  text-[28px]
                  font-normal
                  leading-[40px]
                  text-[rgba(255,196,0,0.20)]

                  sm:text-[40px]
                  sm:leading-[64px]
                "
                >
                  {phase.number}
                </span>
              </div>

              {/* RIGHT CONTENT */}
              <div
                className="
                px-[16px]
                py-[18px]

                sm:px-[28px]
                sm:py-[22px]
              "
              >
                {/* DAY TAG */}
                <div className="mb-[12px] inline-flex rounded-[3px] bg-[rgba(232,112,26,0.10)] px-[8px] py-[3px]">

                  <span
                    className="
                    font-manrope
                    text-[9px]
                    font-extrabold
                    uppercase
                    tracking-[1.2px]
                    text-[#FFC400]

                    sm:text-[10px]
                  "
                  >
                    {phase.day}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                  font-archivo
                  text-[16px]
                  font-bold
                  leading-[24px]
                  text-[#F2EDE4]

                  sm:text-[17.6px]
                  sm:leading-[28.16px]
                "
                >
                  {phase.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                  mt-[10px]
                  max-w-[1054px]
                  font-manrope
                  text-[12px]
                  font-normal
                  leading-[22px]
                  text-[rgba(245,245,245,0.32)]

                  sm:text-[13px]
                  sm:leading-[24px]
                "
                >
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixPhasesSection;