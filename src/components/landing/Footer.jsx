"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    setEmail("");
    toast({
      title: "Subscribed",
      description: "You'll start receiving bookkeeping tips soon.",
    });
  };

  return (
    <footer className="border-t border-border bg-card px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold leading-none">K</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">KlearBooks</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              KlearBooks is an AI-first financial clarity tool for the modern independent
              workforce — between your bank account and your accountant.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="mailto:support@klearbooks.ca" className="hover:text-foreground transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get bookkeeping tips for gig workers.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="h-11 w-11 shrink-0 rounded-md bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            &copy; 2026 KlearBooks. All rights reserved. KlearBooks is a financial
            management tool, not a registered financial advisor. The information provided
            is for informational purposes only and does not constitute professional tax,
            accounting, or legal advice. Always consult with a qualified professional
            before making significant financial decisions or filing tax returns.
          </p>
        </div>
      </div>
    </footer>
  );
}
