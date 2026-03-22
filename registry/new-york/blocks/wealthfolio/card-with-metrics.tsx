import { GithubIcon } from "lucide-react";

function CardWithMetrics({
  className,
  ...props
}: React.ComponentPropsWithRef<"section">) {
  return (
    <section className="px-8 py-12 text-center bg-[hsl(150,25%,12%)] text-white rounded-4xl">
      <h2 className="font-serif text-4xl font-bold text-[hsl(40,30%,95%)] md:text-5xl lg:text-6xl">
        Your wealth,
        <br />
        <em>your rules</em>
      </h2>
      <p className="mx-auto mt-8 max-w-2xl text-lg text-[hsl(40,20%,75%)] font-mono mb-8">
        Wealthfolio works locally on your desktop, mobile, or self-hosted web
        server. No account needed. Connect is an optional subscription for
        brokerage sync and multi-device access.
      </p>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-2 items-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsla(40,30%,95%,0.1)]">
            <GithubIcon className="size-7" />
          </div>
          <div className="font-mono">
            <span className="mb-2 font-serif text-5xl font-bold">100%</span>
            <br />
            <span className="mb-1 text-lg font-semibold text-[hsl(40,30%,95%)]">
              Yours
            </span>
          </div>
          <p className="font-mono text-sm text-[hsl(40,20%,75%)]">
            Runs entirely on your devices.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsla(40,30%,95%,0.1)]">
            <GithubIcon className="size-7" />
          </div>
          <div className="font-mono">
            <span className="mb-2 font-serif text-5xl font-bold">100%</span>
            <br />
            <span className="mb-1 text-lg font-semibold text-[hsl(40,30%,95%)]">
              Open Source
            </span>
          </div>
          <p className="font-mono text-sm text-[hsl(40,20%,75%)]">
            Runs entirely on your devices.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsla(40,30%,95%,0.1)]">
            <GithubIcon className="size-7" />
          </div>
          <div className="font-mono">
            <span className="mb-2 font-serif text-5xl font-bold">∞</span>
            <br />
            <span className="mb-1 text-lg font-semibold text-[hsl(40,30%,95%)]">
              Yours
            </span>
          </div>
          <p className="font-mono text-sm text-[hsl(40,20%,75%)]">
            Runs entirely on your devices.
          </p>
        </div>
      </div>
    </section>
  );
}

export { CardWithMetrics };
