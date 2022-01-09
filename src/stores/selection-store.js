import { writable } from "svelte/store";

export const currentSelectedIdsObservable = writable([1101, 1102, 1103]);
export const currentSelectionObservable = writable([
  {
    id: 1101,
    numberUnit: 1,
    category: {
      id: 1100,
      label: "🍽️ Repas",
      hide: false,
      parent: {
        id: 1000,
        label: "🥗 Alimentation",
        hide: false,
        parent: null,

      },
    },
    source: {
      label: "ADEME",
      link: "",
    },
    label: "1 repas végétarien 🥕",
    ghg: 510,
  },
  {
    id: 1102,
    category: {
      id: 1100,
      label: "🍽️ Repas",
      hide: false,
      parent: {
        id: 1000,
        label: "🥗 Alimentation",
        hide: false,
        parent: null,

      },
    },
    numberUnit: 1,
    source: {
      label: "ADEME",
      link: "",
    },
    label: "1 repas avec du poulet 🍗🐔",
    ghg: 1350,
  },
  {
    id: 1103,
    category: {
      id: 1100,
      label: "🍽️ Repas",
      hide: false,
      parent: {
        id: 1000,
        label: "🥗 Alimentation",
        hide: false,
        parent: null,

      },
    },
    numberUnit: 1,
    source: {
      label: "ADEME",
      link: "",
    },
    label: "1 repas avec du boeuf 🥩🐄",
    ghg: 6290,
  }
]);

export function removeFromSelection(carbonDataId) {
  currentSelectionObservable.update((currentSelection) =>
    currentSelection.filter((data) => data.id != carbonDataId)
  );
  currentSelectedIdsObservable.update((currentIdsSelection) =>
    currentIdsSelection.filter((id) => id != carbonDataId)
  );
}
