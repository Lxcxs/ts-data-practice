import currencyToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";
export default function normalizeTransaction(transaction) {
    return {
        name: transaction.Nome,
        id: transaction.ID,
        date: stringToDate(transaction.Data),
        status: transaction.Status,
        email: transaction.Email,
        currency: transaction["Valor (R$)"],
        value: currencyToNumber(transaction["Valor (R$)"]),
        payment: transaction["Forma de Pagamento"],
        new: Boolean(transaction["Cliente Novo"]),
    };
}
//# sourceMappingURL=normalizeTransaction.js.map