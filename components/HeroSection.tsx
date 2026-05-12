"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { useEffect, useState ,  } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 3000;
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
    <span className="text-xl font-bold text-[#FF7A1A] sm:text-2xl lg:text-[28px]">
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;

    const payload = {
      source: "Hero Form",

      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,

      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,

      project_type: (
        form.elements.namedItem("project_type") as HTMLSelectElement
      )?.value,

      sqft: (form.elements.namedItem("sqft") as HTMLSelectElement)?.value,

      location: (form.elements.namedItem("location") as HTMLInputElement)
        ?.value,
    };

    try {
      const response = await fetch("/api/enquiry-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      router.push("/thank-you");
    } catch (error) {
      console.error(error);

      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-[1000px] overflow-hidden bg-black text-white lg:min-h-screen"
    >
      {/* BACKGROUND */}
      <Image
        src="/Images/hero_bg.svg"
        alt="Factory Construction"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/20" />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-start
          lg:items-center

          pt-[120px]
          sm:pt-[130px]
          lg:pt-[145px]
          xl:pt-[150px]

          pb-[250px]
          sm:pb-[230px]
          lg:pb-[120px]
        "
      >
        <div className="w-full px-5 sm:px-8 lg:px-10 xl:px-14 2xl:px-20">
          <div
            className="
              mx-auto
              flex
              max-w-[1600px]
              flex-col
              gap-14

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* LEFT CONTENT */}
            <div className="max-w-[860px] xl:max-w-[900px]">
              {/* TOP BADGE */}
              <div className="mb-5 inline-flex max-w-full items-center border border-[#FFC400]/30 bg-[#FFC400]/10 px-3 py-2 sm:mb-7 sm:px-4">
                <span className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[1px] text-[#FFC400] sm:text-[10px] lg:text-[11px] sm:tracking-[2px]">
                  ● South India&apos;s #1 Turnkey Factory Builder
                </span>
              </div>

              {/* HEADING */}
              <div className="flex flex-col">
                <h1
                  className="
                    font-[family:var(--font-archivo)]
                    text-[32px]
                    font-black
                    leading-[38px]
                    tracking-[-0.03em]
                    text-white

                    sm:text-[42px]
                    sm:leading-[46px]

                    md:text-[50px]
                    md:leading-[54px]

                    lg:text-[56px]
                    lg:leading-[58px]

                    xl:text-[60px]
                    xl:leading-[61px]
                  "
                >
                  Your
                  <span className="text-[#FFC400]"> Factory. </span>
                  Standing in
                </h1>

                {/* PNG */}
                <div
                  className="
                    relative
                    mt-1

                    h-[52px]
                    w-[260px]

                    sm:h-[70px]
                    sm:w-[360px]

                    md:h-[78px]
                    md:w-[440px]

                    lg:h-[82px]
                    lg:w-[500px]

                    xl:h-[88px]
                    xl:w-[582px]
                  "
                >
                  <Image
                    src="/Images/150.png"
                    alt="150 Days"
                    fill
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </div>

              {/* PARAGRAPH */}
              <p
                className="
                  mt-5
                  max-w-[620px]
                  text-sm
                  leading-relaxed
                  text-[#D1D5DB]

                  sm:text-[15px]
                  sm:leading-[28px]
                "
              >
                From signed contract to operational handover — fixed price zero
                excuses. We design, fabricate, and erect complete factory
                buildings in-house.
              </p>

              {/* FEATURES */}
              <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
                {[
                  "Fixed-price contract — locked from Day 1, honoured on Day 120",
                  "100% in-house execution — design, fabrication, erection, civil, MEP",
                  "ISO 800 compliant PEB structures — bank-financeable on handover",
                  "40% faster operational start than conventional RCC construction",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#FFC400]" />

                    <p className="text-[13px] leading-relaxed text-white sm:text-[14px] sm:leading-[24px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-7 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                <Link
                  href="#project-plan"
                  className="
    flex
    h-[52px]
    w-full
    items-center
    justify-center
    gap-2
    bg-[#FFC400]
    px-5
    text-[12px]
    font-bold
    uppercase
    tracking-[1px]
    text-black
    transition
    hover:bg-[#ffcf33]

    sm:h-[58px]
    sm:w-auto
    sm:px-7
    sm:text-[13px]
  "
                >
                  <span className="truncate">Get Free Structural Estimate</span>

                  <ArrowRight size={16} />
                </Link>

                <button
                  className="
                    flex
                    h-[54px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    border
                    border-white/20
                    bg-white/5
                    px-4
                    text-center
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[1px]
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:bg-white/10

                    sm:h-[58px]
                    sm:w-auto
                    sm:min-w-[280px]
                    sm:px-7
                    sm:text-[13px]
                  "
                >
                  <Phone size={16} className="shrink-0" />

                  <span className="truncate">Call Our Engineers</span>
                </button>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full max-w-[520px]">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[rgba(12,18,32,0.72)]
                  p-6
                  shadow-[0_30px_80px_rgba(0,0,0,0.45)]
                  backdrop-blur-[18px]

                  sm:p-8
                  lg:p-10
                "
              >
                {/* TOP LIGHT */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC400]/70 to-transparent" />

                {/* GLOW */}
                <div className="absolute -right-10 -top-10 h-[160px] w-[160px] rounded-full bg-[#FFC400]/10 blur-3xl" />

                {/* HEADER */}
                <div className="relative z-10 mb-7">
                  <h3 className="font-archivo text-[30px] font-black leading-[36px] text-white sm:text-[38px] sm:leading-[44px]">
                    Get Free Consultation
                  </h3>

                  <p className="mt-3 text-[14px] leading-[24px] text-white/65">
                    Speak with our industrial planning experts today.
                  </p>
                </div>

                {/* FORM */}
                <form
                  className="relative z-10 space-y-4"
                  onSubmit={handleSubmit}
                >
                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Your Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Full name"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/15
                        bg-white/10
                        px-4
                        py-3
                        text-white
                        placeholder:text-white/50
                        transition-all

                        focus:border-[#FFAC03]
                        focus:outline-none
                        focus:ring-4
                        focus:ring-[#FFAC03]/30
                      "
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Mobile Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98xxx xxxxx"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/15
                        bg-white/10
                        px-4
                        py-3
                        text-white
                        placeholder:text-white/50
                        transition-all

                        focus:border-[#FFAC03]
                        focus:outline-none
                        focus:ring-4
                        focus:ring-[#FFAC03]/30
                      "
                    />
                  </div>

                  {/* PROJECT TYPE */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white">
                      Project Type *
                    </label>

                    <select
                      name="project_type"
                      defaultValue=""
                      required
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-white/15
                        bg-white/10
                        px-4
                        py-3
                        text-white
                        transition-all

                        focus:border-[#FFAC03]
                        focus:outline-none
                        focus:ring-4
                        focus:ring-[#FFAC03]/30
                      "
                    >
                      <option value="" disabled className="text-black">
                        Select project type
                      </option>

                      <option className="text-black">
                        Manufacturing Plant{" "}
                      </option>

                      <option className="text-black">
                        Warehousing Facility{" "}
                      </option>

                      <option className="text-black">
                        Renewable Energy Setup{" "}
                      </option>

                      <option className="text-black">
                        Structural Engineering{" "}
                      </option>

                      <option className="text-black">Other Industry </option>
                    </select>
                  </div>

                  {/* AREA + LOCATION */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* AREA */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white">
                        Approx. Area (sq.ft) *
                      </label>

                      <select
                        defaultValue=""
                        name="sqft"
                        required
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-white/15
                          bg-white/10
                          px-4
                          py-3
                          text-white
                          transition-all

                          focus:border-[#FFAC03]
                          focus:outline-none
                          focus:ring-4
                          focus:ring-[#FFAC03]/30
                        "
                      >
                        <option value="" disabled className="text-black">
                          Select area
                        </option>

                        <option className="text-black">
                          5,000 - 10,000 sq.ft
                        </option>

                        <option className="text-black">
                          10,000 - 25,000 sq.ft
                        </option>

                        <option className="text-black">
                          25,000 - 50,000 sq.ft
                        </option>

                        <option className="text-black">
                          Above 50,000 sq.ft
                        </option>
                      </select>
                    </div>

                    {/* LOCATION */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white">
                        Project Location
                      </label>

                      <input
                        type="text"
                        name="location"
                        placeholder="City, State"
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-white/15
                          bg-white/10
                          px-4
                          py-3
                          text-white
                          placeholder:text-white/50
                          transition-all

                          focus:border-[#FFAC03]
                          focus:outline-none
                          focus:ring-4
                          focus:ring-[#FFAC03]/30
                        "
                      />
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      group
                      relative
                      w-full
                      overflow-hidden
                      rounded-2xl
                      bg-gradient-to-r
                      from-[#FFAC03]
                      to-[#FF8800]
                      px-5
                      py-4
                      text-base
                      font-black
                      text-[#0A2A4A]
                      transition-all

                      hover:shadow-[0_20px_50px_rgba(255,172,3,0.35)]

                      active:scale-[0.98]

                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {/* SHINE EFFECT */}
                    <div
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/30
                        to-transparent
                        transition-transform
                        duration-1000

                        group-hover:translate-x-full
                      "
                    />

                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-5 w-5 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-20"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />

                            <path
                              className="opacity-90"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get My Free Project Estimate
                          <ArrowRight
                            className="h-5 w-5 transition-transform group-hover:translate-x-1"
                            strokeWidth={2.5}
                          />
                        </>
                      )}
                    </span>
                  </button>

                  {/* FOOTER */}
                  <p className="pt-1 text-center text-[12px] leading-relaxed text-white/70">
                    🔒 No spam. No obligation. We call you within 4 business
                    hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STATS */}
      <div className="absolute bottom-0 left-0 z-20 w-full">
        <div className="bg-[#0B0B0B] py-4 sm:h-[96px] sm:py-0">
          {/* MOBILE */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-5 px-3 sm:hidden">
            {[
              {
                value: 500,
                suffix: "+",
                label: "Project Delivered",
              },
              {
                value: 15,
                suffix: "+",
                label: "Years of Excellence",
              },
              {
                value: 150,
                suffix: "",
                label: "Day Delivery",
              },
              {
                value: 98,
                suffix: "%",
                label: "On Time Rate",
              },
              {
                value: 0,
                suffix: "",
                label: "Cost Overruns",
              },
              {
                value: 800,
                suffix: "",
                label: "ISO Certified",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center py-2 text-center"
              >
                <Counter end={item.value} suffix={item.suffix} />

                <span className="mt-1 text-[11px] font-medium text-[#BDBDBD]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* DESKTOP */}
          <div className="hidden h-full items-center justify-center sm:flex">
            <div className="flex items-center justify-center overflow-x-auto">
              {[
                {
                  value: 500,
                  suffix: "+",
                  label: "Project Delivered",
                },
                {
                  value: 15,
                  suffix: "+",
                  label: "Years of Excellence",
                },
                {
                  value: 150,
                  suffix: "",
                  label: "Day Delivery Guarantee",
                },
                {
                  value: 98,
                  suffix: "%",
                  label: "On Time Rate",
                },
                {
                  value: 0,
                  suffix: "",
                  label: "Cost Overruns",
                },
                {
                  value: 800,
                  suffix: "",
                  label: "ISO Certified",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="px-4 py-2 md:px-5 lg:px-7 xl:px-10">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <Counter end={item.value} suffix={item.suffix} />

                      <span className="text-[12px] font-medium text-[#BDBDBD] md:text-[13px] lg:text-[15px]">
                        {item.label}
                      </span>
                    </div>
                  </div>

                  {index !== 5 && (
                    <div className="hidden h-[44px] w-px bg-white/10 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
