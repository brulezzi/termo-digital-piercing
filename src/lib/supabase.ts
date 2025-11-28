import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
