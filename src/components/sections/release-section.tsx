import { useReveal } from "@/hooks/use-reveal"

export function ReleaseSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <div
      ref={ref}
      className={`rel rv${isVisible ? " vis" : ""}`}
    >
      <div className="rel-card">
        <div>
          <span className="rel-tag">
            <span className="bp" />
            Актуальная версия
          </span>
          <span className="rel-v">ZAPRET CORE v3.1</span>
          <p className="rel-d">
            Обновлён алгоритм DPI-обхода · Поддержка YouTube, Discord, Telegram
            <br />
            Windows 10/11 · Открытый исходный код
          </p>
        </div>

        <div className="rel-chips">
          <span className="rel-chip">YouTube ✓</span>
          <span className="rel-chip">Discord ✓</span>
          <span className="rel-chip">Telegram ✓</span>
          <span className="rel-chip">Без VPN</span>
          <span className="rel-chip">Без логов</span>
          <span className="rel-chip">Open Source</span>
        </div>

        <a
          href="https://github.com/zapretcore"
          target="_blank"
          rel="noopener noreferrer"
          className="rel-cta"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Скачать
        </a>
      </div>
    </div>
  )
}
