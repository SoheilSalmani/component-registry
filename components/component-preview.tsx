"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { Monitor, Moon, Smartphone, Sun, Tablet } from "lucide-react";

import { cn } from "@/registry/lib/utils";
import { Button } from "@/registry/new-york/ui/button";

export type ComponentPreviewTheme = "light" | "dark";

export type ComponentPreviewPresetKey =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

export const COMPONENT_PREVIEW_PRESETS: Record<
  ComponentPreviewPresetKey,
  { label: string; width: number; icon: React.ReactNode }
> = {
  xs: {
    label: "xs",
    width: 320,
    icon: <Smartphone className="size-4" />,
  },
  sm: {
    label: "sm",
    width: 640,
    icon: <Smartphone className="size-4" />,
  },
  md: {
    label: "md",
    width: 768,
    icon: <Tablet className="size-4" />,
  },
  lg: {
    label: "lg",
    width: 1024,
    icon: <Monitor className="size-4" />,
  },
  xl: {
    label: "xl",
    width: 1280,
    icon: <Monitor className="size-4" />,
  },
  "2xl": {
    label: "2xl",
    width: 1536,
    icon: <Monitor className="size-4" />,
  },
};

type ComponentPreviewContextValue = {
  title: string;
  width: number;
  height: number;
  theme: ComponentPreviewTheme;
  padding: number;
  presets: typeof COMPONENT_PREVIEW_PRESETS;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  setTheme: (theme: ComponentPreviewTheme) => void;
};

const ComponentPreviewContext =
  React.createContext<ComponentPreviewContextValue | null>(null);

function useComponentPreview() {
  const context = React.useContext(ComponentPreviewContext);

  if (!context) {
    throw new Error(
      "ComponentPreview primitives must be used inside <ComponentPreview>.",
    );
  }

  return context;
}

export type ComponentPreviewProps = {
  children: React.ReactNode;
  title?: string;
  initialPreset?: ComponentPreviewPresetKey;
  initialTheme?: ComponentPreviewTheme;
  padding?: number;
  presets?: typeof COMPONENT_PREVIEW_PRESETS;
  className?: string;
};

export function ComponentPreview({
  children,
  title = "Component preview",
  initialPreset = "md",
  initialTheme = "light",
  padding = 24,
  presets = COMPONENT_PREVIEW_PRESETS,
  className,
}: ComponentPreviewProps) {
  const [width, setWidth] = React.useState(presets[initialPreset].width);
  const [height, setHeight] = React.useState(200);
  const [theme, setTheme] = React.useState<ComponentPreviewTheme>(initialTheme);

  const value = React.useMemo<ComponentPreviewContextValue>(
    () => ({
      title,
      width,
      height,
      theme,
      padding,
      presets,
      setWidth,
      setHeight,
      setTheme,
    }),
    [title, width, height, theme, padding, presets],
  );

  return (
    <ComponentPreviewContext.Provider value={value}>
      <div className={cn("space-y-4", className)}>{children}</div>
    </ComponentPreviewContext.Provider>
  );
}

export type ComponentPreviewControlsProps = {
  className?: string;
};

export function ComponentPreviewControls({
  className,
}: ComponentPreviewControlsProps) {
  const { width, theme, presets, setWidth, setTheme } = useComponentPreview();

  const orderedPresets = React.useMemo(
    () =>
      Object.entries(presets).sort((a, b) => a[1].width - b[1].width) as Array<
        [ComponentPreviewPresetKey, (typeof presets)[ComponentPreviewPresetKey]]
      >,
    [presets],
  );

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 ",
        className,
      )}
    >
      <div className="text-sm text-muted-foreground">{width}px</div>

      <div className="flex flex-wrap items-center gap-2 font-mono">
        {orderedPresets.map(([key, preset]) => (
          <Button
            key={key}
            type="button"
            variant={width === preset.width ? "default" : "outline"}
            size="sm"
            onClick={() => setWidth(preset.width)}
          >
            {preset.icon}
            <span className="ml-2">{preset.label}</span>
          </Button>
        ))}

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon className="size-4" />
          ) : (
            <Sun className="size-4" />
          )}
        </Button>
      </div>
    </div>
  );
}

export type ComponentPreviewViewportProps = {
  children: React.ReactNode;
  className?: string;
};

