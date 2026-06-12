import React from "react";

const workers = [
  "Delivery drivers",
  "Freelance designers",
  "Consultants",
  "Handyworkers",
  "Dog walkers",
  "Artists",
];

export default function WhoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">
          Built for the modern worker
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {workers.map((worker) => (
            <span
              key={worker}
              className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              {worker}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
