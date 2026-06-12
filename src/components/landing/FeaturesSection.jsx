import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const checklist = [
  "Automated Income vs Expenses tracking",
  "Granular category breakdown by percentage",
  "Recurring cost detection for unused subscriptions",
];

const categories = [
  { name: "Supplies & Hardware", amount: "$1,240", width: "100%" },
  { name: "Travel & Fuel", amount: "$680", width: "55%" },
  { name: "Software Subs", amount: "$186", width: "18%" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            See the month clearly.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We visualize your numbers so you can spot trends instantly. No more wondering
            where the profit went.
          </p>

          <ul className="space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="font-semibold text-sm">Spending Categories</span>
            <span className="text-xs text-muted-foreground">Last 30 Days</span>
          </div>

          <div className="space-y-5 mb-6">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-foreground">{cat.name}</span>
                  <span className="font-mono font-medium">{cat.amount}</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: cat.width }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 bg-secondary rounded-xl p-4">
            <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">
              &ldquo;Your software subscriptions increased by 8% this month due to a price
              change in CloudStorage Pro.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
