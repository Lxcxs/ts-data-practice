export default function currencyToNumber(currency) {
    const num = Number(currency.replaceAll(".", "").replace(",", "."));
    return isNaN(num) ? null : num;
}
//# sourceMappingURL=currencyToNumber.js.map