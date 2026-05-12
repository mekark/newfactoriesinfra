"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const ProductionSlotsSection = () => {
  return (
    <section className="w-full overflow-hidden bg-[#FFC400]">
      <div
        className="
        mx-auto
        flex
        max-w-[1440px]
        flex-col
        px-4
        py-[56px]

        sm:px-6

        lg:h-[518px]
        lg:flex-row
        lg:items-center
        lg:px-0
        lg:py-0
      "
      >
        {/* LEFT CONTENT */}
        <div
          className="
          flex
          w-full
          flex-col
          justify-center

          lg:w-[874px]
          lg:pl-[192px]
        "
        >
          {/* HEADING */}
          <h2
            className="
            font-archivo
            text-[34px]
            font-extrabold
            uppercase
            leading-[40px]
            tracking-[0%]
            text-black

            sm:text-[46px]
            sm:leading-[52px]

            lg:w-[773px]
            lg:text-[58px]
            lg:leading-[64px]
          "
          >
            OUR NEXT PRODUCTION
            <br />
            SLOTS ARE FILLING NOW.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
            mt-[18px]
            max-w-[760px]
            font-manrope
            text-[14px]
            font-normal
            leading-[24px]
            tracking-[0%]
            text-black

            sm:text-[15px]
            sm:leading-[25.5px]
          "
          >
            Inbuilt Infra manages{" "}
            <span className="font-bold">8–12 active projects</span>{" "}
            simultaneously — a deliberate ceiling that protects our{" "}
            <span className="font-bold">120-day delivery guarantee.</span>{" "}
            Projects confirmed this month receive a{" "}
            <span className="font-bold">
              complimentary site feasibility assessment (₹15,000 value).
            </span>{" "}
            Yours is not reserved until you confirm.
          </p>

          {/* BUTTONS */}
          <div
            className="
            mt-[34px]
            flex
            flex-col
            gap-[14px]

            sm:flex-row
            sm:items-center
            sm:gap-[18px]

            lg:mt-[46px]
            lg:gap-[24px]
          "
          >
            {/* BLACK BUTTON */}
            <button
              className="
              flex
              h-[52px]
              w-full
              items-center
              justify-center
              bg-black
              px-[22px]
              transition-all
              duration-300

              hover:scale-[1.02]

              active:scale-[0.98]

              sm:w-auto
              sm:px-[28px]

              lg:h-[48px]
              lg:px-[32px]
            "
            >
              <Link
                href="#project-plan"
                className="
    flex
    h-[48px]
    items-center
    justify-center
    bg-black
    px-[32px]
    transition-all
    duration-300

    hover:scale-[1.02]

    active:scale-[0.98]
  "
              >
                <span
                  className="
      text-center
      font-archivo
      text-[12px]
      font-bold
      uppercase
      tracking-[0%]
      text-[#FFC400]

      sm:text-[14px]

      lg:text-[16px]
    "
                >
                  GET FREE STRUCTURAL ESTIMATE →
                </span>
              </Link>
            </button>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://api.whatsapp.com/send/?phone=917823967391&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="
    flex
    h-[52px]
    w-full
    items-center
    justify-center
    gap-[10px]
    rounded-[4px]
    bg-[#25D366]
    px-[18px]
    shadow-[0px_4px_12px_rgba(0,0,0,0.18)]
    transition-all
    duration-300

    hover:scale-[1.02]

    active:scale-[0.98]

    sm:w-auto
    sm:gap-[12px]

    lg:h-[48px]
  "
            >
              <FaWhatsapp className="text-[22px] text-white lg:text-[24px]" />

              <span
                className="
      font-manrope
      text-[14px]
      font-bold
      text-white

      lg:text-[15px]
    "
              >
                WhatsApp Us Now
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
          mt-[40px]
          flex
          w-full
          items-center
          justify-center

          lg:mt-0
          lg:w-[566px]
        "
        >
          <Image
            src="/Images/dot.png"
            alt="Exclamation"
            width={516}
            height={516}
            priority
            className="
            h-[240px]
            w-[240px]
            object-contain

            sm:h-[320px]
            sm:w-[320px]

            lg:h-[516px]
            lg:w-[516px]
          "
          />
        </div>
      </div>
    </section>
  );
};

export default ProductionSlotsSection;
