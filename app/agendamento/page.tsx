"use client";

import { useState } from "react";

export default function Agendamento() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [servico, setServico] = useState("");
  const [hora, setHora] = useState("");
  const [dataReservada, setDataReservada] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  setErro("");
  setSucesso("");

  if (!nome || !whatsapp || !servico || !hora || !dataReservada) {
    setErro("Preencha todos os campos para continuar.");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch("/api/agendamento", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        whatsapp,
        servico,
        data: dataReservada,
        hora,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setErro(data.error || "Erro ao realizar agendamento.");
      return;
    }

    setSucesso("Agendamento realizado com sucesso!");

    
    setNome("");
    setWhatsapp("");
    setServico("");
    setHora("");
    setDataReservada("");

  } catch (error) {
    setErro("Erro de conexão. Tente novamente.");
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-blue-950 text-center mb-2">
          Agende seu Atendimento
        </h1>

        <p className="text-center text-blue-900 mb-8">
          Escolha o serviço, data e horário para seu atendimento.
        </p>

        {erro && (
          <p className="mb-4 text-sm text-red-600 text-center">{erro}</p>
        )}

        {sucesso && (
          <p className="mb-4 text-sm text-green-600 text-center">{sucesso}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-blue-950">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Nome completo
            </label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              placeholder="Digite seu nome"
              className="w-full border border-zinc-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              WhatsApp
            </label>
            <input
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              type="tel"
              placeholder="(11) 99999-9999"
              className="w-full border border-zinc-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Serviço desejado
            </label>
            <select
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              className="w-full border border-zinc-300 rounded-lg px-4 py-2"
            >
              <option value="">Selecione um serviço</option>
              <option>Passagens Aéreas</option>
              <option>Regularização e Naturalização</option>
              <option>Seguro Viagem</option>
              <option>Processo de Viagem</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Data
            </label>
            <input
              value={dataReservada}
              onChange={(e) => setDataReservada(e.target.value)}
              type="date"
              className="w-full border border-zinc-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Horário
            </label>
            <input
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              type="time"
              className="w-full border border-zinc-300 rounded-lg px-4 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              loading
                ? "bg-zinc-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-500 text-white"
            }`}
          >
            {loading ? "Agendando..." : "Confirmar Agendamento"}
          </button>
        </form>
      </div>
    </main>
  );
}
