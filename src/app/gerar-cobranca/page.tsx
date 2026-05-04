"use client";

import { useState } from "react";

export default function GerarCobrancaPage() {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  async function gerarLink() {
    setLoading(true);
    setLink("");

    const response = await fetch("/api/gerar-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        valor: Number(valor),
        descricao,
      }),
    });

    const data = await response.json();

    if (data.link) {
      setLink(data.link);
    } else {
      alert(data.error || "Erro ao gerar link.");
    }

    setLoading(false);
  }

  async function copiarLink() {
    await navigator.clipboard.writeText(link);
    alert("Link copiado!");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <div className="mb-6 text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
            Checkout Mercado Pago
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
            Gerador de link de pagamento
          </h1>

          <p className="mt-2 text-gray-600">
            Informe o valor da cobrança e gere um link seguro para enviar ao
            cliente.
          </p>
        </div>

        <div className="rounded-3xl bg-white/90 shadow-xl ring-1 ring-gray-200 backdrop-blur p-6 space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Descrição da cobrança
            </label>

            <input
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Ex: Serviço de consultoria"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Valor da cobrança
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
              <span className="text-gray-500 font-medium">R$</span>

              <input
                type="number"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="250,00"
                className="w-full bg-transparent px-3 py-3 text-gray-900 outline-none"
              />
            </div>
          </div>

          <button
            onClick={gerarLink}
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Gerando link..." : "Gerar link de pagamento"}
          </button>

          {link && (
            <div className="rounded-2xl border border-green-200 bg-green-50 p-4 space-y-3">
              <div>
                <p className="text-sm font-semibold text-green-800">
                  Link gerado com sucesso
                </p>
                <p className="text-xs text-green-700">
                  Copie e envie este link para o cliente.
                </p>
              </div>

              <textarea
                value={link}
                readOnly
                rows={3}
                className="w-full resize-none rounded-xl border border-green-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none"
              />

              <button
                onClick={copiarLink}
                className="w-full rounded-xl bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Copiar link
              </button>
            </div>
          )}
        </div>

        <p className="mt-5 text-center text-xs text-gray-500">
          O pagamento será processado com segurança pelo Mercado Pago.
        </p>
      </div>
    </main>
  );
}