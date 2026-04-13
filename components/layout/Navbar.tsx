"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { appSummaries } from "../../lib/apps";

const appsHref = { pathname: "/", hash: "apps" };

const navigation = [
  { href: appsHref, label: "Apps" },
  { href: "/faq", label: "FAQ" },
  { href: "/privacy", label: "Privacy" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const desktopSearchRef = useRef<HTMLDivElement | null>(null);
  const mobileSearchRef = useRef<HTMLDivElement | null>(null);

  const searchResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return appSummaries;
    }

    return appSummaries.filter((app) =>
      [app.name, app.tagline, ...app.categories]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [query]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideDesktop = desktopSearchRef.current?.contains(target);
      const clickedInsideMobile = mobileSearchRef.current?.contains(target);

      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setIsSearchOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleResultClick = () => {
    setIsSearchOpen(false);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-[1.75rem] border border-white/60 bg-white/78 px-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6">
          <div className="flex min-h-[72px] items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-gray-950 transition-opacity hover:opacity-90"
              onClick={() => setIsOpen(false)}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f3ffd5_0%,#ffffff_55%,#efe7ff_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#89d329,#8c67ff)] shadow-[0_0_18px_rgba(137,211,41,0.35)]" />
              </span>
              <span className="min-w-0">
                <span className="block text-[1.02rem] font-semibold tracking-[-0.03em]">
                  CloudLab
                </span>
                <span className="block text-[0.72rem] text-gray-500">
                  Mobile app studio
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-950/5 hover:text-gray-950"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <div ref={desktopSearchRef} className="relative">
                <label className="sr-only" htmlFor="desktop-app-search">
                  Search apps
                </label>
                <div className="flex h-11 items-center gap-3 rounded-full border border-gray-200 bg-white px-4 text-sm text-gray-600 shadow-sm transition-colors focus-within:border-gray-300">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m21 21-4.35-4.35M19 10.5A8.5 8.5 0 1 1 2 10.5a8.5 8.5 0 0 1 17 0Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                    />
                  </svg>
                  <input
                    id="desktop-app-search"
                    type="search"
                    value={query}
                    placeholder="Search apps"
                    className="w-44 bg-transparent text-sm text-gray-950 outline-none placeholder:text-gray-400"
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setIsSearchOpen(true);
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                  />
                </div>

                {isSearchOpen ? (
                  <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[340px] overflow-hidden rounded-[1.35rem] border border-gray-200 bg-white p-2 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                    <div className="px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-gray-400">
                      App results
                    </div>
                    <div className="max-h-[320px] overflow-y-auto">
                      {searchResults.length > 0 ? (
                        searchResults.map((app) => (
                          <Link
                            key={app.id}
                            href={app.href}
                            className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-gray-50"
                            onClick={handleResultClick}
                          >
                            <span
                              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.95rem]"
                              style={{ backgroundColor: app.accentLight }}
                            >
                              <Image
                                src={app.icon}
                                alt={`${app.name} icon`}
                                width={44}
                                height={44}
                                className="h-11 w-11 rounded-[0.95rem] object-cover"
                              />
                            </span>
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-semibold text-gray-950">
                                {app.name}
                              </span>
                              <span className="block truncate text-sm text-gray-500">
                                {app.tagline}
                              </span>
                            </span>
                          </Link>
                        ))
                      ) : (
                        <div className="px-3 py-6 text-sm text-gray-500">
                          No apps match your search.
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </div>

              <a
                href="mailto:support@cloudlab.one"
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-950"
              >
                Support
              </a>
              <Link
                href={appsHref}
                className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-4 py-2.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(15,23,42,0.18)] transition-transform hover:-translate-y-0.5"
              >
                Browse apps
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17 17 7M17 7H9M17 7v8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>

            <button
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-950 shadow-sm md:hidden"
              type="button"
              onClick={() => setIsOpen((open) => !open)}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.9"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.9"
                  />
                )}
              </svg>
            </button>
          </div>

          {isOpen ? (
            <div
              id="mobile-navigation"
              className="border-t border-gray-200/80 py-4 md:hidden"
            >
              <div className="flex flex-col gap-2">
                <div ref={mobileSearchRef} className="px-1 pb-2">
                  <label className="sr-only" htmlFor="mobile-app-search">
                    Search apps
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 shadow-sm">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m21 21-4.35-4.35M19 10.5A8.5 8.5 0 1 1 2 10.5a8.5 8.5 0 0 1 17 0Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                    <input
                      id="mobile-app-search"
                      type="search"
                      value={query}
                      placeholder="Search apps"
                      className="w-full bg-transparent text-sm text-gray-950 outline-none placeholder:text-gray-400"
                      onChange={(event) => {
                        setQuery(event.target.value);
                        setIsSearchOpen(true);
                      }}
                      onFocus={() => setIsSearchOpen(true)}
                    />
                  </div>

                  {isSearchOpen ? (
                    <div className="mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-[0_20px_44px_rgba(15,23,42,0.08)]">
                      {searchResults.length > 0 ? (
                        searchResults.map((app) => (
                          <Link
                            key={app.id}
                            href={app.href}
                            className="flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-gray-50"
                            onClick={handleResultClick}
                          >
                            <span
                              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.85rem]"
                              style={{ backgroundColor: app.accentLight }}
                            >
                              <Image
                                src={app.icon}
                                alt={`${app.name} icon`}
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-[0.85rem] object-cover"
                              />
                            </span>
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-semibold text-gray-950">
                                {app.name}
                              </span>
                              <span className="block truncate text-sm text-gray-500">
                                {app.tagline}
                              </span>
                            </span>
                          </Link>
                        ))
                      ) : (
                        <div className="px-3 py-5 text-sm text-gray-500">
                          No apps match your search.
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>

                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-950/5 hover:text-gray-950"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="mailto:support@cloudlab.one"
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-950/5 hover:text-gray-950"
                  onClick={() => setIsOpen(false)}
                >
                  Support
                </a>
                <Link
                  href={appsHref}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gray-950 px-4 py-3 text-sm font-medium text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Browse apps
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
