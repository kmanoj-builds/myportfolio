const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description:
      "Languages I use to solve programming problems and build applications.",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "C", "C++"],
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Building responsive interfaces and modern web experiences.",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    number: "03",
    title: "Backend Development",
    description:
      "Developing APIs, server-side applications and backend services.",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    number: "04",
    title: "Databases & Backend Services",
    description:
      "Working with data modelling, persistence and backend infrastructure.",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Mongoose",
      "TypeORM",
    ],
  },
  {
    number: "05",
    title: "Computer Science & Security",
    description:
      "Core concepts that support my software engineering foundation.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Web Application Security",
      "Cybersecurity Fundamentals",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-y border-[#80500F]/50 bg-[#38230A] text-[#FFF4DC]"
    >
      <div className="site-container py-20 md:py-28">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
              02 / Technical Expertise
            </p>

            <h2 className="font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
              My Technical
              <span className="block text-[#FF9F0A]">Toolkit.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#D1B88D] md:text-base">
            Technologies and concepts I work with while building applications
            and strengthening my software engineering fundamentals.
          </p>
        </div>

        {/* Skill categories */}
        <div className="border-t border-[#80500F]/60">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="grid gap-5 border-b border-[#80500F]/60 py-8 md:grid-cols-[90px_1fr_1.2fr] md:gap-8 md:py-10"
            >
              {/* Number */}
              <span className="font-mono text-sm text-[#A68B62]">
                / {group.number}
              </span>

              {/* Category */}
              <div>
                <h3 className="font-display text-3xl font-bold uppercase text-[#FFF4DC] md:text-4xl">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-xs text-xs leading-6 text-[#A68B62]">
                  {group.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap content-start gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#80500F]/60 bg-[#241605]/60 px-3 py-2 text-xs font-medium text-[#D1B88D] transition duration-200 hover:border-[#FF9F0A] hover:bg-[#FF9F0A] hover:text-[#100C05] md:px-4 md:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-wider text-[#A68B62]">
            Learning never stops.
          </p>

          <p className="text-sm text-[#FF9F0A]">
            Building. Exploring. Improving.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;