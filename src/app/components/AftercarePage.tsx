"use client"

import { Heart, Clock, Droplets, AlertCircle, MessageCircle, Instagram, ShoppingBag, Sparkles, Gift } from "lucide-react"

type AftercarePageProps = {
  onNext: () => void
}

export function AftercarePage({ onNext }: AftercarePageProps) {
  const whatsappNumber = "5519988404390"
  const whatsappMessage = encodeURIComponent(
    "Olá! Acabei de finalizar meu termo digital na Debby Piercing. Obrigado(a) pelo atendimento e cuidado! 💛"
  )
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const catalogoLink = "https://wa.me/c/5519989644538"
  const instagramDebbyModas = "https://www.instagram.com/debbymodas.ofc"
  const instagramDebbyPiercing = "https://www.instagram.com/debbypiercing"

  const handleWhatsApp = () => {
    window.open(whatsappLink, "_blank")
  }

  const handleCatalogo = () => {
    window.open(catalogoLink, "_blank")
  }

  const handleInstagramModas = () => {
    window.open(instagramDebbyModas, "_blank")
  }

  const handleInstagramPiercing = () => {
    window.open(instagramDebbyPiercing, "_blank")
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-6 py-12">
      <div className="max-w-3xl mx-auto space-y-12">
        
        {/* ========== SEÇÃO 1: CUIDADOS PÓS-PROCEDIMENTO ========== */}
        <section>
          {/* Header */}
          <div className="text-center mb-8 space-y-3">
            <div className="flex justify-center">
              <Heart className="w-12 h-12 text-[#D4AF37] animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-[#D4AF37]">Cuidados Obrigatórios</h2>
            <p className="text-gray-400">Após Sua Perfuração</p>
            <div className="h-1 w-16 mx-auto bg-[#D4AF37] rounded-full" />
          </div>

          {/* Alerta Importante */}
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#F4D03F]/20 border border-[#D4AF37] rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#D4AF37] font-bold text-lg">Atenção!</h3>
                <p className="text-white leading-relaxed">
                  A cicatrização adequada depende exclusivamente dos cuidados que você realizar diariamente. Siga rigorosamente todas as orientações.
                </p>
              </div>
            </div>
          </div>

          {/* Cuidados Principais */}
          <div className="space-y-4 mb-8">
            {/* Higienização */}
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Droplets className="w-6 h-6 text-[#D4AF37]" />
                <h3 className="text-white font-bold text-lg">Higienização</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-8">
                <li>Lave as mãos antes de tocar no piercing</li>
                <li>Limpe 2-3 vezes ao dia com soro fisiológico</li>
                <li>Use sabonete neutro suavemente</li>
                <li>Seque com papel toalha descartável</li>
                <li>Não use álcool, água oxigenada ou pomadas</li>
              </ul>
            </div>

            {/* Restrições Alimentares - ATUALIZADO */}
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
                <h3 className="text-white font-bold text-lg">Restrições Alimentares</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg p-4">
                  <p className="text-[#D4AF37] font-bold mb-3">⚠️ Durante 1 mês corrido:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Não comer bacon</li>
                    <li>Não comer carne de porco</li>
                    <li>Não comer calabresa</li>
                    <li>Não comer frutos do mar</li>
                    <li>Não comer peixes</li>
                    <li>Não comer chocolate</li>
                    <li>Evite alimentos gordurosos e frituras</li>
                    <li>Evite bebidas alcoólicas</li>
                    <li>Reduza alimentos muito condimentados</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* O Que Evitar */}
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-6 space-y-3">
              <h3 className="text-white font-bold text-lg">❌ O Que Evitar</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Não mexa, gire ou puxe a joia desnecessariamente</li>
                <li>Evite piscinas, praias e banheiras por 30 dias</li>
                <li>Não durma em cima do piercing</li>
                <li>Evite roupas apertadas na região</li>
                <li>Não remova a joia antes do tempo indicado</li>
                <li>Evite maquiagem ou produtos químicos na área</li>
              </ul>
            </div>

            {/* Tempo de Cicatrização */}
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#1a1a1a] border-2 border-[#D4AF37] rounded-xl p-6 space-y-4">
              <h3 className="text-[#D4AF37] font-bold text-xl text-center">⏱️ Tempo de Cicatrização</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#0B0B0B] rounded-lg p-4 text-center">
                  <p className="text-[#D4AF37] font-bold text-2xl mb-2">1 mês</p>
                  <p className="text-gray-300 text-sm">Restrição alimentar</p>
                </div>
                <div className="bg-[#0B0B0B] rounded-lg p-4 text-center">
                  <p className="text-[#D4AF37] font-bold text-2xl mb-2">1 ano</p>
                  <p className="text-gray-300 text-sm">Cicatrização total</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center pt-3 border-t border-[#D4AF37]/20">
                O tempo pode variar de acordo com cada organismo e cuidados realizados
              </p>
            </div>

            {/* Sinais de Alerta */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 space-y-3">
              <h3 className="text-red-400 font-bold text-lg">🚨 Procure Ajuda Se Notar:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Vermelhidão intensa ou que piora com o tempo</li>
                <li>Inchaço excessivo após 48 horas</li>
                <li>Secreção amarelada ou esverdeada (pus)</li>
                <li>Dor intensa que não melhora</li>
                <li>Febre ou mal-estar</li>
                <li>Sangramento persistente</li>
              </ul>
            </div>
          </div>

          {/* Botão WhatsApp */}
          <div className="space-y-4">
            <button
              onClick={handleWhatsApp}
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg py-5 px-8 rounded-xl shadow-2xl hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Confirmar no WhatsApp
            </button>

            <p className="text-center text-gray-500 text-sm">
              📱 (19) 98840-4390
            </p>
          </div>
        </section>

        {/* ========== GANCHO ESTRATÉGICO (NOVO!) ========== */}
        <div className="relative">
          {/* Card de Gancho */}
          <div className="bg-gradient-to-r from-[#D4AF37]/10 via-[#F4D03F]/10 to-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-2xl p-6 shadow-2xl shadow-[#D4AF37]/30 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="bg-[#D4AF37] p-3 rounded-full flex-shrink-0">
                <Gift className="w-8 h-8 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#D4AF37] font-bold text-xl mb-2">
                  🎁 Você sabia?
                </h3>
                <p className="text-white leading-relaxed">
                  Clientes da Debby Piercing têm <strong className="text-[#D4AF37]">desconto exclusivo</strong> na Debby Modas! Continue lendo para descobrir como aproveitar. 👇
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========== DIVISOR ========== */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#D4AF37]/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0B0B0B] px-6 text-[#D4AF37] font-bold">✨</span>
          </div>
        </div>

        {/* ========== SEÇÃO 2: CROSS-SELL DEBBY MODAS ========== */}
        <section>
          <div className="text-center mb-8 space-y-3">
            <div className="flex justify-center">
              <Sparkles className="w-12 h-12 text-[#D4AF37] animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-[#D4AF37]">Conheça a Debby Modas</h2>
            <p className="text-gray-400">Vantagens exclusivas para você!</p>
            <div className="h-1 w-16 mx-auto bg-[#D4AF37] rounded-full" />
          </div>

          {/* Card Debby Modas */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0B0B0B] border-2 border-[#D4AF37] rounded-3xl p-8 space-y-6 shadow-2xl shadow-[#D4AF37]/20">
            
            {/* Ícone */}
            <div className="flex justify-center">
              <div className="bg-[#D4AF37]/20 p-4 rounded-2xl">
                <ShoppingBag className="w-12 h-12 text-[#D4AF37]" />
              </div>
            </div>

            {/* Descrição */}
            <div className="bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-2xl p-6 space-y-4">
              <p className="text-gray-300 text-center leading-relaxed">
                Clientes da <strong className="text-[#D4AF37]">Debby Piercing</strong> têm vantagens exclusivas na <strong className="text-[#D4AF37]">Debby Modas</strong>!
              </p>
              <p className="text-gray-300 text-center leading-relaxed">
                Conheça nossas coleções <strong className="text-[#D4AF37]">Plus</strong> e <strong className="text-[#D4AF37]">Slim</strong> com preços especiais.
              </p>
            </div>

            {/* Benefícios */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-xl p-4 text-center">
                <p className="text-[#D4AF37] font-bold text-lg mb-1">✨</p>
                <p className="text-white text-sm font-semibold">Coleção Plus</p>
                <p className="text-gray-400 text-xs mt-1">Tamanhos especiais</p>
              </div>
              <div className="bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-xl p-4 text-center">
                <p className="text-[#D4AF37] font-bold text-lg mb-1">💎</p>
                <p className="text-white text-sm font-semibold">Coleção Slim</p>
                <p className="text-gray-400 text-xs mt-1">Modelagem exclusiva</p>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-3">
              {/* Botão Catálogo WhatsApp */}
              <button
                onClick={handleCatalogo}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg py-5 px-8 rounded-xl shadow-2xl hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Ver Catálogo no WhatsApp
              </button>

              {/* Botão Instagram */}
              <button
                onClick={handleInstagramModas}
                className="w-full bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#833AB4] text-white font-bold text-lg py-5 px-8 rounded-xl shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3"
              >
                <Instagram className="w-6 h-6" />
                Seguir @debbymodas.ofc
              </button>
            </div>

            {/* Informação Adicional */}
            <div className="text-center space-y-2 pt-4 border-t border-[#D4AF37]/20">
              <p className="text-gray-400 text-sm">
                🎁 Desconto especial para clientes da Debby Piercing
              </p>
              <p className="text-gray-500 text-xs">
                Mencione que fez piercing conosco ao comprar
              </p>
            </div>
          </div>
        </section>

        {/* ========== DIVISOR ========== */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#D4AF37]/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0B0B0B] px-6 text-[#D4AF37] font-bold">💛</span>
          </div>
        </div>

        {/* ========== SEÇÃO 3: CONTATOS DEBBY PIERCING ========== */}
        <section>
          <div className="text-center mb-6 space-y-3">
            <h3 className="text-2xl font-bold text-white">Fale Conosco</h3>
            <p className="text-gray-400">Estamos aqui para te ajudar!</p>
          </div>

          <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-6 space-y-4">
            {/* WhatsApp */}
            <div className="flex items-center justify-between p-4 bg-[#0B0B0B] rounded-xl">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
                <div>
                  <p className="text-white font-semibold">WhatsApp</p>
                  <p className="text-gray-400 text-sm">(19) 98840-4390</p>
                </div>
              </div>
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-all"
              >
                Abrir
              </button>
            </div>

            {/* Instagram */}
            <div className="flex items-center justify-between p-4 bg-[#0B0B0B] rounded-xl">
              <div className="flex items-center gap-3">
                <Instagram className="w-6 h-6 text-[#E1306C]" />
                <div>
                  <p className="text-white font-semibold">Instagram</p>
                  <p className="text-gray-400 text-sm">@debbypiercing</p>
                </div>
              </div>
              <button
                onClick={handleInstagramPiercing}
                className="bg-gradient-to-r from-[#E1306C] to-[#833AB4] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all"
              >
                Seguir
              </button>
            </div>
          </div>
        </section>

        {/* Botão Finalizar */}
        <div className="pt-8">
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-5 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 active:scale-95"
          >
            Finalizar
          </button>
        </div>
      </div>
    </div>
  )
}
