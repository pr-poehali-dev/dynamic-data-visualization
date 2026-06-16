export function MarqueeSection() {
  const row1 = [
    "KERNEL LEVEL INJECTION",
    "DPI BYPASS PROTOCOL",
    "WINDIVERT ORCHESTRATION",
    "MTPROTO WEBSOCKET",
    "ZERO TELEMETRY",
    "PACKET FRAGMENTATION",
  ]
  const row2 = [
    "NO LOGS NO TRACE",
    "YOUTUBE 4K RESTORED",
    "DISCORD ZERO LATENCY",
    "ENCRYPTED CHANNEL",
    "OPEN SOURCE CORE",
  ]

  return (
    <div className="mq-zone rv vis">
      <div className="mq-row">
        <div className="mq-in">
          {[...row1, ...row1].map((item, i) => (
            <span key={i} className="mq-it">
              {item}<span className="mq-sep">◆</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mq-div" />
      <div className="mq-row">
        <div className="mq-in r">
          {[...row2, ...row2].map((item, i) => (
            <span key={i} className="mq-it">
              {item}<span className="mq-sep">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
