import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { CustomCursor } from "@/components/custom-cursor"
import { GrainOverlay } from "@/components/grain-overlay"
import { MagneticButton } from "@/components/magnetic-button"
import { Preloader } from "@/components/preloader"
import { MarqueeSection } from "@/components/sections/marquee-section"
import { ReleaseSection } from "@/components/sections/release-section"
import { BentoSection } from "@/components/sections/bento-section"
import { VsSection } from "@/components/sections/vs-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { FooterSection } from "@/components/sections/footer-section"
import { useRef, useEffect, useState, useCallback } from "react"

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [preloaderDone, setPreloaderDone] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const handlePreloaderDone = useCallback(() => setPreloaderDone(true), [])

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
      {!preloaderDone && <Preloader onDone={handlePreloaderDone} />}
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
          className={`hero transition-opacity duration-700 ${preloaderDone ? "opacity-100" : "opacity-0"}`}
        >
          {/* Background grid */}
          <div className="hero-grid" aria-hidden="true" />
          {/* Corner accents */}
          <div className="hero-c tl" aria-hidden="true" />
          <div className="hero-c tr" aria-hidden="true" />
          <div className="hero-c bl" aria-hidden="true" />
          <div className="hero-c br" aria-hidden="true" />

          <div className="hero-in">
            {/* Badge */}
            <div className="hero-badge rv vis">
              <span className="bp" />
              <span>Closed core — open network</span>
            </div>

            {/* Heading with echo */}
            <h1 className="hero-h rv vis d1">
              <span className="hero-h-echo" aria-hidden="true">СВОБОДА.</span>
              <span className="hero-h-main">СВОБОДА.</span>
            </h1>

            <p className="hero-sub rv vis d2">
              Оркестрация трафика на низком уровне ядра. Полная анонимность.{" "}
              <strong>Никаких VPN.</strong> Только твой личный канал и математически идеальная фрагментация DPI&#8209;пакетов.
            </p>

            <div className="hero-btns rv vis d3">
              <a href="https://zapretcore.ru/downloads" className="btn btn-f">
                Каталог Сборок
              </a>
              <a
                href="https://pressf.com/dys0n/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-o"
              >
                Поддержать
              </a>
            </div>
          </div>

          {/* HUD */}
          <div className="hud rv vis d4">
            <div className="hud-c">
              <span className="hud-l">Online Nodes</span>
              <span className="hud-v">128</span>
            </div>
            <div className="hud-c">
              <span className="hud-l">Status</span>
              <span className="hud-v hud-ok">SECURE</span>
            </div>
            <div className="hud-c">
              <span className="hud-l">Version</span>
              <span className="hud-v">v2.5.5</span>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="scroll-hint" aria-hidden="true">
            <span>Scroll</span>
            <div className="scroll-l" />
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