import { formatRelative } from "@/lib/format";

type Props = { total: number; updatedAt: number | null };

export default function Stats({ total, updatedAt }: Props) {
  return (
    <section className="relative z-10 mx-auto -mt-12 w-[min(90%,26rem)]">
      <div className="border border-rule bg-ink-raised px-6 pb-7 pt-11 text-center sm:px-8 sm:pb-8 sm:pt-12">
        <h2 className="font-data text-s uppercase tracking-[0.2em] text-muted sm:text-s sm:tracking-[0.3em]">
          {" "}
          Bees brutaly mauled
        </h2>

        <p className="mt-5 font-display text-[clamp(5.5rem,22vw,11rem)] font-semibold tabular-nums leading-[0.9] text-chrome">
          {" "}
          {total}
        </p>

        <hr className="mx-auto mt-6 w-10 border-rule sm:mt-7" />

        <p className="mt-5 font-data text-m text-muted">
          {updatedAt ? (
            <>
              Last catch{" "}
              <time dateTime={new Date(updatedAt).toISOString()}>
                {formatRelative(updatedAt)}
              </time>
            </>
          ) : (
            "No murders recorded so far."
          )}
        </p>
      </div>
    </section>
  );
}
