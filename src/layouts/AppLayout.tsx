import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <GlobalRevealObserver />
      <Outlet />
    </>
  );
}

function GlobalRevealObserver() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || typeof document === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    const observeNode = (node: Element) => {
      if (node.getAttribute("data-revealed") !== "true") {
        io.observe(node);
      }
    };

    const observeAll = () => {
      document.querySelectorAll("[data-reveal]").forEach(observeNode);
    };

    observeAll();

    const mo = new MutationObserver((mutations) => {
      let shouldRescan = false;
      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          shouldRescan = true;
          break;
        }
      }
      if (shouldRescan) observeAll();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
