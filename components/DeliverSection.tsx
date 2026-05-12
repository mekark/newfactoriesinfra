"use client";

export default function DeliverablesSection() {
  const deliverables = [
    {
      category: "Structure",
      title: "Pre-Engineered Steel (PEB)",
      description:
        "IS 800-compliant primary and secondary structural system. Column-free spans up to 90m. Factory-fabricated for precision.",
    },
    {
      category: "Foundation",
      title: "RCC Civil & Foundation",
      description:
        "Structural foundation calibrated to actual soil bearing capacity. Industrial-grade flooring with VDF and hardener finish.",
    },
    {
      category: "Roofing",
      title: "Industrial Roofing Systems",
      description:
        "Colour-coated GI/PPGI roofing with insulation options. Skylight provisions. Ridge ventilators for natural air circulation.",
    },
    {
      category: "Cladding",
      title: "Façade & Wall Cladding",
      description:
        "Colour-coated corrugated panels. Metal composite cladding for corporate aesthetics. Cavity wall systems.",
    },
    {
      category: "Material Handling",
      title: "Crane Girder & EOT Provisions",
      description:
        "Structural crane girders engineered for 5T to 30MT+. EOT crane selection advisory. Safe Working Load certification.",
    },
    {
      category: "Mezzanine",
      title: "Mezzanine Floors & Admin Blocks",
      description:
        "Structural steel mezzanine for offices, QC labs, and storage decks. Integrated staircases and anti-slip grating.",
    },
    {
      category: "Utilities",
      title: "Industrial Electrical & MEP",
      description:
        "HT/LT power distribution for heavy manufacturing loads. Compressed air line provisions. Industrial plumbing and sanitation.",
    },
    {
      category: "Safety",
      title: "Fire Safety & Compliance",
      description:
        "Hydrant system and sprinkler provisions. Fire detection cabling. FSSO NOC documentation support. Factory Act compliance.",
    },
    {
      category: "Finishing",
      title: "External Development & Site",
      description:
        "Internal roads and paving. Security cabin and boundary wall. Stormwater drainage. Full campus integration.",
    },
  ];

  const industryProblems = [
    {
      title: "Unwritten estimates",
      desc: "Cost ballparks that explode after work begins, with no contractual ceiling in sight",
    },
    {
      title: "Subcontracted execution",
      desc: "Your contractor wins the project, then hands it to three lower-tier vendors who have never met you",
    },
    {
      title: "Timeline promises, not guarantees",
      desc: '"Approximately 6–8 months" with no contractual commitment and no consequences for overrun',
    },
    {
      title: "Design after contract",
      desc: "Structural drawings done post-signing mean changes become expensive scope additions, not corrections",
    },
    {
      title: "Site-fabricated steel",
      desc: "Hand-cut, field-welded members with inconsistent dimensions and no factory quality control documentation",
    },
    {
      title: "Approval ambiguity",
      desc: "Clients navigate municipal permits, factory licenses, and fire NOCs alone, losing months of project time",
    },
    {
      title: "Expansion impossibility",
      desc: "Building designed for current use only, with no structural provision for the growth phase that will inevitably come",
    },
  ];

  const inbuiltSolutions = [
    {
      title: "Fixed-price BOQ",
      desc: "Every structural member, panel, fastener, and finishing element itemised with quantities and unit rates before a rupee is committed",
    },
    {
      title: "100% in-house",
      desc: "Design, fabrication, civil, erection, and MEP are all executed by Inbuilt Infra teams. No coordination gaps. No blame-shifting",
    },
    {
      title: "150-day guarantee with a penalty clause",
      desc: "Written into your contract with a financial consequence for any delay caused by our side",
    },
    {
      title: "Design before BOQ",
      desc: "Your estimate is built on completed engineering, not assumptions. What you see in the BOQ is what we build",
    },
    {
      title: "Factory-fabricated PEB",
      desc: "Every member machined to IS 800 tolerances in our own fabrication plant, with mill test certificates provided on handover",
    },
    {
      title: "In-house approval management",
      desc: "Our team prepares CMDA/DTCP submissions, factory inspector documentation, and fire NOC paperwork. Timeline with approvals: 150 days",
    },
    {
      title: "Expansion engineered in from Day 1",
      desc: "Modular PEB design allows additional bays without disturbing the existing primary structure. Foundation provisions included",
    },
  ];

  return (
    <section className="bg-black px-4 py-[56px] sm:px-6 lg:px-[80px] lg:py-[72px]">
      <div className="mx-auto max-w-[1216px]">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="
        font-[family:var(--font-archivo)]
        text-[32px]
        font-bold
        leading-[40px]
        text-white

        sm:text-[40px]
        sm:leading-[55px]
      "
          >
            <span className="text-[#FFC400]">What We Deliver</span> Inside Your
            Factory
          </h2>

          <p
            className="
        mx-auto
        mt-[10px]
        max-w-[939px]
        font-[family:var(--font-manrope)]
        text-[14px]
        leading-[24px]
        text-[#F5F5F5]/55

        sm:text-[15px]
        sm:leading-[25.5px]
      "
          >
            From the structural steel skeleton to the final coat of paint —
            every element is engineered, procured, and installed by our in-house
            teams.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-[28px] grid grid-cols-1 gap-px bg-[#FFC400]/8 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="
          group
          relative
          min-h-[172px]
          border
          border-[#FFC40014]
          bg-black
          p-[22px]
          transition-all
          duration-300

hover:bg-[#08224A]
hover:border-[#FFC40033]
hover:border-b-[#FFC400]
hover:border-b-[2px]

active:bg-[#08224A]
active:border-[#FFC40033]
active:border-b-[#FFC400]
active:border-b-[2px]

cursor-pointer

          sm:p-[28px]
        "
            >
              {/* Category */}
              <p
                className="
            font-[family:var(--font-manrope)]
            text-[10px]
            font-bold
            uppercase
            tracking-[1.5px]
            text-[#FFC400]
          "
              >
                {item.category}
              </p>

              {/* Title */}
              <h3
                className="
            mt-[11px]
            font-[family:var(--font-archivo)]
            text-[18px]
            font-bold
            leading-[28px]
            text-[#F5F5F5]
          "
              >
                {item.title}
              </h3>

              {/* Description */}

              <p
                className="
            mt-[16px]
            font-[family:var(--font-manrope)]
            text-[13px]
            leading-[22px]
            text-[#F5F5F5]/50
          "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEM VS SOLUTION */}
      <section className="bg-[#F5F5F5] px-4 py-[56px] sm:px-6 lg:px-[80px] lg:py-[72px]">
        {/* Heading */}
        <div className="text-center">
          <h2
            className="
        font-[family:var(--font-archivo)]
        text-[34px]
        font-bold
        leading-[42px]
        tracking-[-0.03em]
        text-[#0E2341]

        sm:text-[48px]
        sm:leading-[58px]
      "
          >
            Why The Industry Fails.
            <span className="text-[#FFC400]"> Why We Don't.</span>
          </h2>
        </div>

        {/* Columns */}
        <div className="mt-[42px] flex flex-col gap-[34px] lg:flex-row lg:items-start lg:justify-center lg:gap-[12px]">
          {/* LEFT */}
          <div className="w-full">
            {/* Header */}
            <div className="mb-[20px] flex items-center gap-3">
              <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#FFE9E9]">
                <span className="text-[18px] text-[#FF4D4F]">×</span>
              </div>

              <h3
                className="
            font-[family:var(--font-archivo)]
            text-[18px]
            font-bold
            uppercase
            leading-[26px]
            text-black

            sm:text-[23px]
            sm:leading-[30px]
          "
              >
                THE INDUSTRY
                <span className="text-[#FF2B2B]"> PROBLEM</span>
              </h3>
            </div>

            {/* Cards */}
            <div className="space-y-[8px]">
              {industryProblems.map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-[3px] bg-[#FF2B2B]" />

                  <div
                    className="
                w-full
                border
                border-[#E6E6E6]
                bg-[#F8F8F8]
                px-[18px]
                py-[18px]

                sm:min-h-[116px]
              "
                  >
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#FFE9E9] text-[12px] text-[#FF4D4F]">
                        ×
                      </div>

                      {/* Content */}
                      <div>
                        <h4
                          className="
                      font-[family:var(--font-archivo)]
                      text-[18px]
                      font-medium
                      leading-[26px]
                      text-black

                      sm:text-[20px]
                      sm:leading-[30px]
                    "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                      mt-[4px]
                      font-[family:var(--font-manrope)]
                      text-[14px]
                      leading-[22px]
                      text-[#6D6D6D]

                      sm:text-[16px]
                    "
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full">
            {/* Header */}
            <div className="mb-[20px] flex items-center gap-3">
              <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#FFF3D2]">
                <span className="text-[16px] text-[#FFC400]">✓</span>
              </div>

              <h3
                className="
            font-[family:var(--font-archivo)]
            text-[18px]
            font-bold
            uppercase
            leading-[26px]
            text-black

            sm:text-[23px]
            sm:leading-[30px]
          "
              >
                THE INBUILT INFRA
                <span className="text-[#FFC400]"> RESOLUTION</span>
              </h3>
            </div>

            {/* Cards */}
            <div className="space-y-[8px]">
              {inbuiltSolutions.map((item, index) => (
                <div key={index} className="flex">
                  <div className="w-[3px] bg-[#FFC400]" />

                  <div
                    className="
                w-full
                border
                border-[#E6E6E6]
                bg-[#F8F8F8]
                px-[18px]
                py-[18px]

                sm:min-h-[116px]
              "
                  >
                    <div className="flex gap-4">
                      {/* Icon */}
                      <div className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#FFF3D2] text-[11px] text-[#FFC400]">
                        ✓
                      </div>

                      {/* Content */}
                      <div>
                        <h4
                          className="
                      font-[family:var(--font-archivo)]
                      text-[18px]
                      font-medium
                      leading-[26px]
                      text-black

                      sm:text-[20px]
                      sm:leading-[30px]
                    "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                      mt-[4px]
                      font-[family:var(--font-manrope)]
                      text-[14px]
                      leading-[22px]
                      text-[#6D6D6D]

                      sm:text-[16px]
                    "
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
