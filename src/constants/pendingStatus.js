// Valores possiveis do campo de status de uma pendencia: open ou done.
export const PENDING_STATUS_STYLES = {
  open: {
    label: "aberta",
    wrapperClass:
      "bg-warning bg-opacity-45 font-semibold text-yellow-100 text-xs px-2 py-1 flex items-center gap-1.5 rounded-full",
    dotClass: "w-1 h-1 rounded-full bg-yellow-100 shrink-0",
  },
  done: {
    label: "concluída",
    wrapperClass: "text-gray-300 text-xs px-2 py-1 flex items-center gap-1.5",
    dotClass: "w-1 h-1 rounded-full bg-gray-300 shrink-0",
  },
};

export const DEFAULT_PENDING_STATUS = "open";

export function getPendingStatusStyle(status) {
  return PENDING_STATUS_STYLES[status] ?? PENDING_STATUS_STYLES[DEFAULT_PENDING_STATUS];
}

export function countOpen(pendingItems = []) {
  return pendingItems.filter((item) => item.status === "open").length;
}
