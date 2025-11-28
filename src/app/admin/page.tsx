"use client"

import { useState, useEffect } from "react"
import { Download, Eye, Trash2, Search, Calendar, User, Phone, FileText } from "lucide-react"

type Submission = {
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
  submittedAt: string
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      loadSubmissions()
    }
  }, [isAuthenticated])

  const loadSubmissions = () => {
    const data = localStorage.getItem("debby-piercing-submissions")
    if (data) {
      setSubmissions(JSON.parse(data))
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Senha simples para demonstração - em produção, use autenticação real
    if (password === "debby2024") {
      setIsAuthenticated(true)
    } else {
      alert("Senha incorreta!")
    }
  }

  const deleteSubmission = (index: number) => {
    if (confirm("Tem certeza que deseja excluir este termo?")) {
      const newSubmissions = submissions.filter((_, i) => i !== index)
      setSubmissions(newSubmissions)
      localStorage.setItem("debby-piercing-submissions", JSON.stringify(newSubmissions))
    }
  }

  const exportToCSV = () => {
    const headers = ["Nome", "WhatsApp", "Data Nascimento", "Documento", "Menor de Idade", "Responsável", "Doc. Responsável", "Data Assinatura"]
    const rows = submissions.map(s => [
      s.fullName,
      s.whatsapp,
      s.birthDate,
      s.document,
      s.isMinor ? "Sim" : "Não",
      s.guardianName || "-",
      s.guardianDocument || "-",
      new Date(s.submittedAt).toLocaleString("pt-BR")
    ])

    const csv = [headers, ...rows].map(row => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `termos-debby-piercing-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
  }

  const filteredSubmissions = submissions.filter(s =>
    s.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.whatsapp.includes(searchTerm) ||
    s.document.includes(searchTerm)
  )

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-2xl p-8 space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold text-[#D4AF37]">Área Administrativa</h1>
            <p className="text-gray-400">Debby Piercing</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-white font-medium">Senha de Acesso</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0B0B0B] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                placeholder="Digite a senha"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black font-bold py-3 rounded-xl hover:scale-105 transition-all"
            >
              Entrar
            </button>
          </form>

          <p className="text-gray-500 text-xs text-center">
            Acesso restrito apenas para administradores
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#D4AF37]">Termos Assinados</h1>
              <p className="text-gray-400 mt-1">Gerenciamento de termos digitais</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportToCSV}
                disabled={submissions.length === 0}
                className="flex items-center gap-2 bg-[#1a1a1a] border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-xl hover:bg-[#D4AF37]/10 transition-all disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                Exportar CSV
              </button>
            </div>
          </div>

          {/* Busca */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome, WhatsApp ou documento..."
              className="w-full bg-[#1a1a1a] border border-[#D4AF37]/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Total de Termos</p>
              <p className="text-[#D4AF37] text-2xl font-bold">{submissions.length}</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Menores de Idade</p>
              <p className="text-[#D4AF37] text-2xl font-bold">
                {submissions.filter(s => s.isMinor).length}
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Hoje</p>
              <p className="text-[#D4AF37] text-2xl font-bold">
                {submissions.filter(s => 
                  new Date(s.submittedAt).toDateString() === new Date().toDateString()
                ).length}
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-4">
              <p className="text-gray-400 text-sm">Esta Semana</p>
              <p className="text-[#D4AF37] text-2xl font-bold">
                {submissions.filter(s => {
                  const date = new Date(s.submittedAt)
                  const weekAgo = new Date()
                  weekAgo.setDate(weekAgo.getDate() - 7)
                  return date >= weekAgo
                }).length}
              </p>
            </div>
          </div>
        </div>

        {/* Lista de Termos */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-12 text-center">
              <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Nenhum termo encontrado</p>
            </div>
          ) : (
            filteredSubmissions.map((submission, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-[#D4AF37]" />
                      <h3 className="text-white font-bold text-lg">{submission.fullName}</h3>
                      {submission.isMinor && (
                        <span className="bg-[#D4AF37]/20 text-[#D4AF37] text-xs px-2 py-1 rounded-full">
                          Menor de Idade
                        </span>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Phone className="w-4 h-4" />
                        {submission.whatsapp}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <FileText className="w-4 h-4" />
                        {submission.document}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {new Date(submission.submittedAt).toLocaleString("pt-BR")}
                      </div>
                    </div>

                    {submission.isMinor && submission.guardianName && (
                      <div className="bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-lg p-3 text-sm">
                        <p className="text-gray-400">
                          <strong className="text-[#D4AF37]">Responsável:</strong> {submission.guardianName}
                        </p>
                        <p className="text-gray-400">
                          <strong className="text-[#D4AF37]">Doc. Responsável:</strong> {submission.guardianDocument}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedSubmission(submission)}
                      className="flex items-center gap-2 bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 rounded-lg hover:bg-[#D4AF37]/30 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      Ver
                    </button>
                    <button
                      onClick={() => deleteSubmission(index)}
                      className="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal de Visualização */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50" onClick={() => setSelectedSubmission(null)}>
            <div className="bg-[#1a1a1a] border border-[#D4AF37] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Detalhes do Termo</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Nome Completo</p>
                  <p className="text-white font-semibold">{selectedSubmission.fullName}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="text-white font-semibold">{selectedSubmission.whatsapp}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Data de Nascimento</p>
                  <p className="text-white font-semibold">{selectedSubmission.birthDate}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Documento</p>
                  <p className="text-white font-semibold">{selectedSubmission.document}</p>
                </div>

                {selectedSubmission.isMinor && (
                  <div className="bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-xl p-4 space-y-3">
                    <p className="text-[#D4AF37] font-bold">Dados do Responsável</p>
                    <div>
                      <p className="text-gray-400 text-sm">Nome</p>
                      <p className="text-white">{selectedSubmission.guardianName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Documento</p>
                      <p className="text-white">{selectedSubmission.guardianDocument}</p>
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-gray-400 text-sm mb-2">Assinatura Digital</p>
                  <div className="bg-[#0B0B0B] border border-[#D4AF37]/20 rounded-xl p-4">
                    <img src={selectedSubmission.signature} alt="Assinatura" className="w-full" />
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Data de Assinatura</p>
                  <p className="text-white font-semibold">
                    {new Date(selectedSubmission.submittedAt).toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedSubmission(null)}
                className="w-full mt-6 bg-[#D4AF37] text-black font-bold py-3 rounded-xl hover:bg-[#F4D03F] transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
