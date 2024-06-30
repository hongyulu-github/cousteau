type Dictionary = {
  [key: string]: {
    es: string;
    en: string;
  };
};

export const dictionary: Dictionary = {
  town: { en: "Town", es: "Población" },
  date: { en: "Date", es: "Fecha" },
  province: { en: "Province", es: "Provincia" },
  chooseSpecies: { en: "Choose species", es: "Seleciona especie" },
  uploadPhoto: { en: "Upload photo", es: "Subir foto" },
  observations: { en: "Observations", es: "Observaciones" },
  save: { en: "Save", es: "Guardar" },
  create: { en: "Create", es: "Crear" },
  addNewSighting: { en: "Add new sighting", es: "Añadir nuevo avistamiento" },
  sightingDetail: { en: "Sighting detail", es: "Detalle del avistamiento" },
};
