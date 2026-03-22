import * as React from "react";
import { NavigationMenu } from "@/registry/new-york/blocks/wealthfolio/navigation-menu";
import { SocialButtonLinks } from "@/registry/new-york/blocks/wealthfolio/social-button-links";
import Link from "next/link";
import { Button } from "@/registry/new-york/ui/button";
import { Separator } from "@/registry/new-york/ui/separator";
import { cn } from "@/registry/lib/utils";
import { ThemeToggle } from "@/registry/new-york/ui/theme-toggle";
import { BanknoteIcon } from "lucide-react";

function SiteHeader({
  className,
  ...props
}: React.ComponentPropsWithRef<"header">) {
  return (
    <header className={cn("h-[32px] flex items-center gap-2", className)}>
      <Link href="/" className="flex items-center gap-1.5">
        <BanknoteIcon className="p-1 bg-black text-white rounded-md size-7" />
        Wealthfolio
      </Link>
      <NavigationMenu />
      <SocialButtonLinks />
      <Separator orientation="vertical" />
      <ThemeToggle theme="light" />
      <Button className="font-mono">Download</Button>
    </header>
  );
}

export { SiteHeader };
