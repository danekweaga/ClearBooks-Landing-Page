import React from "react";
import { TrendingUp, AlertTriangle, RefreshCw } from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    iconClass: "text-primary bg-primary/10",
    label: "Growth Insight",
    headline: "Income is up 14% compared to last June.",
    detail:
      "Your peak earning days are Tuesdays. Consider increasing availability for those slots.",
  },
  {
    icon: AlertTriangle,
    iconClass: "text-foreground bg-warning/20",
    label: "Cash Flow Alert",
    headline: "Equipment costs remain your largest outlay.",
    detail:
      "Hardware costs rose 9% this month. You have 3 undocumented receipts to review.",
  },
  {
    icon: RefreshCw,
    iconClass: "text-primary bg-primary/10",
    label: "Cash Leak",
    headline: "Recurring subs total $186 per month.",
    detail:
      "We found 2 subscriptions with zero activity in the last 60 days. Possible cancellation opportunity.",
  },
];

export default function AIInsightsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Plain-English insights from your own records.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Stop squinting at rows of data. Let us tell you what matters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <div key={insight.label} className="bg-card border border-border rounded-2xl p-7">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${insight.iconClass}`}
              >
                <insight.icon className="w-5 h-5" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                {insight.label}
              </p>
              <h3 className="font-semibold text-lg leading-snug mb-3">{insight.headline}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{insight.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
