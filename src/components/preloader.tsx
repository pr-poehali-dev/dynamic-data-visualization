import { useEffect, useState } from "react"

export function Preloader({ onDone }: { onDone: () => void }) {
  const [fill, setFill] = useState(0)
  const [status, setStatus] = useState("INITIALIZING...")
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const stages = [
      { pct: 22, label: "LOADING WINDIVERT...", delay: 200 },
      { pct: 48, label: "KERNEL INJECTION...", delay: 600 },
      { pct: 71, label: "DPI ENGINE READY...", delay: 1000 },
      { pct: 89, label: "ROUTING TABLE...", delay: 1380 },
      { pct: 100, label: "SYSTEM ONLINE.", delay: 1700 },
    ]

    const timers: ReturnType<typeof setTimeout>[] = []
    stages.forEach(({ pct, label, delay }) => {
      timers.push(setTimeout(() => { setFill(pct); setStatus(label) }, delay))
    })
    timers.push(setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 500)
    }, 2200))

    return () => timers.forEach(clearTimeout)
  }, [onDone])

  if (!visible) return null

  return (
    <div className="pl" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s" }}>
      <div className="pl-box">
        <div className="pl-word">ZAPRET</div>
        <div className="pl-lbl">Core System Boot</div>
        <div className="pl-track">
          <div className="pl-fill" style={{ width: `${fill}%` }} />
        </div>
        <div className="pl-st">{status}</div>
      </div>
    </div>
  )
}
