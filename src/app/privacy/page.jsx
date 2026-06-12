import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — ClearBooks",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold leading-none">C</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">ClearBooks</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 prose prose-neutral">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-sm text-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-3">Overview</h2>
            <p className="text-muted-foreground">
              ClearBooks (&quot;we&quot;, &quot;us&quot;) is a financial management software tool. This
              policy describes how we collect, use, and protect information when you use our
              website and, when available, our product.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Information we collect</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Waitlist signups:</strong> name, email,
                business type, and any information you provide in the waitlist form.
              </li>
              <li>
                <strong className="text-foreground">Financial data (future product):</strong>{" "}
                when you connect a bank account, transaction data is accessed via Plaid and
                stored securely to power categorization, chat, and reports.
              </li>
              <li>
                <strong className="text-foreground">Usage data:</strong> basic analytics to
                improve the product (e.g. pages visited, feature usage).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">How we use your information</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>To operate ClearBooks and provide requested features</li>
              <li>To send waitlist updates and product communications you opt into</li>
              <li>To improve accuracy of AI categorization and insights</li>
              <li>We do not sell your financial data to third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Third-party services</h2>
            <p className="text-muted-foreground">
              We use trusted providers including Plaid (bank connections), Stripe (billing),
              and Google Cloud (AI processing). Each provider operates under its own privacy
              policy and security standards.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Data security</h2>
            <p className="text-muted-foreground">
              Financial data is encrypted in transit and at rest. Access is restricted to
              systems required to deliver the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Your rights</h2>
            <p className="text-muted-foreground">
              You may request access to, correction of, or deletion of your personal data by
              contacting{" "}
              <a href="mailto:support@clearbooks.ca" className="text-primary hover:underline">
                support@clearbooks.ca
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Not financial advice</h2>
            <p className="text-muted-foreground">
              ClearBooks provides informational software only. We do not provide financial,
              tax, accounting, legal, or investment advice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground">
              Questions about this policy:{" "}
              <a href="mailto:support@clearbooks.ca" className="text-primary hover:underline">
                support@clearbooks.ca
              </a>
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">
          <Link href="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </p>
      </main>
    </div>
  );
}
