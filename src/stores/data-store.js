import { readable } from "svelte/store";

export const carbonCompareDataset = readable([
  {
    category: {
      id: 1000,
      label: "🥗 Alimentation",
      hide: false,
    },
    entries: [],
    categories: [
      {
        category: {
          id: 1100,
          label: "🍽️ Repas",
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
            label: "1 repas végétarien 🥕",
            ghg: 510,
          },
          {
            id: 1102,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1 repas classique avec du poulet 🍗🐔",
            ghg: 1350,
          },
          {
            id: 1103,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1 repas classique avec du boeuf 🥩🐄",
            ghg: 6290,
          },
        ],
      },
      {
        category: {
          id: 1200,
          label: "🥕🐑🥑 Produits bruts",
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
            label: "1kg de carottes 🥕",
            ghg: 300,
          },
          {
            id: 1202,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1kg d'avocat🥑",
            ghg: 1500,
          },
          {
            id: 1203,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1kg de gigot d'agneau 🐑",
            ghg: 34000,
          },
        ],
      },
    ],
  },
  {
    category: {
      id: 3000,
      label: "🚴‍♂️ Transport",
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
            label: "10km de voiture 🚗💨",
            ghg: 1900,
          },
          {
            id: 32,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "10km de bus (thermique) 🚌💨",
            ghg: 1000,
          },
          {
            id: 33,
            numberUnit: 1,
            source: {
              label: "SNCF",
              link: "",
            },
            label: "Paris<>Marseille en TGV 🚄",
            ghg: 600,
          },
          {
            id: 35,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "Aller retour Paris<>New York en avion ✈️",
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
            label: "1km en vélo 🚴",
            ghg: 0,
          },
          {
            id: 4102,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1km en vélo électrique 🚴🔋🔌",
            ghg: 2,
          },
          {
            id: 4103,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1km en bus (thermique) 🚌💨",
            ghg: 103,
          },
          {
            id: 4104,
            numberUnit: 1,
            source: {
              label: "ADEME",
              link: "",
            },
            label: "1km en voiture (thermique) 🚗💨",
            ghg: 193,
          },
        ],
      },
    ],
  },
  {
    category: {
      id: 5000,
      label: "👕🖥️ Achats & consommation",
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
            label: "Jean en coton 👖",
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
            label: "Trottinette électrique 🛴",
            ghg: 91900,
          },
        ]
      },
      {
        category: {
          id: 5100,
          label: "🖥️ Numérique",
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
            label: "Ordinateur portable 15' 💻",
            ghg: 326000,
          },
          {
            id: 5102,
            numberUnit: 1,
            source: {
              label: "Dell",
              link: "",
            },
            label: "Ecran 25' 4K 🖥️",
            ghg: 561000,
          },
          {
            id: 5103,
            numberUnit: 1,
            source: {
              label: "Apple",
              link: "",
            },
            label: "iPhone 13 Pro 📱",
            ghg: 69000,
          },
          {
            id: 5104,
            numberUnit: 1,
            source: {
              label: "Apple",
              link: "",
            },
            label: "iMac 27' 5K 🖥️",
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
        label: "Budget carbone /pers /an 🌱🌎",
        ghg: 2000000,
      },
    ],
  },
]);
