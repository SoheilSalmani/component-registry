import IpadDeviceMock from "@/registry/new-york/ui/ipad-device-mock";
import IphoneDeviceMock from "@/registry/new-york/ui/iphone-device-mock";
import { SafariAppMock } from "@/registry/new-york/ui/safari-app-mock";

export interface AppShowcaseProps {
  mobileImageSrc?: string;
  tabletImageSrc?: string;
  browserImageSrc?: string;
  mobileVideoSrc?: string;
  tabletVideoSrc?: string;
  browserVideoSrc?: string;
}

export function AppShowcase({
  mobileImageSrc,
  tabletImageSrc,
  browserImageSrc,
  mobileVideoSrc,
  tabletVideoSrc,
  browserVideoSrc,
  ...props
}: AppShowcaseProps) {
  return (
    <div className="relative w-full h-[450px]" {...props}>
      <IphoneDeviceMock
        imageSrc={mobileImageSrc}
        videoSrc={mobileVideoSrc}
        className="absolute bottom-0 right-0 z-20 w-[110px]"
      />
      <IpadDeviceMock
        imageSrc={tabletImageSrc}
        videoSrc={tabletVideoSrc}
        className="absolute bottom-8 right-8 z-10 w-[185px]"
      />
      <SafariAppMock
        imageSrc={browserImageSrc}
        videoSrc={browserVideoSrc}
        className="absolute left-0 z-0 w-[636px]"
      />
    </div>
  );
}
