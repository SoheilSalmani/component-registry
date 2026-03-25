import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import PokemonPage from "@/registry/new-york/blocks/complex-component/page";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { AndroidDeviceMock } from "@/registry/new-york/ui/android-device-mock";
import IphoneDeviceMock from "@/registry/new-york/ui/iphone-device-mock";
import IpadDeviceMock from "@/registry/new-york/ui/ipad-device-mock";
import { SafariAppMock } from "@/registry/new-york/ui/safari-app-mock";
import { AppShowcase } from "@/registry/new-york/ui/app-showcase";
import { GitHubLogomark } from "@/registry/logos/github/github-logomark";
import { YCombinatorLogomark } from "@/registry/logos/ycombinator/ycombinator-logomark";
import { ProductHuntLogomark } from "@/registry/logos/product-hunt/product-hunt-logomark";
import { XLogomark } from "@/registry/logos/x/x-logomark";
import { DiscordLogomark } from "@/registry/logos/discord/discord-logomark";
import { NavigationMenu } from "@/registry/new-york/blocks/wealthfolio/navigation-menu";
import { LovedByTheOSSCommunity } from "@/registry/new-york/blocks/wealthfolio/loved-by-the-oss-community";
import { SocialButtonLinks } from "@/registry/new-york/blocks/wealthfolio/social-button-links";
import { AvailableFor } from "@/registry/new-york/blocks/wealthfolio/available-for";
import {
  HeadingContainer,
  HeadingContent,
  HeadingLabel,
  HeadingLabelIcon,
} from "@/registry/new-york/ui/heading";
import { DownloadIcon, PuzzleIcon } from "lucide-react";
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroShowcase,
  HeroTitle,
} from "@/registry/new-york/ui/hero";
import { Mark } from "@/registry/new-york/ui/mark";
import { Button } from "@/registry/new-york/ui/button";
import Link from "next/link";
import { SiteHeader } from "@/registry/new-york/blocks/wealthfolio/site-header";
import { ThemeToggle } from "@/registry/new-york/ui/theme-toggle";
import { FeatureCards } from "@/registry/new-york/blocks/wealthfolio/feature-cards";
import { CardWithMetrics } from "@/registry/new-york/blocks/wealthfolio/card-with-metrics";
import { FeatureCarousel } from "@/registry/new-york/blocks/wealthfolio/feature-carousel";
import {
  ComponentPreview,
  ComponentPreviewControls,
  ComponentPreviewFrame,
  ComponentPreviewViewport,
} from "@/components/component-preview";

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple hello world component
            </h2>
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>
          <div className="flex items-center justify-center relative">
            <HelloWorld />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A complex component showing hooks, libs and components.
            </h2>
            <OpenInV0Button name="complex-component" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PokemonPage />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A login form with a CSS file.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center relative">
            <ExampleCard />
          </div>
          Home
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A Android device mock component.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center relative">
            <AndroidDeviceMock />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A iPhone device mock component.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <IphoneDeviceMock />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A iPad device mock component.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center relative">
            <IpadDeviceMock />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A iPad device mock component.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center relative">
            <SafariAppMock url="soheil.salmani.me" />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A showcase of an app on multiple devices.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <AppShowcase />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              The GitHub logomark.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center relative">
            <GitHubLogomark />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              The YCombinator logomark.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center relative">
            <YCombinatorLogomark />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              The Product Hunt logomark.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center relative">
            <ProductHuntLogomark />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              The X logomark.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <XLogomark />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              The Discord logomark.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <DiscordLogomark />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A navigation menu component.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center relative">
            <NavigationMenu />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Loved by the open-source community.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <ComponentPreview initialPreset="md">
            <ComponentPreviewControls />
            <ComponentPreviewViewport>
              <ComponentPreviewFrame>
                <LovedByTheOSSCommunity />
              </ComponentPreviewFrame>
            </ComponentPreviewViewport>
          </ComponentPreview>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Links for social medias.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <SocialButtonLinks />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Available for.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <AvailableFor devices={["mobile", "tablet", "desktop", "web"]} />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Heading with label.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <HeadingContainer>
              <HeadingLabel>
                <HeadingLabelIcon>
                  <PuzzleIcon />
                </HeadingLabelIcon>
                Extensibility
              </HeadingLabel>
              <HeadingContent>
                <h2>
                  Extend with
                  <br />
                  <em>powerful add-ons</em>
                </h2>
              </HeadingContent>
            </HeadingContainer>
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Hero section.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Hero>
              <HeroTitle>
                Grow Wealth.
                <br />
                <em>Keep Control.</em>
              </HeroTitle>
              <HeroDescription>
                A beautiful, <Mark>private</Mark> and <Mark>open-source</Mark>{" "}
                investment tracker that runs locally on all your devices.
              </HeroDescription>
              <HeroActions>
                <Button
                  className="rounded-full font-mono font-light uppercase"
                  size="xl"
                  asChild
                >
                  <Link href="download">
                    Get Wealthfolio <DownloadIcon />
                  </Link>
                </Button>
              </HeroActions>
              <HeroShowcase>
                <AppShowcase
                  browserUrl="wealthfolio.app"
                  mobileImageSrc="screenshots/mobile.png"
                  tabletImageSrc="screenshots/tablet.png"
                  browserImageSrc="screenshots/desktop.png"
                />
              </HeroShowcase>
            </Hero>
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Theme toggle.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ThemeToggle theme="light" />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Site header.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <SiteHeader />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Feature cards.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <FeatureCards />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Card with metrics.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <CardWithMetrics />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Carousel of app features.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <FeatureCarousel />
          </div>
        </div>
      </main>
    </div>
  );
}
