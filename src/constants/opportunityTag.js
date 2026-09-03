// Valores possiveis do campo de tag de uma oportunidade.
export const OPPORTUNITY_TAG_LABELS = {
  upsell: "Upsell",
  crosssell: "Cross-sell",
  expansion: "Expansão",
  addon: "Add-on",
  renewal: "Renovação",
};

export function getOpportunityTagLabel(tag) {
  return OPPORTUNITY_TAG_LABELS[tag] ?? tag;
}
