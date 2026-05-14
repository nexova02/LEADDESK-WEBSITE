type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      <p
        className={`mb-4 text-sm font-bold uppercase tracking-[0.18em] ${
          dark ? "text-ink-400" : "text-ink-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold leading-tight md:text-5xl ${
          dark ? "text-ink-50" : "text-ink-1000"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-base leading-8 md:text-lg ${
          dark ? "text-ink-300" : "text-ink-700"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
