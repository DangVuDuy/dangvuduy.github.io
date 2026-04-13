import { AppStoreLink } from "../../lib/apps";
import { AppStoreButton } from "./AppStoreButton";

interface StoreButtonGroupProps {
  stores: AppStoreLink[];
  trackingContext: string;
  primaryLabel?: string;
  useStoreNamesWhenMultiple?: boolean;
  className?: string;
}

export function StoreButtonGroup({
  stores,
  trackingContext,
  primaryLabel,
  useStoreNamesWhenMultiple = true,
  className = "",
}: StoreButtonGroupProps) {
  if (stores.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
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
          />
        );
      })}
    </div>
  );
}
