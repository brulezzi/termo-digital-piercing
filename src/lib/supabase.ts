import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Criar cliente apenas se as credenciais existirem
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export type PiercingTermData = {
  name: string
  whatsapp: string
  birth_date: string
  document: string
  is_minor: boolean
  guardian_name?: string | null
  guardian_document?: string | null
  city?: string | null
  accepted_terms: boolean
  signature_url: string
  ip_address?: string | null
  user_agent?: string | null
  notes?: string | null
}

export async function savePiercingTerm(data: PiercingTermData) {
  // Se não houver cliente Supabase configurado, retornar erro amigável
  if (!supabase) {
    console.warn('⚠️ Supabase não configurado - dados salvos apenas localmente')
    throw new Error('Supabase não configurado')
  }

  const { data: result, error } = await supabase
    .from('piercing_terms')
    .insert([data])
    .select()

  if (error) {
    console.error('Erro ao salvar termo:', error)
    throw error
  }

  return result
}
