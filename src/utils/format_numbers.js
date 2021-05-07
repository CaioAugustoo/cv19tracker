export default function formatNumbers(number) {
  return new Intl.NumberFormat("pt-BR").format(number);
}
