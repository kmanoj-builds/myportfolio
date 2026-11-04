
import { Link } from "react-router";

const contactMethods = [
  {
    number: "01",
    label: "EMAIL",
    value: "YOUR_EMAIL_ADDRESS",
    href: "mailto:YOUR_EMAIL_ADDRESS",
    description: "For opportunities, questions and conversations.",
  },
  {
    number: "02",
    label: "LINKEDIN",
    value: "Connect professionally",
    href: "YOUR_LINKEDIN_URL",
    description: "Let's connect and share ideas.",
  },
  {
    number: "03",
    label: "GITHUB",
    value: "kmanoj-builds",
    href: "https://github.com/kmanoj-builds",
    description: "Explore my code and development work.",
  },
  {
    number: "04",
    label: "LEETCODE",
    value: "Coding practice",
    href: "YOUR_LEETCODE_URL",
    description: "Follow my problem-solving journey.",
  },
];

const Contact = () => {
  return (
    <main className="bg-[#241605] text-[#FFF4DC]">

      {/* Introduction */}
      <section className="site-container py-24 md:py-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
          01 / Get In Touch
        </p>

        <h1 className="font-display text-7xl font-black uppercase leading-[0.85] tracking-tight md:text-9xl">
          Let's
          <span className="block text-[#FF9F0A]">
            Talk.
          </span>
        </h1>

        <div className="mt-12 grid gap-8 border-b border-[#80500F]/50 pb-12 md:grid-cols-2 md:items-end md:pb-16">
          <h2 className="max-w-lg font-display text-3xl font-bold uppercase leading-tight md:text-4xl">
            Have an opportunity?
            <span className="block text-[#FF9F0A]">
              Let's connect.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-[#D1B88D] md:justify-self-end md:text-base">
            I'm interested in software engineering opportunities,
            meaningful collaborations, and conversations about
            technology and building useful products.
            Feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="border-y border-[#80500F]/50 bg-[#38230A]">
        <div className="site-container py-20 md:py-28">

          <div className="mb-12">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
              02 / Find Me Here
            </p>

            <h2 className="font-display text-5xl font-black uppercase md:text-7xl">
              Ways To
              <span className="text-[#FF9F0A]"> Connect.</span>
            </h2>
          </div>

          <div className="border-t border-[#80500F]/60">
            {contactMethods.map((method) => (
              <article
                key={method.number}
                className="grid gap-4 border-b border-[#80500F]/60 py-8 md:grid-cols-[70px_1fr_1fr_auto] md:items-center md:gap-8"
              >
                <span className="font-mono text-sm text-[#A68B62]">
                  / {method.number}
                </span>

                <div>
                  <p className="mb-2 font-mono text-[10px] tracking-[0.15em] text-[#FF9F0A]">
                    {method.label}
                  </p>

                  <h3 className="font-display text-2xl font-bold uppercase md:text-3xl">
                    {method.value === "YOUR_EMAIL_ADDRESS"
                      ? "Email Me"
                      : method.value}
                  </h3>
                </div>

                <p className="text-sm leading-7 text-[#D1B88D]">
                  {method.description}
                </p>

                <a
                  href={method.href}
                  target={
                    method.href.startsWith("mailto:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    method.href.startsWith("mailto:")
                      ? undefined
                      : "noreferrer"
                  }
                  className="w-fit font-display text-xl font-bold text-[#FF9F0A] transition hover:text-[#FFF4DC]"
                  aria-label={`Open ${method.label}`}
                >
                  ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="site-container py-24 md:py-32">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
          03 / One Last Thing
        </p>

        <h2 className="max-w-5xl font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
          Good things
          <span className="block text-[#FF9F0A]">
            start with
          </span>
          a conversation.
        </h2>

        <div className="mt-12 flex flex-col gap-8 border-t border-[#80500F]/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-7 text-[#D1B88D]">
            Whether it's an opportunity, an interesting idea,
            or a chance to build something together,
            I'd be happy to hear from you.
          </p>

          <a
            href="mailto:YOUR_EMAIL_ADDRESS"
            className="inline-flex w-fit items-center gap-5 border-2 border-[#FF9F0A] bg-[#FF9F0A] px-7 py-4 font-display text-xl font-bold uppercase text-[#100C05] transition hover:bg-transparent hover:text-[#FF9F0A]"
          >
            Say Hello <span>↗</span>
          </a>
        </div>

        <div className="mt-16 border-t border-[#80500F]/50 pt-6">
          <Link
            to="/"
            className="font-display text-xl font-bold uppercase text-[#FF9F0A] transition hover:text-[#FFF4DC]"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Contact;
