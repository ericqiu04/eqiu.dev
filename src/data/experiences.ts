// ─── Experience data ────────────────────────────────────────────
// 👉 Edit this array to update your experiences!

export interface Experience {
    company: string;
    role: string;
    team: string;
    teamEmoji: string;
    skills: string[];
    color: string; // Tailwind gradient from-* class
}

export const experiences: Experience[] = [
    {
        company: "Carta",
        role: "Full Stack Engineer Intern",
        team: "Finance Automation",
        teamEmoji: "💰",
        skills: ["React", "Python", "Django", "Kubernetes"],
        color: "from-rose-400 to-pink-500",
    },
    {
        company: "Faire",
        role: "Software Engineer Intern",
        team: "Cart & Product",
        teamEmoji: "🛒",
        skills: ["Kotlin", "Jetpack Compose", "ExoPlayer"],
        color: "from-emerald-400 to-teal-500",
    },
    {
        company: "Microart Services",
        role: "Software Engineer Intern",
        team: "BLE",
        teamEmoji: "📡",
        skills: ["React Native", "Swift", "BLE"],
        color: "from-orange-400 to-amber-500",
    },
    {
        company: "Questrade",
        role: "Data Science Intern",
        team: "Customer Data & Analytics",
        teamEmoji: "📊",
        skills: ["Python", "SQL", "Power BI"],
        color: "from-green-400 to-emerald-500",
    },
    {
        company: "Inossem",
        role: "Software Engineer Intern",
        team: "Warehouse Management",
        teamEmoji: "📦",
        skills: ["TypeScript", "React Native"],
        color: "from-blue-400 to-indigo-500",
    },
];
