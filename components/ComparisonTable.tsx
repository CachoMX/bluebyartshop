import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import {
  subscriptionComparisonRows,
  subscriptionTiers,
} from "@/lib/catalog";

export function ComparisonTable() {
  const miniKey = "mini-artist";
  const explorerKey = "creative-explorer";
  const masterKey = "master-creator";

  const tier = (key: string) =>
    subscriptionTiers.find((t) => t.key === key)!;

  return (
    <section
      aria-label="Compare all subscription plans"
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
          Compare side by side
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
          All three plans, feature by feature
        </h2>

        <AnimateIn direction="up">
          <div className="ct-wrap">
            <table className="ct-table">
              <thead>
                <tr>
                  <th scope="col" className="ct-corner" />
                  <th scope="col" className="ct-th">
                    {tier(miniKey).name}
                  </th>
                  <th scope="col" className="ct-th ct-popular">
                    <span className="ct-popular-badge">⭐ Most Popular</span>
                    {tier(explorerKey).name}
                  </th>
                  <th scope="col" className="ct-th">
                    {tier(masterKey).name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {subscriptionComparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#F8FAFC",
                    }}
                  >
                    <th scope="row" className="ct-row-head">
                      {row.feature}
                    </th>
                    <td className="ct-td">{row.miniArtist}</td>
                    <td className="ct-td ct-popular-cell">
                      {row.creativeExplorer}
                    </td>
                    <td className="ct-td">{row.masterCreator}</td>
                  </tr>
                ))}
                <tr className="ct-cta-row">
                  <th scope="row" className="ct-row-head" />
                  <td className="ct-td">
                    <Link
                      href={`/subscribe/checkout?tier=${miniKey}`}
                      className="ct-mini-cta"
                      style={{ backgroundColor: "#2563EB" }}
                    >
                      Choose
                    </Link>
                  </td>
                  <td className="ct-td ct-popular-cell">
                    <Link
                      href={`/subscribe/checkout?tier=${explorerKey}`}
                      className="ct-mini-cta"
                      style={{ backgroundColor: "#C2410C" }}
                    >
                      Choose
                    </Link>
                  </td>
                  <td className="ct-td">
                    <Link
                      href={`/subscribe/checkout?tier=${masterKey}`}
                      className="ct-mini-cta"
                      style={{ backgroundColor: "#2563EB" }}
                    >
                      Choose
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </AnimateIn>

        <p
          className="text-center mt-4"
          style={{ color: "#94A3B8", fontSize: "0.8125rem" }}
        >
          All plans include free monthly theme swaps and ASTM D-4236 certified
          materials.
        </p>
      </div>

      <style>{`
        .ct-wrap {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          overflow-x: auto;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.04);
        }
        .ct-table {
          width: 100%;
          min-width: 640px;
          border-collapse: collapse;
          font-size: 0.875rem;
          color: #1E293B;
        }
        .ct-corner {
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }
        .ct-th {
          background: #EFF6FF;
          color: #1E40AF;
          font-family: var(--font-fredoka-one), 'Fredoka One', cursive;
          font-weight: 700;
          font-size: 0.9375rem;
          padding: 1rem 1.25rem;
          text-align: left;
          border-bottom: 1px solid #E2E8F0;
          position: relative;
        }
        .ct-th.ct-popular {
          background: #FFF4ED;
          color: #C2410C;
          padding-top: 1.75rem;
        }
        .ct-popular-badge {
          position: absolute;
          top: 0.5rem;
          left: 1.25rem;
          font-size: 0.6875rem;
          font-weight: 700;
          background: #C2410C;
          color: #FFFFFF;
          padding: 2px 8px;
          border-radius: 999px;
          letter-spacing: 0.04em;
          font-family: var(--font-baloo-2), 'Baloo 2', sans-serif;
        }
        .ct-row-head {
          font-weight: 500;
          color: #475569;
          padding: 0.75rem 1.25rem;
          text-align: left;
          font-size: 0.875rem;
          border-bottom: 1px solid #F1F5F9;
        }
        .ct-td {
          padding: 0.75rem 1.25rem;
          border-bottom: 1px solid #F1F5F9;
          color: #334155;
          vertical-align: middle;
        }
        .ct-popular-cell {
          background: rgba(255, 244, 237, 0.55);
          font-weight: 600;
          color: #1E293B;
        }
        .ct-cta-row td,
        .ct-cta-row th {
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
          background: #F8FAFC;
        }
        .ct-cta-row .ct-popular-cell {
          background: #FFF4ED;
        }
        .ct-mini-cta {
          display: inline-block;
          color: #FFFFFF;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-size: 0.8125rem;
          font-weight: 600;
          text-decoration: none;
          letter-spacing: 0.02em;
          font-family: var(--font-baloo-2), 'Baloo 2', sans-serif;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ct-mini-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
        }
      `}</style>
    </section>
  );
}
