"use client";

interface AppStoreButtonProps {
  url: string;
  label?: string;
  storeId?: string;
  children?: React.ReactNode;
  trackingContext?: string;
  trackingLabel?: string;
  className?: string;
}

export function AppStoreButton({
  url,
  label = "Get the app",
  storeId = "generic",
  children,
  trackingContext,
  trackingLabel,
  className = "",
}: AppStoreButtonProps) {
  const handleClick = () => {
    if (typeof window === "undefined") {
      return;
    }

    const payload = {
      label: trackingLabel ?? label,
      storeId,
      url,
      context: trackingContext ?? "unknown",
      timestamp: Date.now(),
    };

    window.dispatchEvent(
      new CustomEvent("cloudlab:cta-click", {
        detail: payload,
      })
    );

    const analyticsWindow = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    analyticsWindow.gtag?.("event", "select_content", {
      content_type: "store_cta",
      item_id: storeId,
      item_name: trackingLabel ?? label,
      context: trackingContext ?? "unknown",
      destination: url,
    });
  };

  const icon = (() => {
    if (storeId === "app-store") {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 2.18-.09.06-2.17 1.28-2.15 3.81.03 3.03 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.63M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.05.05-2.31.71-3.04 1.57-.69.8-1.28 2.05-1.11 3.15 1.15.09 2.37-.74 3.08-1.61" />
        </svg>
      );
    }

    if (storeId === "google-play") {
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M3.61 2.91 13.9 13.2 3.8 23.3A2.1 2.1 0 0 1 3 21.8V4.4c0-.57.23-1.1.61-1.49Zm11.03 11.03 2.64 2.64-9.7 5.52 7.06-8.16Zm3.6-2.05 2.76 1.57c1.34.76 1.34 2.33 0 3.09l-2.96 1.69-2.97-2.97 3.17-3.38Zm-.96-.55L7.57 5.82l9.56 5.43-2.49 2.64-.36-.2Z" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );
  })();

  const defaultText = (
    <span className="flex items-center gap-2 whitespace-nowrap">
      {icon}
      <span>{label}</span>
    </span>
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-cta-context={trackingContext}
      data-cta-store={storeId}
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2.5 text-sm font-medium text-white whitespace-nowrap shadow-button transition-all hover:bg-gray-800 hover:shadow-button-hover ${className}`.trim()}
    >
      {children || defaultText}
      <svg className="h-3.5 w-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}
