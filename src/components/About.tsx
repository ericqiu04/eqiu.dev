import SectionHeading from "./SectionHeading";

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <SectionHeading title="About Me" />

                <div className="space-y-5 text-muted leading-relaxed mt-12">
                    <p>
                        I&apos;m a Computer Engineering student at the{" "}
                        <span className="text-[var(--text-primary)] font-medium">
                            University of Waterloo
                        </span>{" "}
                        and an incoming Full Stack Engineer Intern at{" "}
                        <span className="text-[var(--text-primary)] font-medium">Carta</span>.
                    </p>
                    <p>
                        Through my internships at{" "}
                        <span className="text-[var(--text-primary)] font-medium">Faire</span>,{" "}
                        <span className="text-[var(--text-primary)] font-medium">Microart</span>,{" "}
                        <span className="text-[var(--text-primary)] font-medium">Questrade</span>, and{" "}
                        <span className="text-[var(--text-primary)] font-medium">Inossem</span>, I&apos;ve
                        gained experience across full-stack &amp; mobile development, data
                        science, and internal tooling.
                    </p>
                    <p>
                        Outside of school and work, you&apos;ll find me reading webtoons,
                        hanging out with friends, or catching up on c-dramas.
                    </p>
                </div>
            </div>
        </section>
    );
}
