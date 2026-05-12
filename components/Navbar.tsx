"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const desktopNavItems = [
  { name: "Home", href: "#home" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Industries", href: "#industries" },
  { name: "Plant", href: "#plant" },
  { name: "Why Choose Us", href: "#why-choose-us" },
];

const mobileNavItems = [
  ...desktopNavItems,
  // { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isThankYouPage = pathname === "/thank-you";

  const [activeSection, setActiveSection] =
    useState("home");

  const [openPathname, setOpenPathname] =
    useState<string | null>(null);

  const [scrolled, setScrolled] = useState(false);

  const isOpen =
    !isThankYouPage && openPathname === pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "testimonials",
        "industries",
        "plant",
        "why-choose-us",
        "faq",
        "project-plan",
      ];

      const scrollPosition =
        window.scrollY + 140;

      for (const section of sections) {
        const element =
          document.getElementById(section);

        if (!element) continue;

        const offsetTop = element.offsetTop;

        const offsetHeight =
          element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition <
            offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[rgba(5,12,24,0.92)] py-2 shadow-xl backdrop-blur-xl"
          : "bg-transparent py-2 sm:py-3"
      }`}
    >
      <nav
        className="
          mx-auto
          flex
          h-[72px]
          max-w-[1600px]
          items-center
          justify-between
          gap-8
          px-6

          md:px-8
          lg:px-10
          xl:px-14
          2xl:px-20
        "
      >
        {/* LOGO */}
        <div className="flex shrink-0 items-center">
          <Link
            href="/"
            className="relative flex items-center"
          >
            <div
              className="
                relative
                h-[42px]
                w-[110px]

                sm:h-[46px]
                sm:w-[120px]

                lg:h-[50px]
                lg:w-[132px]

                xl:h-[54px]
                xl:w-[145px]
              "
            >
              <Image
                src="/Images/logo.png"
                alt="Inbuilt Infra Logo"
                fill
                priority
                sizes="145px"
                className="object-contain object-left"
              />
            </div>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div
          className="
            hidden
            flex-1
            items-center
            justify-center
            lg:flex
          "
        >
          <div className="flex items-center gap-10 xl:gap-14">
            {desktopNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  whitespace-nowrap
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    activeSection ===
                    item.href.replace("#", "")
                      ? "text-[#FFC400]"
                      : "text-white hover:text-[#FFC400]"
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden shrink-0 lg:flex">
          <Link
            href="#project-plan"
            className="
              inline-flex
              h-[48px]
              items-center
              justify-center
              rounded-full
              bg-[#FFC400]
              px-8
              text-[15px]
              font-bold
              whitespace-nowrap
              text-black
              transition-all
              duration-300
              hover:bg-[#ffd54a]
            "
          >
            Get Project Plan
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() =>
              setOpenPathname(
                isOpen ? null : pathname
              )
            }
            className="
              inline-flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              rounded-xl
              border
              border-white/20
              bg-white/10
              text-white
              backdrop-blur-sm
            "
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {!isThankYouPage && isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setOpenPathname(null)
              }
              className="
                fixed
                inset-0
                z-[40]
                bg-black/60
                backdrop-blur-sm
                lg:hidden
              "
            />

            {/* DRAWER */}
            <motion.div
              initial={{
                y: "-100%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "-100%",
                opacity: 0,
              }}
              transition={{
                type: "spring",
                damping: 23,
                stiffness: 200,
              }}
              className="
                fixed
                inset-x-0
                top-0
                z-50
                flex
                max-h-[100vh]
                flex-col
                overflow-y-auto
                rounded-b-[28px]
                border-b
                border-white/10
                bg-[rgba(5,12,24,0.98)]
                px-5
                pb-8
                pt-5
                shadow-2xl
                lg:hidden
              "
            >
              {/* TOP BAR */}
              <div className="mb-7 flex items-center justify-between border-b border-white/5 pb-4">
                <Link
                  href="/"
                  onClick={() =>
                    setOpenPathname(null)
                  }
                  className="relative h-[34px] w-[82px]"
                >
                  <Image
                    src="/Images/logo.png"
                    alt="Inbuilt Infra Logo"
                    fill
                    sizes="82px"
                    className="object-contain object-left"
                  />
                </Link>

                <button
                  onClick={() =>
                    setOpenPathname(null)
                  }
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-white
                    transition-colors
                    hover:bg-white/10
                  "
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* NAV ITEMS */}
              <div className="mt-2 flex flex-1 flex-col space-y-1">
                {mobileNavItems.map(
                  (item, idx) => (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        y: -20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay:
                          0.1 + idx * 0.05,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() =>
                          setOpenPathname(
                            null
                          )
                        }
                        className={`
                          flex
                          items-center
                          justify-between
                          border-b
                          border-white/5
                          py-4
                          text-[18px]
                          font-bold
                          transition-colors

                          ${
                            activeSection ===
                            item.href.replace(
                              "#",
                              ""
                            )
                              ? "text-[#FFC400]"
                              : "text-white hover:text-[#FFC400]"
                          }
                        `}
                      >
                        {item.name}

                        <svg
                          className="h-4 w-4 text-[#FFC400]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </motion.div>
                  )
                )}
              </div>

              {/* MOBILE CTA */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="mt-8"
              >
                <Link
                  href="#project-plan"
                  onClick={() =>
                    setOpenPathname(null)
                  }
                  className="
                    inline-flex
                    h-[54px]
                    w-full
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#FFC400]
                    px-6
                    text-[15px]
                    font-black
                    text-black
                    shadow-lg
                    transition-all
                    hover:bg-[#ffd84d]
                    active:scale-95
                  "
                >
                  Get Project Plan
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}