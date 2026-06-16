import { useReveal } from "@/hooks/use-reveal"

export function BentoSection() {
  const { ref, isVisible } = useReveal(0.15)

  const cards = [
    {
      cls: "card s-a",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Обход на уровне ядра",
      desc: "ZAPRET CORE работает непосредственно со стеком TCP/IP Windows. Пакеты фрагментируются так, что системы глубокой инспекции ТСПУ не успевают их классифицировать — соединение устанавливается напрямую с сервером.",
      footer: "DPI · ТСПУ · TCP fragmentation",
    },
    {
      cls: "card card-gold s-b",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Прямое соединение",
      desc: "Никаких промежуточных серверов. Ваш трафик идёт напрямую к YouTube, Discord и Telegram — без замедлений VPN.",
      footer: "P2P · Без посредников · Нативная скорость",
    },
    {
      cls: "card s-c",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: "0 логов",
      desc: "ZAPRET CORE не собирает и не отправляет никаких данных. Работает локально — полная конфиденциальность.",
      footer: "No-log · Offline · Privacy",
    },
    {
      cls: "card s-d",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      title: "Без потерь скорости",
      desc: "В отличие от VPN, фрагментация пакетов практически не нагружает процессор и не снижает пропускную способность. 4K YouTube и голосовые звонки Discord работают без задержек.",
      footer: "Zero latency · High throughput · 4K ready",
    },
  ]

  return (
    <section
      ref={ref}
      className={`sec rv${isVisible ? " vis" : ""}`}
    >
      <div className="wrap">
        <div className="sec-hd">
          <div className="sec-hd-l">
            <p className="sec-n">01 / Архитектура</p>
            <h2 className="sec-t">Как это работает</h2>
          </div>
          <div className="sec-rule" />
          <span className="sec-tag">Без VPN · Без серверов</span>
        </div>

        <div className="bento">
          {cards.map((card, i) => (
            <div key={i} className={card.cls}>
              <div className="cb">
                <div className="ci">{card.icon}</div>
                <h3 className="ct">{card.title}</h3>
                <p className="cd">{card.desc}</p>
                <div className="cf">
                  <svg className="cf-arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  {card.footer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
