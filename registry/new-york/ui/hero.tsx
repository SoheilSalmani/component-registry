import { cn } from "@/registry/lib/utils";

function Hero({ className, ...props }: React.ComponentPropsWithRef<"section">) {
  return (
    <section
      className={cn(
        "container flex flex-col items-center space-y-6 text-center p-10",
        className,
      )}
      {...props}
    />
  );
}

function HeroTitle({ className, ...props }: React.ComponentPropsWithRef<"h1">) {
  return (
    <h1
      className={cn(
        "font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl",
        className,
      )}
      {...props}
    />
  );
}

function HeroDescription({
  className,
  ...props
}: React.ComponentPropsWithRef<"p">) {
  return (
    <p
      className={cn(
        "mx-auto max-w-2xl text-balance text-lg text-foreground/80 md:text-xl font-mono",
        className,
      )}
      {...props}
    />
  );
}

function HeroActions({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return <div className={cn("mt-4 mb-10", className)} {...props} />;
}

function HeroShowcase({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return <div className={cn("", className)} {...props} />;
}

export { Hero, HeroTitle, HeroDescription, HeroActions, HeroShowcase };
