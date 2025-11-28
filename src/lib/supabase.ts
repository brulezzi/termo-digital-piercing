// Tipos para os dados do termo de piercing
export type PiercingTermData = {
  name: string
  whatsapp: string
  birthDate: string
  document: string
  isMinor: boolean
  guardianName?: string | null
  guardianDocument?: string | null
  city?: string | null
  signatureUrl?: string | null
}

// Função mock que simula salvamento (sempre retorna sucesso)
// Quando você configurar o Supabase, substitua esta função pela integração real
export async function savePiercingTerm(data: PiercingTermData) {
  console.log('📝 Dados do termo (salvamento local):', data)
  
  // Simula um pequeno delay como se estivesse salvando
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Sempre retorna sucesso
  return { 
    success: true, 
    result: { 
      id: Date.now(), 
      ...data 
    } 
  }
}
