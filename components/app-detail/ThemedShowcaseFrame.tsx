import Image from "next/image";
import { AppData } from "../../lib/apps";

interface ThemedShowcaseFrameProps {
  app: AppData;
  src: string;
  alt: string;
  width: number;
  height: number;
  frameWidth: string;
  radiusClassName?: string;
  imageRadiusClassName?: string;
  className?: string;
}

export function ThemedShowcaseFrame({
  app,
  src,
  alt,
  width,
  height,
  frameWidth,
  radiusClassName = "rounded-[1.8rem]",
  imageRadiusClassName = "rounded-[1.2rem]",
  className = "",
}: ThemedShowcaseFrameProps) {
  return (
    <div
      className={`overflow-hidden border p-3 shadow-[0_24px_64px_rgba(15,23,42,0.14)] backdrop-blur-sm ${radiusClassName} ${className}`.trim()}
      style={{
        width: frameWidth,
        borderColor: app.theme.surfaceBorder,
        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.42) 0%, ${app.theme.surfaceStrong} 100%)`,
        boxShadow: `0 24px 64px ${app.theme.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.34)`,
      }}
    >
      <div
        className={`overflow-hidden ${imageRadiusClassName}`}
        style={{
          backgroundColor: "rgba(255,255,255,0.16)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28)",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}
