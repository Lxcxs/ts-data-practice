/**
 * Receives string '1,200.50' returns number: 1200.50
 */
export default function currencyToNumber(currency: string): number | null {
  const num = Number(currency.replaceAll(".", "").replace(",", "."));
  return isNaN(num) ? null : num;
}
