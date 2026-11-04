
import { Link } from "react-router";

const footerLinks = [
  { label: "Work", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Lab", to: "/lab" },
];

const Footer = () => {
  return (
    <footer className="border-t-[3px] border-black bg-[#241605] text-[#FFF4DC]">

      {/* Main footer */}
      <div className="grid gap-12 px-6 py-16 md:grid-cols-2 md:px-12 md:py-20">

        {/* Brand and introduction */}
        <div className="max-w-xl">
          <Link
            to="/"
            className="font-display text-4xl font-black uppercase tracking-tight text-[#FF9F0A]"
          >
            MANOJ<span className="text-[#FFF4DC]">.DEV</span>
          </Link>

          <h2 className="mt-8 max-w-lg font-display text-5xl font-black uppercase leading-[0.95] md:text-6xl">
            Building software
            <span className="text-[#FF9F0A]"> with intention.</span>
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#D1B88D] md:text-base">
            Exploring engineering concepts, building useful
            products and turning ideas into working software.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col justify-between md:items-end">
          <div>
            <p className="mb-6 font-mono text-xs font-bold tracking-[0.2em] text-[#FF9F0A]">
              EXPLORE
            </p>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-7 gap-y-4 md:justify-end"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="font-display text-2xl font-bold uppercase transition-colors hover:text-[#FF9F0A]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 self-start border-b-2 border-[#FF9F0A] pb-2 font-display text-2xl font-bold uppercase text-[#FF9F0A] transition-colors hover:text-[#FFF4DC] md:self-end"
          >
            Let's talk
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col gap-3 border-t border-[#80500F] px-6 py-6 md:flex-row md:items-center md:justify-between md:px-12">
        <p className="font-mono text-[11px] tracking-wider text-[#D1B88D]">
          © {new Date().getFullYear()} MANOJ.DEV. ALL RIGHTS RESERVED.
        </p>

        <p className="font-mono text-[11px] tracking-wider text-[#FF9F0A]">
          DESIGNED & BUILT WITH REACT + TYPESCRIPT
        </p>
      </div>
    </footer>
  );
};

export default Footer;