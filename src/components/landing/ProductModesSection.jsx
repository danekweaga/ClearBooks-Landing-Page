import React from "react";
import { MessageSquare, FileBarChart } from "lucide-react";

const modes = [
  {
    icon: MessageSquare,
    title: "Chat mode",
    tagline: "Ask anything in plain English",
    description:
      "Type a financial question and get a specific, accurate answer from your real data — \"Who owes me money?\", \"What did I spend on supplies last month?\", \"Will I be okay this month?\"",
    example: "You made $6,240 last month from 4 clients.",
  },
  {
    icon: FileBarChart,
    title: "Report mode",
    tagline: "Documents you can actually use",
    description:
      "On demand or automatically every month, KlearBooks generates a full financial report — Excel and PDF — covering income, expenses, categorized transactions, AI insights, and items to review. Clean enough to hand to your accountant.",
    example: "Monthly report ready — 142 transactions, 7 sheets, one click.",
  },
];

export default function ProductModesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Two modes. One agent that runs itself.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            KlearBooks sits between your bank account and your accountant — smarter than a
            spreadsheet, simpler than bookkeeping software, and nothing like QuickBooks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {modes.map((mode) => (
            <div
              key={mode.title}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <mode.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs font-medium uppercase tracking-wide text-primary mb-1">
                {mode.title}
              </p>
              <h3 className="font-semibold text-xl mb-3">{mode.tagline}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {mode.description}
              </p>
              <div className="bg-secondary rounded-xl px-4 py-3">
                <p className="text-sm text-foreground italic">&ldquo;{mode.example}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
