import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import { LOGO } from "../data/assets";
import { NAV_LINKS } from "../data/content";
import Button from "./Button";

export default function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ============================================================
     NAVIGATION
  ============================================================ */

  const navigationLinks = NAV_LINKS.filter(
    (link) => link.path !== "/contact"
  );

  /* ============================================================
     SCROLL DETECTION
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================================================
     CLOSE MENU WHEN ROUTE CHANGES
  ============================================================ */

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* ============================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ============================================================ */

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /* ============================================================
     ESCAPE KEY
  ============================================================ */

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  /* ============================================================
     HELPERS
  ============================================================ */

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <>
      {/* ========================================================
          FIXED NAVBAR
      ======================================================== */}

      <header
        className="
          fixed
          top-3
          sm:top-4
          left-0
          right-0

          z-[100]

          px-3
          sm:px-5
          lg:px-7

          pointer-events-none
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1460px]

            pointer-events-auto
          "
        >
          {/* ====================================================
              NAVBAR CONTAINER
          ==================================================== */}

          <div
            className={`
              relative

              flex
              items-center

              h-[62px]
              sm:h-[68px]
              lg:h-[72px]

              px-2
              sm:px-2.5
              lg:px-3

              overflow-hidden

              rounded-[19px]
              sm:rounded-[22px]

              border

              bg-white/95
              backdrop-blur-2xl

              transition-all
              duration-500
              ease-[cubic-bezier(.22,1,.36,1)]

              ${
                scrolled
                  ? `
                    border-slate-200
                    shadow-[0_18px_55px_-24px_rgba(15,23,42,0.34)]
                  `
                  : `
                    border-slate-200/80
                    shadow-[0_10px_40px_-20px_rgba(15,23,42,0.20)]
                  `
              }
            `}
          >
            {/* ==================================================
                TOP HAIRLINE
            ================================================== */}

            <div
              className="
                absolute
                top-0
                left-0
                right-0

                h-px

                bg-gradient-to-r
                from-transparent
                via-slate-300
                to-transparent

                opacity-70

                pointer-events-none
              "
            />

            {/* ==================================================
                BOTTOM TRACK
            ================================================== */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0

                h-[2px]

                overflow-hidden

                bg-slate-100

                pointer-events-none
              "
            >
              <span className="navbar-shuttle" />
            </div>

            {/* ==================================================
                BRAND
            ================================================== */}

            <Link
              to="/"
              onClick={closeMenu}
              className="
                group

                relative
                z-10

                flex
                items-center

                shrink-0

                h-full

                pl-1
                pr-3

                sm:pr-5
                lg:pr-6

                border-r
                border-slate-200/80
              "
            >
              {/* Logo */}
              <div
                className="
                  relative

                  flex
                  items-center
                  justify-center

                  w-[42px]
                  h-[42px]

                  sm:w-[46px]
                  sm:h-[46px]

                  lg:w-[48px]
                  lg:h-[48px]

                  rounded-[12px]

                  bg-white

                  overflow-hidden

                  transition-all
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:shadow-[0_7px_18px_rgba(15,23,42,0.10)]
                "
              >
                <img
                  src={LOGO.src}
                  alt={LOGO.alt}
                  className="
                    w-full
                    h-full

                    object-contain

                    transition-transform
                    duration-500

                    group-hover:scale-105
                  "
                  loading="eager"
                />

                <span
                  className="
                    absolute
                    inset-0

                    rounded-[12px]

                    bg-sky-400/10

                    opacity-0

                    group-hover:opacity-100

                    transition-opacity
                    duration-300
                  "
                />
              </div>

              {/* Brand text */}
              <div className="hidden sm:flex flex-col ml-2.5">
                <span
                  className="
                    font-display

                    text-[17px]
                    lg:text-[19px]

                    font-bold

                    tracking-[-0.05em]

                    leading-none

                    text-[#0B192C]
                  "
                >
                  Up
                  <span className="text-[#0284C7]">
                    Mentor
                  </span>
                </span>

                <span
                  className="
                    mt-[4px]

                    text-[7px]
                    lg:text-[8px]

                    font-bold
                    uppercase

                    tracking-[0.17em]

                    text-slate-400
                  "
                >
                  AI Infrastructure
                </span>
              </div>
            </Link>

            {/* ==================================================
                DESKTOP NAVIGATION
            ================================================== */}

            <nav
              className="
                hidden
                lg:flex

                flex-1

                items-center
                justify-center

                h-full

                px-4
                xl:px-7

                gap-0.5
                xl:gap-1
              "
              aria-label="Main Navigation"
            >
              {navigationLinks.map((link) => {
                const isActive =
                  location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`
                      group

                      relative

                      flex
                      items-center
                      justify-center

                      h-[72px]

                      px-3
                      xl:px-4

                      text-[12px]
                      xl:text-[13px]

                      font-bold

                      tracking-[-0.01em]

                      whitespace-nowrap

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "text-[#0B192C]"
                          : `
                            text-slate-500
                            hover:text-[#0B192C]
                          `
                      }
                    `}
                  >
                    <span className="relative z-10">
                      {link.name}
                    </span>

                    {/* Active / hover line */}
                    <span
                      className={`
                        absolute

                        bottom-[11px]

                        left-1/2

                        -translate-x-1/2

                        h-[2px]

                        rounded-full

                        bg-[#0284C7]

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "w-7 opacity-100"
                            : `
                              w-0
                              opacity-0

                              group-hover:w-5
                              group-hover:opacity-60
                            `
                        }
                      `}
                    />

                    {/* Active dot */}
                    {isActive && (
                      <span
                        className="
                          absolute

                          bottom-[7px]
                          left-1/2

                          translate-x-[11px]

                          w-1
                          h-1

                          rounded-full

                          bg-[#38BDF8]
                        "
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ==================================================
                DESKTOP CTA
            ================================================== */}

            <div
              className="
                hidden
                lg:flex

                items-center

                shrink-0

                pl-4
                xl:pl-6

                pr-1
              "
            >
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                icon={ArrowUpRight}
                className="
                  !h-[44px]
                  xl:!h-[46px]

                  !px-4
                  xl:!px-5

                  !rounded-full

                  text-[12px]
                  xl:text-[13px]

                  font-bold

                  shadow-[0_7px_20px_rgba(2,132,199,0.15)]

                  hover:-translate-y-0.5

                  hover:shadow-[0_10px_26px_rgba(2,132,199,0.24)]

                  transition-all
                  duration-300
                "
              >
                Book a Demo
              </Button>
            </div>

            {/* ==================================================
                MOBILE / TABLET CONTROLS
            ================================================== */}

            <div
              className="
                ml-auto

                flex
                lg:hidden

                items-center
                gap-2

                pr-1

                relative
                z-20
              "
            >
              {/* Status */}
              <div
                className="
                  hidden
                  sm:flex

                  items-center
                  gap-1.5

                  px-2.5
                  h-8

                  rounded-full

                  bg-slate-50

                  border
                  border-slate-200
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5

                    rounded-full

                    bg-emerald-500

                    shadow-[0_0_0_3px_rgba(16,185,129,0.10)]
                  "
                />

                <span
                  className="
                    text-[9px]

                    font-bold

                    tracking-[0.08em]

                    text-slate-500
                  "
                >
                  LIVE
                </span>
              </div>

              {/* Mobile demo */}
              <Button
                to="/contact"
                variant="primary"
                size="xs"
                className="
                  hidden
                  sm:flex

                  !h-9
                  !px-4
                  !rounded-full

                  text-[11px]

                  font-bold
                "
              >
                Demo
              </Button>

              {/* ==================================================
                  SINGLE MOBILE MENU BUTTON

                  This is the ONLY X button.
              ================================================== */}

              <button
                type="button"
                onClick={toggleMenu}
                className="
                  relative

                  flex
                  items-center
                  justify-center

                  w-[42px]
                  h-[42px]

                  rounded-full

                  bg-[#0B192C]

                  border
                  border-[#0B192C]

                  text-white

                  shadow-[0_7px_20px_rgba(11,25,44,0.18)]

                  transition-all
                  duration-300

                  hover:bg-[#132944]

                  active:scale-95

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-sky-300
                  focus-visible:ring-offset-2
                "
                aria-label={
                  isOpen
                    ? "Close navigation"
                    : "Open navigation"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
              >
                {/* Menu */}
                <span
                  className={`
                    absolute

                    transition-all
                    duration-300
                    ease-out

                    ${
                      isOpen
                        ? "rotate-90 scale-75 opacity-0"
                        : "rotate-0 scale-100 opacity-100"
                    }
                  `}
                >
                  <Menu className="w-[19px] h-[19px]" />
                </span>

                {/* X */}
                <span
                  className={`
                    absolute

                    transition-all
                    duration-300
                    ease-out

                    ${
                      isOpen
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-90 scale-75 opacity-0"
                    }
                  `}
                >
                  <X className="w-[18px] h-[18px]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================
          MOBILE NAVIGATION
      ======================================================== */}

      <div
        id="mobile-navigation"
        className={`
          fixed
          inset-0

          z-[90]

          lg:hidden

          ${
            isOpen
              ? "visible"
              : "invisible pointer-events-none"
          }
        `}
        aria-hidden={!isOpen}
      >
        {/* ======================================================
            BACKDROP
        ====================================================== */}

        <button
          type="button"
          aria-label="Close navigation"
          onClick={closeMenu}
          className={`
            absolute
            inset-0

            bg-[#071426]/30

            backdrop-blur-[7px]

            transition-opacity
            duration-500

            ${
              isOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        />

        {/* ======================================================
            MOBILE SHEET
        ====================================================== */}

        <div
          role="dialog"
          aria-modal="true"
          className={`
            absolute

            top-[80px]
            left-3
            right-3

            max-h-[calc(100dvh-94px)]

            overflow-hidden

            rounded-[25px]

            bg-[#F8FAFC]

            border
            border-white

            shadow-[0_35px_100px_-30px_rgba(15,23,42,0.45)]

            transition-all
            duration-500

            ease-[cubic-bezier(.22,1,.36,1)]

            ${
              isOpen
                ? `
                  translate-y-0
                  scale-100
                  opacity-100
                `
                : `
                  -translate-y-6
                  scale-[0.96]
                  opacity-0
                `
            }
          `}
        >
          {/* ==================================================
              MOBILE SHEET HEADER
          ================================================== */}

          <div
            className="
              relative

              px-4
              pt-4
              pb-4

              bg-white

              border-b
              border-slate-100
            "
          >
            {/* Brand row */}
            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              {/* Brand */}
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    items-center
                    justify-center

                    w-10
                    h-10

                    shrink-0

                    rounded-[12px]

                    bg-white

                    border
                    border-slate-200

                    shadow-[0_4px_12px_rgba(15,23,42,0.07)]
                  "
                >
                  <img
                    src={LOGO.src}
                    alt={LOGO.alt}
                    className="
                      w-[76%]
                      h-[76%]

                      object-contain
                    "
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[14px]

                      font-extrabold

                      tracking-[-0.03em]

                      text-[#0B192C]
                    "
                  >
                    Up
                    <span className="text-[#0284C7]">
                      Mentor
                    </span>
                  </p>

                  <p
                    className="
                      mt-[2px]

                      text-[9px]

                      font-semibold

                      uppercase

                      tracking-[0.14em]

                      text-slate-400
                    "
                  >
                    AI Infrastructure
                  </p>
                </div>
              </div>

              {/* Menu status */}
              <div
                className="
                  flex
                  items-center
                  gap-2

                  px-3
                  h-8

                  rounded-full

                  bg-slate-50

                  border
                  border-slate-200
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5

                    rounded-full

                    bg-[#0284C7]

                    shadow-[0_0_0_3px_rgba(2,132,199,0.10)]
                  "
                />

                <span
                  className="
                    text-[9px]

                    font-bold

                    uppercase

                    tracking-[0.12em]

                    text-slate-500
                  "
                >
                  Menu
                </span>
              </div>
            </div>

            {/* Intro */}
            <div
              className="
                flex
                items-end
                justify-between

                mt-4
                px-1
              "
            >
              <div>
                <p
                  className="
                    text-[10px]

                    font-medium

                    text-slate-400
                  "
                >
                  Navigate through
                </p>

                <p
                  className="
                    mt-0.5

                    text-[15px]

                    font-bold

                    tracking-[-0.025em]

                    text-[#0B192C]
                  "
                >
                  Everything UpMentor
                </p>
              </div>

              <Sparkles
                className="
                  w-5
                  h-5

                  text-sky-300

                  opacity-80
                "
              />
            </div>
          </div>

          {/* ==================================================
              MOBILE LINKS
          ================================================== */}

          <div
            className="
              max-h-[calc(100dvh-345px)]

              overflow-y-auto

              overscroll-contain

              px-3
              py-3

              scrollbar-thin
              scrollbar-thumb-slate-200
            "
          >
            <nav
              aria-label="Mobile Navigation"
              className="space-y-1"
            >
              {navigationLinks.map((link, index) => {
                const isActive =
                  location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`
                      group

                      relative

                      flex
                      items-center

                      min-h-[56px]

                      px-3

                      rounded-[15px]

                      overflow-hidden

                      transition-all
                      duration-300

                      ${
                        isActive
                          ? `
                            bg-white
                            text-[#0B192C]

                            border
                            border-slate-100

                            shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                          `
                          : `
                            text-slate-600

                            hover:bg-white
                            hover:text-[#0B192C]

                            hover:shadow-[0_4px_15px_rgba(15,23,42,0.04)]
                          `
                      }
                    `}
                  >
                    {/* Active rail */}
                    {isActive && (
                      <span
                        className="
                          absolute

                          left-0
                          top-0
                          bottom-0

                          w-[3px]

                          bg-[#0284C7]
                        "
                      />
                    )}

                    {/* Number */}
                    <span
                      className={`
                        flex
                        items-center
                        justify-center

                        w-9
                        h-9

                        shrink-0

                        mr-3

                        rounded-[10px]

                        text-[10px]

                        font-bold

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              bg-sky-50
                              text-[#0284C7]
                            `
                            : `
                              bg-slate-100
                              text-slate-400

                              group-hover:bg-sky-50
                              group-hover:text-[#0284C7]
                            `
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Link name */}
                    <span
                      className="
                        flex-1

                        text-[13px]
                        sm:text-[14px]

                        font-bold

                        tracking-[-0.015em]
                      "
                    >
                      {link.name}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`
                        flex
                        items-center
                        justify-center

                        w-7
                        h-7

                        shrink-0

                        rounded-full

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              bg-sky-50
                              text-[#0284C7]
                            `
                            : `
                              text-slate-300

                              group-hover:bg-slate-50
                              group-hover:text-slate-500

                              group-hover:translate-x-1
                            `
                        }
                      `}
                    >
                      <ChevronRight
                        className="
                          w-4
                          h-4
                        "
                      />
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* ==================================================
              CTA CARD
          ================================================== */}

          <div
            className="
              px-3
              pb-3
            "
          >
            <div
              className="
                relative

                overflow-hidden

                rounded-[17px]

                bg-[#0B192C]

                px-4
                py-4

                shadow-[0_12px_30px_rgba(11,25,44,0.15)]
              "
            >
              {/* Decorative glow */}
              <div
                className="
                  absolute

                  -right-10
                  -top-10

                  w-28
                  h-28

                  rounded-full

                  bg-sky-400/15

                  blur-2xl
                "
              />

              <div
                className="
                  absolute

                  -left-10
                  -bottom-12

                  w-24
                  h-24

                  rounded-full

                  bg-blue-500/10

                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  z-10

                  flex
                  items-center
                  justify-between

                  gap-3
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]

                      font-bold

                      uppercase

                      tracking-[0.14em]

                      text-sky-300
                    "
                  >
                    Ready to build?
                  </p>

                  <p
                    className="
                      mt-1

                      text-[14px]

                      font-bold

                      tracking-[-0.025em]

                      text-white
                    "
                  >
                    Bring your school online.
                  </p>
                </div>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="
                    flex
                    items-center
                    justify-center

                    shrink-0

                    w-10
                    h-10

                    rounded-full

                    bg-white

                    text-[#0B192C]

                    transition-all
                    duration-300

                    hover:bg-sky-50
                    hover:scale-105
                  "
                  aria-label="Book a demo"
                >
                  <ArrowUpRight
                    className="
                      w-[17px]
                      h-[17px]
                    "
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* ==================================================
              MOBILE SHUTTLE
          ================================================== */}

          <div
            className="
              relative

              h-[3px]

              overflow-hidden

              bg-sky-50
            "
          >
            <span className="mobile-navbar-shuttle" />
          </div>
        </div>
      </div>

      {/* ========================================================
          ANIMATIONS
      ======================================================== */}

      <style>{`
        /* ======================================================
           DESKTOP SHUTTLE
        ====================================================== */

        @keyframes navbarShuttle {
          0% {
            transform: translateX(-140%);
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          45% {
            opacity: 0.85;
          }

          88% {
            opacity: 1;
          }

          100% {
            transform: translateX(1150%);
            opacity: 0;
          }
        }

        .navbar-shuttle {
          position: absolute;

          left: 0;
          bottom: 0;

          width: 110px;
          height: 2px;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #7dd3fc,
              #0284c7,
              #38bdf8,
              transparent
            );

          filter: blur(0.15px);

          animation:
            navbarShuttle
            5.2s
            cubic-bezier(.4,0,.2,1)
            infinite;
        }


        /* ======================================================
           MOBILE SHUTTLE
        ====================================================== */

        @keyframes mobileNavbarShuttle {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          55% {
            opacity: 1;
          }

          100% {
            transform: translateX(650%);
            opacity: 0;
          }
        }

        .mobile-navbar-shuttle {
          position: absolute;

          top: 0;
          left: 0;

          width: 90px;
          height: 100%;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #7dd3fc,
              #0284c7,
              transparent
            );

          animation:
            mobileNavbarShuttle
            3.2s
            cubic-bezier(.4,0,.2,1)
            infinite;
        }


        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .navbar-shuttle,
          .mobile-navbar-shuttle {
            animation: none;
          }
        }


        /* ======================================================
           MOBILE SCROLLBAR
        ====================================================== */

        @media (max-width: 1023px) {
          #mobile-navigation ::-webkit-scrollbar {
            width: 3px;
          }

          #mobile-navigation ::-webkit-scrollbar-track {
            background: transparent;
          }

          #mobile-navigation ::-webkit-scrollbar-thumb {
            background: #e2e8f0;
            border-radius: 999px;
          }
        }


        /* ======================================================
           VERY SMALL DEVICES
        ====================================================== */

        @media (max-width: 380px) {
          .navbar-shuttle {
            width: 80px;
          }

          .mobile-navbar-shuttle {
            width: 70px;
          }
        }
      `}</style>
    </>
  );
}