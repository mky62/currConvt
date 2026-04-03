export function Convert(amount, from, to, rates) {
  if (!rates[from] || !rates[to]) return null;
  if (from === to) return amount;

  const base = amount / rates[from];
  return base * rates[to];
}
