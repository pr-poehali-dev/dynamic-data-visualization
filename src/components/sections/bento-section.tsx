import { useReveal } from "@/hooks/use-reveal"
import type React from "react"

const ArrowRight = () => (
  <svg className="cf-arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)

export function BentoSection() {
  const { ref, isVisible } = useReveal(0.15)

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`sec rv${isVisible ? " vis" : ""}`} id="arch">
      <div className="wrap">
        <div className={`sec-hd rv${isVisible ? " vis" : ""}`}>
          <div className="sec-hd-l">
            <div className="sec-n">// 001</div>
            <h2 className="sec-t">Архитектура</h2>
          </div>
          <div className="sec-rule" />
          <div className="sec-tag">Platform Modules</div>
        </div>

        <div className="bento">
          <div className="card s-a">
            <div className="cb">
              <div className="ci">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="ct">Zapret Dyson</h3>
              <p className="cd">
                Флагманский C++ клиент с интерфейсом на DirectX 11. Инъекция пакетов на уровне ядра ОС через WinDivert.
                Фрагментация трафика обманывает оборудование провайдера — YouTube, Discord и другие сервисы восстанавливаются без VPN.
              </p>
              <div className="cf"><ArrowRight /><span>Основной инструмент</span></div>
            </div>
          </div>

          <div className="card s-b">
            <div className="cb">
              <div className="ci">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="ct">Avocado Proxy</h3>
              <p className="cd">MTProto WebSocket туннель для Android. Гибридное ядро маскирует трафик под HTTPS. Stealth режим.</p>
              <div className="cf"><ArrowRight /><span>Для Android</span></div>
            </div>
          </div>

          <div className="card s-c">
            <div className="cb">
              <div className="ci">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="ct">Deadlock Boost</h3>
              <p className="cd">Source 2 Config. Отсечение рендеринга скрытой геометрии. Максимальный FPS без лагов.</p>
              <div className="cf"><ArrowRight /><span>Игровой модуль</span></div>
            </div>
          </div>

          <a
            href="https://pressf.com/dys0n/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="card card-gold s-d"
          >
            <div className="cb">
              <div className="ci">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="ct">Forbes Ledger</h3>
              <p className="cd">
                Поддержка серверной инфраструктуры и развития ядра платформы. Закрытый список меценатов.
                Каждое пожертвование конвертируется в мощности.
              </p>
              <div className="cf"><ArrowRight /><span>Попасть в список</span></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
