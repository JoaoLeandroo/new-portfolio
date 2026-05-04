import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const { valor, descricao } = await req.json();

    if (!valor || Number(valor) <= 0) {
      return NextResponse.json(
        { error: "Informe um valor válido." },
        { status: 400 }
      );
    }

    const preference = new Preference(client);

    const result = await preference.create({
      body: {
        items: [
          {
            id: "cobranca-manual",
            title: descricao || "Cobrança personalizada",
            quantity: 1,
            currency_id: "BRL",
            unit_price: Number(valor),
          },
        ],
      },
    });

    return NextResponse.json({
      link: result.init_point,
      sandbox_link: result.sandbox_init_point,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Erro ao gerar link de pagamento." },
      { status: 500 }
    );
  }
}