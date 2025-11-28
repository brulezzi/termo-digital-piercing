"use client"

import { useRef, useState, useEffect } from "react"
import { Pen, RotateCcw, Check } from "lucide-react"

type SignaturePageProps = {
  updateFormData: (data: { signature: string; signatureDate: string }) => void
  onNext: () => void
}

export function SignaturePage({ updateFormData, onNext }: SignaturePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar canvas responsivo
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * 2
      canvas.height = rect.height * 2
      ctx.scale(2, 2)
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.strokeStyle = "#D4AF37"
      ctx.lineWidth = 2
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    setIsDrawing(true)
    setHasSignature(true)
    setError("")

    const rect = canvas.getBoundingClientRect()
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left
    const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top

    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left
    const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top

    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHasSignature(false)
    setError("")
  }

  const handleFinish = () => {
    if (!hasSignature) {
      setError("Por favor, assine no campo acima antes de continuar")
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const signatureData = canvas.toDataURL("image/png")
    const now = new Date().toISOString()

    updateFormData({
      signature: signatureData,
      signatureDate: now,
    })

    onNext()
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 space-y-3">
          <div className="flex justify-center">
            <Pen className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl font-bold text-[#D4AF37]">Assinatura Digital</h2>
          <p className="text-gray-400">Assine no campo abaixo para finalizar o termo</p>
          <div className="h-1 w-16 mx-auto bg-[#D4AF37] rounded-full" />
        </div>

        {/* Canvas de Assinatura */}
        <div className="space-y-4">
          <div className="bg-[#1a1a1a] border-2 border-[#D4AF37]/30 rounded-2xl p-4">
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-64 bg-[#0B0B0B] rounded-xl cursor-crosshair touch-none"
              style={{ touchAction: "none" }}
            />
          </div>

          {/* Instruções */}
          <div className="flex items-center justify-between text-sm text-gray-400 bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4">
            <span>✍️ Assine com o dedo ou mouse</span>
            <button
              onClick={clearSignature}
              className="flex items-center gap-2 text-[#D4AF37] hover:text-[#F4D03F] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Limpar
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Informações */}
          <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-6 space-y-3">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-[#D4AF37]">Ao assinar, você confirma que:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 ml-2">
              <li>Leu e compreendeu todos os termos</li>
              <li>Está ciente dos riscos do procedimento</li>
              <li>Compromete-se a seguir os cuidados orientados</li>
              <li>Autoriza a realização da perfuração</li>
            </ul>
            <p className="text-gray-500 text-xs pt-3 border-t border-[#D4AF37]/10">
              📅 Data e hora serão registradas automaticamente
            </p>
          </div>

          {/* Botão */}
          <button
            onClick={handleFinish}
            disabled={!hasSignature}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            Finalizar Termo
          </button>
        </div>
      </div>
    </div>
  )
}
