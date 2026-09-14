import { createFileRoute } from "@tanstack/react-router";
import { Bell, ChevronRight, Moon, ShieldCheck, User } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Pengaturan — Catatan Keuangan Dian" },
      {
        name: "description",
        content: "Atur profil, notifikasi tagihan, keamanan, dan tampilan aplikasi catatan keuangan.",
      },
      { property: "og:title", content: "Pengaturan — Catatan Keuangan Dian" },
      {
        property: "og:description",
        content: "Atur profil, notifikasi tagihan, keamanan, dan tampilan aplikasi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SettingsPage,
});

const items = [
  { icon: User, label: "Profil", hint: "Dian" },
  { icon: Bell, label: "Notifikasi Tagihan", hint: "Aktif" },
  { icon: ShieldCheck, label: "Keamanan", hint: "PIN" },
  { icon: Moon, label: "Tampilan", hint: "Terang" },
];

function SettingsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="mx-auto min-h-screen w-full max-w-[480px] pb-28">
        <header className="rounded-b-2xl bg-surface px-5 py-6 shadow-card">
          <p className="text-xs text-muted-foreground">Akun</p>
          <h1 className="text-xl font-bold text-foreground">Pengaturan</h1>
        </header>

        <main className="px-4 pt-4">
          <section className="rounded-2xl bg-surface p-4 shadow-card">
            {items.map((item, i) => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 py-3 text-left ${
                  i < items.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <item.icon className="size-5 text-foreground" />
                </span>
                <span className="flex-1 text-sm font-semibold text-foreground">{item.label}</span>
                <span className="text-[12px] text-muted-foreground">{item.hint}</span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </button>
            ))}
          </section>
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
