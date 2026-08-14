export const categories = {
  cultura: {
    name: "Cultura",
    color: "#C67A3A",
  },
  entrevistas: {
    name: "Entrevistas",
    color: "#C67A3A",
  },
  sociedad: {
    name: "Sociedad",
    color: "#C67A3A",
  },
} as const;

export type CategorySlug = keyof typeof categories;