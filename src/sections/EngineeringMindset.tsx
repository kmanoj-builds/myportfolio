const principles = [
  {
    number: "01",
    title: "Understand\nBefore Building.",
    description:
      "I believe in understanding the problem, exploring possible solutions, and learning the fundamentals before jumping into implementation.",
    keyword: "THINK FIRST",
  },
  {
    number: "02",
    title: "Solve Problems.\nNot Just Tasks.",
    description:
      "I enjoy breaking complex problems into smaller pieces, identifying patterns, and developing solutions through logical thinking.",
    keyword: "PROBLEM SOLVING",
  },
  {
    number: "03",
    title: "Think Beyond\nThe Interface.",
    description:
      "Building software is more than writing frontend code. I explore how APIs, databases, backend services, and system components work together.",
    keyword: "SYSTEM THINKING",
  },
  {
    number: "04",
    title: "Learn. Build.\nImprove.",
    description:
      "I continuously explore new concepts, experiment with technologies, build projects, and learn from the challenges along the way.",
    keyword: "CONTINUOUS GROWTH",
  },
];

const EngineeringMindset = () => {
  return (
    <section
      id="engineering-mindset"
      className="border-y border-[#80500F]/50 bg-[#241605] text-[#FFF4DC]"
    >
      <div className="site-container py-20 md:py-28">
        {/* Section introduction */}
        <div className="mb-16 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
              04 / Engineering Mindset
            </p>

            <h2 className="font-display text-6xl font-black uppercase leading-[0.85] md:text-8xl">
              How I Think.
              <span className="block text-[#FF9F0A]">How I Build.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-8 text-[#D1B88D] md:justify-self-end md:text-base">
            My approach to software development goes beyond choosing
            technologies. It starts with understanding problems, building strong
            fundamentals, and continuously improving how I think.
          </p>
        </div>

        {/* Engineering principles */}
        <div className="border-t border-[#80500F]/60">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="group grid gap-5 border-b border-[#80500F]/60 py-9 transition-colors duration-300 hover:bg-[#38230A]/50 md:grid-cols-[90px_1.1fr_1fr] md:items-center md:gap-8 md:py-12"
            >
              {/* Number */}
              <span className="font-mono text-sm text-[#A68B62] transition-colors group-hover:text-[#FF9F0A]">
                / {principle.number}
              </span>

              {/* Principle heading */}
              <div>
                <h3 className="whitespace-pre-line font-display text-4xl font-bold uppercase leading-[0.95] text-[#FFF4DC] transition-colors group-hover:text-[#FF9F0A] md:text-5xl lg:text-6xl">
                  {principle.title}
                </h3>
              </div>

              {/* Description and keyword */}
              <div className="max-w-lg md:justify-self-end">
                <p className="text-sm leading-7 text-[#D1B88D]">
                  {principle.description}
                </p>

                <p className="mt-5 font-mono text-[10px] tracking-[0.18em] text-[#FF9F0A]">
                  {principle.keyword}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h3 className="font-display text-3xl font-bold uppercase text-[#FFF4DC] md:text-4xl">
            Code is the output.
            <span className="text-[#FF9F0A]"> Thinking is the process.</span>
          </h3>

          <span className="font-mono text-xs text-[#A68B62]">
            ALWAYS EVOLVING ↗
          </span>
        </div>
      </div>
    </section>
  );
};

export default EngineeringMindset;
