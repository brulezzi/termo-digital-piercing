"use client"

import { Sparkles } from "lucide-react"

type WelcomePageProps = {
  onNext: () => void
}

export function WelcomePage({ onNext }: WelcomePageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#0B0B0B] via-[#0B0B0B] to-[#1a1a1a]">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in duration-700">
        {/* Logo/Nome */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <Sparkles className="w-16 h-16 text-[#D4AF37] animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-tight">
            Debby Piercing
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
        </div>

        {/* Título Principal */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Termo de Responsabilidade
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Preencha este termo obrigatório antes do seu procedimento.
          </p>
        </div>

        {/* Informações */}
        <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-6 space-y-3">
          <p className="text-gray-400 text-sm">
            📍 Campinas/SP
          </p>
          <p className="text-gray-400 text-sm">
            ⏱️ Tempo estimado: 3-5 minutos
          </p>
        </div>

        {/* Botão */}
        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 active:scale-95"
        >
          Iniciar
        </button>

        {/* Footer */}
        <p className="text-gray-500 text-xs mt-8">
          Seus dados são protegidos e armazenados com segurança
        </p>
      </div>
    </div>
  )
}
