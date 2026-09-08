export function Wordmark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const scale =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
        ? "text-lg"
        : "text-xl sm:text-2xl";

  return (
    <span className="inline-flex flex-col leading-none">
      <span className={`font-display ${scale} tracking-wide text-cream`}>
        Chef Uma&rsquo;s
      </span>
      <span className="mt-1 text-[0.6rem] tracking-[0.42em] text-gold uppercase">
        Kitchen
      </span>
    </span>
  );
}
