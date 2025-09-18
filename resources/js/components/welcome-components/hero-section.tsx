"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

interface StatItemProps {
  value: string
  label: string
  delay: number
}

function StatItem({ value, label, delay }: StatItemProps) {
  const [count, setCount] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const targetValue = Number.parseInt(value.replace(/\D/g, ""))
        const duration = 2000
        const steps = 60
        const increment = targetValue / steps
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= targetValue) {
            setCount(targetValue)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, value, delay])

  return (
    <div
      ref={ref}
      className={`text-center transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {count}
        {value.includes("+") && "+"}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
            Wujudkan Visi <span className="gradient-text">Digital</span> Anda
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance mb-8">
            Bersama <span className="gradient-text">Necode</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-12">
            Kami menghadirkan solusi digital terdepan dengan teknologi modern dan inovatif. Dari konsep hingga
            implementasi, wujudkan visi bisnis Anda bersama tim profesional kami.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3 text-lg group"
            >
              Mulai Proyek
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 px-8 py-3 text-lg group bg-transparent"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Lihat Demo
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          <StatItem value="500+" label="Proyek Selesai" delay={200} />
          <StatItem value="100+" label="Klien Puas" delay={400} />
          <StatItem value="50+" label="Tim Ahli" delay={600} />
          <StatItem value="5+" label="Tahun Pengalaman" delay={800} />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
