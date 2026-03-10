"use client";

import type { SVGProps } from "react";

export interface IpadDeviceMockProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  imageSrc?: string;
  videoSrc?: string;
}

export default function IpadDeviceMock({
  width = 744,
  height,
  imageSrc,
  videoSrc,
  ...props
}: IpadDeviceMockProps) {
  return (
    <svg
      aria-label="iPad"
      fill="none"
      role="img"
      viewBox="0 0 744 1133"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...(props as any)}
    >
      {/* Outer body */}
      <rect
        x="2"
        y="2"
        width="740"
        height="1129"
        rx="56"
        className="fill-white stroke-[#e5e5e5] dark:fill-[#404040]"
        strokeWidth="4"
      />

      {/* Left edge buttons */}
      <rect
        x="0"
        y="180"
        width="4"
        height="72"
        rx="2"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />
      <rect
        x="0"
        y="270"
        width="4"
        height="72"
        rx="2"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />

      {/* Top button */}
      <rect
        x="592"
        y="0"
        width="92"
        height="4"
        rx="2"
        className="fill-[#E5E5E5] dark:fill-[#404040]"
      />

      {/* Inner frame */}
      <rect
        x="10"
        y="10"
        width="724"
        height="1113"
        rx="50"
        className="fill-white dark:fill-[#262626]"
      />

      {/* Screen border */}
      <rect
        x="34"
        y="34"
        width="676"
        height="1065"
        rx="36"
        className="fill-[#E5E5E5] stroke-[#E5E5E5] dark:fill-[#404040] dark:stroke-[#404040]"
        strokeWidth="1"
      />

      {/* Default background when no image/video */}
      {!(imageSrc || videoSrc) && (
        <rect
          x="34"
          y="34"
          width="676"
          height="1065"
          rx="36"
          fill="#000000"
          className="fill-[#f8f9fa] dark:fill-[#000000]"
        />
      )}

      {imageSrc && (
        <image
          href={imageSrc}
          x="34"
          y="34"
          width="676"
          height="1065"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      )}

      {videoSrc && (
        <foreignObject
          x="34"
          y="34"
          width="676"
          height="1065"
          clipPath="url(#roundedCorners)"
        >
          <video
            autoPlay
            className="size-full object-cover"
            loop
            muted
            playsInline
            src={videoSrc}
          />
        </foreignObject>
      )}

      {/* Front camera */}
      <circle
        cx="372"
        cy="18"
        r="4"
        className="fill-[#D4D4D4] dark:fill-[#525252]"
      />
      <circle
        cx="372"
        cy="18"
        r="2.25"
        className="fill-[#A3A3A3] dark:fill-[#737373]"
      />

      <defs>
        <clipPath id="roundedCorners">
          <rect x="34" y="34" width="676" height="1065" rx="36" />
        </clipPath>
      </defs>
    </svg>
  );
}
