const About = () => {
  return (
    <section className="min-h-screen bg-[#241605] text-[#FFF4DC]">
      <div className="site-container py-20 md:py-28">
        {/* Section label */}
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
          01 / A little about me
        </p>

        {/* Main heading */}
        <div className="border-b border-[#80500F]/50 pb-12 md:pb-16">
          <h1 className="font-display text-7xl font-black uppercase leading-[0.85] tracking-tight md:text-9xl">
            Beyond
            <span className="block text-[#FF9F0A]">The Code.</span>
          </h1>

          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
            <p className="font-display text-3xl font-bold uppercase leading-tight text-[#D1B88D] md:text-4xl">
              Software Engineer
              <span className="block text-[#FFF4DC]">in the making.</span>
            </p>

            <p className="max-w-xl text-sm leading-8 text-[#D1B88D] md:text-base">
              I'm a Computer Science student passionate about building software,
              understanding how systems work, and turning ideas into practical
              applications. I enjoy exploring the engineering behind products —
              from frontend experiences to backend architecture.
            </p>
          </div>
        </div>

        {/* Developer identity */}
        <div className="grid gap-8 py-12 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FF9F0A]">
              02 / My approach
            </p>

            <h2 className="font-display text-5xl font-bold uppercase leading-none md:text-6xl">
              I don't just
              <span className="block text-[#FF9F0A]">write code.</span>
              <span className="block">I understand it.</span>
            </h2>
          </div>

          <div className="border border-[#80500F]/50 bg-[#38230A] p-6 md:p-8">
            <p className="mb-4 font-mono text-xs text-[#A68B62]">
              // THE WAY I THINK
            </p>

            <pre className="overflow-x-auto font-mono text-sm leading-8">
              <code>
                <span className="text-[#FFD166]">const</span>{" "}
                <span className="text-[#FFF4DC]">About</span>{" "}
                <span className="text-[#D1B88D]">=</span>{" "}
                <span className="text-[#FFD166]">(</span>
                <span className="text-[#FF9F0A]">SDE</span>
                <span className="text-[#FFD166]">) =&gt; ({"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#FF9F0A]">title</span>
                <span className="text-[#D1B88D]">:</span>{" "}
                <span className="text-[#B8E6A3]">
                  "Software Engineer in the Making"
                </span>
                ,{"\n"}
                {"  "}
                <span className="text-[#FF9F0A]">stack</span>
                <span className="text-[#D1B88D]">:</span>{" "}
                <span className="text-[#FFD166]">[</span>
                {"\n"}
                {"    "}
                <span className="text-[#B8E6A3]">"JavaScript"</span>,{"\n"}
                {"    "}
                <span className="text-[#B8E6A3]">"React.js"</span>,{"\n"}
                {"    "}
                <span className="text-[#B8E6A3]">"Node.js"</span>,{"\n"}
                {"    "}
                <span className="text-[#B8E6A3]">"Next.js"</span>,{"\n"}
                {"    "}
                <span className="text-[#B8E6A3]">"Express.js"</span>
                {"\n"}
                {"  "}
                <span className="text-[#FFD166]">]</span>
                {"\n"}
                <span className="text-[#FFD166]">{"});"}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;