"use client"

import { useState } from "react"
import { FormData } from "../page"
import { User, Phone, Calendar, FileText, Shield } from "lucide-react"

type PersonalDataFormProps = {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  onNext: () => void
}

export function PersonalDataForm({ formData, updateFormData, onNext }: PersonalDataFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nome completo é obrigatório"
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp é obrigatório"
    } else if (!/^\d{10,11}$/.test(formData.whatsapp.replace(/\D/g, ""))) {
      newErrors.whatsapp = "WhatsApp inválido (use apenas números)"
    }

    if (!formData.birthDate.trim()) {
      newErrors.birthDate = "Data de nascimento é obrigatória"
    }

    if (!formData.document.trim()) {
      newErrors.document = "Documento é obrigatório"
    }

    if (formData.isMinor) {
      if (!formData.guardianName?.trim()) {
        newErrors.guardianName = "Nome do responsável é obrigatório"
      }
      if (!formData.guardianDocument?.trim()) {
        newErrors.guardianDocument = "Documento do responsável é obrigatório"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onNext()
    }
  }

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-3xl font-bold text-[#D4AF37]">Seus Dados</h2>
          <p className="text-gray-400">Preencha suas informações pessoais</p>
          <div className="h-1 w-16 mx-auto bg-[#D4AF37] rounded-full" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome Completo */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <User className="w-5 h-5 text-[#D4AF37]" />
              Nome Completo *
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => updateFormData({ fullName: e.target.value })}
              className="w-full bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              placeholder="Digite seu nome completo"
            />
            {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName}</p>}
          </div>

          {/* WhatsApp */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <Phone className="w-5 h-5 text-[#D4AF37]" />
              WhatsApp *
            </label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => updateFormData({ whatsapp: formatWhatsApp(e.target.value) })}
              className="w-full bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              placeholder="(19) 98964-4538"
            />
            {errors.whatsapp && <p className="text-red-400 text-sm">{errors.whatsapp}</p>}
          </div>

          {/* Data de Nascimento - CAMPO DE TEXTO */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <Calendar className="w-5 h-5 text-[#D4AF37]" />
              Data de Nascimento *
            </label>
            <input
              type="text"
              value={formData.birthDate}
              onChange={(e) => updateFormData({ birthDate: e.target.value })}
              className="w-full bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              placeholder="Ex: 15/03/1995"
            />
            <p className="text-gray-500 text-xs">Digite a data no formato DD/MM/AAAA</p>
            {errors.birthDate && <p className="text-red-400 text-sm">{errors.birthDate}</p>}
          </div>

          {/* Documento */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-white font-medium">
              <FileText className="w-5 h-5 text-[#D4AF37]" />
              Documento (RG ou CPF) *
            </label>
            <input
              type="text"
              value={formData.document}
              onChange={(e) => updateFormData({ document: e.target.value })}
              className="w-full bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition-all"
              placeholder="Digite seu RG ou CPF"
            />
            {errors.document && <p className="text-red-400 text-sm">{errors.document}</p>}
          </div>

          {/* Menor de Idade */}
          <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-6 space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.isMinor}
                onChange={(e) => updateFormData({ isMinor: e.target.checked })}
                className="w-5 h-5 rounded border-[#D4AF37] text-[#D4AF37] focus:ring-[#D4AF37] focus:ring-offset-[#1a1a1a]"
              />
              <span className="text-white font-medium">Sou menor de idade</span>
            </label>

            {formData.isMinor && (
              <div className="space-y-4 pt-4 border-t border-[#D4AF37]/20">
                <div className="flex items-center gap-2 text-[#D4AF37] text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Dados do Responsável Legal</span>
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm">Nome do Responsável *</label>
                  <input
                    type="text"
                    value={formData.guardianName || ""}
                    onChange={(e) => updateFormData({ guardianName: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Nome completo do responsável"
                  />
                  {errors.guardianName && <p className="text-red-400 text-sm">{errors.guardianName}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm">Documento do Responsável *</label>
                  <input
                    type="text"
                    value={formData.guardianDocument || ""}
                    onChange={(e) => updateFormData({ guardianDocument: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="RG ou CPF do responsável"
                  />
                  {errors.guardianDocument && <p className="text-red-400 text-sm">{errors.guardianDocument}</p>}
                </div>
              </div>
            )}
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold text-lg py-4 px-8 rounded-xl shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-105 transition-all duration-300 active:scale-95 mt-8"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  )
}
