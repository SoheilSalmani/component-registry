import { GitHubLogomark } from "@/registry/logos/github/github-logomark";
import { ProductHuntLogomark } from "@/registry/logos/product-hunt/product-hunt-logomark";
import { YCombinatorLogomark } from "@/registry/logos/ycombinator/ycombinator-logomark";
import { ChevronUpIcon, CrownIcon } from "lucide-react";
import { Separator } from "../../ui/separator";

function LovedByTheOSSCommunity() {
  return (
    <section>
      <p className="font-mono mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Loved by the open-source community
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 place-items-center gap-4">
        <a
          href="https://github.com/"
          target="_blank"
          className="border border-black rounded-md h-[48px] w-[225px] flex text-lg items-center justify-center gap-2 transition-transform duration-300 hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-black/60 focus-visible:scale-105"
        >
          <GitHubLogomark className="h-[26px]" />
          <span className="font-bold font-mono">7,164</span>
          <span className="text-muted-foreground text-sm font-mono">stars</span>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          className="border border-[#fb651e] text-[#fb651e] rounded-md h-[48px] w-[225px] flex items-center justify-between px-2 text-sm transition-transform duration-300 hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#fb651e]/60 focus-visible:scale-105"
        >
          <div className="flex items-stretch justify-between gap-2 w-full">
            <YCombinatorLogomark className="h-[32px]" />
            <div className="flex flex-col flex-grow justify-between">
              <span className="uppercase text-[0.65em] font-bold">
                Featured on
              </span>
              <span className="font-extrabold text-[1.3em] leading-none">
                Hacker News
              </span>
            </div>
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-auto bg-[#fb651e]"
            />
            <div className="flex flex-col font-semibold justify-center items-center font-mono text-xs">
              <ChevronUpIcon className="h-4" />
              924
            </div>
          </div>
        </a>
        <a
          href="https://producthunt.com/"
          target="_blank"
          className="border border-[#da552f] text-[#da552f] rounded-md h-[48px] w-[225px] flex items-center justify-between px-2 text-sm transition-transform duration-300 hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#da552f]/60 focus-visible:scale-105"
        >
          <div className="flex items-stretch justify-between gap-2 w-full">
            <ProductHuntLogomark className="h-[32px]" />
            <div className="flex flex-col flex-grow justify-between">
              <span className="uppercase text-[0.65em] font-bold">
                Featured on
              </span>
              <span className="font-extrabold text-[1.3em] leading-none">
                Product Hunt
              </span>
            </div>
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-auto bg-[#fb651e]"
            />
            <div className="flex flex-col font-semibold justify-center items-center font-mono text-xs">
              <ChevronUpIcon className="h-4" />
              184
            </div>
          </div>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          className="border border-indigo-800 text-indigo-800 rounded-md h-[48px] w-[225px] flex items-center justify-between px-2 text-sm transition-transform duration-300 hover:scale-105 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-indigo-800/60 focus-visible:scale-105"
        >
          <div className="flex items-stretch justify-between gap-2 w-full">
            <CrownIcon className="h-[32px]" />
            <div className="flex flex-col flex-grow justify-between">
              <span className="uppercase text-[0.65em] font-bold">
                GitHub Trending
              </span>
              <span className="font-extrabold">#1 Repository of the Day</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export { LovedByTheOSSCommunity };
