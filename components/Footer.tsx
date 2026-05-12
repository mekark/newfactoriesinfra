"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProjectPlanSection = () => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    const form = e.currentTarget;

    const payload = {
      source: "Footer Form",

      name: (form.elements[0] as HTMLInputElement)?.value,

      company: (form.elements[1] as HTMLInputElement)?.value,

      email: (form.elements[2] as HTMLInputElement)?.value,

      phone: (form.elements[3] as HTMLInputElement)?.value,

      location: (form.elements[4] as HTMLInputElement)?.value,

      sqft: (form.elements[5] as HTMLSelectElement)?.value,

      category: (form.elements[6] as HTMLSelectElement)?.value,

      message: (form.elements[7] as HTMLTextAreaElement)?.value,
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
    <section className="relative w-full overflow-hidden bg-[#071B3B] px-4 py-[56px] sm:px-6 lg:px-0 lg:py-[90px]">
      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        max-w-[1440px]
        flex-col
        gap-[40px]

        lg:flex-row
        lg:items-start
        lg:justify-between
        lg:gap-[48px]
        lg:px-[80px]
      "
      >
        {/* LEFT SIDE */}
        <div
          className="
          w-full

          lg:w-[520px]
          lg:pt-[30px]
        "
        >
          {/* LOGO */}
          <div className="space-y-5 sm:space-y-6">
            <a
              href="https://www.inbuiltinfra.com/"
              className="flex h-12 w-auto items-center justify-start overflow-hidden sm:h-14"
              aria-label="Visit the Inbuilt Infra main website"
            >
              <Image
                src="/Images/logo.png"
                alt="Inbuilt Infra Logo"
                width={180}
                height={40}
                className="h-full w-auto object-contain"
              />
            </a>

            <h3 className="text-[20px] font-black tracking-tight text-white sm:text-2xl">
              INBUILT INFRA
            </h3>
          </div>

          {/* HEADING */}
          <h2
            className="
            mt-[20px]
            font-archivo
            text-[34px]
            font-extrabold
            leading-[42px]
            tracking-[-1px]
            text-white

            sm:text-[42px]
            sm:leading-[54px]

            lg:text-[42px]
            lg:leading-[58px]
          "
          >
            Prepare Your{" "}
            <span className="text-[#FFC400]">
              Facility
              <br />
              Setup Plan
            </span>
          </h2>

          {/* SUBTEXT */}
          <p
            className="
            mt-[24px]
            max-w-[480px]
            font-manrope
            text-[15px]
            leading-[28px]
            text-white/80

            sm:text-[18px]
            sm:leading-[30px]
          "
          >
            Speak to our executive engineers. We outline feasibility, structural
            requirements, and a 120-day path to activation.
          </p>

          {/* CONTACT BLOCKS */}
          <div className="mt-[34px] space-y-[18px] sm:mt-[42px] sm:space-y-[22px]">
            {/* PHONE */}
            <div className="flex items-start gap-[14px]">
              <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-[48px] sm:w-[48px]">
                <span className="text-[18px] text-[#FFC400] sm:text-[20px]">
                  📞
                </span>
              </div>

              <div>
                <h4 className="font-manrope text-[16px] font-bold text-white sm:text-[18px]">
                  Direct Line
                </h4>

                <a
                  href="tel:+917823967391"
                  className="mt-[4px] block font-manrope text-[17px] font-medium text-white/80 transition-colors hover:text-[#FFC400] sm:text-[20px]"
                >
                  +91 78239 67391
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-[14px]">
              <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-[48px] sm:w-[48px]">
                <span className="text-[18px] text-[#FFC400] sm:text-[20px]">
                  ✉️
                </span>
              </div>

              <div>
                <h4 className="font-manrope text-[16px] font-bold text-white sm:text-[18px]">
                  Official Email
                </h4>

                <a
                  href="mailto:info@inbuiltinfra.com"
                  className="mt-[4px] block break-all font-manrope text-[15px] font-medium text-white/80 transition-colors hover:text-[#FFC400] sm:text-[18px]"
                >
                  info@inbuiltinfra.com
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="relative overflow-hidden rounded-[22px] border border-[#FFC400]/20 bg-[#0C2A56]/70 p-[20px] sm:p-[22px]">
              {/* DECORATION */}
              <div className="absolute -left-[35px] top-[20px] h-[120px] w-[120px] rounded-full border border-[#FFC400]/10" />

              <div className="absolute bottom-[-20px] right-[10px] h-[120px] w-[120px] rounded-full border border-[#FFC400]/10" />

              <div className="relative z-10 flex items-start gap-[14px]">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-white/10 sm:h-[48px] sm:w-[48px]">
                  <span className="text-[18px] text-[#FFC400] sm:text-[20px]">
                    📍
                  </span>
                </div>

                <div>
                  <h4 className="font-manrope text-[16px] font-bold text-white sm:text-[18px]">
                    Corporate HQ
                  </h4>

                  <p
                    className="
                    mt-[6px]
                    max-w-[280px]
                    font-manrope
                    text-[14px]
                    leading-[26px]
                    text-white/70

                    sm:text-[15px]
                    sm:leading-[28px]
                  "
                  >
                    First Floor, ZUBII Manor
                    <br />
                    No.27E/N 57E at 7th Avenue
                    <br />
                    Ashok Nagar, Chennai-600083
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs font-black uppercase tracking-[0.2em] mb-6">
              Join Our Industry Network
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                {
                  label: "Facebook",
                  url: "https://www.facebook.com/profile.php?id=61563459030303",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  url: "https://www.instagram.com/inbuiltinfra",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: "X",
                  url: "https://x.com/InbuiltInfra",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  url: "https://www.linkedin.com/company/104104327",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  url: "https://www.youtube.com/@InbuiltInfra",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:border-[var(--accent-500)] hover:bg-[var(--accent-500)]/10 transition-all duration-300 transform hover:-translate-y-1"
                  title={social.label}
                >
                  <div className="text-white group-hover:text-[var(--accent-500)] group-hover:scale-110 transition-all">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div
          className="
          w-full
          rounded-[24px]
          bg-[#F5F5F5]
          p-[22px]
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]

          sm:p-[34px]

          lg:w-[720px]
          lg:rounded-[34px]
          lg:p-[48px]
        "
        >
          {/* FORM HEADER */}
          <div className="mb-[28px] flex items-center justify-between sm:mb-[40px]">
            <h3
              className="
              font-archivo
              text-[28px]
              font-bold
              leading-[34px]
              text-[#071B3B]

              sm:text-[38px]
              sm:leading-[44px]

              lg:text-[44px]
              lg:leading-[48px]
            "
            >
              Setup Your Facility
            </h3>

            <div className="h-[6px] w-[44px] rounded-full bg-[#FFC400]" />
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className= "space-y-[18px] sm:space-y-[24px]"
            id="project-plan"
          >
            {/* ROW 1 */}
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 sm:gap-[22px]">
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="h-[58px] rounded-[14px] border border-[#D8D8D8] bg-[#ECECEC] px-[18px] font-manrope text-[15px] text-black placeholder:text-[#7A7A7A] outline-none transition-all focus:border-[#071B3B] sm:h-[64px] sm:text-[17px]"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Ltd"
                required
                className="h-[58px] rounded-[14px] border border-[#D8D8D8] bg-[#ECECEC] px-[18px] font-manrope text-[15px] text-black placeholder:text-[#7A7A7A] outline-none transition-all focus:border-[#071B3B] sm:h-[64px] sm:text-[17px]"
              />
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 sm:gap-[22px]">
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                required
                className="h-[58px] rounded-[14px] border border-[#D8D8D8] bg-[#ECECEC] px-[18px] font-manrope text-[15px] text-black placeholder:text-[#7A7A7A] outline-none transition-all focus:border-[#071B3B] sm:h-[64px] sm:text-[17px]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="9876543210"
                required
                className="h-[58px] rounded-[14px] border border-[#D8D8D8] bg-[#ECECEC] px-[18px] font-manrope text-[15px] text-black placeholder:text-[#7A7A7A] outline-none transition-all focus:border-[#071B3B] sm:h-[64px] sm:text-[17px]"
              />
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 sm:gap-[22px]">
              <input
                type="text"
                name="location"
                placeholder="Chennai, TN"
                required
                className="h-[58px] rounded-[14px] border border-[#D8D8D8] bg-[#ECECEC] px-[18px] font-manrope text-[15px] text-black placeholder:text-[#7A7A7A] outline-none transition-all focus:border-[#071B3B] sm:h-[64px] sm:text-[17px]"
              />

              <select
                name="sqft"
                required
                className="h-[58px] rounded-[14px] border border-[#D8D8D8] bg-[#ECECEC] px-[18px] font-manrope text-[15px] text-black outline-none transition-all focus:border-[#071B3B] sm:h-[64px] sm:text-[17px]"
              >
                <option value="">Select Range</option>
                <option>10,000 - 20,000 Sq.ft</option>
                <option>20,000 - 50,000 Sq.ft</option>
                <option>50,000+ Sq.ft</option>
              </select>
            </div>

            {/* CATEGORY */}
            <select
              name="category"
              required
              className="h-[58px] w-full rounded-[14px] border border-[#D8D8D8] bg-[#ECECEC] px-[18px] font-manrope text-[15px] text-black outline-none transition-all focus:border-[#071B3B] sm:h-[64px] sm:text-[17px]"
            >
              <option className="text-black">Manufacturing Plant </option>

              <option className="text-black">Warehousing Facility </option>

              <option className="text-black">Renewable Energy Setup </option>

              <option className="text-black">Structural Engineering </option>

              <option className="text-black">Other Industry </option>
            </select>

            {/* TEXTAREA */}
            <textarea
              rows={5}
              name="message"
              placeholder="Primary process requirements, timeline, etc."
              className="w-full resize-none rounded-[16px] border border-[#D8D8D8] bg-[#ECECEC] p-[18px] font-manrope text-[15px] text-black placeholder:text-[#7A7A7A] outline-none transition-all focus:border-[#071B3B] sm:rounded-[18px] sm:p-[20px] sm:text-[17px]"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
      mt-[10px]
      flex
      h-[58px]
      w-full
      items-center
      justify-center
      rounded-[16px]
      bg-[#FFC400]
      font-manrope
      text-[18px]
      font-bold
      text-black
      transition-all
      duration-300

      hover:bg-[#ffcf2e]

      active:scale-[0.99]

      sm:mt-[12px]
      sm:h-[70px]
      sm:rounded-[18px]
      sm:text-[22px]
    "
            >
              {isSubmitting ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ProjectPlanSection;
