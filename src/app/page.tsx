"use client"

import { useState } from "react"
import { WelcomePage } from "./components/WelcomePage"
import { PersonalDataForm } from "./components/PersonalDataForm"
import { TermsPage } from "./components/TermsPage"
import { SignaturePage } from "./components/SignaturePage"
import { AftercarePage } from "./components/AftercarePage"
import { CrossSellPage } from "./components/CrossSellPage"
import { savePiercingTerm } from "@/lib/supabase"

export type FormData = {
  fullName: string
  whatsapp: string
  birthDate: string
  document: string
  isMinor: boolean
  guardianName?: string
  guardianDocument?: string
  termsAccepted: boolean
  signature: string
  signatureDate: string
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    whatsapp: "",
    birthDate: "",
    document: "",
    isMinor: false,
    termsAccepted: false,
    signature: "",
    signatureDate: "",
  })
  const [isSaving, setIsSaving] = useState(false)

  const nextStep = () => setCurrentStep((prev) => prev + 1)
  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const saveToSupabase = async () => {
    setIsSaving(true)
    
    try {
      // Converter data de DD/MM/AAAA para AAAA-MM-DD
      const [day, month, year] = formData.birthDate.split('/')
      const formattedDate = `${year}-${month}-${day}`

      const termData = {
        name: formData.fullName,
        whatsapp: formData.whatsapp.replace(/\D/g, ''), // Remove formatação
        birthDate: formattedDate,
        document: formData.document,
        isMinor: formData.isMinor,
        guardianName: formData.guardianName || null,
        guardianDocument: formData.guardianDocument || null,
        city: null,
        signatureUrl: formData.signature,
      }

      const result = await savePiercingTerm(termData)
      
      // Salvar no localStorage como backup
      const submissions = JSON.parse(localStorage.getItem("debby-piercing-submissions") || "[]")
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        savedToSupabase: result?.success || false
      })
      localStorage.setItem("debby-piercing-submissions", JSON.stringify(submissions))
      
      console.log('✅ Dados salvos com sucesso!')
      nextStep() // Avança para próxima página
    } catch (error) {
      console.error('❌ Erro ao salvar:', error)
      
      // Mesmo com erro, salva no localStorage como fallback
      const submissions = JSON.parse(localStorage.getItem("debby-piercing-submissions") || "[]")
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        savedToSupabase: false
      })
      localStorage.setItem("debby-piercing-submissions", JSON.stringify(submissions))
      
      // Continua o fluxo mesmo com erro
      nextStep()
    } finally {
      setIsSaving(false)
    }
  }

  const steps = [
    <WelcomePage key="welcome" onNext={nextStep} />,
    <PersonalDataForm key="form" formData={formData} updateFormData={updateFormData} onNext={nextStep} />,
    <TermsPage key="terms" updateFormData={updateFormData} onNext={nextStep} />,
    <SignaturePage 
      key="signature" 
      updateFormData={updateFormData} 
      onNext={saveToSupabase}
    />,
    <AftercarePage key="aftercare" onNext={nextStep} />,
    <CrossSellPage key="crosssell" />,
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {isSaving && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] border-2 border-[#D4AF37] rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-white font-bold text-lg">Salvando seus dados...</p>
            <p className="text-gray-400 text-sm">Aguarde um momento</p>
          </div>
        </div>
      )}
      {steps[currentStep]}
    </div>
  )
}
