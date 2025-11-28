"use client"

import { useState } from "react"
import { ScrollText, CheckCircle2 } from "lucide-react"

type TermsPageProps = {
  updateFormData: (data: { termsAccepted: boolean }) => void
  onNext: () => void
}

export function TermsPage({ updateFormData, onNext }: TermsPageProps) {
  const [accepted, setAccepted] = useState(false)
  const [error, setError] = useState("")

  const handleContinue = () => {
    if (!accepted) {
      setError("Você precisa aceitar os termos para continuar")
      return
    }
    updateFormData({ termsAccepted: true })
    onNext()
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 space-y-3">
          <div className="flex justify-center">
            <ScrollText className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <h2 className="text-3xl font-bold text-[#D4AF37]">Termo de Responsabilidade</h2>
          <p className="text-gray-400">Leia atentamente antes de prosseguir</p>
          <div className="h-1 w-16 mx-auto bg-[#D4AF37] rounded-full" />
        </div>

        {/* Termo Completo */}
        <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#D4AF37] scrollbar-track-[#0B0B0B]">
          
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">1. Descrição do Procedimento</h3>
            <p className="text-gray-300 leading-relaxed">
              O procedimento de perfuração corporal (piercing) consiste na abertura de um orifício na pele utilizando agulhas esterilizadas e descartáveis, seguido da inserção de uma joia apropriada. O procedimento é realizado por profissional capacitado, em ambiente higienizado e com materiais de uso único.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">2. Riscos Naturais do Procedimento</h3>
            <p className="text-gray-300 leading-relaxed">
              Todo procedimento de perfuração envolve riscos naturais, incluindo mas não limitado a:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Dor leve a moderada durante e após o procedimento</li>
              <li>Sangramento leve no momento da perfuração</li>
              <li>Inchaço e vermelhidão temporários na região</li>
              <li>Possibilidade de infecção caso os cuidados não sejam seguidos</li>
              <li>Reações alérgicas ao material da joia (raro com materiais apropriados)</li>
              <li>Formação de queloides em pessoas predispostas</li>
              <li>Rejeição do organismo à joia</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">3. Responsabilidade pelos Cuidados</h3>
            <p className="text-gray-300 leading-relaxed">
              O cliente declara estar ciente de que a cicatrização adequada depende exclusivamente dos cuidados diários realizados por ele. A Debby Piercing fornece todas as orientações necessárias, mas não se responsabiliza por complicações decorrentes da não observância das instruções de cuidados pós-procedimento.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">4. Rejeição e Inflamação</h3>
            <p className="text-gray-300 leading-relaxed">
              O cliente está ciente de que o corpo pode rejeitar a joia inserida, sendo este um processo natural e imprevisível que varia de organismo para organismo. Inflamações podem ocorrer mesmo com todos os cuidados adequados, sendo importante procurar orientação profissional caso persistam.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">5. Política de Retorno e Revisão</h3>
            <div className="bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-xl p-4 space-y-3">
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-[#D4AF37]">Revisões e análises da joia são gratuitas</strong> em qualquer horário de funcionamento.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Caso seja necessário atendimento extra, intervenção ou procedimento adicional, será cobrado um valor informado na hora.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-[#D4AF37]">Trocas de joia são permitidas apenas após 1 mês corrido</strong> da data da perfuração.
              </p>
              <p className="text-gray-300 leading-relaxed">
                A responsabilidade pela cicatrização total é do cliente e depende exclusivamente dos cuidados diários.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">6. Conferência da Joia</h3>
            <p className="text-gray-300 leading-relaxed">
              O cliente declara ter conferido a joia escolhida antes do procedimento, verificando material, tamanho, cor e modelo. Após a perfuração, não serão aceitas reclamações sobre a escolha da joia.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">7. Autorização para Menores de Idade</h3>
            <p className="text-gray-300 leading-relaxed">
              Para menores de 18 anos, é obrigatória a presença e autorização de um responsável legal (pai, mãe ou tutor) com documento de identificação. O responsável assume total responsabilidade pelo procedimento e pelos cuidados posteriores.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-bold text-[#D4AF37]">8. Declaração Final</h3>
            <p className="text-gray-300 leading-relaxed">
              Declaro que fui informado(a) sobre todos os aspectos do procedimento, riscos envolvidos, cuidados necessários e políticas da Debby Piercing. Autorizo a realização do procedimento de perfuração e me comprometo a seguir todas as orientações fornecidas.
            </p>
          </section>

        </div>

        {/* Checkbox de Aceitação */}
        <div className="mt-8 space-y-4">
          <label className="flex items-start gap-3 cursor-pointer bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => {
                setAccepted(e.target.checked)
                setError("")
              }}
              className="w-6 h-6 mt-1 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-[#1a1a1a]"
            />
            <span className="text-white leading-relaxed">
              <strong className="text-[#D4AF37]">Declaro que li, entendi e aceito todos os termos acima.</strong>
              <br />
              <span className="text-gray-400 text-sm">
                Estou ciente dos riscos e responsabilidades envolvidos no procedimento.
              </span>
            </span>
          </label>

          {error && (
            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
              <span className="text-sm">{error}</span>
            </div>
          )}

          <button
            onClick={handleContinue}
            disabled={!accepted}
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {accepted && <CheckCircle2 className="w-5 h-5" />}
            Assinar Termo
          </button>
        </div>
      </div>
    </div>
  )
}
