import { useReveal } from "@/hooks/use-reveal"

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export function VsSection() {
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className={`sec rv${isVisible ? " vis" : ""}`}
      style={{ paddingTop: 0 }}
    >
      <div className="wrap">
        <div className="sec-hd">
          <div className="sec-hd-l">
            <p className="sec-n">02 / Сравнение</p>
            <h2 className="sec-t">Прямой доступ vs VPN</h2>
          </div>
          <div className="sec-rule" />
          <span className="sec-tag">Почему не VPN?</span>
        </div>

        <div className="vs-grid">
          <div className="vs-card vs-good">
            <div className="vs-hd">
              <div className="vs-ico">
                <CheckIcon />
              </div>
              <div>
                <p className="vs-l">Zapret Core</p>
                <p className="vs-t">Прямой доступ</p>
              </div>
            </div>
            <ul className="vs-list">
              {[
                ["Нативная скорость сети", "никакого дросселирования"],
                ["Работает на уровне ядра", "без стороннего ПО"],
                ["Нет промежуточных серверов", "ваш IP остаётся вашим"],
                ["Ноль логов", "данные не собираются вообще"],
                ["Бесплатно и открытый код", "GitHub, форки приветствуются"],
              ].map(([bold, text], i) => (
                <li key={i}>
                  <CheckIcon />
                  <span><b>{bold}</b> — {text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="vs-card vs-bad">
            <div className="vs-hd">
              <div className="vs-ico">
                <XIcon />
              </div>
              <div>
                <p className="vs-l">Обычный VPN</p>
                <p className="vs-t">Туннель через сервер</p>
              </div>
            </div>
            <ul className="vs-list">
              {[
                ["Скорость падает", "трафик идёт через сторонний сервер"],
                ["Ваш IP виден VPN-провайдеру", "он знает что вы смотрите"],
                ["Платная подписка", "от 100 до 1000₽ в месяц"],
                ["Логи хранятся", "часто передаются по запросу"],
                ["VPN могут заблокировать", "Роскомнадзор блокирует сервисы"],
              ].map(([bold, text], i) => (
                <li key={i}>
                  <XIcon />
                  <span><b>{bold}</b> — {text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
