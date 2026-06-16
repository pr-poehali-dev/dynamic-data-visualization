import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const tabs = [
  {
    n: "01",
    title: "YouTube 4K",
    desc: "Снятие замедления видеопотока. Полное разрешение, без буферизации.",
    meta: { label: "Статус", value: "Разблокировано", tag: "4K · 60fps" },
  },
  {
    n: "02",
    title: "Discord VoIP",
    desc: "Голос и видеозвонки без обрывов. UDP-пакеты проходят без задержек.",
    meta: { label: "Статус", value: "Разблокировано", tag: "VoIP · <10ms" },
  },
  {
    n: "03",
    title: "Telegram",
    desc: "Каналы, файлы, звонки — полный доступ без замедлений.",
    meta: { label: "Статус", value: "Разблокировано", tag: "MTProto · Прямой" },
  },
]

const icons = [
  // YouTube
  <svg key="yt" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>,
  // Discord
  <svg key="dc" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.11 18.1.127 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>,
  // Telegram
  <svg key="tg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4 20-7z" />
    <path d="M22 2 11 13" />
  </svg>,
]

export function ShowcaseSection() {
  const [active, setActive] = useState(0)
  const { ref, isVisible } = useReveal(0.15)

  return (
    <section
      ref={ref}
      className={`sec rv${isVisible ? " vis" : ""}`}
      style={{ paddingTop: 0 }}
    >
      <div className="wrap">
        <div className="sec-hd">
          <div className="sec-hd-l">
            <p className="sec-n">03 / Возможности</p>
            <h2 className="sec-t">Что разблокируем</h2>
          </div>
          <div className="sec-rule" />
          <span className="sec-tag">Живая демонстрация</span>
        </div>

        <div className="show-wrap">
          <div className="show-stage">
            <div className="show-bar">
              <div className="show-dot r" />
              <div className="show-dot y" />
              <div className="show-dot g" />
              <span className="show-bar-t">{tabs[active].title} — Активен</span>
              <span className="show-bar-i">Zapret Core</span>
            </div>
            <div className="show-frame" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ textAlign: "center", padding: "2rem" }}>
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
                  {active === 0 ? "▶" : active === 1 ? "🎙" : "✈️"}
                </div>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "3px", textTransform: "uppercase", color: "var(--c-green)", marginBottom: "0.5rem" }}>
                  ● Соединение установлено
                </p>
                <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "var(--dim)", letterSpacing: "2px" }}>
                  {tabs[active].meta.tag}
                </p>
              </div>
            </div>
          </div>

          <div className="show-side">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`show-tab${active === i ? " on" : ""}`}
                onClick={() => setActive(i)}
              >
                <div className="show-tab-i">{icons[i]}</div>
                <div className="show-tab-tx">
                  <div className="show-tab-h">
                    <span className="show-tab-n">{tab.n}</span>
                  </div>
                  <span className="show-tab-t">{tab.title}</span>
                  <p className="show-tab-d">{tab.desc}</p>
                </div>
              </button>
            ))}

            <div className="show-meta">
              <span>
                <span className="dot" />
                {tabs[active].meta.label}
              </span>
              <span><b>{tabs[active].meta.value}</b></span>
              <span>{tabs[active].meta.tag}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
