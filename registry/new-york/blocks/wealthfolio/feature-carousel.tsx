"use client";

import * as React from "react";
import { cn } from "@/registry/lib/utils";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/new-york/ui/carousel";
import Image from "next/image";
import { Progress } from "@/registry/new-york/ui/progress";

function FeatureCarousel({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const progress = (current * 100) / count;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={cn("w-full px-14", className)} {...props}>
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-8">
          <CarouselItem className="pl-8 basis-1/2">
            <Image
              width={1920}
              height={1080}
              src="/screenshots/desktop.png"
              alt="Screenshot of the app showing the investments tracking feature."
              className="shadow-md/25 border border-muted-foreground/15 h-auto w-full rounded-lg object-cover object-top mb-4"
            />
            <h3 className="text-base font-semibold md:text-lg">
              Investments Tracking
            </h3>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              All your brokers and banks in one view. Import CSV statements from
              anywhere.
            </p>
          </CarouselItem>
          <CarouselItem className="pl-8 basis-1/2">
            <Image
              width={1920}
              height={1080}
              src="/screenshots/desktop.png"
              alt="Screenshot of the app showing the investments tracking feature."
              className="shadow-md/25 border border-muted-foreground/15 h-auto w-full rounded-lg object-cover object-top mb-4"
            />
            <h3 className="text-base font-semibold md:text-lg">
              Net Worth Tracking
            </h3>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              Track all your assets and liabilities to see your complete
              financial picture.
            </p>
          </CarouselItem>
          <CarouselItem className="pl-8 basis-1/2">
            <Image
              width={1920}
              height={1080}
              src="/screenshots/desktop.png"
              alt="Screenshot of the app showing the investments tracking feature."
              className="shadow-md/25 border border-muted-foreground/15 h-auto w-full rounded-lg object-cover object-top mb-4"
            />
            <h3 className="text-base font-semibold md:text-lg">AI Assistant</h3>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              Ask questions about your portfolio and get AI-powered insights.
            </p>
          </CarouselItem>
          <CarouselItem className="pl-8 basis-1/2">
            <Image
              width={1920}
              height={1080}
              src="/screenshots/desktop.png"
              alt="Screenshot of the app showing the investments tracking feature."
              className="shadow-md/25 border border-muted-foreground/15 h-auto w-full rounded-lg object-cover object-top mb-4"
            />
            <h3 className="text-base font-semibold md:text-lg">
              Portfolio Insights
            </h3>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              Understand your asset allocation, sector exposure, and geographic
              distribution.
            </p>
          </CarouselItem>
          <CarouselItem className="pl-8 basis-1/2">
            <Image
              width={1920}
              height={1080}
              src="/screenshots/desktop.png"
              alt="Screenshot of the app showing the investments tracking feature."
              className="shadow-md/25 border border-muted-foreground/15 h-auto w-full rounded-lg object-cover object-top mb-4"
            />
            <h3 className="text-base font-semibold md:text-lg">
              Performance Dashboard
            </h3>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              Compare accounts and benchmark against the S&amp;P 500 or any ETF.
            </p>
          </CarouselItem>
          <CarouselItem className="pl-8 basis-1/2">
            <Image
              width={1920}
              height={1080}
              src="/screenshots/desktop.png"
              alt="Screenshot of the app showing the investments tracking feature."
              className="shadow-md/25 border border-muted-foreground/15 h-auto w-full rounded-lg object-cover object-top mb-4"
            />
            <h3 className="text-base font-semibold md:text-lg">
              Income Tracking
            </h3>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              Track dividends and interest income across your entire portfolio.
            </p>
          </CarouselItem>
          <CarouselItem className="pl-8 basis-1/2">
            <Image
              width={1920}
              height={1080}
              src="/screenshots/desktop.png"
              alt="Screenshot of the app showing the investments tracking feature."
              className="shadow-md/25 border border-muted-foreground/15 h-auto w-full rounded-lg object-cover object-top mb-4"
            />
            <h3 className="text-base font-semibold md:text-lg">
              Account Performance
            </h3>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              Drill into any account to see holdings and historical performance.
            </p>
          </CarouselItem>
          <CarouselItem className="pl-8 basis-1/2">
            <Image
              width={1920}
              height={1080}
              src="/screenshots/desktop.png"
              alt="Screenshot of the app showing the investments tracking feature."
              className="shadow-md/25 border border-muted-foreground/15 h-auto w-full rounded-lg object-cover object-top mb-4"
            />
            <h3 className="text-base font-semibold md:text-lg">
              Goals Tracking
            </h3>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              Set savings targets and track progress toward each goal.
            </p>
          </CarouselItem>
          <CarouselItem className="pl-8 basis-1/2">
            <Image
              width={1920}
              height={1080}
              src="/screenshots/desktop.png"
              alt="Screenshot of the app showing the investments tracking feature."
              className="shadow-md/25 border border-muted-foreground/15 h-auto w-full rounded-lg object-cover object-top mb-4"
            />
            <h3 className="text-base font-semibold md:text-lg">
              Contribution Limits
            </h3>
            <p className="mt-1 text-sm text-muted-foreground font-mono">
              Stay on top of IRA, 401(k), and TFSA contribution room.
            </p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="top-[calc(100%+1rem)] left-0 translate-y-0" />
        <CarouselNext className="top-[calc(100%+1rem)] left-2 translate-x-full translate-y-0" />
        <Progress
          className="absolute top-[calc(100%+1rem)] right-0 translate-y-3 w-24"
          value={progress}
        />
      </Carousel>
    </div>
  );
}

export { FeatureCarousel };
