import { writable } from "svelte/store";

export const currentSelectedIdsObservable = writable([1101, 1102, 1103]);
export const currentSelectionObservable = writable([
  {
    id: 1101,
    numberUnit: 1,
    category: {
      id: 1100,
      label: "ð½ï¸ Repas",
      hide: false,
      parent: {
        id: 1000,
        label: "ð¥ Alimentation",
        hide: false,
        parent: null,

      },
    },
    source: {
      label: "ADEME",
      link: "",
    },
    label: "1 repas vÃ©gÃ©tarien ð¥",
    ghg: 510,
  },
  {
    id: 1102,
    category: {
      id: 1100,
      label: "ð½ï¸ Repas",
      hide: false,
      parent: {
        id: 1000,
        label: "ð¥ Alimentation",
        hide: false,
        parent: null,

      },
    },
    numberUnit: 1,
    source: {
      label: "ADEME",
      link: "",
    },
    label: "1 repas avec du poulet ðð",
    ghg: 1350,
  },
  {
    id: 1103,
    category: {
      id: 1100,
      label: "ð½ï¸ Repas",
      hide: false,
      parent: {
        id: 1000,
        label: "ð¥ Alimentation",
        hide: false,
        parent: null,

      },
    },
    numberUnit: 1,
    source: {
      label: "ADEME",
      link: "",
    },
    label: "1 repas avec du boeuf ð¥©ð",
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
