import { AnimateIn } from "@/components/AnimateIn";
import { subscriptionHowItWorks } from "@/lib/catalog";

export function HowItWorks() {
  return (
    <section
      aria-label="How the subscription works"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto">
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
          How it works
        </p>
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-fredoka-one), 'Fredoka One', cursive",
            fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
            color: "#1E293B",
            fontWeight: 700,
          }}
        >
          Three steps to your first box
        </h2>

        {/* Desktop / tablet: 3 columns with arrows. Mobile: stacked. */}
        <div className="hiw-grid">
          {subscriptionHowItWorks.map((step, i) => (
            <AnimateIn key={step.position} delay={i * 130} direction="up">
              <div className="hiw-step">
                <div
                  className="hiw-icon"
                  style={{
                    backgroundColor: i === 1 ? "#FFF4ED" : "#EFF6FF",
                  }}
                >
                  <span aria-hidden="true">{step.emoji}</span>
                </div>
                <h3
                  className="hiw-title"
                  style={{
                    fontFamily:
                      "var(--font-fredoka-one), 'Fredoka One', cursive",
                  }}
                >
                  <span style={{ color: "#2563EB" }}>{step.position}.</span>{" "}
                  {step.title}
                </h3>
                <p className="hiw-desc">{step.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      <style>{`
        .hiw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          position: relative;
        }
        .hiw-grid::before,
        .hiw-grid::after {
          content: "→";
          position: absolute;
          top: 36px;
          font-size: 1.75rem;
          color: #CBD5E1;
          font-weight: 300;
          pointer-events: none;
        }
        .hiw-grid::before { left: 33.3%; transform: translateX(-50%); }
        .hiw-grid::after { left: 66.6%; transform: translateX(-50%); }
        .hiw-step {
          text-align: center;
          padding: 1.5rem 1rem;
        }
        .hiw-icon {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1rem;
        }
        .hiw-title {
          font-size: 1.125rem;
          color: #1E293B;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .hiw-desc {
          color: #64748B;
          font-size: 0.875rem;
          line-height: 1.6;
          max-width: 280px;
          margin: 0 auto;
        }
        @media (max-width: 640px) {
          .hiw-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .hiw-grid::before,
          .hiw-grid::after { display: none; }
        }
      `}</style>
    </section>
  );
}
