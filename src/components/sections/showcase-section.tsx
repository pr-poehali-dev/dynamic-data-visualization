import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import type React from "react"

const tabs = [
  {
    n: "// 01",
    title: "Dashboard",
    bar: "ZAPRET CORE — DASHBOARD",
    desc: "Сетевая телеметрия в реальном времени: throughput, RX/TX, статус движка и P2P-обфускации. Service Mode в один клик.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
  {
    n: "// 02",
    title: "Settings",
    bar: "ZAPRET CORE — SETTINGS",
    desc: "14 профилей обхода для разных провайдеров. Game Mode, TG Bypass (WSS), Cloudflare Proxy, Setup Node 2.0 с QR и tg://proxy.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </svg>
    ),
  },
  {
    n: "// 03",
    title: "Lists",
    bar: "ZAPRET CORE — DOMAIN LISTS",
    desc: "Редактор белых и чёрных списков доменов. Автообновление стратегий обхода из облачного репозитория.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    n: "// 04",
    title: "About",
    bar: "ZAPRET CORE — ABOUT",
    desc: "Версия движка, чейнлог, лицензия MIT. Прямые ссылки на GitHub, Telegram-канал и форум.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
]

const previewContent = [
  { emoji: "⚡", status: "ENGINE ACTIVE", sub: "throughput 940 Mbit/s · rx 1.2GB · tx 0.4GB" },
  { emoji: "⚙️", status: "14 PROFILES LOADED", sub: "Game Mode · TG Bypass WSS · Cloudflare Proxy" },
  { emoji: "📋", status: "LISTS SYNCED", sub: "2847 domains · last update 3 min ago" },
  { emoji: "ℹ️", status: "v2.5.5 STABLE", sub: "MIT License · Open Source · GitHub" },
]

export function ShowcaseSection() {
  const [active, setActive] = useState(0)
  const { ref, isVisible } = useReveal(0.1)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`sec rv${isVisible ? " vis" : ""}`} style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className={`sec-hd rv${isVisible ? " vis" : ""}`}>
          <div className="sec-hd-l">
            <div className="sec-n">// 003</div>
            <h2 className="sec-t">Интерфейс</h2>
          </div>
          <div className="sec-rule" />
          <div className="sec-tag">Application Preview</div>
        </div>

        <div className="show-wrap">
          {/* Stage */}
          <div className="show-stage">
            <div className="show-bar">
              <span className="show-dot r" /><span className="show-dot y" /><span className="show-dot g" />
              <span className="show-bar-t">{tabs[active].bar}</span>
              <span className="show-bar-i">v2.5.5</span>
            </div>
            <div
              className="show-frame"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem", padding: "2rem" }}
            >
              {/* Fake terminal preview */}
              <div style={{
                width: "100%",
                maxWidth: "420px",
                border: "1px solid var(--line2)",
                borderRadius: "var(--r-lg)",
                background: "rgb(5 5 8 / 0.7)",
                padding: "clamp(18px,2.8vw,32px)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                <div style={{ fontSize: "0.58rem", color: "var(--dim)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>
                  zapret-core · {tabs[active].bar.split("— ")[1]}
                </div>
                <div style={{ fontSize: "3rem", marginBottom: "12px", lineHeight: 1 }}>
                  {previewContent[active].emoji}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--c-green)", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "8px" }}>
                  ● {previewContent[active].status}
                </div>
                <div style={{ fontSize: "0.62rem", color: "var(--dim2)", letterSpacing: "1.5px" }}>
                  {previewContent[active].sub}
                </div>
                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[...Array(3)].map((_, i) => (
                    <div key={i} style={{ height: "1px", background: "var(--line)", borderRadius: "1px" }} />
                  ))}
                </div>
                <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {["RX", "TX", "PING", "MODE"].map((label) => (
                    <div key={label} style={{ padding: "8px 10px", border: "1px solid var(--line)", borderRadius: "8px", background: "rgb(255 255 255 / 0.02)" }}>
                      <div style={{ fontSize: "0.5rem", color: "var(--dim)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{label}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--paper)", fontWeight: 500 }}>
                        {label === "RX" ? "1.2 GB" : label === "TX" ? "0.4 GB" : label === "PING" ? "12 ms" : "KERNEL"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="show-side">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`show-tab${active === i ? " on" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="show-tab-i">{tab.icon}</span>
                <span className="show-tab-tx">
                  <span className="show-tab-h">
                    <span className="show-tab-n">{tab.n}</span>
                    <span className="show-tab-t">{tab.title}</span>
                  </span>
                  <span className="show-tab-d">{tab.desc}</span>
                </span>
              </button>
            ))}

            <div className="show-meta">
              <span><span className="dot" />Статус</span>
              <span><b>ACTIVE</b></span>
              <span>v2.5.5 Stable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
