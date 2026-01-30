import { NextResponse } from "next/server";

const agendamentos: {
  nome: string;
  whatsapp: string;
  servico: string;
  data: string;
  hora: string;
 }[] = [];
export async function POST(req: Request) {
  const { nome, whatsapp, servico, data, hora } = await req.json();

  if (!nome || !whatsapp || !servico || !data || !hora) {
    return NextResponse.json(
      { error: "Dados incompletos" },
      { status: 400 }
    );
  }

  agendamentos.push({
    nome,
    whatsapp,
    servico,
    data,
    hora,
  });

  return NextResponse.json(
    { message: "Agendamento realizado com sucesso!" },
    { status: 201 }
  );
}
// OBS: horários duplicados são permitidos conforme regra do negócio
