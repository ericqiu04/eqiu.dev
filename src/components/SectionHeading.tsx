export default function SectionHeading({ title }: { title: string }) {
    return (
        <div className="text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                <span className="gradient-text">{title}</span>
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet" />
        </div>
    );
}
