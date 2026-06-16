export function MarqueeSection() {
  const items = [
    "YouTube разблокирован",
    "Discord активен",
    "Telegram доступен",
    "Без VPN",
    "Без логов",
    "ТСПУ обходится",
    "DPI-фрагментация",
    "Открытый код",
    "Прямое соединение",
    "Нет слежки",
  ]

  const Row = ({ reversed = false }: { reversed?: boolean }) => (
    <div className="mq-row">
      <div className={`mq-in${reversed ? " r" : ""}`}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mq-it">
            {item}
            <span className="mq-sep">+</span>
          </span>
        ))}
      </div>
    </div>
  )

  return (
    <div className="mq-zone">
      <Row />
      <div className="mq-div" />
      <Row reversed />
    </div>
  )
}
