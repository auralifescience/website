'use client'

import { useEffect, useState } from 'react'

interface Blob {
  id: number
  color: string
  size: number
  x: number
  y: number
  morphDuration: number
  driftDuration: number
  delay: number
}

const colors = [
  '#8ef9d5', // mint
  '#d4fdee', // mint-light
  '#e2addb', // orchid
  '#5fc2f0', // azure
  '#f5c7be', // blush
]

function generateDriftKeyframes(id: number): string {
  const pts = Array.from({ length: 4 }, () => ({
    x: ((Math.random() - 0.5) * 60).toFixed(1),
    y: ((Math.random() - 0.5) * 60).toFixed(1),
  }))
  return `
    @keyframes drift-${id} {
      0%   { transform: translate(-50%, -50%) translate(0vw, 0vh); }
      25%  { transform: translate(-50%, -50%) translate(${pts[0].x}vw, ${pts[0].y}vh); }
      50%  { transform: translate(-50%, -50%) translate(${pts[1].x}vw, ${pts[1].y}vh); }
      75%  { transform: translate(-50%, -50%) translate(${pts[2].x}vw, ${pts[2].y}vh); }
      100% { transform: translate(-50%, -50%) translate(0vw, 0vh); }
    }
  `
}

export default function AnimatedBackground() {
  const [blobs, setBlobs] = useState<Blob[]>([])
  const [keyframesCSS, setKeyframesCSS] = useState('')

  useEffect(() => {
    const generatedBlobs: Blob[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      color: colors[i % colors.length],
      size: 300 + Math.random() * 400,
      x: 20 + Math.random() * 60,
      y: 20 + Math.random() * 60,
      morphDuration: 7.5 + Math.random() * 7.5,
      driftDuration: 15 + Math.random() * 12.5,
      delay: -(Math.random() * 15),
    }))
    const css = generatedBlobs.map((b) => generateDriftKeyframes(b.id)).join('\n')
    setBlobs(generatedBlobs)
    setKeyframesCSS(css)
  }, [])

  return (
    <div className="blob-container">
      <style>{keyframesCSS}</style>

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-aura-dark via-aura-dark-green to-aura-dark" />

      {/* Animated blobs */}
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full blob"
          style={{
            width: blob.size,
            height: blob.size,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            backgroundColor: blob.color,
            animation: `morphBlob ${blob.morphDuration}s ease-in-out infinite, drift-${blob.id} ${blob.driftDuration}s ease-in-out infinite`,
            animationDelay: `${blob.delay}s, ${blob.delay}s`,
          }}
        />
      ))}

      {/* Noise overlay for texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-aura-dark/80" />

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}
