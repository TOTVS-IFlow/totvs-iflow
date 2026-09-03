export function formatarDataHora(dateString) {
  const date = new Date(dateString);
  const data = date.toLocaleDateString("pt-BR");
  const hora = date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  return `${data}, ${hora}`;
}

export function formatarMesCurto(mesIso) {
  const [ano, mes] = mesIso.split("-").map(Number);
  const date = new Date(ano, mes - 1, 1);
  return date.toLocaleDateString("pt-BR", { month: "short" }).replace(".", "");
}

export function formatarDataHoraExtensa(dateString) {
  const date = new Date(dateString);
  const data = date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  const hora = date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  return `${data}, ${hora}`;
}
