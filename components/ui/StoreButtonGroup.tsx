import { AppStoreLink } from "../../lib/apps";
import { AppStoreButton } from "./AppStoreButton";

interface StoreButtonGroupProps {
  stores: AppStoreLink[];
  trackingContext: string;
  primaryLabel?: string;
  useStoreNamesWhenMultiple?: boolean;
  stackOnMobile?: boolean;
  fullWidthOnMobile?: boolean;
  buttonClassName?: string;
  className?: string;
}

export function StoreButtonGroup({
  stores,
  trackingContext,
  primaryLabel,
  useStoreNamesWhenMultiple = true,
  stackOnMobile = false,
  fullWidthOnMobile = false,
  buttonClassName = "",
  className = "",
}: StoreButtonGroupProps) {
  if (stores.length === 0) {
    return null;
  }

  const layoutClassName = stackOnMobile
    ? "flex-col sm:flex-row sm:flex-wrap"
    : "flex-wrap";
  const responsiveButtonClassName = fullWidthOnMobile ? "w-full sm:w-auto" : "";

  return (
    <div className={`flex gap-3 ${layoutClassName} ${className}`.trim()}>
      {stores.map((store) => {
        const label =
          stores.length > 1 && useStoreNamesWhenMultiple
            ? store.name
            : primaryLabel ?? store.actionLabel;

        return (
          <AppStoreButton
            key={`${store.id}-${store.url}`}
            url={store.url}
            label={label}
            storeId={store.id}
            trackingContext={trackingContext}
            trackingLabel={`${trackingContext}:${store.id}:${label}`}
            className={`${responsiveButtonClassName} ${buttonClassName}`.trim()}
          />
        );
      })}
    </div>
  );
}
