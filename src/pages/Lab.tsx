
import { Link } from "react-router";

const experiments = [
  {
    number: "01",
    category: "JAVASCRIPT",
    title: "JavaScript Internals",
    description:
      "Exploring how JavaScript works under the hood, including the event loop, closures, prototypes, execution context, and asynchronous behavior.",
    topics: ["Event Loop", "Closures", "Prototypes", "Async JavaScript"],
    status: "EXPLORING",
  },
  {
    number: "02",
    category: "BACKEND ENGINEERING",
    title: "Backend Experiments",
    description:
      "Understanding backend engineering through small implementations involving REST APIs, authentication, database interactions, and application architecture.",
    topics: ["Node.js", "Express", "Authentication", "Databases"],
    status: "EXPLORING",
  },
  {
    number: "03",
    category: "COMPUTER SCIENCE",
    title: "Core CS Concepts",
    description:
      "Strengthening the fundamentals behind software engineering by exploring operating systems, computer networks, database systems, and security.",
    topics: ["Operating Systems", "DBMS", "Networks", "Security"],
    status: "LEARNING",
  },
  {
    number: "04",
    category: "PROGRAMMING LANGUAGES",
    title: "Language Exploration",
    description:
      "Exploring programming languages beyond my regular stack and understanding their design, syntax, concurrency models, and practical use cases.",
    topics: ["Go", "PHP", "TypeScript"],
    status: "EXPLORING",
  },
  {
    number: "05",
    category: "SOFTWARE ENGINEERING",
    title: "Architecture & Design",
    description:
      "Learning how software applications are structured, how components communicate, and how architectural decisions affect maintainability and scalability.",
    topics: ["System Design", "Design Patterns", "Microservices"],
    status: "LEARNING",
  },
  {
    number: "06",
    category: "PROBLEM SOLVING",
    title: "Algorithm Playground",
    description:
      "Practicing data structures, algorithms, problem-solving patterns, and different approaches to improving solution efficiency.",
    topics: ["DSA", "Algorithms", "Complexity Analysis"],
    status: "PRACTICING",
  },
];

const Lab = () => {
  return (
    <main className="bg-[#241605] text-[#FFF4DC]">

      {/* Hero */}
      <section className="site-container py-20 md:py-28">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
          01 / Experiments & Explorations
        </p>

        <h1 className="font-display text-7xl font-black uppercase leading-[0.85] tracking-tight md:text-9xl">
          Welcome
          <span className="block text-[#FF9F0A]">
            To The Lab.
          </span>
        </h1>

        <div className="mt-12 grid gap-8 border-b border-[#80500F]/50 pb-12 md:grid-cols-2 md:items-end md:pb-16">
          <h2 className="font-display text-3xl font-bold uppercase leading-tight md:text-4xl">
            Where curiosity
            <span className="block text-[#FF9F0A]">
              becomes code.
            </span>
          </h2>

          <p className="max-w-lg text-sm leading-8 text-[#D1B88D] md:justify-self-end md:text-base">
            A space for technical experiments, concept explorations,
            small implementations, and ideas I'm curious about.
            Not everything here is a finished project.
            Some things are simply part of the learning process.
          </p>
        </div>
      </section>

      {/* Experiments */}
      <section className="border-y border-[#80500F]/50 bg-[#38230A]">
        <div className="site-container py-20 md:py-28">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
                02 / Areas Of Exploration
              </p>

              <h2 className="font-display text-5xl font-black uppercase md:text-7xl">
                Inside The
                <span className="text-[#FF9F0A]"> Lab.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#D1B88D]">
              Ideas, concepts, and technologies I'm exploring
              to deepen my understanding of software engineering.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {experiments.map((experiment) => (
              <article
                key={experiment.number}
                className="group flex flex-col border border-[#80500F]/60 bg-[#241605]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF9F0A] md:p-8"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-sm text-[#A68B62]">
                    / {experiment.number}
                  </span>

                  <span className="font-mono text-[10px] tracking-wider text-[#FFC04A]">
                    {experiment.status}
                  </span>
                </div>

                <p className="mb-3 font-mono text-[10px] tracking-[0.15em] text-[#FF9F0A]">
                  {experiment.category}
                </p>

                <h3 className="font-display text-3xl font-bold uppercase transition-colors group-hover:text-[#FF9F0A] md:text-4xl">
                  {experiment.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#D1B88D]">
                  {experiment.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 border-t border-[#80500F]/50 pt-6 mt-8">
                  {experiment.topics.map((topic) => (
                    <span
                      key={topic}
                      className="border border-[#80500F]/50 px-3 py-1.5 font-mono text-[10px] text-[#A68B62] transition-colors group-hover:border-[#FF9F0A]/50 group-hover:text-[#FFC04A]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="site-container py-20 md:py-28">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
          03 / The Process
        </p>

        <h2 className="max-w-5xl font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
          Learn Something.
          <span className="block text-[#FF9F0A]">
            Build Something.
          </span>
          Repeat.
        </h2>

        <div className="mt-12 flex flex-col gap-6 border-t border-[#80500F]/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-7 text-[#D1B88D]">
            The goal isn't to know every technology.
            It's to keep asking questions, understand
            the fundamentals, and improve through practice.
          </p>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-3 border-b-2 border-[#FF9F0A] pb-2 font-display text-xl font-bold uppercase text-[#FF9F0A] transition hover:text-[#FFF4DC]"
          >
            Let's Connect ↗
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Lab;
