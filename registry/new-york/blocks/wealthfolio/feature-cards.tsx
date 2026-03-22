import {
  SparkleIcon,
  SparklesIcon,
  TrendingUp,
  WalletIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { cn } from "@/registry/lib/utils";

function FeatureCards({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn(
        "font-mono rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className,
      )}
      {...props}
    >
      <Card className="group gap-0 relative overflow-hidden rounded-3xl border-2 border-foreground/10 bg-gradient-to-br from-background via-background to-secondary/30 shadow-none p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-xl dark:from-muted/20 dark:via-background dark:to-muted/10">
        <CardHeader className="p-0 mb-3">
          <CardTitle className="flex flex-col items-start gap-5 text-lg font-bold">
            <span className="p-4 rounded-2xl bg-foreground text-background transition-transform duration-300 group-hover:scale-110">
              <TrendingUp className="size-6" />
            </span>
            Investment Tracking
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-sm leading-relaxed text-muted-foreground">
          <p>
            Track portfolio composition, performance, and analytics. Compare
            against benchmarks and see how your investments are really doing.
          </p>
        </CardContent>
      </Card>
      <Card className="group gap-0 relative overflow-hidden rounded-3xl border-2 border-foreground/10 bg-gradient-to-br from-background via-background to-secondary/30 shadow-none p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-xl dark:from-muted/20 dark:via-background dark:to-muted/10">
        <CardHeader className="p-0 mb-3">
          <CardTitle className="flex flex-col items-start gap-5 text-lg font-bold">
            <span className="p-4 rounded-2xl bg-foreground text-background transition-transform duration-300 group-hover:scale-110">
              <WalletIcon className="size-6" />
            </span>
            Net Worth Tracking
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-sm leading-relaxed text-muted-foreground">
          <p>
            Get the full picture with assets and liabilities. Track your
            complete financial health in one place.
          </p>
        </CardContent>
      </Card>
      <Card className="group gap-0 relative overflow-hidden rounded-3xl border-2 border-foreground/10 bg-gradient-to-br from-background via-background to-secondary/30 shadow-none p-8 transition-all duration-300 hover:border-foreground/20 hover:shadow-xl dark:from-muted/20 dark:via-background dark:to-muted/10">
        <CardHeader className="p-0 mb-3">
          <CardTitle className="flex flex-col items-start gap-5 text-lg font-bold">
            <span className="p-4 rounded-2xl bg-foreground text-background transition-transform duration-300 group-hover:scale-110">
              <SparklesIcon className="size-6" />
            </span>
            AI Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 text-sm leading-relaxed text-muted-foreground">
          <p>
            Built-in AI to help you understand your portfolio, answer questions,
            and surface insights from your data.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export { FeatureCards };
