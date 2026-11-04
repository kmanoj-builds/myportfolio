
import { Link } from "react-router";

const journey = [
  {
    number: "01",
    title: "Programming Fundamentals",
    period: "THE BEGINNING",
    description:
      "Started building my foundation in programming, problem solving, JavaScript, and core computer science concepts.",
  },
  {
    number: "02",
    title: "Frontend Development",
    period: "BUILDING INTERFACES",
    description:
      "Explored HTML, CSS, JavaScript, React, and modern frontend development by creating interactive web applications.",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    period: "BEYOND THE FRONTEND",
    description:
      "Moved into backend development, REST APIs, authentication, databases, and building complete applications.",
  },
  {
    number: "04",
    title: "Software Engineering",
    period: "WHERE I AM NOW",
    description:
      "Focusing on engineering fundamentals, application architecture, problem solving, and building more structured software.",
  },
];

const projects = [
  {
    number: "01",
    name: "DevConnect",
    category: "Full-Stack Development",
    description:
      "A developer community platform focused on profiles, posts, following, and developer interactions.",
    status: "IN PROGRESS",
  },
  {
    number: "02",
    name: "ResolveFlow",
    category: "SaaS · Backend Architecture",
    description:
      "A multi-tenant issue-tracking application designed around organizations, memberships, and issue management.",
    status: "IN PROGRESS",
  },
  {
    number: "03",
    name: "GenAI Security Assessment",
    category: "Final-Year Project",
    description:
      "An AI-powered GenAI security and compliance assessment platform focused on identifying application risks and compliance gaps.",
    status: "IN PROGRESS",
  },
];

