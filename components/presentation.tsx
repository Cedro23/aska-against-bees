import Image from "next/image";

export default function Presentation() {
  return (
    <section className="relative h-[60dvh] min-h-72 w-full overflow-hidden sm:min-h-80">
      <Image
        src="/aska.jpg"
        alt="My dog, Aska, rolling in the grass"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[83%_70%] sm:object-[center_70%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 px-6 pb-16 pt-6 sm:px-10 sm:pb-24 sm:pt-10">
        {" "}
        <p className="font-data text-[0.65rem] uppercase tracking-[0.15em] text-chrome sm:text-xl sm:tracking-[0.25em]">
          Canis familiaris × Apis mellifera
        </p>
        <h1 className="mt-2 text-balance font-display text-[clamp(2rem,8vw,4rem)] leading-[1.05] text-paper">
          Bees registry
        </h1>
      </div>
    </section>
  );
}
