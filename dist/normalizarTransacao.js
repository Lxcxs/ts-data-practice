import moedaParaNumero from "./moedaParaNumero.js";
import stringToDate from "./stringToDate.js";
export default function normalizarTransacao(transacao) {
    return {
        name: transacao.Nome,
        id: transacao.ID,
        date: stringToDate(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        currency: transacao["Valor (R$)"],
        value: moedaParaNumero(transacao["Valor (R$)"]),
        payment: transacao["Forma de Pagamento"],
        new: Boolean(transacao["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizarTransacao.js.map