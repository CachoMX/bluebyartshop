import { AnimateIn } from "@/components/AnimateIn";
import { subscribeFaqs } from "@/lib/catalog";

export function FAQAccordion() {
  return (
    <section
      aria-label="Frequently asked questions"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#F0F7FF" }}
    >
      <div className="max-w-3xl mx-auto">
        <p
          className="text-center"
          style={{
            color: "#94A3B8",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
          }}
        >
          Frequently asked
        </p>
        <h2
          className="text-center mb-10"
          style={{
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
            color: "#1E293B",
            fontWeight: 700,
          }}
        >
          Quick answers before you subscribe
        </h2>

        <div className="faq-stack">
          {subscribeFaqs.map((faq, i) => (
            <AnimateIn key={faq.q} delay={i * 60} direction="up">
              <details className="faq-item" open={i === 0}>
                <summary className="faq-q">
                  <span>{faq.q}</span>
                  <span className="faq-chev" aria-hidden="true">▾</span>
                </summary>
                <p className="faq-a">{faq.a}</p>
              </details>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        .faq-stack { display: flex; flex-direction: column; gap: 0.75rem; }
        .faq-item {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 14px;
          padding: 1rem 1.25rem;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .faq-item[open] {
          background: #EFF6FF;
          border-color: #BFDBFE;
        }
        .faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          color: #1E293B;
          font-weight: 600;
          font-family: var(--font-baloo-2), 'Baloo 2', sans-serif;
          font-size: 0.9375rem;
          cursor: pointer;
          list-style: none;
        }
        .faq-q::-webkit-details-marker { display: none; }
        .faq-chev {
          color: #94A3B8;
          font-size: 0.875rem;
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .faq-item[open] .faq-chev {
          color: #2563EB;
          transform: rotate(180deg);
        }
        .faq-a {
          color: #475569;
          font-size: 0.875rem;
          line-height: 1.65;
          margin-top: 0.75rem;
        }
      `}</style>
    </section>
  );
}