const About = () => {
  return (
    <main className="bg-[#241605] text-[#FFF4DC]">

      {/* 01 — Introduction */}
      <section className="site-container py-20 md:py-28">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
          01 / About Me
        </p>

        <h1 className="font-display text-7xl font-black uppercase leading-[0.85] tracking-tight md:text-9xl">
          Beyond
          <span className="block text-[#FF9F0A]">
            The Code.
          </span>
        </h1>

        <div className="mt-12 grid gap-10 border-b border-[#80500F]/50 pb-14 md:grid-cols-[0.9fr_1.1fr] md:items-end md:pb-20">
          <div>
            <p className="font-display text-3xl font-bold uppercase leading-tight text-[#D1B88D] md:text-4xl">
              Software Engineer
              <span className="block text-[#FFF4DC]">
                in the making.
              </span>
            </p>

            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-[#A68B62]">
              Computer Science · Cyber Security
            </p>
          </div>

          <div className="max-w-xl">
            <p className="text-sm leading-8 text-[#D1B88D] md:text-base">
              I'm a Computer Science and Engineering student
              specializing in Cyber Security, with a strong
              interest in software engineering and application
              development.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#D1B88D] md:text-base">
              I enjoy understanding how software works beneath
              the interface — from programming fundamentals
              and backend architecture to databases and
              system design. My goal is to build useful
              applications while developing a deeper
              understanding of the engineering behind them.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Journey */}
      <section className="border-y border-[#80500F]/50 bg-[#38230A]">
        <div className="site-container py-20 md:py-28">
          <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
                02 / My Journey
              </p>

              <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                From Curiosity
                <span className="block text-[#FF9F0A]">
                  To Code.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-8 text-[#D1B88D] md:justify-self-end">
              Every stage of my journey has introduced
              me to something new. Here's how my interests
              have evolved through learning and building.
            </p>
          </div>

          <div className="border-t border-[#80500F]/60">
            {journey.map((item) => (
              <article
                key={item.number}
                className="grid gap-4 border-b border-[#80500F]/60 py-8 md:grid-cols-[80px_1fr_1fr] md:items-center md:gap-8 md:py-10"
              >
                <span className="font-mono text-sm text-[#A68B62]">
                  / {item.number}
                </span>

                <div>
                  <p className="mb-2 font-mono text-[10px] tracking-[0.15em] text-[#FF9F0A]">
                    {item.period}
                  </p>

                  <h3 className="font-display text-3xl font-bold uppercase md:text-4xl">
                    {item.title}
                  </h3>
                </div>

                <p className="max-w-lg text-sm leading-7 text-[#D1B88D]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Experience and projects */}
      <section className="site-container py-20 md:py-28">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
              03 / Building Experience
            </p>

            <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
              Learning
              <span className="block text-[#FF9F0A]">
                By Building.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-[#D1B88D]">
            I believe practical experience is an important
            part of becoming an engineer. These projects
            reflect the areas I've been exploring through
            hands-on development.
          </p>
        </div>

        <div className="border-t border-[#80500F]/50">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid gap-4 border-b border-[#80500F]/50 py-8 md:grid-cols-[70px_1fr_1fr] md:items-center md:gap-8"
            >
              <span className="font-mono text-sm text-[#A68B62]">
                / {project.number}
              </span>

              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-[#FF9F0A]">
                  {project.category}
                </p>

                <h3 className="font-display text-3xl font-bold uppercase md:text-4xl">
                  {project.name}
                </h3>

                <span className="mt-3 inline-block border border-[#FF9F0A]/40 px-2 py-1 font-mono text-[9px] text-[#FFC04A]">
                  {project.status}
                </span>
              </div>

              <p className="max-w-lg text-sm leading-7 text-[#D1B88D]">
                {project.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 border-b border-[#FF9F0A] pb-2 font-display text-xl font-bold uppercase text-[#FF9F0A] transition hover:text-[#FFF4DC]"
          >
            Explore All Projects ↗
          </Link>
        </div>
      </section>

      {/* 04 — Education */}
      <section className="border-y border-[#80500F]/50 bg-[#38230A]">
        <div className="site-container py-20 md:py-28">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
            04 / Education
          </p>

          <h2 className="mb-12 font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
            Academic
            <span className="block text-[#FF9F0A]">
              Foundation.
            </span>
          </h2>

          <div className="border border-[#80500F]/60 bg-[#241605] p-6 md:p-10">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
              <div>
                <p className="font-mono text-xs tracking-wider text-[#FF9F0A]">
                  2023 — 2027
                </p>

                <h3 className="mt-5 max-w-2xl font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
                  Bachelor of Engineering
                </h3>

                <p className="mt-2 text-lg text-[#D1B88D]">
                  Computer Science and Engineering
                </p>

                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#A68B62]">
                  Specialization: Cyber Security
                </p>
              </div>

              <div className="border-l-2 border-[#FF9F0A] pl-5 md:text-right md:border-l-0 md:border-r-2 md:pl-0 md:pr-5">
                <p className="font-mono text-xs text-[#A68B62]">
                  CGPA
                </p>

                <p className="mt-1 font-display text-5xl font-black text-[#FF9F0A]">
                  8.66
                </p>

                <p className="font-mono text-[10px] text-[#A68B62]">
                  OUT OF 10
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-[#80500F]/50 pt-6">
              <p className="font-display text-2xl font-bold uppercase">
                Dhanalakshmi College of Engineering
              </p>

              <p className="mt-2 text-sm text-[#A68B62]">
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Problem solving */}
      <section className="site-container py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
              05 / Problem Solving
            </p>

            <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
              Think.
              <span className="block text-[#FF9F0A]">
                Analyze.
              </span>
              <span className="block">Solve.</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#D1B88D]">
              Problem solving is an important part of my
              software engineering journey. I practice
              Data Structures and Algorithms to improve
              my logical thinking, recognize patterns,
              and understand efficient solutions.
            </p>
          </div>

          <div className="border border-[#80500F]/60 bg-[#38230A] p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
              Coding Practice
            </p>

            <div className="mt-8">
              <p className="font-display text-7xl font-black text-[#FFF4DC] md:text-8xl">
                191<span className="text-[#FF9F0A]">+</span>
              </p>

              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[#A68B62]">
                Problems Solved on LeetCode
              </p>
            </div>

            <div className="mt-8 border-t border-[#80500F]/50 pt-6">
              <p className="text-sm leading-7 text-[#D1B88D]">
                Practicing arrays, binary search, trees,
                graphs, dynamic programming, sliding
                windows, and other algorithmic patterns.
              </p>
            </div>

            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-display text-lg font-bold uppercase text-[#FF9F0A] transition hover:text-[#FFF4DC]"
            >
              LeetCode Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* 06 — Future direction */}
      <section className="border-y border-[#80500F]/50 bg-[#38230A]">
        <div className="site-container py-20 md:py-28">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
            06 / What's Next
          </p>

          <h2 className="max-w-5xl font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
            Still Learning.
            <span className="block text-[#FF9F0A]">
              Still Building.
            </span>
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-lg text-sm leading-8 text-[#D1B88D] md:text-base">
              My goal is to grow into a well-rounded software
              engineer who understands not just how to build
              applications, but also how to design reliable,
              maintainable, and scalable systems.
            </p>

            <div className="md:justify-self-end">
              <p className="mb-5 font-mono text-xs uppercase tracking-wider text-[#A68B62]">
                Areas I'm working towards
              </p>

              <div className="flex max-w-md flex-wrap gap-2">
                {[
                  "System Design",
                  "Backend Architecture",
                  "Distributed Systems",
                  "Scalable Applications",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-[#80500F]/60 px-3 py-2 font-mono text-xs text-[#D1B88D]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-[#80500F]/50 pt-8">
            <h3 className="font-display text-4xl font-bold uppercase md:text-6xl">
              The journey continues.
              <span className="text-[#FF9F0A]"> ↗</span>
            </h3>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
