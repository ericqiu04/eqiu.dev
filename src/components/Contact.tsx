import { FiExternalLink } from "react-icons/fi";
import { socials } from "@/data/socials";
import SectionHeading from "./SectionHeading";

export default function Contact() {
    return (
        <>
            <section id="contact" className="py-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <SectionHeading title="Get in Touch" />
                    <p className="text-muted mt-6 mb-8 max-w-lg mx-auto">
                        I&apos;m always open to chatting about new opportunities, interesting
                        projects, or just saying hello. Feel free to reach out!
                    </p>

                    <a
                        href="mailto:eqiu@uwaterloo.ca"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-navy-900 bg-gradient-to-r from-accent-cyan to-accent-violet hover:opacity-90 transition-opacity"
                    >
                        Say Hello <FiExternalLink size={16} />
                    </a>

                    <div className="flex gap-3 justify-center mt-8">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                                aria-label={s.label}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-xs text-muted border-t border-[var(--border-subtle)]">
                <p>
                    © {new Date().getFullYear()} Eric Qiu
                </p>
            </footer>
        </>
    );
}
