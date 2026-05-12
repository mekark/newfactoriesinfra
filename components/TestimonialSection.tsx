"use client";

import { div } from "framer-motion/client";
import { Quote, Star, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    content:
      "We had a major client contract dependent on our go-live date. Inbuilt Infra executed without a single deviation from the project schedule. Fabrication quality was exceptional — better than what we'd seen from previous contractors.",

    highlight: "Zero schedule deviation · 25,000 sq.ft plant",

    name: "M. Raghunathan",

    designation: "MD · Technocraft Precision Industries, Coimbatore",
  },

  {
    content:
      "The cold storage facility Inbuilt Infra built for us is now 2 years operational with zero structural concerns. They designed for future expansion from Day 1 — we added a second bay 18 months later without touching the existing structure.",

    highlight: "Phase 2 completed · 18,000 sq.ft cold storage",

    name: "P. Senthilkumar",

    designation: "CEO · FreshChain Agro Logistics, Chennai",
  },

  {
    content:
      "We'd been burned by two contractors before Inbuilt Infra. They delivered our 35,000 sq.ft warehouse in Ambattur 11 days ahead of schedule. The fixed-price contract meant zero surprises. If you're planning a factory, this is the only call you need to make.",

    highlight: "11 days early · 35,000 sq.ft factory",

    name: "R. Krishnamurthy",

    designation:
      "Director – Operations · Precision Auto Components Ltd., Chennai",
  },

  {
    content:
      "Our institution had a hard academic intake deadline — not a single day margin. Inbuilt Infra handed over the block 3 weeks early. Their project manager was on-site every single day. That level of accountability is rare in this industry.",

    highlight: "3 weeks early · 48,000 sq.ft academic block",

    name: "Dr. S. Murugan",

    designation: "Secretary · KRM Group of Institutions, Chennai",
  },

  {
    content:
      "I evaluated six PEB contractors. Inbuilt Infra’s BOQ was the only one that showed me exactly what I was paying for — line by line. No provisional sums, no ambiguity. The structural quality validated every rupee spent.",

    highlight: "Fixed-price BOQ · 60,000 sq.ft warehouse",

    name: "A. Venkataraman",

    designation: "Infrastructure Head · South India Logistics Group",
  },

  {
    content:
      "The manufacturing shed was handed over before our machinery shipment arrived. Their planning team coordinated foundation levels, crane access, and utility routing with precision. We started operations ahead of target.",

    highlight: "Operational launch ahead of target",

    name: "K. Elangovan",

    designation: "Plant Director · Velammal Engineering Industries",
  },
];

const industrySlides = [
  {
    title: "Food Processing & Cold Chain",

    description:
      "FSSAI-compliant facility design. Cold storage with PUF panel integration. Controlled humidity environments.",

    tag: "FMCG & Export-Grade Ready",

    image: "/Industries/image 22.svg",

    bg: "from-[#DCE3DB] to-[#0C4D27]",
  },

  {
    title: "Logistics & Warehousing",

    description:
      "High-eave warehouses with dock leveller provisions. Mezzanine office integration. Fire suppression-ready framework.",

    tag: "Fast-tracked for logistics operators",

    image: "/Industries/indus5.svg",

    bg: "from-[#07142E] to-[#001437]",
  },

  {
    title: "Manufacturing & Industrial",

    description:
      "Large-span production halls with crane-ready frameworks and expansion-ready layouts.",

    tag: "200+ Plants Delivered",

    image: "/Industries/indus1.svg",

    bg: "from-[#1B1B1B] to-[#5A5A5A]",
  },

  {
    title: "Educational Institutions",

    description:
      "Lecture blocks, auditoriums, AICTE-ready structural systems with zero delay tolerance.",

    tag: "Zero tolerance for delays",

    image: "/Industries/indus3.svg",

    bg: "from-[#B58D12] to-[#74610A]",
  },

  {
    title: "Commercial & Mixed-Use",

    description:
      "Retail showrooms, IT parks, multi-storey steel buildings. Architectural cladding and glass facade integration.",

    tag: "40% faster than RCC",

    image: "/Industries/indus2 (1).svg",

    bg: "from-[#D7E0E7] to-[#4E86AE]",
  },

  {
    title: "Pharma, Chemical & Healthcare",

    description:
      "GMP-compliant structural design. Clean room framework provisions. Hospital expansion blocks with zero disruption.",

    tag: "Certified handover every project",

    image: "/Industries/indus4.svg",

    bg: "from-[#E8D8D2] to-[#8B4A2A]",
  },
];

