import Link from "next/link";

export const metadata = {
  title: "Terms of Service — KlearBooks",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold leading-none">K</span>
            </div>
            <span className="text-lg font-semibold tracking-tight">KlearBooks</span>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <div className="space-y-8 text-sm text-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold mb-3">Agreement</h2>
            <p className="text-muted-foreground">
              By using KlearBooks&apos; website or product, you agree to these terms. If you
              do not agree, do not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">What KlearBooks is</h2>
            <p className="text-muted-foreground">
              KlearBooks is a software tool that helps small business owners, solopreneurs,
              and gig workers organize financial records, categorize transactions, ask
              questions about their data, and generate reports. It is{" "}
              <strong className="text-foreground">not</strong> a licensed financial advisor,
              accountant, tax preparer, or legal service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">No financial advice</h2>
            <p className="text-muted-foreground">
              All outputs — including AI-generated insights, chat responses, and reports — are
              based solely on data you provide or connect. They are for{" "}
              <strong className="text-foreground">informational purposes only</strong> and do
              not constitute professional tax, accounting, legal, or investment advice.
              Always consult a qualified professional before making significant financial
              decisions or filing tax returns.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Your responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>You are responsible for the accuracy of information you provide</li>
              <li>You review AI categorizations and outputs before relying on them</li>
              <li>You maintain appropriate access controls for your account</li>
              <li>You use the service only for lawful business purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Subscriptions &amp; billing</h2>
            <p className="text-muted-foreground">
              Paid plans, when available, are billed through Stripe. Pricing, trial periods,
              and cancellation terms will be shown at checkout. You may cancel at any time
              through your account or by contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Limitation of liability</h2>
            <p className="text-muted-foreground">
              KlearBooks is provided &quot;as is.&quot; We are not liable for financial decisions
              made using the product, errors in AI-generated output, or losses arising from
              miscategorized transactions. Our total liability is limited to the amount you
              paid us in the twelve months preceding a claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Changes</h2>
            <p className="text-muted-foreground">
              We may update these terms. Continued use after changes constitutes acceptance.
              Material changes will be communicated via email or in-app notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground">
              Questions:{" "}
              <a href="mailto:support@klearbooks.ca" className="text-primary hover:underline">
                support@klearbooks.ca
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
