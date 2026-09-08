import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { Wordmark } from "@/components/wordmark";
import heroImg from "@/assets/hero-khao-soi.jpg";
import meeKoratImg from "@/assets/mee-korat.jpg";
import beefNoodlesImg from "@/assets/braised-beef-noodles.jpg";
import greenCurryImg from "@/assets/green-curry.jpg";
import kitchenImg from "@/assets/kitchen-hands.jpg";
import thaiTeaImg from "@/assets/thai-tea.jpg";
import appetizersImg from "@/assets/appetizers.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chef Uma's Kitchen — Authentic Thai Food in Montrose, CO" },
      {
        name: "description",
        content:
          "Authentic Thai flavors made fresh in Montrose, Colorado. Khao Soi, curries, noodles and more. Call or text (970) 986-7786 to order for pickup.",
      },
      { property: "og:title", content: "Chef Uma's Kitchen — Authentic Thai Food in Montrose" },
      {
        property: "og:description",
        content:
          "Chef Uma brings authentic Thai flavors, bold spices, and homemade comfort food to Montrose, Colorado. Call or text to order.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PHONE_DISPLAY = "(970) 986-7786";
const PHONE_HREF = "tel:+19709867786";
const DIRECTIONS_HREF =
  "https://www.google.com/maps/dir/?api=1&destination=1335+Mayfly+Dr,+Montrose,+CO+81401";

const featured = [
  {
    name: "Khao Soi",
    price: "$16",
    image: heroImg,
    description:
      "Coconut milk, Khao Soi paste, egg noodles, crispy noodles, shallots, cilantro and lime.",
  },
  {
    name: "Mee Korat",
    price: "$16",
    image: meeKoratImg,
    description:
      "Thin rice noodles, bean sprouts, green onion, egg and a soy-based sauce, garnished with lime.",
  },
  {
    name: "Thai Braised Beef Noodles",
    price: "$18",
    image: beefNoodlesImg,
    description:
      "Braised beef, rice noodles and Thai broth with green onion, cilantro, lime, fried garlic, chili crunch, bean sprout and basil.",
  },
  {
    name: "Green Curry",
    price: "$16",
    image: greenCurryImg,
    description:
      "Zucchini, green and red bell peppers, basil, bamboo, coconut milk and green curry paste. Served with rice.",
  },
];

const mains = [
  {
    n: "01",
    name: "Khao Soi",
    price: "16",
    d: "Your choice of meat; egg noodles, coconut milk, Khao Soi paste, garnished with crispy noodles, shallots, cilantro, and lime.",
  },
  {
    n: "02",
    name: "Mee Korat",
    price: "16",
    d: "Thin rice noodles, your choice of meat, bean sprouts, green onion, egg, and a soy-based sauce, garnished with lime.",
  },
  {
    n: "03",
    name: "Drunken Noodles",
    price: "16",
    d: "Large cut noodles, your choice of meat, green/red bell peppers, onion, bamboo, basil and a soy-based sauce.",
  },
  {
    n: "04",
    name: "Spicy Basil",
    price: "16",
    d: "Your choice of meat, Franco chili, basil and a soy-based sauce. Served with rice.",
  },
  {
    n: "05",
    name: "Cashew Chicken",
    price: "16",
    d: "Chicken, mixed bell peppers, onion, green onion, cashew nut and a soy-based sauce. Served with rice.",
  },
  {
    n: "06",
    name: "Green Curry",
    price: "16",
    d: "Your choice of meat, zucchini, green/red bell peppers, basil, bamboo coconut milk, and green curry paste. Served with rice.",
  },
  {
    n: "07",
    name: "Panang Curry",
    price: "16",
    d: "Your choice of meat, kaffir lime leaf, Franco chili, coconut milk, Panang curry paste. Served with rice.",
  },
  {
    n: "08",
    name: "Thai Braised Beef Noodles",
    price: "18",
    d: "Braised beef, rice noodles, Thai broth, garnished with green onion, cilantro, lime, fried garlic, chili crunch, bean sprout, and basil.",
  },
  {
    n: "09",
    name: "Tonkotsu Ramen",
    price: "18",
    d: "Ramen noodles, pork belly, tonkotsu broth, garnished with soy egg, bean sprouts, bamboo, green onion, and chili crunch on the side.",
  },
];

const appetizers = [
  { name: "Cheese Wonton", price: "8" },
  { name: "Potstickers", price: "8" },
  { name: "Egg Rolls", price: "8" },
  { name: "Salmon", price: "8" },
  { name: "Salad Rolls", price: "9" },
];

const spiceLevels = [
  ["1", "Not Spicy"],
  ["2", "Mild"],
  ["3", "Medium"],
  ["4", "Hot"],
  ["5", "Very Spicy"],
  ["7", "Super Thai Spicy"],
];

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Visit Us", href: "#visit" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 sm:py-4">
        <a href="#top" aria-label="Chef Uma's Kitchen, home">
          <Wordmark size="sm" />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.7rem] tracking-[0.24em] text-cream/80 uppercase transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="border border-gold px-5 py-2.5 text-[0.7rem] tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold hover:text-charcoal"
          >
            Call / Text to Order
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a
            href={PHONE_HREF}
            className="border border-gold px-3 py-2 text-[0.62rem] tracking-[0.16em] text-gold uppercase"
          >
            Call / Text
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`block h-px w-6 bg-cream transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-cream transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-4 font-display text-2xl text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Bowl of khao soi with crispy egg noodles, shallots, cilantro and lime"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />


      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pt-28 pb-14 sm:px-8 sm:pb-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Montrose, Colorado</p>
          <h1 className="mt-5 font-display text-[2.7rem] leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            Authentic Thai flavors
            <span className="block text-gold italic">made fresh in Montrose</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Chef Uma brings authentic Thai flavors, bold spices, and homemade comfort food to
            Montrose, Colorado.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={PHONE_HREF}
              className="bg-gold px-7 py-4 text-[0.72rem] tracking-[0.2em] text-charcoal uppercase transition-colors hover:bg-cream"
            >
              Call or Text to Order
            </a>
            <a
              href="#menu"
              className="border border-cream/40 px-7 py-4 text-[0.72rem] tracking-[0.2em] text-cream uppercase transition-colors hover:border-gold hover:text-gold"
            >
              View Menu
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-cream/15 pt-6 text-[0.68rem] tracking-[0.2em] text-cream/70 uppercase">
            <span className="text-gold">Tues – Fri</span>
            <span>Lunch 11am – 3pm</span>
            <span>Dinner 5pm – 8pm</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <img
            src={kitchenImg}
            alt="Chef plating a Thai dish in the kitchen"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">The person behind the food</p>
          <h2 className="mt-5 font-display text-4xl text-cream sm:text-5xl">Meet Chef Uma</h2>
          <div className="rule-gold mt-8 w-24" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
            Formerly a chef at Baan Thai Food Truck, Chef Uma brings years of experience, a passion
            for authentic Asian cuisine, and a self-taught approach to every dish.
          </p>
          <p className="mt-6 max-w-xl font-display text-2xl leading-snug text-gold italic sm:text-3xl">
            Her focus is simple: authentic recipes, quality ingredients, and food made with care.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">From the kitchen</p>
            <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">Featured dishes</h2>
          </div>
          <a
            href="#menu"
            className="text-[0.7rem] tracking-[0.22em] text-gold uppercase transition-colors hover:text-cream"
          >
            See the full menu
          </a>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {featured.map((dish, i) => (
            <Reveal
              key={dish.name}
              delay={(i % 2) * 100}
              className={i % 2 === 1 ? "sm:mt-16" : ""}
            >
              <figure className="group">
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-5">
                  <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                    <h3 className="font-display text-2xl text-cream sm:text-3xl">{dish.name}</h3>
                    <span className="font-display text-2xl text-gold">{dish.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{dish.description}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuRow({
  n,
  name,
  price,
  d,
}: {
  n?: string;
  name: string;
  price: string;
  d?: string;
}) {
  return (
    <li className="border-b border-border/70 py-6">
      <div className="flex items-baseline gap-4">
        {n && <span className="text-xs text-gold-soft tabular-nums">{n}</span>}
        <h4 className="font-display text-2xl text-cream">{name}</h4>
        <span
          className="mx-1 hidden h-px flex-1 self-center bg-border sm:block"
          aria-hidden="true"
        />
        <span className="ml-auto font-display text-2xl text-gold tabular-nums sm:ml-0">
          ${price}
        </span>
      </div>
      {d && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cream/65 sm:pl-9">{d}</p>}
    </li>
  );
}

function Menu() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="text-center">
        <p className="eyebrow">Order by phone or text</p>
        <h2 className="mt-4 font-display text-5xl text-cream sm:text-6xl">Menu</h2>
        <div className="rule-gold mx-auto mt-8 w-40" />
      </Reveal>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
        <div>
          <Reveal>
            <h3 className="eyebrow !text-gold">Authentic Thai</h3>
            <ul className="mt-6">
              {mains.map((m) => (
                <MenuRow key={m.n} {...m} />
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-cream/60 italic">
              Your choice of chicken, tofu, or veggies. +$2 for beef, pork, or shrimp.
            </p>
          </Reveal>

          <Reveal className="mt-16">
            <div className="border border-border p-7 sm:p-9">
              <h3 className="font-display text-2xl text-cream sm:text-3xl">Make any dish spicy</h3>
              <ol className="mt-7 grid gap-y-4 sm:grid-cols-3">
                {spiceLevels.map(([level, label]) => (
                  <li key={level} className="flex items-baseline gap-3">
                    <span className="font-display text-xl text-gold tabular-nums">{level}</span>
                    <span className="text-sm text-cream/75">{label}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <img
              src={appetizersImg}
              alt="Platter of cheese wontons, potstickers, egg rolls and salad rolls"
              width={1408}
              height={944}
              loading="lazy"
              className="aspect-[3/2] w-full object-cover"
            />
            <h3 className="eyebrow mt-8 block !text-gold">Appetizers</h3>
            <ul className="mt-4">
              {appetizers.map((a) => (
                <MenuRow key={a.name} name={a.name} price={a.price} />
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <img
              src={thaiTeaImg}
              alt="Iced Thai tea in a tall glass"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <h3 className="eyebrow mt-8 block !text-gold">Drinks</h3>
            <ul className="mt-4">
              <MenuRow name="Thai Tea" price="4" />
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OrderCta() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <h2 className="font-display text-5xl text-cream sm:text-7xl">Hungry?</h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-cream/75">
            Call or text Chef Uma&rsquo;s Kitchen to place your order for pickup.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={PHONE_HREF}
              className="bg-gold px-9 py-4 text-[0.72rem] tracking-[0.2em] text-charcoal uppercase transition-colors hover:bg-cream"
            >
              Call or Text to Order
            </a>
            <a
              href={PHONE_HREF}
              className="font-display text-3xl text-cream transition-colors hover:text-gold sm:text-4xl"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-8 text-[0.7rem] tracking-[0.2em] text-cream/50 uppercase">
            Pickup orders available during business hours
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Visit() {
  const days = ["Tuesday", "Wednesday", "Thursday", "Friday"];
  return (
    <section id="visit" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <p className="eyebrow">Find us</p>
        <h2 className="mt-4 font-display text-4xl text-cream sm:text-5xl">
          Visit Chef Uma&rsquo;s Kitchen
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <address className="not-italic">
            <p className="font-display text-3xl leading-snug text-cream">
              1335 Mayfly Dr.
              <span className="block text-cream/70">Colorado Outdoors</span>
              <span className="block text-cream/70">Montrose, CO 81401</span>
            </p>
            <div className="mt-8 flex flex-col gap-2 text-cream/80">
              <a href={PHONE_HREF} className="transition-colors hover:text-gold">
                {PHONE_DISPLAY}
              </a>
              <a href="mailto:chefuma25@gmail.com" className="transition-colors hover:text-gold">
                chefuma25@gmail.com
              </a>
            </div>
            <a
              href={DIRECTIONS_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-block border border-gold px-7 py-3.5 text-[0.7rem] tracking-[0.2em] text-gold uppercase transition-colors hover:bg-gold hover:text-charcoal"
            >
              Get Directions
            </a>
          </address>
        </Reveal>

        <Reveal delay={120}>
          <h3 className="eyebrow block">Hours</h3>
          <ul className="mt-6">
            {days.map((day) => (
              <li
                key={day}
                className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-border/70 py-5"
              >
                <span className="font-display text-2xl text-cream">{day}</span>
                <span className="text-sm text-cream/75">
                  11:00 AM – 3:00 PM
                  <span className="mx-2 text-gold-soft">·</span>
                  5:00 PM – 8:00 PM
                </span>
              </li>
            ))}
            <li className="flex items-baseline justify-between gap-8 py-5 text-cream/45">
              <span className="font-display text-2xl">Saturday – Monday</span>
              <span className="text-sm">Closed</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-xs text-sm text-cream/60">
            Authentic Thai flavors, made fresh in Montrose.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-4 inline-block font-display text-xl text-gold transition-colors hover:text-cream"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
        <nav className="flex gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.7rem] tracking-[0.22em] text-cream/70 uppercase transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="mx-auto max-w-7xl px-5 pb-24 text-[0.65rem] tracking-[0.18em] text-cream/35 uppercase sm:px-8 md:pb-10">
        © {new Date().getFullYear()} Chef Uma&rsquo;s Kitchen · Montrose, Colorado
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-background/95 p-3 backdrop-blur md:hidden">
      <a
        href={PHONE_HREF}
        className="block bg-gold py-3.5 text-center text-[0.72rem] tracking-[0.2em] text-charcoal uppercase"
      >
        Call / Text to Order
      </a>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-background">
      <Nav />
      <main>
        <Hero />
        <Story />
        <Featured />
        <Menu />
        <OrderCta />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
