"use client";

import { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "What does an EPC contractor for factories do?",
    answer:
      "An EPC contractor for factories or industrial EPC company handles Engineering, Procurement, and Construction with full responsibility, ensuring efficient project delivery and consistent quality.",
  },

  {
    question: "Why choose an industrial turnkey contractor?",
    answer:
      "An industrial turnkey contractor or turnkey EPC contractor India eliminates coordination issues by providing a single contract for design and build, ensuring faster and more reliable execution.",
  },

  {
    question:
      "Do you provide warehouse construction services?",
    answer:
      "Yes, a warehouse construction company offers PEB warehouse construction, steel structures, and turnkey industrial construction solutions for storage and logistics facilities.",
  },

  {
    question:
      "Why choose a factory construction company with inbuilt infrastructure?",
    answer:
      "• Faster execution\n• Better quality control\n• No subcontractor dependency\n• Seamless project delivery",
  },

  {
    question:
      "What industries do you serve in industrial construction?",
    answer:
      "An industrial construction company serves manufacturing, logistics, warehousing, engineering, automotive, and heavy industries with custom factory building solutions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#F3F3F3] px-4 py-[56px] sm:px-6 lg:px-0 lg:py-[90px]">

      <div
        className="
        mx-auto
        flex
        max-w-[1440px]
        flex-col
        gap-[40px]

        lg:flex-row
        lg:items-start
        lg:justify-between
        lg:px-[120px]
      "
      >
        {/* LEFT IMAGE */}
        <div
          className="
          flex
          justify-center

          lg:shrink-0
        "
        >
          <Image
            src="/Images/QUESTION.png"
            alt="FAQ"
            width={430}
            height={720}
            priority
            className="
            h-auto
            w-[240px]
            object-contain

            sm:w-[320px]

            lg:w-[430px]
          "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-[690px]">

          {/* HEADING */}
          <h2
            className="
            font-archivo
            text-[34px]
            font-bold
            leading-[40px]
            tracking-[0%]
            text-[#0D2346]

            sm:text-[46px]
            sm:leading-[52px]

            lg:text-[58px]
            lg:leading-[64px]
          "
          >
            Frequently Asked{" "}

            <span className="text-[#FFC400]">
              Questions
            </span>
          </h2>

          {/* FAQ LIST */}
          <div className="mt-[34px] space-y-[12px] sm:mt-[48px] sm:space-y-[14px]">

            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="
                  overflow-hidden
                  border
                  border-[#DDDDDD]
                  bg-white
                  transition-all
                  duration-300
                "
                >
                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      setOpenIndex(
                        isOpen ? -1 : index,
                      )
                    }
                    className="
                    flex
                    w-full
                    items-start
                    justify-between
                    gap-[14px]
                    px-[18px]
                    py-[18px]
                    text-left

                    sm:items-center
                    sm:px-[28px]
                    sm:py-[22px]
                  "
                  >
                    {/* QUESTION TEXT */}
                    <span
                      className="
                      font-manrope
                      text-[15px]
                      font-semibold
                      leading-[24px]
                      text-black

                      sm:text-[18px]
                      sm:leading-[30px]
                    "
                    >
                      {index + 1}. {faq.question}
                    </span>

                    {/* OPEN / CLOSE IMAGE */}
                    <div className="flex h-[30px] w-[30px] shrink-0 items-center justify-center sm:h-[34px] sm:w-[34px]">

                      <Image
                        src="/Images/button.png"
                        alt={
                          isOpen
                            ? "Close"
                            : "Open"
                        }
                        width={34}
                        height={34}
                        className={`
                        h-[30px]
                        w-[30px]
                        object-contain
                        transition-all
                        duration-300
                        ease-in-out

                        sm:h-[34px]
                        sm:w-[34px]

                        ${
                          isOpen
                            ? "rotate-180 scale-100"
                            : "rotate-0 scale-95"
                        }
                      `}
                      />
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      isOpen
                        ? "max-h-[320px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                  >
                    <div className="px-[18px] pb-[22px] sm:px-[28px] sm:pb-[26px]">

                      <div className="flex gap-[12px] sm:gap-[14px]">

                        {/* YELLOW LINE */}
                        <div className="mt-[4px] w-[4px] bg-[#FFC400]" />

                        {/* ANSWER TEXT */}
                        <p
                          className="
                          whitespace-pre-line
                          font-manrope
                          text-[14px]
                          font-normal
                          leading-[24px]
                          text-[#6A6A6A]

                          sm:text-[16px]
                          sm:leading-[30px]
                        "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;