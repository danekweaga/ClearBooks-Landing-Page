"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2 } from "lucide-react";

const businessTypes = [
  "Freelancer / Solopreneur",
  "Gig worker (delivery, rideshare, etc.)",
  "Micro-business owner",
  "Consultant",
  "Creative / Artist",
  "Other",
];

export default function FinalCTASection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [businessType, setBusinessType] = useState(businessTypes[0]);
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Replace with a real API call (e.g. POST /api/waitlist) when ready.
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-20 px-6 scroll-mt-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-10">
          Start automating your bookkeeping today.
        </h2>

        <div className="bg-card border border-border rounded-2xl shadow-sm p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">You&apos;re on the list!</h3>
              <p className="text-sm text-muted-foreground">
                We&apos;ll email you when your early access invite is ready.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Jane Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="workEmail">Work Email</Label>
                <Input
                  id="workEmail"
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type</Label>
                <select
                  id="businessType"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="flex h-12 w-full rounded-md border border-input bg-card px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem">Biggest record-keeping problem?</Label>
                <Textarea
                  id="problem"
                  placeholder="e.g. Too many receipts, messy bank statements..."
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full h-12 font-medium" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join the waitlist"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                No credit card required. Early access invites sent monthly.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
