export default function Footer() {
  return (
    <footer className="mt-16 border-t border-rule px-6 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center font-data text-[0.65rem] uppercase tracking-[0.15em] text-muted sm:mt-20 sm:text-[0.7rem] sm:tracking-[0.2em]">
      © {new Date().getFullYear()} — Canine Hymenoptera Observatory
    </footer>
  );
}