export default function TestimonialSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) =>
        prev === industrySlides.length - 1 ? 0 : prev + 1,
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#F5F4F4] py-[70px] sm:py-[110px]"
    >
      {" "}
      <div className="mx-auto max-w-[1750px] px-4 sm:px-6">
        {/* Top Section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-[22px] bg-[#FFC400]" />

              <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-[#FFC400] sm:text-[12px]">
                Client Testimonials
              </p>
            </div>

            <h2
              className="
          max-w-[560px]
          font-[family:var(--font-archivo)]
          text-[34px]
          font-black
          leading-[40px]
          tracking-[-0.04em]
          text-[#0E2341]

          sm:text-[46px]
          sm:leading-[54px]

          lg:text-[58px]
          lg:leading-[64px]
        "
            >
              We Ask After The
              <span className="text-[#FFC400]"> Building </span>
              Has Been Tested.
            </h2>
          </div>

          {/* Right */}
          <div className="w-full pt-[4px] lg:max-w-[522px]">
            <p
              className="
          font-[family:var(--font-inter)]
          text-[14px]
          font-medium
          leading-[24px]
          tracking-[0]
          text-left
          text-[#666666]

          sm:text-[15px]

          lg:text-[16px]
          lg:text-right
        "
            >
              We don't harvest quotes on completion day when goodwill is at its
              peak.
              <br />
              We ask six months in — when operations have run, the monsoon has
              come, and the real test is done.
            </p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mt-[48px] w-full overflow-hidden sm:mt-[72px]">
          {" "}
          <div
            className="
  testimonial-marquee
  flex
  min-w-max
  gap-[18px]

  sm:gap-[28px]

  hover:[animation-play-state:paused]
"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="
            relative
            w-[300px]
            min-h-[430px]
            flex-shrink-0
            border
            border-[#F2C94C]
            bg-white

            sm:w-[360px]
            sm:min-h-[450px]

            lg:w-[411px]
            lg:min-h-[462px]
          "
              >
                {/* Card Body */}
                <div className="p-[22px] sm:p-[32px]">
                  {/* Top */}
                  <div className="mb-6 flex items-start justify-between sm:mb-7">
                    <Quote
                      size={40}
                      className="fill-[#F2D675] text-[#F2D675] sm:h-[48px] sm:w-[48px]"
                    />

                    <div className="flex gap-[2px]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-[#FFC400] text-[#FFC400]"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p
                    className="
                min-h-[210px]
                font-[family:var(--font-manrope)]
                text-[14px]
                font-medium
                leading-[26px]
                text-[#1E1E1E]

                sm:min-h-[240px]
                sm:text-[15px]
                sm:leading-[28px]

                lg:min-h-[250px]
                lg:text-[16px]
                lg:leading-[30px]
              "
                  >
                    {item.content}
                  </p>

                  {/* Highlight */}
                  <p
                    className="
                mt-6
                font-[family:var(--font-manrope)]
                text-[13px]
                font-semibold
                leading-[22px]
                text-[#1E1E1E]

                sm:mt-7
                sm:text-[15px]
                sm:leading-[24px]
              "
                  >
                    ✓ {item.highlight}
                  </p>
                </div>

                {/* Bottom */}
                <div
                  className="
              absolute
              bottom-0
              left-0
              flex
              w-full
              items-center
              gap-3
              bg-[#F8F2DE]
              px-[20px]
              py-[18px]

              sm:gap-4
              sm:px-[28px]
              sm:py-[22px]
            "
                >
                  {/* Avatar */}
                  <div
                    className="
                flex
                h-[46px]
                w-[46px]
                items-center
                justify-center
                rounded-full
                bg-white

                sm:h-[52px]
                sm:w-[52px]
              "
                  >
                    <User size={20} className="text-[#0E2341]" />
                  </div>

                  {/* Info */}
                  <div>
                    <h4
                      className="
                  font-[family:var(--font-manrope)]
                  text-[15px]
                  font-bold
                  leading-[20px]
                  text-[#1E1E1E]

                  sm:text-[17px]
                  sm:leading-[22px]
                "
                    >
                      {item.name}
                    </h4>

                    <p
                      className="
                  mt-1
                  font-[family:var(--font-manrope)]
                  text-[12px]
                  leading-[20px]
                  text-[#666666]

                  sm:text-[14px]
                  sm:leading-[22px]
                "
                    >
                      {item.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* INDUSTRIES SECTION */}
      <div
        id="industries"
        className="
    mx-auto
    flex
    w-full
    max-w-[1440px]
    flex-col
    justify-between
    gap-[40px]

    px-[20px]
    py-[50px]

    sm:px-[40px]
    sm:py-[60px]

    lg:flex-row
    lg:items-center
    lg:gap-[48px]
    lg:px-[80px]
    lg:py-[60px]
  "
      >
        {/* LEFT CONTENT */}
        <div
          className="
      w-full

      lg:max-w-[480px]
      lg:flex-shrink-0
    "
        >
          {/* LABEL */}
          <div className="mb-[14px] flex items-center gap-[10px]">
            <div className="h-px w-[22px] bg-[#FFC400]" />

            <p
              className="
          font-[family:var(--font-manrope)]
          text-[11px]
          font-bold
          uppercase
          tracking-[2px]
          text-[#FFC400]
        "
            >
              Industries We Serve
            </p>
          </div>

          {/* HEADING */}
          <h2
            className="
        font-[family:var(--font-archivo)]
        text-[30px]
        font-black
        leading-[36px]
        tracking-[-0.04em]
        text-black

        sm:text-[36px]
        sm:leading-[42px]

        lg:text-[42px]
        lg:leading-[48px]
      "
          >
            We&apos;ve Built It Before.
            <br />
            We Know What Your
            <br />
            <span className="text-[#FFC400]">Industry</span> Demands.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
        mt-[18px]
        max-w-[470px]

        font-[family:var(--font-manrope)]
        text-[14px]
        font-medium
        leading-[28px]
        text-[#666666]

        lg:text-[15px]
        lg:leading-[30px]
      "
          >
            Each industry has its own structural requirements, compliance
            standards, and timeline pressures. We&apos;ve delivered across all
            of them — with the same fixed-price, on-time guarantee.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        {/* RIGHT SLIDER */}
        <div
          className="
    flex
    w-full
    flex-col
    items-center

    lg:w-[704px]
  "
        >
          {/* SLIDER WRAPPER */}
          <div
            className="
      w-full
      overflow-hidden
      rounded-[18px]
    "
          >
            <div
              className="
        flex
        transition-transform
        duration-700
        ease-in-out
      "
              style={{
                width: `${industrySlides.length * 100}%`,
                transform: `translateX(-${activeIndustry * (100 / industrySlides.length)}%)`,
              }}
            >
              {industrySlides.map((item, index) => (
                <div
                  key={index}
                  className="
            relative
            w-full
            flex-shrink-0
            overflow-hidden
            rounded-[18px]
            bg-gradient-to-r

            min-h-[420px]

            sm:min-h-[380px]

            md:min-h-[320px]

            lg:h-[240px]
            lg:min-h-[240px]
          "
                  style={{
                    width: `${100 / industrySlides.length}%`,
                  }}
                >
                  {/* BACKGROUND */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.bg}`}
                  />

                  {/* CONTENT */}
                  <div
                    className="
              relative
              flex
              h-full
              flex-col

              lg:flex-row
            "
                  >
                    {/* IMAGE */}
                    <div
                      className="
                relative
                h-[220px]
                w-full

                sm:h-[240px]

                md:h-[260px]

                lg:h-full
                lg:w-[48%]
              "
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="
                  object-contain
                  object-bottom
                  lg:object-left-bottom
                "
                      />
                    </div>

                    {/* TEXT */}
                    <div
                      className="
                flex
                flex-1
                flex-col
                justify-center

                px-5
                pb-6
                pt-4

                sm:px-7
                sm:pb-7

                lg:w-[52%]
                lg:px-8
                lg:py-8
              "
                    >
                      <h3
                        className="
                  font-[family:var(--font-archivo)]
                  text-[20px]
                  font-bold
                  leading-[30px]
                  text-white

                  lg:text-[18px]
                  lg:leading-[40px]
                "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                  mt-[10px]

                  font-[family:var(--font-manrope)]
                  text-[12px]
                  font-normal
                  leading-[17px]
                  text-white

                  lg:max-w-[304px]
                "
                      >
                        {item.description}
                      </p>

                      {/* YELLOW BUTTON */}
                      <div
                        className="
                  mt-[16px]
                  inline-flex
                  h-[20px]
                  w-fit
                  items-center
                  justify-center

                  bg-[#FFC400]

                  px-[8px]

                  font-[family:var(--font-manrope)]
                  text-[12px]
                  font-bold
                  leading-[17px]
                  text-black
                "
                      >
                        {item.tag}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="mt-[18px] flex items-center justify-center gap-[8px]">
            {industrySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`
          rounded-full
          transition-all
          duration-300

          ${
            activeIndustry === index
              ? "h-[8px] w-[34px] bg-[#FFC400]"
              : "h-[8px] w-[8px] bg-[#D0D0D0]"
          }
        `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
