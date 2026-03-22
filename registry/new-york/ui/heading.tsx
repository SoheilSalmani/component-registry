import { cn } from "@/registry/lib/utils";
import { Slot } from "radix-ui";

function HeadingContainer(props: React.ComponentPropsWithRef<"div">) {
  return <div className="text-center mb-16" {...props} />;
}

function HeadingLabel({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn(
        "mb-6 inline-flex items-center gap-2 rounded-full bg-foreground/5 px-4 py-2 font-mono text-sm text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function HeadingLabelIcon(
  props: React.ComponentPropsWithRef<typeof Slot.Root>,
) {
  return <Slot.Root className="size-4">{props.children}</Slot.Root>;
}

function HeadingContent(props: React.ComponentPropsWithRef<typeof Slot.Root>) {
  return (
    <Slot.Root
      className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold"
      {...props}
    >
      {props.children}
    </Slot.Root>
  );
}

export { HeadingContainer, HeadingLabel, HeadingLabelIcon, HeadingContent };
