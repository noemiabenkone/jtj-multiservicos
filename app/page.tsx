
import { supabase } from "./lib/supabaseClient"
import Image from "next/image"
import WhatsAppButton from "./components/whatsappButton";
import Footer from "./components/footer";
import Card from "./components/card";
import Header from "./components/header";

export default function Home() {

  console.log("Supabase client:", supabase)
  return (
    <main className="bg-cover bg-center bg-[url(/images/imagem.png)] min-h-screen text-blue-950 ">
      <Header/>

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

            <WhatsAppButton
              label="Atendimento via WhatsApp"
            />
          </div>
    
          
          <div className="w-full md:w-[450px] h-[350px] relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/image.png" 
              alt="Consultoria em viagens e serviços migratórios"
              fill 
              className="object-cover" 
            />
          </div>
        </div>
        
        <Card/>

        <div className="mt-24 flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-xl">
            <h4 className="text-xl font-bold border-b-2 border-green-600 pb-2 mb-6">
              Outros Serviços
            </h4>

            <ul className="space-y-4 text-blue-900">
              <li className="bg-white/40 p-4 rounded-lg">
                Auxílio no agendamento na Polícia Federal (RNM e outros)
              </li>
              <li className="bg-white/40 p-4 rounded-lg">
                Emissão de Antecedentes Criminais
              </li>
              <li className="bg-white/40 p-4 rounded-lg">
                Venda de passagens aéreas nacionais e internacionais
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-white/50 p-8 rounded-xl shadow-sm">
            <h4 className="text-2xl font-bold text-blue-950 mb-4">
             Entre em contacto conosco
            </h4>

            <p className="text-blue-900 mb-6 leading-relaxed">
             Fale agora com um de nossos especialistas e agende seu atendimento
             de forma rápida e segura.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton
               label="Atendimento via WhatsApp"
              />


              <span className="text-blue-950 font-medium">
               ou ligue para <br/> <strong>(11) 97033-0688</strong>
              </span>
            </div>
          </div>

        </div>
      </section>
      <Footer/>
    </main>
  );
}