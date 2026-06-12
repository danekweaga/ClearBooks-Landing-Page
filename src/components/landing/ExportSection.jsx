import React from "react";
import { Table2, ScrollText } from "lucide-react";

const exports_ = [
  {
    icon: Table2,
    title: "Excel Report",
    description: "Raw transaction data formatted for professional use.",
  },
  {
    icon: ScrollText,
    title: "AI Insights Summary",
    description: "Narrative summary of your financial health.",
  },
];

export default function ExportSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid sm:grid-cols-2 gap-5 order-2 lg:order-1">
          {exports_.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-2xl p-7 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Download reports you can actually use.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Whether you need a raw spreadsheet for your CPA or a simple narrative summary
            for yourself, ClearBooks generates clear, professional documents in one click.
          </p>
        </div>
      </div>
    </section>
  );
}
