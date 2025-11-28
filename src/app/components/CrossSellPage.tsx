"use client"

import { Heart, Sparkles } from "lucide-react"

export function CrossSellPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B] p-6 py-12 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        {/* Animação de Sucesso */}
        <div className="text-center space-y-8 animate-in fade-in duration-700">
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="w-24 h-24 text-[#D4AF37] animate-pulse" />
              <Sparkles className="w-10 h-10 text-[#F4D03F] absolute -top-3 -right-3 animate-spin" style={{ animationDuration: "3s" }} />
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
              Obrigada! 💛
            </h2>
            <p className="text-2xl text-white">
              Termo Finalizado com Sucesso
            </p>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full" />
          </div>

          {/* Card de Agradecimento */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0B] border-2 border-[#D4AF37] rounded-3xl p-10 space-y-6 shadow-2xl shadow-[#D4AF37]/30">
            
            <div className="space-y-4">
              <p className="text-white text-xl font-semibold">
                Você agora faz parte da família Debby Piercing!
              </p>
              <p className="text-gray-300 leading-relaxed">
                Estamos muito felizes em ter você conosco. Seu termo foi registrado com sucesso e você já pode aproveitar seu novo piercing com segurança.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Lembre-se de seguir todos os cuidados que enviamos e qualquer dúvida, estamos à disposição no WhatsApp!
              </p>
            </div>

            {/* Mensagem Especial */}
            <div className="bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-2xl p-6">
              <p className="text-[#D4AF37] font-bold text-lg mb-3 text-center">
                ✨ Dica Especial
              </p>
              <p className="text-gray-300 text-center">
                Tire uma foto do seu novo piercing e marque a gente no Instagram <strong className="text-[#D4AF37]">@debbypiercing</strong>! Adoramos ver o resultado! 📸
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D4AF37]/20">
              <div className="text-center">
                <p className="text-[#D4AF37] font-bold text-2xl">💛</p>
                <p className="text-white text-sm font-semibold mt-1">Qualidade</p>
              </div>
              <div className="text-center">
                <p className="text-[#D4AF37] font-bold text-2xl">✨</p>
                <p className="text-white text-sm font-semibold mt-1">Segurança</p>
              </div>
              <div className="text-center">
                <p className="text-[#D4AF37] font-bold text-2xl">🎯</p>
                <p className="text-white text-sm font-semibold mt-1">Cuidado</p>
              </div>
            </div>
          </div>

          {/* Informações Finais */}
          <div className="space-y-4">
            <p className="text-gray-400 text-sm">
              📍 Debby Piercing - Campinas/SP
            </p>
            <p className="text-gray-500 text-xs">
              Termo registrado em {new Date().toLocaleDateString('pt-BR')} às {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>

          {/* Botão para Novo Termo */}
          <div className="pt-6">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-[#1a1a1a] border border-[#D4AF37]/30 text-[#D4AF37] font-semibold py-4 px-6 rounded-xl hover:bg-[#D4AF37]/10 transition-all"
            >
              Preencher Novo Termo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
