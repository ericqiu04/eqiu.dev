import { experiences } from "@/data/experiences";
import SectionHeading from "./SectionHeading";

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <SectionHeading title="Experience" />

                <div className="timeline-container mt-16">
                    <div className="timeline-line" aria-hidden />

                    {experiences.map((exp, i) => {
                        const isLeft = i % 2 === 0;

                        return (
                            <div key={exp.company} className="relative mb-16 last:mb-0">
                                {/* Dot */}
                                <div className="timeline-dot" />

                                {/* Card */}
                                <div
                                    className={`timeline-card glass-card p-6 ${isLeft ? "left" : "right"
                                        }`}
                                >
                                    {/* Company name */}
                                    <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)]">
                                        {exp.company}
                                    </h3>

                                    {/* Role */}
                                    <p className="text-sm text-muted mt-1">{exp.role}</p>

                                    {/* Team tag with emoji */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted">
                                            {exp.teamEmoji} {exp.team}
                                        </span>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs px-2.5 py-1 rounded-full border border-accent-cyan/20 text-accent-cyan/80 bg-accent-cyan/5"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
