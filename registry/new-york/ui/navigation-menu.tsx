import * as React from "react";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";

import { cn } from "@/registry/lib/utils";

function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-2",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn(
        "inline-flex h-9 w-max items-center justify-center rounded-full bg-background px-2 py-2 text-sm font-semibold transition-[color,box-shadow] outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "relative flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground data-[active=true]:hover:bg-accent data-[active=true]:focus:bg-accent [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuBadge({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="navigation-menu-badge"
      className={cn(
        "absolute inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border border-transparent text-xs whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3 [a&]:hover:bg-primary/90 -right-4 -top-0.5 rounded-full bg-primary px-0.5 py-0.5 text-[9px] font-medium leading-none text-primary-foreground",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuSheet({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("", className)} {...props} />;
}

function NavigationMenuSheetTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("", className)} {...props} />;
}

function NavigationMenuSheetClose({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("", className)} {...props} />;
}

function NavigationMenuSheetHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("", className)} {...props} />;
}

function NavigationMenuSheetContent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("", className)} {...props} />;
}

function NavigationMenuSheetItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("", className)} {...props} />;
}

function NavigationMenuSheetLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cn("", className)} {...props} />;
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuBadge,
  NavigationMenuSheet,
  NavigationMenuSheetTrigger,
  NavigationMenuSheetClose,
  NavigationMenuSheetHeader,
  NavigationMenuSheetContent,
  NavigationMenuSheetItem,
  NavigationMenuSheetLink,
};
