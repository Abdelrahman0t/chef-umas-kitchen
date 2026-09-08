import logoImg from "@/assets/logo.jpg";

export function Wordmark({
  size = "md",
  showLogo = true,
}: {
  size?: "sm" | "md" | "lg";
  showLogo?: boolean;
}) {
  const scale =
    size === "lg"
      ? "text-3xl sm:text-4xl"
      : size === "sm"
        ? "text-lg"
        : "text-xl sm:text-2xl";

  const imgSize =
    size === "lg"
      ? "h-14 w-14 sm:h-16 sm:w-16"
      : size === "sm"
        ? "h-10 w-10 sm:h-11 sm:w-11"
        : "h-12 w-12 sm:h-14 sm:w-14";

  return (
    <span className="inline-flex items-center gap-3 leading-none">
      {showLogo && (
        <img
          src={logoImg}
          alt="Chef Uma's Kitchen Logo"
          width={56}
          height={56}
          className={`${imgSize} shrink-0 rounded-full border border-gold/40 object-cover bg-black/80 shadow-md transition-transform duration-300 group-hover:scale-105`}
        />
      )}
      <span className="inline-flex flex-col leading-none">
        <span className={`font-display ${scale} tracking-wide text-cream`}>
          Chef Uma&rsquo;s
        </span>
        <span className="mt-1 text-[0.6rem] tracking-[0.42em] text-gold uppercase">
          Kitchen
        </span>
      </span>
    </span>
  );
}
