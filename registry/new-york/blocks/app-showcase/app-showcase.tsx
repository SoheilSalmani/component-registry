import IpadDeviceMock from "../../ui/ipad-device-mock";
import IphoneDeviceMock from "../../ui/iphone-device-mock";
import { SafariAppMock } from "../../ui/safari-app-mock";

export function AppShowcase() {
  return (
    <div className="relative w-full h-[450px]">
      <IphoneDeviceMock className="absolute bottom-0 right-0 z-20 w-[110px]" />
      <IpadDeviceMock className="absolute bottom-8 right-8 z-10 w-[185px]" />
      <SafariAppMock className="absolute left-0 z-0 w-[636px]" />
    </div>
  );
}
