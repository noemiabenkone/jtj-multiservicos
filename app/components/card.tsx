
export default function Card() {
    return(
        <div className="mt-20 flex flex-col items-center">
          <h5 className="text-2xl font-bold border-b-4 border-green-600 pb-2 mb-10">
            Nossos Serviços
          </h5>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            
            <div className=" p-6 rounded-xl border border-zinc-200 hover:shadow-md transition">
              <div className="text-3xl mb-4">✈️</div>
              <h6 className="font-bold text-lg mb-2">Passagens Aéreas</h6>
              <p className="text-sm text-blue-900">Emissão de passagens com as melhores rotas e tarifas.</p>
            </div>

            <div className=" p-6 rounded-xl border border-zinc-200 hover:shadow-md transition">
              <div className="text-3xl mb-4">🪪</div>
              <h6 className="font-bold text-lg mb-2">Regularizaçao e Naturalização</h6>
              <p className="text-sm text-blue-900">Processos completos para sua cidadania e naturalização.</p>
            </div>
            <div className=" p-6 rounded-xl border border-zinc-200 hover:shadow-md transition">
              <div className="text-3xl mb-4">🛡️</div>
              <h6 className="font-bold text-lg mb-2">Seguro Viagem</h6>
              <p className="text-sm text-blue-900">Processos completos para sua cidadania e naturalização.</p>
            </div>
            <div className=" p-6 rounded-xl border border-zinc-200 hover:shadow-md transition">
              <div className="text-3xl mb-4">🌍</div>
              <h6 className="font-bold text-lg mb-2">Processo de viagem</h6>
              <p className="text-sm text-blue-900">Processos completos para sua cidadania e naturalização.</p>
            </div>
            
          </div>
        </div>
    );
}