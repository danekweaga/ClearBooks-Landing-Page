import React from "react";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Sparkles,
  Download,
  CheckCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            AI-First Financial Clarity
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.1] text-foreground mb-6">
            Your business finances.{" "}
            <span className="text-primary">Finally understood.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            You don&apos;t use KlearBooks. KlearBooks runs itself. Connect your bank once —
            the agent categorizes every transaction, flags what needs attention, and answers
            your questions in plain English. Ask in chat or receive a monthly report.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button asChild size="lg" className="h-12 px-8 font-medium">
              <a href="#waitlist">Join waitlist</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 font-medium">
              <a href="#how-it-works">How it works</a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Informational software only. Not tax, accounting, legal, investment, or
            financial advice.
          </p>
        </div>

        <div className="relative">
          <div className="bg-card border border-border rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-sm">Financial Overview</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Live Insights
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-secondary rounded-xl p-3">
                <p className="text-xs text-muted-foreground mb-1">Income</p>
                <p className="text-lg font-semibold font-mono text-foreground">$4,820</p>
              </div>
              <div className="bg-secondary rounded-xl p-3">
                <p className="text-xs text-muted-foreground mb-1">Expenses</p>
                <p className="text-lg font-semibold font-mono text-foreground">$2,940</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-3">
                <p className="text-xs text-primary mb-1">Net Cash Flow</p>
                <p className="text-lg font-semibold font-mono text-primary">$1,880</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm border-b border-border pb-3 mb-3">
              <span className="text-muted-foreground">Top category</span>
              <span className="font-medium">Hardware &amp; Equipment</span>
            </div>
            <div className="flex items-center justify-between text-sm border-b border-border pb-3 mb-4">
              <span className="text-muted-foreground">Items to review</span>
              <span className="font-medium inline-flex items-center justify-center w-6 h-6 rounded-full bg-warning/20 text-foreground text-xs">
                5
              </span>
            </div>

            <div className="flex gap-3 bg-secondary rounded-xl p-4 mb-5">
              <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                &ldquo;Your operating margin improved by 12% this month due to reduced
                travel expenses.&rdquo;
              </p>
            </div>

            <Button variant="outline" className="w-full h-11 font-medium">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>

          <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-card border border-border rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCheck className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold">Auto-Categorized</p>
              <p className="text-xs text-muted-foreground">142 Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
