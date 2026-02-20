import { useState, useEffect } from "react";
import { navLinks } from "@/data/socials";
import { useTheme } from "@/context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggle } = useTheme();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "nav-glass py-3" : "py-5"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <a
                    href="#"
                    className="font-heading text-lg font-bold tracking-tight gradient-text"
                >
                    EQ
                </a>

                {/* Desktop links + theme toggle */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm text-muted hover:text-accent-cyan transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                    <button
                        onClick={toggle}
                        aria-label="Toggle theme"
                        className="w-9 h-9 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all duration-200"
                    >
                        {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
                    </button>
                </div>

                {/* Mobile: theme toggle + hamburger */}
                <div className="flex md:hidden items-center gap-3">
                    <button
                        onClick={toggle}
                        aria-label="Toggle theme"
                        className="w-8 h-8 rounded-full flex items-center justify-center border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] transition-all duration-200"
                    >
                        {theme === "dark" ? <FiSun size={14} /> : <FiMoon size={14} />}
                    </button>

                    {/* Hamburger button */}
                    <button
                        className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block w-5 h-0.5 rounded transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[8px]" : ""
                                }`}
                            style={{ background: "var(--text-primary)" }}
                        />
                        <span
                            className={`block w-5 h-0.5 rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""
                                }`}
                            style={{ background: "var(--text-primary)" }}
                        />
                        <span
                            className={`block w-5 h-0.5 rounded transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                                }`}
                            style={{ background: "var(--text-primary)" }}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pt-4 pb-6 flex flex-col gap-4">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg text-muted hover:text-accent-cyan transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
