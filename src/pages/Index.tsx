import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import { MarqueeSection } from "@/components/sections/marquee-section"
import { ReleaseSection } from "@/components/sections/release-section"
import { BentoSection } from "@/components/sections/bento-section"
import { VsSection } from "@/components/sections/vs-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { FooterSection } from "@/components/sections/footer-section"
import { useRef, useEffect, useState } from "react"

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) clearInterval(intervalId)
    }, 100)

    const fallbackTimer = setTimeout(() => setIsLoaded(true), 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <CustomCursor />
      <GrainOverlay />

      {/* WebGL background — fixed, covers viewport */}
      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#0a0a14"
            colorB="#0d1a2e"
            speed={0.4}
            detail={0.6}
            blend={60}
            coarseX={30}
            coarseY={30}
            mediumX={30}
            mediumY={30}
            fineX={20}
            fineY={20}
          />
          <ChromaFlow
            baseColor="#0a1628"
            upColor="#1a3a5c"
            downColor="#050508"
            leftColor="#0d2040"
            rightColor="#4de894"
            intensity={0.5}
            radius={2.2}
            momentum={35}
            maskType="alpha"
            opacity={0.92}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Nav */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-opacity duration-700 md:px-12 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backdropFilter: "blur(18px)", borderBottom: "1px solid var(--line)", background: "rgb(5 5 8 / 0.62)" }}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 transition-transform hover:scale-105"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md transition-all hover:bg-white/20">
            <span className="font-mono text-lg font-bold text-white">+</span>
          </div>
          <span className="font-mono text-sm font-semibold tracking-[3px] text-white uppercase">ZAPRET CORE</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            { label: "Главная", id: "hero" },
            { label: "Архитектура", id: "bento" },
            { label: "Сравнение", id: "vs" },
            { label: "Возможности", id: "showcase" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-xs text-white/60 uppercase tracking-[2px] transition-colors hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <MagneticButton variant="primary" onClick={() => scrollTo("hero")}>
          Скачать
        </MagneticButton>
      </nav>

      {/* Content — all sections stacked vertically */}
      <div className="relative z-10">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <section
          id="hero"
          className={`relative flex min-h-screen flex-col justify-end px-6 pb-20 pt-28 md:px-12 md:pb-28 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="wrap">
            <div className="max-w-3xl">
              <div className="mb-5 inline-block animate-in fade-in slide-in-from-bottom-4 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 backdrop-blur-md duration-700">
                <p className="font-mono text-xs text-white/80 uppercase tracking-[3px]">Обход блокировок на уровне ядра</p>
              </div>

              <h1
                className="mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 uppercase text-white"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3rem, 9vw, 8rem)",
                  letterSpacing: "0.025em",
                  lineHeight: 1,
                }}
              >
                Оркестрация<br />
                <span style={{ color: "var(--c-green)" }}>сетевой</span><br />
                свободы
              </h1>

              <p className="mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-4 text-base leading-relaxed text-white/70 duration-1000 delay-200 md:text-lg">
                ZAPRET CORE — инструменты для обхода блокировок ТСПУ.<br />
                YouTube, Discord, Telegram снова работают. Без VPN. Без логов.
              </p>

              <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-col gap-4 duration-1000 delay-300 sm:flex-row sm:items-center">
                <a
                  href="https://github.com/zapretcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "9px",
                    padding: "14px 28px",
                    borderRadius: "11px",
                    background: "var(--paper)",
                    color: "var(--ink)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "transform 0.4s var(--ease), box-shadow 0.4s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = "0 16px 36px rgb(255 255 255 / 0.18)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = ""
                    e.currentTarget.style.boxShadow = ""
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Скачать бесплатно
                </a>
                <MagneticButton variant="secondary" onClick={() => scrollTo("bento")}>
                  Как это работает
                </MagneticButton>
              </div>

              {/* Stats row */}
              <div className="mt-12 flex gap-8 animate-in fade-in duration-1000 delay-500 flex-wrap">
                {[
                  { v: "0", l: "Логов" },
                  { v: "50K+", l: "Пользователей" },
                  { v: "3", l: "Сервиса" },
                  { v: "v3.1", l: "Версия" },
                ].map((s) => (
                  <div key={s.l}>
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                        letterSpacing: "0.04em",
                        color: "var(--c-green)",
                        lineHeight: 1,
                      }}
                    >
                      {s.v}
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "var(--dim)", letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "4px" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-500">
            <div className="flex items-center gap-2">
              <p className="font-mono text-xs text-white/50 uppercase tracking-[2px]">Листайте вниз</p>
              <div className="flex h-6 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 backdrop-blur-md">
                <div className="h-2 w-2 animate-pulse rounded-full bg-white/60" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Marquee ─────────────────────────────────────────────────── */}
        <MarqueeSection />

        {/* ── Release strip ───────────────────────────────────────────── */}
        <div className="wrap">
          <ReleaseSection />
        </div>

        {/* ── Bento ───────────────────────────────────────────────────── */}
        <div id="bento">
          <BentoSection />
        </div>

        {/* ── VS ──────────────────────────────────────────────────────── */}
        <div id="vs">
          <VsSection />
        </div>

        {/* ── Showcase ────────────────────────────────────────────────── */}
        <div id="showcase">
          <ShowcaseSection />
        </div>

        {/* ── Footer ──────────────────────────────────────────────────── */}
        <FooterSection />
      </div>

      <style>{`
        html { overflow-x: hidden; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.08) transparent; }
        html::-webkit-scrollbar { width: 4px; }
        html::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
        .bg-white\\/8 { background-color: rgb(255 255 255 / 0.08); }
      `}</style>
    </main>
  )
}
