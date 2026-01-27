export default function Agendamento() {
  return (
    <main className="min-h-screen bg-zinc-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        
        <h1 className="text-2xl font-bold text-blue-950 text-center mb-2">
          Agende seu Atendimento
        </h1>

        <p className="text-center text-blue-900 mb-8">
          Escolha o serviço, data e horário para seu atendimento.
        </p>

        <form className="space-y-5">
          
          
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              WhatsApp
            </label>
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Serviço desejado
            </label>
            <select className="w-full border border-zinc-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-600">
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
              type="date"
              className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Horário
            </label>
            <input
              type="time"
              className="w-full border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-semibold transition"
          >
            Confirmar Agendamento
          </button>
        </form>

      </div>
    </main>
  );
}
