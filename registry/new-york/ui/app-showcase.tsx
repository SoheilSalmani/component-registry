import * as React from "react";
import IpadDeviceMock from "@/registry/new-york/ui/ipad-device-mock";
import IphoneDeviceMock from "@/registry/new-york/ui/iphone-device-mock";
import { SafariAppMock } from "@/registry/new-york/ui/safari-app-mock";
import { cn } from "@/registry/lib/utils";

export type AppShowcaseProps = {
  browserUrl?: string;
  mobileImageSrc?: string;
  tabletImageSrc?: string;
  browserImageSrc?: string;
  mobileVideoSrc?: string;
  tabletVideoSrc?: string;
  browserVideoSrc?: string;
} & React.ComponentPropsWithRef<"div">;

export function AppShowcase({
  className,
  browserUrl,
  mobileImageSrc,
  tabletImageSrc,
  browserImageSrc,
  mobileVideoSrc,
  tabletVideoSrc,
  browserVideoSrc,
  ...props
}: AppShowcaseProps) {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      <IphoneDeviceMock
        imageSrc={mobileImageSrc}
        videoSrc={mobileVideoSrc}
        className="absolute bottom-0 right-0 z-20 w-2/12"
      />
      <IpadDeviceMock
        imageSrc={tabletImageSrc}
        videoSrc={tabletVideoSrc}
        className="absolute bottom-8 right-8 z-10 w-3/12"
      />
      <SafariAppMock
        url={browserUrl}
        imageSrc={browserImageSrc}
        videoSrc={browserVideoSrc}
        className="left-0 z-0 w-5/6 pb-12"
      />
    </div>
  );
}
