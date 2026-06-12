import React from "react";

const steps = [
  {
    number: "01",
    title: "Connect your bank",
    description:
      "Link your account via Plaid in under two minutes. Your full transaction history appears automatically — no CSV uploads, no manual entry.",
  },
  {
    number: "02",
    title: "The agent organizes",
    description:
      "Every transaction is categorized within seconds. The agent flags anomalies, tracks what needs review, and learns from your corrections.",
  },
  {
    number: "03",
    title: "Ask or receive",
    description:
      "Chat with your finances in plain English, or let a monthly Excel and PDF report arrive automatically — ready for you or your accountant.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Set up once. Clarity on autopilot.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built for solopreneurs, gig workers, and small business owners who have better
            things to do than operate bookkeeping software.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-card border border-border rounded-2xl p-7 relative">
              <span className="text-5xl font-bold font-mono text-primary/15 absolute top-5 right-6">
                {step.number}
              </span>
              <h3 className="font-semibold text-xl mb-3 mt-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