export function ComponentPreviewViewport({
  children,
  className,
}: ComponentPreviewViewportProps) {
  const { width, height } = useComponentPreview();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [availableWidth, setAvailableWidth] = React.useState(0);

  React.useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const measure = () => {
      setAvailableWidth(element.clientWidth);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scale = availableWidth > 0 ? Math.min(1, availableWidth / width) : 1;

  return (
    <div
      ref={containerRef}
      className={cn("rounded-2xl border bg-muted p-6", className)}
    >
      <div
        className="mx-auto"
        style={{
          width: width * scale,
          height: height * scale,
        }}
      >
        <div
          style={{
            width,
            height,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export type ComponentPreviewFrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function ComponentPreviewFrame({
  children,
  className,
}: ComponentPreviewFrameProps) {
  const { title, width, theme, padding, setHeight } = useComponentPreview();

  const iframeRef = React.useRef<HTMLIFrameElement | null>(null);
  const mountNodeRef = React.useRef<HTMLElement | null>(null);
  const measureRef = React.useRef<() => void>(() => {});

  const [mounted, setMounted] = React.useState(false);
  const [internalHeight, setInternalHeight] = React.useState(200);

  React.useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let resizeObserver: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const setup = () => {
      const doc = iframe.contentDocument;
      const win = iframe.contentWindow;
      if (!doc || !win) return;

      copyHeadStyles(document, doc);
      syncThemeClass(doc, theme);

      let root = doc.getElementById(
        "component-preview-root",
      ) as HTMLDivElement | null;

      if (!root) {
        root = doc.createElement("div");
        root.id = "component-preview-root";
        doc.body.appendChild(root);
      }

      root.className = className ?? "";
      root.style.width = "100%";
      root.style.boxSizing = "border-box";
      root.style.padding = `${padding}px`;
      root.style.display = "flex";
      root.style.justifyContent = "center";
      root.style.alignItems = "flex-start";

      doc.documentElement.style.margin = "0";
      doc.documentElement.style.height = "auto";
      doc.documentElement.style.minHeight = "0";

      doc.body.style.margin = "0";
      doc.body.style.height = "auto";
      doc.body.style.minHeight = "0";
      doc.body.style.overflow = "hidden";

      mountNodeRef.current = root;
      setMounted(true);

      const measure = () => {
        win.requestAnimationFrame(() => {
          const nextHeight = Math.ceil(
            Math.max(
              root?.scrollHeight ?? 0,
              root?.offsetHeight ?? 0,
              root?.getBoundingClientRect().height ?? 0,
            ),
          );

          setInternalHeight(nextHeight);
          setHeight(nextHeight);
        });
      };

      measureRef.current = measure;

      resizeObserver?.disconnect();
      mutationObserver?.disconnect();

      resizeObserver = new win.ResizeObserver(() => {
        measure();
      });

      resizeObserver.observe(root);

      mutationObserver = new win.MutationObserver(() => {
        measure();
      });

      mutationObserver.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });

      doc.fonts?.ready?.then(measure).catch(() => {});
      measure();
    };

    iframe.addEventListener("load", setup);
    setup();

    return () => {
      iframe.removeEventListener("load", setup);
      resizeObserver?.disconnect();
      mutationObserver?.disconnect();
    };
  }, [theme, padding, className, setHeight]);

  React.useEffect(() => {
    const doc = iframeRef.current?.contentDocument;
    if (!doc) return;
    syncThemeClass(doc, theme);
  }, [theme]);

  React.useEffect(() => {
    const iframe = iframeRef.current;
    const win = iframe?.contentWindow;
    if (!iframe || !win) return;

    iframe.style.width = `${width}px`;

    measureRef.current();
    win.requestAnimationFrame(() => {
      measureRef.current();
    });
  }, [width]);

  return (
    <>
      <iframe
        ref={iframeRef}
        title={title}
        srcDoc={buildComponentPreviewSrcDoc(title)}
        className="shadow-md"
        style={{
          width,
          height: internalHeight,
          display: "block",
          border: "1px solid hsl(var(--border))",
          borderRadius: "16px",
          background: "hsl(var(--background))",
        }}
      />

      {mounted && mountNodeRef.current
        ? createPortal(children, mountNodeRef.current)
        : null}
    </>
  );
}

function buildComponentPreviewSrcDoc(title: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <style>
      html, body {
        margin: 0;
        padding: 0;
      }

      body {
        overflow: hidden;
      }

      #component-preview-root {
        width: 100%;
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <div id="component-preview-root"></div>
  </body>
</html>`;
}

function copyHeadStyles(fromDoc: Document, toDoc: Document) {
  if (toDoc.head.querySelector('[data-component-preview-styles="true"]')) {
    return;
  }

  const marker = toDoc.createElement("meta");
  marker.setAttribute("data-component-preview-styles", "true");
  toDoc.head.appendChild(marker);

  const nodes = fromDoc.head.querySelectorAll('link[rel="stylesheet"], style');
  nodes.forEach((node) => {
    toDoc.head.appendChild(node.cloneNode(true));
  });
}

function syncThemeClass(doc: Document, theme: ComponentPreviewTheme) {
  const baseClasses = document.documentElement.className
    .split(/\s+/)
    .filter(Boolean)
    .filter((cls) => cls !== "dark");

  if (theme === "dark") {
    baseClasses.push("dark");
  }

  doc.documentElement.className = baseClasses.join(" ");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
