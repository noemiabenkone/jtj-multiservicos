import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nome, whatsapp, servico, data, hora } = await req.json();

  if (!nome || !whatsapp || !servico || !data || !hora) {
    return NextResponse.json(
      { error: "Dados incompletos" },
      { status: 400 }
    );
  }

  const {error} = await supabase
  .from("agendamentos")
  .insert([{nome, whatsapp, servico, data, hora}]);
  
  if(error) {
    console.error("Erro Supabase:", error);
    return NextResponse.json(
      {error: "erro ao salvar agendamento"},
      {status: 500}
    )
  }

   const email = await resend.emails.send({
    from: "Agendamentos <onboarding@resend.dev>",
    to: ["noemiabenkone0@gmail.com"],
    subject: "📅 Novo agendamento recebido",
    html: `
      <h2>Novo agendamento</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>WhatsApp:</strong> ${whatsapp}</p>
      <p><strong>Serviço:</strong> ${servico}</p>
      <p><strong>Data:</strong> ${data}</p>
      <p><strong>Hora:</strong> ${hora}</p>
    `,
  });
   console.log("Resposta do Resend:", email);
    
  return NextResponse.json(
    { message: "Agendamento realizado com sucesso!" },
    { status: 201 }
  );
}
// OBS: horários duplicados são permitidos conforme regra do negócio
