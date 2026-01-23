import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-cover bg-center bg-[url(/images/imagem.png)] min-h-screen text-blue-950 ">
      <header className=" flex items-center justify-around p-3 shadow-lg">
        <h1 className="text-3xl ">
          J<span className="text-green-600 text-3xl font-bold">T</span>J <span className="ml-2 font-semibold">Multiserviços</span>
        </h1>
        
        <button className="bg-green-600 text-white hover:bg-green-500 px-4 py-2 rounded-lg font-medium transition cursor-pointer ">
          Agendar agora
        </button>
      </header>

      <section className="max-w-6xl mx-auto mt-10 p-10  rounded-xl shadow-sm ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-left flex-1">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-950 leading-tight">
              Agência de Viagens<br/>e Assessoria Migratórios
            </h2>
            <span className="text-lg mt-2 block">
               Cuidamos da sua viagem do início ao fim.
            </span>
            <p className="mt-6 text-lg font-semibold text-green-700">Transformamos exigências documentais em liberdade.</p>
            <p className="text-blue-900 mt-2 leading-relaxed">
              Oferecemos acompanhamento integral desde passagens e seguros até processos de naturalização e agendamentos oficiais. Cuidamos da sua jornada do início ao fim para garantir caminhos abertos e total tranquilidade.
            </p>

            <button className="bg-green-600 text-white px-6 py-3 mt-6 rounded-lg font-bold hover:bg-green-700 transition gap-2">
              Quero Falar Com um Especialista Via WhatsApp
            </button>
          </div>
    
          
          <div className="w-full md:w-[450px] h-[300px] relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/image.png" 
              alt="Consultoria em viagens e serviços migratórios"
              fill 
              className="object-cover" 
            />
          </div>
        </div>

        
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
              <h6 className="font-bold text-lg mb-2">Naturalização</h6>
              <p className="text-sm text-blue-900">Processos completos para sua cidadania e naturalização.</p>
            </div>
            <div className=" p-6 rounded-xl border border-zinc-200 hover:shadow-md transition">
              <div className="text-3xl mb-4">🪪</div>
              <h6 className="font-bold text-lg mb-2">Naturalização</h6>
              <p className="text-sm text-blue-900">Processos completos para sua cidadania e naturalização.</p>
            </div>
            <div className=" p-6 rounded-xl border border-zinc-200 hover:shadow-md transition">
              <div className="text-3xl mb-4">🪪</div>
              <h6 className="font-bold text-lg mb-2">Naturalização</h6>
              <p className="text-sm text-blue-900">Processos completos para sua cidadania e naturalização.</p>
            </div>
            
            
          </div>
        </div>
      </section>
    </main>
  );
}