export function formatarDataHora(dateString) {
  const date = new Date(dateString);
  const data = date.toLocaleDateString("pt-BR");
  const hora = date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  return `${data}, ${hora}`;
}

export function formatarDataHoraExtensa(dateString) {
  const date = new Date(dateString);
  const data = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  const hora = date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  return `${data}, ${hora}`;
}
