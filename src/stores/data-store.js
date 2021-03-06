import { readable } from "svelte/store";

export const carbonCompareDataset = readable([
  {
    category: {
      id: 1000,
      label: "π₯ Alimentation",
      hide: false,
    },
    entries: [],
    categories: [
      {
        category: {
          id: 1100,
          label: "π½οΈ Repas",
          hide: false,
        },
        entries: [
          {
            id: 1101,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1 repas vΓ©gΓ©tarien π₯",
            ghg: 510,
          },
          {
            id: 1102,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1 repas classique avec du poulet ππ",
            ghg: 1350,
          },
          {
            id: 1103,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1 repas classique avec du boeuf π₯©π",
            ghg: 6290,
          },
        ],
      },
      {
        category: {
          id: 1200,
          label: "π₯ππ₯ Produits bruts",
          hide: true,
        },
        entries: [
          {
            id: 1201,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1kg de carottes π₯",
            ghg: 300,
          },
          {
            id: 1202,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1kg d'avocatπ₯",
            ghg: 1500,
          },
          {
            id: 1203,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1kg de gigot d'agneau π",
            ghg: 34000,
          },
        ],
      },
    ],
  },
  {
    category: {
      id: 3000,
      label: "π΄ββοΈ Transport",
      hide: false,
    },
    entries: [],
    categories: [
      {
        category: {
          id: 3,
          label: "Quelques trajets",
          hide: false,
        },
        entries: [
          {
            id: 31,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "10km de voiture ππ¨",
            ghg: 1900,
          },
          {
            id: 32,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "10km de bus (thermique) ππ¨",
            ghg: 1000,
          },
          {
            id: 33,
            numberUnit: 1,
            source: {
              label: "SNCF",
              link: "",
            },
            label: "Paris<>Marseille en TGV π",
            ghg: 600,
          },
          {
            id: 35,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "Aller retour Paris<>New York en avion βοΈ",
            ghg: 1700000,
          },
        ],
      },
      {
        category: {
          id: 4100,
          label: "... pour 1 km parcourus",
          hide: true,
        },
        entries: [
          {
            id: 4101,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1km en vΓ©lo π΄",
            ghg: 0,
          },
          {
            id: 4102,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1km en vΓ©lo Γ©lectrique π΄ππ",
            ghg: 2,
          },
          {
            id: 4103,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1km en bus (thermique) ππ¨",
            ghg: 103,
          },
          {
            id: 4104,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1km en voiture (thermique) ππ¨",
            ghg: 193,
          },
        ],
      },
    ],
  },
  {
    category: {
      id: 5000,
      label: "ππ₯οΈ Achats & consommation",
      hide: false,
    },
    entries: [],
    categories: [
      {
        category: {
          id: 5200,
          label: "Achats divers",
          hide: false,
        },
        entries: [
          {
            id: 5201,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "Jean en coton π",
            ghg: 23200,
          },
          {
            id: 5202,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "Table en bois massif",
            ghg: 80200,
          },
          {
            id: 5203,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "Trottinette Γ©lectrique π΄",
            ghg: 91900,
          },
        ]
      },
      {
        category: {
          id: 5100,
          label: "π₯οΈ NumΓ©rique",
          hide: true,
        },
        entries: [
          {
            id: 5101,
            numberUnit: 1,
            source: {
              label: "Dell",
              link: "",
            },
            label: "Ordinateur portable 15' π»",
            ghg: 326000,
          },
          {
            id: 5102,
            numberUnit: 1,
            source: {
              label: "Dell",
              link: "",
            },
            label: "Ecran 25' 4K π₯οΈ",
            ghg: 561000,
          },
          {
            id: 5103,
            numberUnit: 1,
            source: {
              label: "Apple",
              link: "",
            },
            label: "iPhone 13 Pro π±",
            ghg: 69000,
          },
          {
            id: 5104,
            numberUnit: 1,
            source: {
              label: "Apple",
              link: "",
            },
            label: "iMac 27' 5K π₯οΈ",
            ghg: 824000,
          },
        ],
      },
    ]
  },
  {
    category: {
      id: 6000,
      label: "Autres",
      hide: false,
    },
    categories: [],
    entries: [
      {
        id: 6101,
        numberUnit: 1,
        source: {
          label: "Dell",
          link: "",
        },
        label: "Budget carbone /pers /an π±π",
        ghg: 2000000,
      },
    ],
  },
]);
