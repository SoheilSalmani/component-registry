import { cn } from "@/registry/lib/utils";
import { Button } from "@/registry/new-york/ui/button";
import { GlobeIcon, MonitorIcon, TabletSmartphoneIcon } from "lucide-react";
import Link from "next/link";

type AvailableForProps = {
  devices: ("mobile" | "tablet" | "desktop" | "web")[];
} & React.ComponentPropsWithRef<"button">;

function AvailableFor({ devices, className, ...props }: AvailableForProps) {
  return (
    <Button
      variant="secondary"
      size="lg"
      className={cn(className, "rounded-full focus-visible:outline-offset-2")}
      {...props}
      asChild
    >
      <Link href="download">
        <span className="mr-2 font-mono">Available for</span>
        <span className="flex gap-3">
          <MonitorIcon />
          <TabletSmartphoneIcon />
          <GlobeIcon />
        </span>
      </Link>
    </Button>
  );
}

export { AvailableFor };
