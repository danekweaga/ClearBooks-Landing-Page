import React from "react";
import { FileText, LayoutGrid, EyeOff } from "lucide-react";

const problems = [
  {
    icon: FileText,
    title: "Records scattered",
    description:
      "Invoices in email, receipts in the car, and bank statements in a portal you can never log into.",
  },
  {
    icon: LayoutGrid,
    title: "Software you have to operate",
    description:
      "QuickBooks and spreadsheets require you to run reports, export data, and maintain records yourself — or hire someone to do it.",
  },
  {
    icon: EyeOff,
    title: "Financial blind spots",
    description:
      "Making decisions without a clear picture of your real-time profitability is a recipe for anxiety.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center max-w-2xl mx-auto mb-14">
          Most small business owners do not need more software.{" "}
          <span className="text-primary">They need clarity.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded-2xl p-7 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
