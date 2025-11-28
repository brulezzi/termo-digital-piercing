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

      // Obter IP e User Agent
      const userAgent = navigator.userAgent
      let ipAddress = ''
      try {
        const ipResponse = await fetch('https://api.ipify.org?format=json')
        const ipData = await ipResponse.json()
        ipAddress = ipData.ip
      } catch (error) {
        console.log('Não foi possível obter IP:', error)
      }

      const termData = {
        name: formData.fullName,
        whatsapp: formData.whatsapp.replace(/\D/g, ''), // Remove formatação
        birth_date: formattedDate,
        document: formData.document,
        is_minor: formData.isMinor,
        guardian_name: formData.guardianName || null,
        guardian_document: formData.guardianDocument || null,
        accepted_terms: formData.termsAccepted,
        signature_url: formData.signature,
        ip_address: ipAddress,
        user_agent: userAgent,
      }

      await savePiercingTerm(termData)
      
      // Também salvar no localStorage como backup
      const submissions = JSON.parse(localStorage.getItem("debby-piercing-submissions") || "[]")
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      })
      localStorage.setItem("debby-piercing-submissions", JSON.stringify(submissions))
      
      console.log('✅ Dados salvos com sucesso no Supabase!')
    } catch (error) {
      console.error('❌ Erro ao salvar no Supabase:', error)
      // Mesmo com erro, salva no localStorage como fallback
      const submissions = JSON.parse(localStorage.getItem("debby-piercing-submissions") || "[]")
      submissions.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        error: 'Salvo apenas localmente - erro no Supabase'
      })
      localStorage.setItem("debby-piercing-submissions", JSON.stringify(submissions))
    } finally {
      setIsSaving(false)
    }
  }

  const steps = [
    <WelcomePage key="welcome" onNext={nextStep} />,
    <PersonalDataForm key="form" formData={formData} updateFormData={updateFormData} onNext={nextStep} />,
    <TermsPage key="terms" updateFormData={updateFormData} onNext={nextStep} />,
    <SignaturePage key="signature" updateFormData={updateFormData} onNext={async () => {
      await saveToSupabase()
      nextStep()
    }} />,
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
