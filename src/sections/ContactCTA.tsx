
import { Link } from "react-router";

const ContactCTA = () => {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden border-y border-[#80500F]/50 bg-[#241605] text-[#FFF4DC]"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#FF9F0A]/8 blur-[100px]" />

      <div className="site-container relative z-10 py-24 md:py-32">
        {/* Section label */}
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
          06 / Get In Touch
        </p>

        {/* Main heading */}
        <h2 className="max-w-5xl font-display text-6xl font-black uppercase leading-[0.85] tracking-tight md:text-8xl lg:text-9xl">
          Have an idea?
          <span className="block text-[#FF9F0A]">
            Let's build
          </span>
          <span className="block">something.</span>
        </h2>

        {/* Supporting content and CTA */}
        <div className="mt-12 flex flex-col justify-between gap-10 border-t border-[#80500F]/50 pt-8 md:mt-16 md:flex-row md:items-end">
          <div className="max-w-lg">
            <p className="text-base leading-8 text-[#D1B88D]">
              I'm open to connecting with fellow developers, discussing
              software engineering, exploring opportunities, and
              collaborating on meaningful projects.
            </p>

            <p className="mt-5 font-mono text-xs uppercase tracking-wider text-[#A68B62]">
              Always open to meaningful conversations.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-6 border-2 border-[#FF9F0A] bg-[#FF9F0A] px-7 py-5 text-sm font-bold uppercase tracking-wider text-[#100C05] transition duration-300 hover:bg-transparent hover:text-[#FF9F0A]"
          >
            Let's Talk

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
              ↗
            </span>
          </Link>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 flex items-center justify-between border-t border-[#80500F]/50 pt-6 md:mt-28">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#806B4B]">
            MANOJ.DEV
          </span>

          <span className="font-mono text-[10px] tracking-[0.2em] text-[#806B4B]">
            END OF HOME PAGE / 2026
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
