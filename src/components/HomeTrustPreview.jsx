import React from "react";
import { Link } from "react-router-dom";

import Reveal from "./Reveal";
import Button from "./Button";

import {
  StartupIndiaLogo,
  StartupOdishaLogo,
  McaLogo,
  MsmeLogo,
  RidoxyLogo,
  AnvPyLogo,
  OctaNetLogo,
  SahnarLogo,
  MicrosoftLogo,
  AmexLogo,
  WiproLogo,
  TcsLogo,
  AccentureLogo,
  EcCouncilLogo,
} from "./BrandLogos";

import {
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Handshake,
  Users,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const RECOGNITIONS = [
  {
    Logo: StartupIndiaLogo,
    name: "Startup India",
    desc: "DPIIT, Ministry of Commerce & Industry",
  },
  {
    Logo: StartupOdishaLogo,
    name: "Startup Odisha",
    desc: "MSME Department, Government of Odisha",
  },
  {
    Logo: McaLogo,
    name: "MCA Registered",
    desc: "Ministry of Corporate Affairs, Government of India",
  },
  {
    Logo: MsmeLogo,
    name: "MSME Registered",
    desc: "Government of India",
  },
];

const COLLABORATIONS = [
  {
    Logo: RidoxyLogo,
    name: "Ridoxy Automation",
    desc: "Aerial Robotics & UAV Hardware",
  },
  {
    Logo: AnvPyLogo,
    name: "AnvPy Platform",
    desc: "On-device Python Compiler & Dev Tools",
  },
  {
    Logo: OctaNetLogo,
    name: "OctaNet Systems",
    desc: "Network Infrastructure & Systems",
  },
  {
    Logo: SahnarLogo,
    name: "Sahnar Technologies",
    desc: "Enterprise Software Solutions",
  },
];

const MENTORS = [
  {
    Logo: MicrosoftLogo,
    name: "Microsoft",
    desc: "Cloud & AI Platforms",
  },
  {
    Logo: AmexLogo,
    name: "American Express",
    desc: "Financial Intelligence",
  },
  {
    Logo: WiproLogo,
    name: "Wipro",
    desc: "Global Technology Services",
  },
  {
    Logo: TcsLogo,
    name: "TCS",
    desc: "IT Consulting & Systems Architecture",
  },
  {
    Logo: AccentureLogo,
    name: "Accenture",
    desc: "Applied Intelligence",
  },
  {
    Logo: EcCouncilLogo,
    name: "EC-Council",
    desc: "Cybersecurity Standard",
  },
];

/* =========================================================
   LOGO ITEM
========================================================= */

function CompactLogo({ item, mentor = false, href }) {
  const { Logo, name, desc } = item;

  return (
    <Link
      to={href}
      title={`${name} — ${desc}`}
      className="
        group/logo relative flex h-12 w-full items-center justify-center
        rounded-xl border border-slate-200/80
        bg-white px-3
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-sky-200
        hover:bg-sky-50/40
        hover:shadow-sm
      "
    >
      <Logo
        className={`
          w-auto max-w-[92px] object-contain
          transition-transform duration-300
          group-hover/logo:scale-105
          ${mentor ? "h-6 sm:h-7" : "h-7 sm:h-8"}
        `}
      />

      {/* Small hover label */}
      <span
        className="
          pointer-events-none absolute -bottom-8 left-1/2 z-30
          hidden -translate-x-1/2 whitespace-nowrap
          rounded-md bg-[#0B192C] px-2 py-1
          text-[9px] font-medium text-white
          shadow-lg
          group-hover/logo:block
        "
      >
        {name}
      </span>

      <ArrowUpRight
        className="
          absolute right-1.5 top-1.5
          h-2.5 w-2.5
          text-slate-300
          opacity-0
          transition-all duration-200
          group-hover/logo:text-sky-500
          group-hover/logo:opacity-100
        "
      />
    </Link>
  );
}

/* =========================================================
   TRUST GROUP
========================================================= */

function TrustGroup({
  icon: Icon,
  iconBg,
  title,
  subtitle,
  items,
  href,
  mentor = false,
}) {
  return (
    <div className="p-4 sm:p-5">
      {/* Group heading */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            className={`
              flex h-8 w-8 shrink-0 items-center justify-center
              rounded-lg ${iconBg}
              shadow-sm
            `}
          >
            <Icon className="h-3.5 w-3.5 text-white" />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-xs font-bold text-[#0B192C]">
              {title}
            </h3>

            <p className="truncate text-[10px] text-slate-400">
              {subtitle}
            </p>
          </div>
        </div>

        <span
          className="
            shrink-0 rounded-full
            bg-slate-50 px-2 py-0.5
            text-[9px] font-bold tabular-nums
            text-slate-400
            ring-1 ring-slate-200
          "
        >
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      {/* Logos */}
      <div
        className={`
          grid gap-2
          ${
            items.length === 6
              ? "grid-cols-3"
              : "grid-cols-2"
          }
        `}
      >
        {items.map((item) => (
          <CompactLogo
            key={item.name}
            item={item}
            mentor={mentor}
            href={href}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function HomeTrustPreview() {
  return (
    <section
      id="recognition-trust"
      className="
        relative overflow-hidden
        border-b border-slate-200
        bg-white
        py-8 sm:py-10
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="
          pointer-events-none absolute
          -right-32 -top-32
          h-72 w-72
          rounded-full
          bg-sky-100/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute
          -bottom-32 -left-32
          h-72 w-72
          rounded-full
          bg-emerald-100/40
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.22]
          [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]
        "
        style={{
          backgroundImage:
            "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              mb-6
              flex flex-col gap-4
              sm:mb-7
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              {/* Badge */}
              <div
                className="
                  mb-2 inline-flex
                  items-center gap-1.5
                  rounded-full
                  border border-emerald-200
                  bg-emerald-50
                  px-2.5 py-1
                  text-[9px] font-bold
                  uppercase tracking-wider
                  text-emerald-700
                "
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="
                      absolute inline-flex
                      h-full w-full
                      animate-ping rounded-full
                      bg-emerald-400 opacity-60
                    "
                  />

                  <span
                    className="
                      relative inline-flex
                      h-1.5 w-1.5
                      rounded-full
                      bg-emerald-500
                    "
                  />
                </span>

                <ShieldCheck className="h-3 w-3" />

                <span>Trusted Ecosystem</span>
              </div>

              {/* Heading */}
              <h2
                className="
                  font-display
                  text-2xl font-extrabold
                  tracking-tight
                  text-[#0B192C]
                  sm:text-3xl
                "
              >
                Recognised &{" "}
                <span
                  className="
                    bg-gradient-to-r
                    from-[#0284C7] to-[#0B192C]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Connected
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-1
                  max-w-xl
                  text-xs
                  leading-relaxed
                  text-slate-500
                  sm:text-sm
                "
              >
                Government recognitions, industry collaborations and
                practitioner-led mentorship.
              </p>
            </div>

            {/* Credentials button */}
            <Button
              to="/credentials"
              variant="secondary"
              size="sm"
              icon={ArrowRight}
              className="
                self-start
                text-xs
                shadow-none
                hover:border-[#0284C7]
                hover:text-[#0284C7]
                sm:self-auto
              "
            >
              View Credentials
            </Button>
          </div>

          {/* =================================================
              MAIN TRUST PANEL
          ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-2xl
              border border-slate-200
              bg-white
              shadow-[0_8px_30px_rgba(15,23,42,0.04)]
            "
          >
            <div
              className="
                grid
                grid-cols-1
                divide-y divide-slate-200
                lg:grid-cols-3
                lg:divide-x
                lg:divide-y-0
              "
            >
              {/* Registration & Recognition */}
              <TrustGroup
                icon={BadgeCheck}
                iconBg="bg-emerald-500"
                title="Recognitions"
                subtitle="Government & statutory"
                items={RECOGNITIONS}
                href="/credentials#recognitions"
              />

              {/* Industry Collaboration */}
              <TrustGroup
                icon={Handshake}
                iconBg="bg-sky-500"
                title="Collaborations"
                subtitle="Industry ecosystem"
                items={COLLABORATIONS}
                href="/credentials#collaborations"
              />

              {/* Mentorship */}
              <TrustGroup
                icon={Users}
                iconBg="bg-indigo-500"
                title="Mentorship"
                subtitle="Practitioner network"
                items={MENTORS}
                href="/credentials#mentorship"
                mentor
              />
            </div>

            {/* =================================================
                VERIFICATION FOOTER
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-2
                border-t border-slate-100
                bg-slate-50/60
                px-4 py-2.5
              "
            >
              <ShieldCheck
                className="
                  h-3.5 w-3.5
                  shrink-0
                  text-emerald-500
                "
              />

              <p
                className="
                  text-[10px]
                  leading-relaxed
                  text-slate-500
                  sm:text-[11px]
                "
              >
                Registrations and institutional affiliations are available
                for verification.
              </p>

              <Link
                to="/credentials"
                className="
                  ml-auto
                  hidden shrink-0
                  items-center gap-1
                  text-[10px]
                  font-bold
                  text-sky-600
                  transition-colors
                  hover:text-sky-800
                  sm:inline-flex
                "
              >
                Verify
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}