import { useReveal } from "@/hooks/use-reveal"
import type React from "react"

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export function VsSection() {
  const { ref, isVisible } = useReveal(0.15)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`sec rv${isVisible ? " vis" : ""}`} style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className={`sec-hd rv${isVisible ? " vis" : ""}`}>
          <div className="sec-hd-l">
            <div className="sec-n">// 002</div>
            <h2 className="sec-t">Direct ≠ VPN</h2>
          </div>
          <div className="sec-rule" />
          <div className="sec-tag">Why local mode</div>
        </div>

        <div className="vs-grid">
          <div className="vs-card vs-good">
            <div className="vs-hd">
              <div className="vs-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <div className="vs-l">// local engine</div>
                <div className="vs-t">ZAPRET CORE</div>
              </div>
            </div>
            <ul className="vs-list">
              <li><CheckIcon /><span><b>100% пропускная способность.</b> Трафик не уходит в чужой ЦОД — фрагментация и SNI-spoofing работают локально на уровне ядра.</span></li>
              <li><CheckIcon /><span><b>Нативный пинг.</b> Игры, Discord-голосовые и стриминг идут напрямую — никаких overlay-задержек VPN-туннеля.</span></li>
              <li><CheckIcon /><span><b>Никакого аккаунта.</b> Установил, запустил — работает. Никакой подписки, лимитов, телеметрии.</span></li>
              <li><CheckIcon /><span><b>HTTP-прокси для телефона.</b> Один ПК раздаёт обход на все устройства Wi-Fi сети — без root, без VPN-приложений на смартфоне.</span></li>
            </ul>
          </div>

          <div className="vs-card vs-bad">
            <div className="vs-hd">
              <div className="vs-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
                </svg>
              </div>
              <div>
                <div className="vs-l">// classic vpn</div>
                <div className="vs-t">VPN-провайдер</div>
              </div>
            </div>
            <ul className="vs-list">
              <li><XIcon /><span><b>Маршрут через чужой сервер.</b> Скорость падает в 2–4 раза, пинг растёт на сотни мс, провайдер видит постоянный шифрованный туннель.</span></li>
              <li><XIcon /><span><b>Легко детектируется.</b> ТСПУ распознаёт OpenVPN/WireGuard по сигнатурам и блокирует протокол целиком.</span></li>
              <li><XIcon /><span><b>Аккаунт и подписка.</b> Доверие сторонней компании, риск утечек логов, ежемесячная плата.</span></li>
              <li><XIcon /><span><b>Каждое устройство отдельно.</b> Свой клиент на каждый телефон, ПК и приставку — и платная подписка масштабируется по числу устройств.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
