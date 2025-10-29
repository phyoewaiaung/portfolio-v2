export default function Stage({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden py-28">
      {/* soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_40%_at_50%_-10%,rgba(139,92,246,.18),transparent),radial-gradient(60%_40%_at_80%_10%,rgba(34,211,238,.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(800px_400px_at_center,black,transparent)]" />
      {/* grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[.06] mix-blend-overlay [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 40 40%22><path fill=%22%23fff%22 fill-opacity=%220.35%22 d=%22M0 0h1v1H0z%22/></svg>')]" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {children}
      </div>
    </section>
  );
}
