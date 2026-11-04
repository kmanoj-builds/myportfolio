
import { Link } from "react-router";

const footerLinks = [
  { label: "Work", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Lab", to: "/lab" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/kmanoj-builds" },
  { label: "LinkedIn", href: "YOUR_LINKEDIN_URL" },
  { label: "LeetCode", href: "YOUR_LEETCODE_URL" },
  { label: "Email", href: "mailto:YOUR_EMAIL_ADDRESS" },
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

        {/* Navigation and social links */}
        <div className="flex flex-col justify-between md:items-end">

          {/* Shared alignment grid */}
          <div className="grid w-fit grid-cols-[max-content_max-content] gap-x-8 gap-y-0 sm:grid-cols-[repeat(4,max-content)] sm:gap-x-9">

            {/* Explore heading */}
            <p className="col-span-full mb-6 font-mono text-xs font-bold tracking-[0.2em] text-[#FF9F0A]">
              EXPLORE
            </p>

            {/* Navigation links */}
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="w-fit font-display text-2xl font-bold uppercase transition-colors hover:text-[#FF9F0A]"
              >
                {link.label}
              </Link>
            ))}

            {/* Connect heading */}
            <p className="col-span-full mb-5 mt-10 font-mono text-xs font-bold tracking-[0.2em] text-[#FF9F0A]">
              CONNECT
            </p>

            {/* Social links */}
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noreferrer"
                }
                className="w-fit whitespace-nowrap font-display text-xl font-bold uppercase text-[#D1B88D] transition-colors hover:text-[#FF9F0A]"
              >
                {link.label} ↗
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 self-end border-b-2 border-[#FF9F0A] pb-2 font-display text-2xl font-bold uppercase text-[#FF9F0A] transition-colors hover:text-[#FFF4DC]"
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
