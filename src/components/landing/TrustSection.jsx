import React from "react";
import { UserSearch, Lock, FolderSync, History } from "lucide-react";

const items = [
  {
    icon: UserSearch,
    title: "User reviews AI",
    description:
      "Every AI categorization is clearly flagged for your review. One click to confirm, one click to correct.",
  },
  {
    icon: Lock,
    title: "Private records",
    description:
      "Your financial data is encrypted and never sold. We only use it to generate your reports.",
  },
  {
    icon: FolderSync,
    title: "Real-time sync",
    description:
      "Your data syncs in real-time, providing the clean data you need to make informed business decisions.",
  },
  {
    icon: History,
    title: "Audit trail",
    description:
      "Original documents are always linked to their categorized entries for easy verification.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Built with review and control in mind.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We believe AI should assist, not replace. You are always the final authority on
            your records.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-card border border-border rounded-2xl p-6">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
