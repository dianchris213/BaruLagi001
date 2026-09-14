import { Link } from "@tanstack/react-router";
import { Home, Settings } from "lucide-react";

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 flex w-full max-w-[480px] -translate-x-1/2 justify-between rounded-t-2xl bg-surface px-12 py-4 shadow-nav">
      <Link
        to="/"
        aria-label="Beranda"
        activeOptions={{ exact: true }}
        activeProps={{ className: "text-primary" }}
        inactiveProps={{ className: "text-muted-foreground" }}
      >
        <Home className="size-6" />
      </Link>
      <Link
        to="/settings"
        aria-label="Pengaturan"
        activeProps={{ className: "text-primary" }}
        inactiveProps={{ className: "text-muted-foreground" }}
      >
        <Settings className="size-6" />
      </Link>
    </nav>
  );
}
