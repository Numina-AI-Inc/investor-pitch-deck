import Slide from "@/components/Slide";
import { useState } from "react";
import { ArrowRight, ShoppingCart, Utensils, User, Briefcase, ArrowUp, DollarSign } from "lucide-react";

type InsightKey =
  | "model"
  | "flow"
  | "edward-client"
  | "edward-practice"
  | "smb-value"
  | "unit-economics"
  | "scale"
  | "nrr"
  | "classification"
  | "pitch";

const ImpactSlide = () => {
  const [activeInsight, setActiveInsight] = useState<InsightKey | null>(null);

  return (
    <Slide>
      <div className="max-w-7xl mx-auto w-full">
        <span className="text-primary text-base font-medium tracking-widest uppercase mb-4 block animate-fade-up">
          Business Model
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 animate-fade-up delay-100 max-w-5xl leading-tight">
          Numina's <span className="text-primary">breadth</span> + CPA's <span className="text-primary">depth</span>
        </h2>

        <div className="grid grid-cols-12 gap-6 items-center mt-8">
          {/* Left side — Service model T-shape */}
          <div className="col-span-12 lg:col-span-7 animate-fade-up delay-200">
            <div className="relative rounded-2xl border-2 border-dashed border-primary/40 p-6 pt-10">
              <button
                type="button"
                onClick={() => setActiveInsight("model")}
                className="absolute -top-3 left-6 bg-background px-3 text-sm font-medium tracking-widest uppercase text-primary hover:text-primary/80 transition-colors"
              >
                Service Model
              </button>

              <div className="flex flex-col items-center gap-0">
                {/* Horizontal bar — Numina (Breadth) */}
                <div className="w-full">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <button type="button" onClick={() => setActiveInsight("nrr")} className="text-primary text-xl hover:text-primary/80">←</button>
                    <button
                      type="button"
                      onClick={() => setActiveInsight("nrr")}
                      className="text-primary text-lg font-bold tracking-widest uppercase hover:text-primary/80"
                    >
                      Breadth
                    </button>
                    <button type="button" onClick={() => setActiveInsight("scale")} className="text-primary text-xl hover:text-primary/80">→</button>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveInsight("unit-economics")}
                    className="w-full feature-card p-5 text-center bg-primary/10 border-primary/40 hover:bg-primary/15 transition-colors"
                  >
                    <div className="text-2xl font-bold text-foreground">Numina</div>
                    <div className="text-sm text-muted-foreground mt-1">Orchestration engine</div>
                  </button>
                </div>

                {/* Vertical bar — Accountants (Depth) */}
                <div className="flex items-stretch gap-4 mt-16">
                  <button
                    type="button"
                    onClick={() => setActiveInsight("classification")}
                    className="flex flex-col items-center justify-center text-primary hover:text-primary/80"
                  >
                    <span className="text-primary text-lg font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
                      Depth
                    </span>
                    <span className="text-primary text-xl mt-2">↓</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveInsight("edward-client")}
                    className="feature-card p-8 text-center bg-primary/5 border-primary/30 w-64 min-h-[280px] flex flex-col justify-center relative hover:bg-primary/10 transition-colors"
                  >
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 flex flex-col items-center text-primary">
                      <ArrowUp className="w-8 h-8" strokeWidth={2.5} />
                      <DollarSign className="w-4 h-4 mt-1" strokeWidth={2.5} />
                    </div>
                    <div className="text-xl font-bold text-foreground">Accountants / CPAs</div>
                    <div className="text-sm text-muted-foreground mt-2">Domain experts</div>
                    <div className="mt-4 text-xs font-bold tracking-widest uppercase text-primary leading-relaxed">
                      Increased capacity + top line
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex col-span-1 items-center justify-center animate-fade-up delay-300">
            <button type="button" onClick={() => setActiveInsight("flow")} className="hover:scale-105 transition-transform">
              <ArrowRight className="w-12 h-12 text-primary" strokeWidth={2.5} />
            </button>
          </div>

          {/* Right side — SMBs */}
          <div className="col-span-12 lg:col-span-4 animate-fade-up delay-300">
            <button
              type="button"
              onClick={() => setActiveInsight("smb-value")}
              className="w-full text-left feature-card p-5 hover:bg-primary/5 transition-colors"
            >
              <div className="text-center mb-4">
                <div className="text-xl font-bold text-foreground">SMBs</div>
                <div className="text-sm text-muted-foreground">End beneficiary</div>
              </div>
              <div className="space-y-2">
                {[
                  { icon: ShoppingCart, label: "E-commerce" },
                  { icon: Utensils, label: "Restaurants" },
                  { icon: User, label: "Freelancers" },
                  { icon: Briefcase, label: "Professional services" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 border border-border/50"
                  >
                    <Icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </button>
          </div>
        </div>

        {activeInsight && (
          <div className="mt-6 feature-card p-5 animate-fade-up">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-primary text-xs font-medium tracking-widest uppercase">Business Model Detail</div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mt-1">
                  {{
                    model: "Model in one sentence",
                    flow: "How money flows",
                    "edward-client": "Edward economics per SMB client",
                    "edward-practice": "Capacity doubling in full practice",
                    "smb-value": "What SMB clients see",
                    "unit-economics": "Numina unit economics",
                    scale: "Revenue at scale",
                    nrr: "Expansion mechanic (NRR driver)",
                    classification: "YC model classification",
                    pitch: "Pitch narrative",
                  }[activeInsight]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveInsight(null)}
                className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground"
              >
                Close
              </button>
            </div>

            {activeInsight === "model" && (
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                CPA firms pay Numina <span className="text-primary font-semibold">$1,000 per SMB client per month</span> as a pass-through
                surcharge. CPA rates stay unchanged while each client drops from 22 to 4 operational hours, unlocking 18+ hours of capacity.
              </p>
            )}

            {activeInsight === "flow" && (
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                {[
                  ["SMB Client", "$5,400/mo paid", "$4,400 CPA fee + $1,000 tech surcharge"],
                  ["CPA Firm (Edward)", "$4,400/mo kept", "Rate unchanged, 4 hrs not 22"],
                  ["Numina", "$1,000/mo received", "Pass-through technology surcharge"],
                ].map(([title, value, note]) => (
                  <div key={title} className="rounded-lg border border-border/50 bg-muted/20 p-3">
                    <div className="font-semibold text-foreground">{title}</div>
                    <div className="text-primary mt-1">{value}</div>
                    <div className="text-muted-foreground mt-1 text-xs">{note}</div>
                  </div>
                ))}
              </div>
            )}

            {activeInsight === "edward-client" && (
              <div className="grid md:grid-cols-2 gap-3">
                <div className="rounded-lg border border-border/50 p-3">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Before vs After</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Hours/client</span><span>22 to 4</span></div>
                    <div className="flex justify-between"><span>Total client bill</span><span>$4,400 to $5,400</span></div>
                    <div className="flex justify-between"><span>Effective hourly</span><span>$200/hr to $1,100/hr</span></div>
                  </div>
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/10 p-3">
                  <div className="text-xs uppercase tracking-widest text-primary mb-2">Simple graphic</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Hours per client</div>
                      <div className="h-2 rounded bg-muted overflow-hidden"><div className="h-full w-[82%] bg-foreground/70" /></div>
                      <div className="h-2 rounded bg-muted overflow-hidden mt-1"><div className="h-full w-[18%] bg-primary" /></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">18 hrs freed and 5.5x productivity lift.</div>
                </div>
              </div>
            )}

            {activeInsight === "smb-value" && (
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-border/50 p-3">
                  <div className="font-semibold mb-2">Price view</div>
                  <div className="flex justify-between"><span>Before</span><span>$4,400/mo</span></div>
                  <div className="flex justify-between"><span>After</span><span>$5,400/mo</span></div>
                  <div className="flex justify-between text-primary"><span>Increase</span><span>23%</span></div>
                </div>
                <div className="rounded-lg border border-border/50 p-3">
                  <div className="font-semibold mb-2">Value received</div>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Faster financials (days, not weeks)</li>
                    <li>Real-time anomaly flagging</li>
                    <li>Audit-ready documentation</li>
                  </ul>
                </div>
              </div>
            )}

            {activeInsight === "unit-economics" && (
              <div className="grid md:grid-cols-4 gap-3 text-sm">
                {[
                  ["Revenue/client", "$1,000/mo"],
                  ["COGS/client", "$50-$80/mo"],
                  ["Gross margin", "92-95%"],
                  ["LTV/CAC", "~40x"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg border border-border/50 p-3">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{k}</div>
                    <div className="text-primary font-semibold mt-1">{v}</div>
                  </div>
                ))}
              </div>
            )}

            {activeInsight === "scale" && (
              <div className="grid md:grid-cols-4 gap-3 text-sm">
                {[
                  ["5 firms", "25 SMBs", "$300K ARR"],
                  ["10 firms", "60 SMBs", "$720K ARR"],
                  ["15 firms", "105 SMBs", "$1.26M ARR"],
                  ["25 firms", "200 SMBs", "$2.4M ARR"],
                ].map(([firms, clients, arr]) => (
                  <div key={firms} className="rounded-lg border border-border/50 p-3">
                    <div className="font-semibold">{firms}</div>
                    <div className="text-muted-foreground text-xs mt-1">{clients}</div>
                    <div className="text-primary mt-2">{arr}</div>
                  </div>
                ))}
              </div>
            )}

            {activeInsight === "nrr" && (
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Expansion is built-in: as each CPA firm adds SMB clients, Numina MRR expands automatically with no new sales call.
                Example: one firm grows from 5 to 10 clients, and revenue moves from <span className="text-primary">$5,000/mo to $10,000/mo</span>,
                supporting NRR above 120%.
              </p>
            )}

            {activeInsight === "classification" && (
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-border/50 p-3">
                  <div className="font-semibold">Primary model</div>
                  <div className="text-muted-foreground mt-1">SaaS, recurring per-client ARR</div>
                </div>
                <div className="rounded-lg border border-border/50 p-3">
                  <div className="font-semibold">Expansion mechanic</div>
                  <div className="text-muted-foreground mt-1">Usage-based client growth inside each CPA account</div>
                </div>
              </div>
            )}

            {activeInsight === "edward-practice" && (
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Edward scales from 5 to 10 clients while recon/review hours drop from 110 to 40. Monthly billing grows from $22K to $44K,
                net billing after Numina is $34K, and take-home increases from roughly $15K to $24K.
              </p>
            )}

            {activeInsight === "pitch" && (
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div className="rounded-lg border border-border/50 p-3"><span className="font-semibold">To CPAs:</span> Double capacity, same headcount.</div>
                <div className="rounded-lg border border-border/50 p-3"><span className="font-semibold">To investors:</span> 92%+ margin SaaS with built-in expansion.</div>
                <div className="rounded-lg border border-border/50 p-3"><span className="font-semibold">To SMBs:</span> Faster, more accurate, audit-ready financials.</div>
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2">
              <button type="button" onClick={() => setActiveInsight("edward-practice")} className="text-xs px-2 py-1 rounded border border-border/60 hover:border-primary/60">
                Practice Capacity
              </button>
              <button type="button" onClick={() => setActiveInsight("pitch")} className="text-xs px-2 py-1 rounded border border-border/60 hover:border-primary/60">
                Pitch Angles
              </button>
            </div>
          </div>
        )}
      </div>
    </Slide>
  );
};

export default ImpactSlide;
