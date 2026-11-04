import { useState } from "react";
import avatar from "../assets/manoj-avatar-hero.png";

const Hero = () => {
  const [goldMode, setGoldMode] = useState(true);

  return (
    <section
      className={`relative isolate min-h-[calc(100svh-92px)] overflow-hidden transition-colors duration-500 ${
        goldMode ? "bg-[#321900]" : "bg-[#1B1009]"
      }`}
    >
      {/* =====================================
          1. ABSTRACT SVG BACKGROUND
      ===================================== */}

      <svg
        className={`pointer-events-none absolute inset-0 -z-10 h-full w-full transition-all duration-500 ${
          goldMode ? "opacity-100 saturate-100" : "opacity-70 saturate-50"
        }`}
        viewBox="0 0 1640 840"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#754000" />
            <stop offset="52%" stopColor="#281300" />
            <stop offset="100%" stopColor="#593000" />
          </linearGradient>

          <linearGradient id="gold-shape" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#A75A00" />
            <stop offset="100%" stopColor="#E58A08" />
          </linearGradient>

          <radialGradient id="hero-glow">
            <stop offset="0%" stopColor="#A85B00" stopOpacity=".8" />
            <stop offset="100%" stopColor="#A85B00" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="1640" height="840" fill="url(#hero-bg)" />

        <ellipse cx="1020" cy="690" rx="650" ry="330" fill="url(#hero-glow)" />

        <path
          d="M100 0H500L560 170C580 245 510 270 565 300C630 335 685 375 640 430L0 620V160Z"
          fill="url(#gold-shape)"
          opacity=".55"
        />

        <path
          d="M0 0H520L650 250L470 410L0 270Z"
          fill="#D57B05"
          opacity=".18"
        />

        <path
          d="M1640 0H1260L1110 150L1320 260L1640 150Z"
          fill="#A65C00"
          opacity=".2"
        />

        <path d="M0 720L900 600L1640 710V840H0Z" fill="#B36B08" opacity=".48" />

        <g fill="#F9A51B" opacity=".55">
          <circle cx="180" cy="100" r="1.5" />
          <circle cx="270" cy="190" r="1" />
          <circle cx="480" cy="80" r="1.5" />
          <circle cx="720" cy="140" r="1" />
          <circle cx="850" cy="80" r="1.5" />
          <circle cx="1040" cy="180" r="1" />
          <circle cx="1300" cy="100" r="1.5" />
          <circle cx="1510" cy="250" r="1" />
          <circle cx="600" cy="520" r="1.5" />
          <circle cx="900" cy="430" r="1" />
        </g>
      </svg>

      {/* =====================================
          2. DEVELOPER ARTWORK
      ===================================== */}

      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-[72%] w-full md:inset-y-0 md:h-full md:w-[58%]">
        <img
          src={avatar}
          alt="Illustrated portrait of Manoj wearing glasses and an orange cap"
          className={`h-full w-full object-cover object-center transition-all duration-500 ${
            goldMode ? "saturate-100" : "saturate-75 brightness-90"
          }`}
        />
      </div>

      {/* =====================================
          3. HERO CONTENT
      ===================================== */}

      <div className="relative z-20 grid min-h-[calc(100svh-92px)] grid-cols-12 items-center">
        {/* Introduction panel */}
        <div className="col-span-12 ml-[5.1%] w-[89%] md:col-span-5 md:w-[90%]">
          <div
            className={`overflow-hidden rounded-[9px] border-[3px] border-black shadow-2xl backdrop-blur-md transition-colors duration-500 ${
              goldMode ? "bg-[#241605]/85" : "bg-[#170E06]/90"
            }`}
          >
            {/* HEY heading */}
            <div className="px-6 py-5 md:px-8 md:py-6">
              <h1 className="font-display text-[clamp(76px,8vw,130px)] font-black leading-[0.85] tracking-[-0.045em] text-[#000000]">
                HEY!
              </h1>
            </div>

            {/* Code introduction */}
            <div className="border-t-2 border-dashed border-[#A66A19] px-5 py-5 md:px-8 md:py-6">
              <div className="overflow-x-auto">
                <pre className="whitespace-pre font-mono text-[12px] font-bold leading-loose sm:text-sm md:text-[15px]">
                  <span className="text-[#FFD166]">const </span>
                  <span className="font-extrabold text-[#FFF4DC]">About</span>
                  <span className="text-[#FFB52E]"> = </span>
                  <span className="text-[#FFD166]">(SDE)</span>
                  <span className="text-[#FFB52E]"> =&gt; ({"{"}</span>

                  {"\n  "}
                  <span className="text-[#FF9F0A]">title</span>
                  <span className="text-[#FFF4DC]">: </span>
                  <span className="text-[#B8E6A3]">
                    "Software Engineer in the Making"
                  </span>
                  <span className="text-[#FFF4DC]">,</span>

                  {"\n  "}
                  <span className="text-[#FF9F0A]">stack</span>
                  <span className="text-[#FFF4DC]">: [</span>

                  {"\n    "}
                  <span className="text-[#B8E6A3]">"JavaScript"</span>
                  <span className="text-[#FFF4DC]">,</span>

                  {"\n    "}
                  <span className="text-[#B8E6A3]">"React.js"</span>
                  <span className="text-[#FFF4DC]">,</span>

                  {"\n    "}
                  <span className="text-[#B8E6A3]">"Node.js"</span>
                  <span className="text-[#FFF4DC]">,</span>

                  {"\n    "}
                  <span className="text-[#B8E6A3]">"Next.js"</span>
                  <span className="text-[#FFF4DC]">,</span>

                  {"\n    "}
                  <span className="text-[#B8E6A3]">"Express.js"</span>

                  {"\n  "}
                  <span className="text-[#FFF4DC]">]</span>

                  {"\n"}
                  <span className="text-[#FFB52E]">{"});"}</span>
                </pre>
              </div>

              {/* Small identity label */}
              <div className="mt-4 flex items-center gap-2 border-t border-[#80500F]/70 pt-3">
                <span className="h-2 w-2 rounded-full bg-[#FF9F0A]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#D1B88D]">
                  Software Engineering / Full-Stack Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          4. GOLD / AMBER THEME SWITCH
      ===================================== */}

      <button
        type="button"
        onClick={() => setGoldMode((current) => !current)}
        aria-label="Toggle color theme"
        aria-pressed={goldMode}
        className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 items-center gap-6 rounded-t-[20px] bg-[#100A03] px-5 py-2 font-display text-2xl font-extrabold text-[#FF9F0A] transition-colors hover:bg-black"
      >
        <span>{goldMode ? "GOLD" : "AMBER"}</span>

        <span
          className={`flex h-5.5 w-12 items-center rounded-full p-0.75 transition-colors duration-300 ${
            goldMode ? "bg-[#FF9F0A]" : "bg-[#754000]"
          }`}
        >
          <span
            className={`h-4 w-4 rounded-full bg-black transition-transform duration-300 ${
              goldMode ? "translate-x-6.25" : "translate-x-0"
            }`}
          />
        </span>
      </button>
    </section>
  );
};

export default Hero;
