"use client";

import { useMemo, useState } from "react";
import { AppData } from "../../lib/apps";
import { AppCard } from "./AppCard";

interface AppGridProps {
  apps: AppData[];
}

export function AppGrid({ apps }: AppGridProps) {
  const filters = useMemo(
    () => ["All", ...new Set(apps.flatMap((app) => app.categories))],
    [apps]
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const rows = useMemo(() => {
    if (activeFilter !== "All") {
      return [
        {
          title: activeFilter,
          items: apps.filter((app) => app.categories.includes(activeFilter)),
        },
      ];
    }

    return [
      {
        title: "Featured apps",
        items: apps,
      },
    ];
  }, [activeFilter, apps]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gray-950 text-white shadow-[0_14px_32px_rgba(15,23,42,0.14)]"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-gray-950"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-8">
        {rows.map((row) => (
          <section key={row.title} className="space-y-3">
            <div>
              <h3 className="text-[1.65rem] font-semibold tracking-[-0.04em] text-gray-950">
                {row.title}
              </h3>
            </div>

            <div className="overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-5 px-1">
                {row.items.map((app) => (
                  <AppCard key={`${row.title}-${app.id}`} app={app} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
