import { useState } from "react";
import { Link, NavLink } from "react-router";

const navigationLinks = [
  { label: "Work", href: "/projects" },
  // { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Lab", href: "/lab" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b-[3px] border-black bg-[#FF9F0A] text-black">
      <nav
        className="flex h-19 items-center justify-between pl-6"
        aria-label="Main navigation"
      >
        {/* Brand */}
        {/* <Link to="/" aria-label="Manoj home" className="flex items-center">
          <span className="flex h-9 items-end gap-0.75">
            <span className="h-6 w-3.5 rounded-t-full bg-black" />
            <span className="h-9 w-3.5 rounded-t-full bg-black" />
            <span className="h-6 w-3.5 rounded-t-full bg-black" />
          </span>
        </Link> */}
        <Link
          to="/"
          aria-label="Manoj home"
          className="font-display text-4xl font-extrabold uppercase tracking-tight text-black"
        >
          MANOJ<span className="text-[#5A2900]">.DEV</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="mr-5 border-2 border-black px-4 py-2 font-display text-xl font-bold uppercase md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {/* Navigation */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 top-full w-full flex-col border-b-[3px] border-black bg-[#FF9F0A] md:static md:flex md:h-full md:w-auto md:flex-row md:items-center md:border-0`}
        >
          <div className="flex flex-col px-6 md:h-full md:flex-row md:items-center md:gap-10 md:px-6">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3 font-display text-2xl font-extrabold uppercase transition-opacity hover:opacity-60 md:py-0 ${
                    isActive ? "opacity-60" : "opacity-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="grid min-h-14 place-items-center border-t-[3px] border-black px-7 font-display text-2xl font-extrabold uppercase transition-colors hover:bg-black hover:text-[#FF9F0A] md:h-full md:min-h-0 md:border-l-[3px] md:border-t-0"
          >
            Let's Talk
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
