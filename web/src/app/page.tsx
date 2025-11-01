export default function Home() {
  const features = [
    {
      title: "Hand-Painted Ruins",
      description:
        "Traverse cathedrals dissolving into shadow with every torchlit step revealing hidden sigils and secrets.",
      accent: "Relic Exploration",
    },
    {
      title: "Tactical Dread Combat",
      description:
        "Weave martyrdom abilities and blood rites together in lethal 2D skirmishes that reward ritual precision.",
      accent: "Combat Alchemy",
    },
    {
      title: "Living Covenants",
      description:
        "Forge oaths with veiled factions whose loyalties fracture and reform around every decision you etch in fate.",
      accent: "Branching Alliances",
    },
  ];

  const fragments = [
    {
      heading: "The Sundered Moon",
      text: "A celestial shroud cracked the skies, pressing the final dawn into a bleeding crescent.",
    },
    {
      heading: "The Silent Choir",
      text: "Whispers of the departed entwine with your spells, echoing choices that can never be unheard.",
    },
    {
      heading: "The Pale March",
      text: "Abandoned war machines prowl forgotten roads, drawn to the remnants of souls they were sworn to guard.",
    },
  ];

  const stats = [
    { label: "Hand-crafted regions", value: "12" },
    { label: "Unique covenant rites", value: "47" },
    { label: "Endings shaped by scars", value: "9" },
  ];

  return (
    <div className="relative w-full overflow-hidden pb-24 text-foreground">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-45" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full border border-white/10 bg-accent-soft/60 backdrop-blur-sm" />
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-muted">Umbral Covenant</p>
              <p className="serif text-lg text-foreground/80">Violence of light. Mercy of shadow.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#lore"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm uppercase tracking-wide text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              Lore Codex
              <svg
                className="size-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 10h12m0 0-4-4m4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium uppercase tracking-wide text-black transition shadow-ritual hover:bg-[#c06dff]"
            >
              Wishlist Now
              <span aria-hidden>↗</span>
            </a>
          </div>
        </header>

        <section className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-1 text-xs uppercase tracking-[0.3em] text-accent">
                Grimdark 2D RPG
                <span className="inline-block size-2 rounded-full bg-accent" />
              </span>
              <h1 className="hero-title text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Stand between the last embers of the covenant and the hunger beyond the veil.
              </h1>
              <p className="max-w-xl text-base text-muted sm:text-lg">
                Ritual blades gleam beneath the sundered moon as you carve a path through forgotten catacombs,
                bargaining with eldritch patrons for a final spark of dawn. Every oath you utter stains the world.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              <a
                href="#"
                className="glow-ring inline-flex items-center justify-center gap-3 rounded-full bg-white/5 px-8 py-3 font-medium uppercase tracking-wide text-foreground transition hover:bg-white/10"
              >
                <span>Join the early rite</span>
                <svg
                  className="size-4 text-accent"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="m5 5 10 10M5 15V5h10"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 uppercase tracking-wide text-muted transition hover:border-white/40 hover:text-foreground"
              >
                Watch the omen reel
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
                  <path d="M10 9.5 15 12l-5 2.5V9.5Z" fill="currentColor" />
                </svg>
              </button>
            </div>

            <dl className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="etched rounded-2xl border border-white/5 bg-white/5 p-4 text-center backdrop-blur-md"
                >
                  <dt className="text-xs uppercase tracking-[0.3em] text-muted">{stat.label}</dt>
                  <dd className="serif mt-2 text-3xl text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-veil shadow-ritual before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_60%)] before:opacity-60">
              <div className="relative backdrop-embers">
                <div className="absolute inset-x-10 top-10 h-24 rounded-full bg-white/10 blur-3xl" />
                <div className="relative flex flex-col gap-6 px-10 pb-12 pt-16">
                  <span className="text-xs uppercase tracking-[0.4em] text-accent">Gameplay Vertical Slice</span>
                  <h2 className="hero-title text-3xl text-white">
                    Rite of Falling Stars
                  </h2>
                  <p className="text-sm leading-relaxed text-muted">
                    The Revenant Knight descends the eclipse tower, shattering wards, binding an Archon, and choosing
                    which village to consign to the void. 2D hand animation meets painterly occult minimalism.
                  </p>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-muted">Signature Sequence</p>
                      <p className="serif text-xl text-white">Astral Requiem</p>
                    </div>
                    <div className="flex size-14 items-center justify-center rounded-full border border-white/20">
                      <svg
                        className="size-6 text-accent"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M12 3v18M4.5 7.5 12 3l7.5 4.5M6 17l6 4 6-4"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-12">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.35em] text-muted">Design Pillars</p>
            <h2 className="hero-title text-3xl text-white sm:text-4xl">Elegy of steel, sorcery, and sacrifice.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="etched group flex flex-col gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 transition hover:border-accent/40 hover:bg-white/10"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-accent">{feature.accent}</span>
                <h3 className="serif text-2xl text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted transition group-hover:text-accent">
                  Witness
                  <svg
                    className="size-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M4 10h12m0 0-4-4m4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </section>

        <section id="lore" className="space-y-12">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.35em] text-muted">Fragments of the Chronicle</p>
            <h2 className="hero-title text-3xl text-white sm:text-4xl">
              Gather the shards. Decide what burns and what endures.
            </h2>
            <p className="max-w-2xl text-sm text-muted">
              Each decision sends ripples through the covenant ledger, inscribed right into the land. Lose favor with
              the Silent Choir and the dead will no longer guide your aim. Aid the Pale March and its war machines may
              corrupt the villages you swore to defend.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {fragments.map((fragment) => (
              <article
                key={fragment.heading}
                className="glow-ring relative flex flex-col gap-3 rounded-3xl border border-white/10 bg-black/40 p-6"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-accent">{fragment.heading}</span>
                <p className="text-sm leading-relaxed text-muted">{fragment.text}</p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs uppercase tracking-[0.3em] text-muted">
                  <span>Codex File</span>
                  <span className="text-white/70">Locked ◯</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8 rounded-[2.5rem] border border-white/5 bg-white/5 p-10 backdrop-blur-lg lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-muted">Become a Harbinger</p>
            <h2 className="hero-title text-3xl text-white sm:text-4xl">Receive closed testing rites and occult news.</h2>
            <p className="text-sm text-muted">
              Join the circle to be summoned when the first closed builds open. No spam—only omens, development rituals,
              and opportunities to bend the world toward dawn or ruin.
            </p>
          </div>
          <form className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row lg:mt-0">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@realm.mail"
              className="h-12 flex-1 rounded-full border border-white/10 bg-black/40 px-6 text-sm text-foreground placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
              autoComplete="email"
            />
            <button
              type="submit"
              className="glow-ring h-12 rounded-full bg-accent px-6 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-[#c06dff]"
            >
              Swear your oath
            </button>
          </form>
        </section>
      </main>

      <footer className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-3 px-6 pb-16 text-xs uppercase tracking-[0.35em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Umbral Covenant</span>
        <span>Crafted beneath the Sundered Moon</span>
      </footer>
    </div>
  );
}
