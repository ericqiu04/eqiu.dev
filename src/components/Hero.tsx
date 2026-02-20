import Image from "next/image";
import profileImg from "@/pages/msc/IMG_2117_3.jpg";
import { socials } from "@/data/socials";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
                {/* Text */}
                <div className="flex-1 text-center md:text-left stagger">
                    <p className="text-muted text-sm mb-2 uppercase tracking-widest animate-fade-in-up opacity-0">
                        Welcome to my corner of the internet
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4 animate-fade-in-up opacity-0">
                        Hey, I&apos;m{" "}
                        <span className="gradient-text">Eric Qiu</span>
                    </h1>
                    <p className="text-lg text-muted max-w-lg mb-8 animate-fade-in-up opacity-0">
                        Computer Engineering student at the{" "}
                        <a
                            href="https://uwaterloo.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium"
                        >
                            University of Waterloo
                        </a>
                        . Passionate about full-stack engineering &amp; mobile development.
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-3 justify-center md:justify-start animate-fade-in-up opacity-0">
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

                {/* Photo */}
                <div
                    className="flex-shrink-0 animate-fade-in opacity-0"
                    style={{ animationDelay: "0.3s" }}
                >
                    <div className="glow-ring rounded-full">
                        <Image
                            src={profileImg}
                            alt="Eric Qiu"
                            width={280}
                            height={280}
                            className="rounded-full object-cover border-4 border-[var(--bg-secondary)]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
