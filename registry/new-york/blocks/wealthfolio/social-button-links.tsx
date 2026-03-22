import { cn } from "@/registry/lib/utils";
import { DiscordLogomark } from "@/registry/logos/discord/discord-logomark";
import { GitHubLogomark } from "@/registry/logos/github/github-logomark";
import { XLogomark } from "@/registry/logos/x/x-logomark";

function SocialButtonLinks({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div className={cn("flex items-stretch", className)} {...props}>
      <a
        href="https://discord.com/"
        className="flex items-center justify-center hover:bg-muted p-2 rounded-md"
      >
        <DiscordLogomark className="fill-gray-700 w-5" />
      </a>
      <a
        href="https://github.com/"
        className="flex items-center justify-center hover:bg-muted p-2 rounded-md"
      >
        <GitHubLogomark className="fill-gray-700 h-5" />
      </a>
      <a
        href="https://x.com/"
        className="flex items-center justify-center hover:bg-muted p-2 rounded-md"
      >
        <XLogomark className="fill-gray-700 h-[16px]" />
      </a>
    </div>
  );
}

export { SocialButtonLinks };
