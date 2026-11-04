
const learningAreas = [
  {
    number: "01",
    title: "System Design",
    description:
      "Understanding how scalable applications are designed, how components communicate, and how architectural decisions affect real-world systems.",
    topics: ["Scalability", "Caching", "Load Balancing", "Architecture"],
  },
  {
    number: "02",
    title: "Backend Architecture",
    description:
      "Exploring backend design patterns, API architecture, authentication, database design, and maintainable server-side applications.",
    topics: ["API Design", "Microservices", "Authentication", "Database Design"],
  },
  {
    number: "03",
    title: "Distributed Systems",
    description:
      "Learning how independent services communicate, coordinate, and maintain reliability across distributed environments.",
    topics: ["Communication", "Consistency", "Fault Tolerance", "Messaging"],
  },
  {
    number: "04",
    title: "Go Programming",
    description:
      "Exploring Go, its concurrency model, language fundamentals, and how it is used to build efficient backend services.",
    topics: ["Golang", "Concurrency", "Goroutines", "Backend Services"],
  },
];

const CurrentlyExploring = () => {
  return (
    <section
      id="currently-exploring"
      className="border-y border-[#80500F]/50 bg-[#38230A] text-[#FFF4DC]"
    >
      <div className="site-container py-20 md:py-28">
        {/* Heading */}
        <div className="mb-14 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
              05 / Currently Exploring
            </p>

            <h2 className="font-display text-6xl font-black uppercase leading-[0.85] md:text-8xl">
              Always
              <span className="block text-[#FF9F0A]">
                Exploring.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-[#D1B88D] md:justify-self-end md:text-base">
            Software engineering is a continuous learning process.
            These are some of the areas I'm currently exploring to
            deepen my understanding of how software works.
          </p>
        </div>

        {/* Learning areas */}
        <div className="grid gap-4 md:grid-cols-2">
          {learningAreas.map((area) => (
            <article
              key={area.number}
              className="group relative flex flex-col border border-[#80500F]/60 bg-[#241605]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF9F0A] md:p-8"
            >
              {/* Number and learning indicator */}
              <div className="mb-9 flex items-center justify-between">
                <span className="font-mono text-sm text-[#A68B62]">
                  / {area.number}
                </span>

                <span className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-[#FFC04A]">
                  <span className="h-2 w-2 rounded-full bg-[#FF9F0A]" />
                  EXPLORING
                </span>
              </div>

              {/* Title and description */}
              <h3 className="font-display text-4xl font-bold uppercase leading-none text-[#FFF4DC] transition-colors group-hover:text-[#FF9F0A] md:text-5xl">
                {area.title}
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#D1B88D]">
                {area.description}
              </p>

              {/* Topics */}
              <div className="mt-auto flex flex-wrap gap-2 border-t border-[#80500F]/50 pt-6">
                {area.topics.map((topic) => (
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

        {/* Bottom statement */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#80500F]/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-3xl font-bold uppercase text-[#FFF4DC] md:text-4xl">
            Curiosity drives progress.
          </p>

          <span className="font-mono text-xs tracking-wider text-[#FF9F0A]">
            NEVER STOP LEARNING ↗
          </span>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyExploring;
