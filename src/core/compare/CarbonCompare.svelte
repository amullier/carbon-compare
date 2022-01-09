<script>
  import { currentSelectionObservable } from "../../stores/selection-store.js";
  import LineCarbonData from "./render/LineCarbonData.svelte";

  const A_TON_IN_GRAMS = 1000000;
  const A_KILO_IN_GRAMS = 1000;

  let currentCarbonCompareSelection = [];

  currentSelectionObservable.subscribe((currentSelection) => {
    currentCarbonCompareSelection = [];
    currentSelection.sort((a, b) => {
      if (a.ghg * a.numberUnit > b.ghg * b.numberUnit) return 1;
      if (a.ghg * a.numberUnit < b.ghg * b.numberUnit) return -1;
      return 0;
    });
    const maxGhg =
      currentSelection[currentSelection.length - 1].ghg * currentSelection[currentSelection.length - 1].numberUnit;
    currentSelection.forEach((carbonData) => {
      const numberUnit = !carbonData.numberUnit ? 1 : carbonData.numberUnit;
      const ghgClass = getGhgClass(carbonData.ghg * numberUnit);

      currentCarbonCompareSelection.push({
        id: carbonData.id,
        category: carbonData.category,
        source: carbonData.source,
        label: carbonData.label,
        numberUnit: numberUnit,
        ghg: carbonData.ghg,
        displayableGhg: getDisplayableGhg(carbonData.ghg * numberUnit),
        lineRender: {
          class: ghgClass,
          percentage: calcLinePercentage(carbonData.ghg * numberUnit, maxGhg),
        },
      });
    });
  });

  function getDisplayableGhg(ghgInGrams) {
    if (ghgInGrams > A_TON_IN_GRAMS) {
      return {
        value: +(ghgInGrams / A_TON_IN_GRAMS).toFixed(2),
        unit: "T",
      };
    } else if (ghgInGrams > A_KILO_IN_GRAMS) {
      return {
        value: +(ghgInGrams / A_KILO_IN_GRAMS).toFixed(2),
        unit: "kg",
      };
    } else {
      return { value: ghgInGrams, unit: "g" };
    }
  }

  function getGhgClass(ghg) {
    let ghgSquareClass = 9;
    if (ghg < 2 * A_TON_IN_GRAMS) ghgSquareClass = 8;
    if (ghg < 1 * A_TON_IN_GRAMS) ghgSquareClass = 7;
    if (ghg < 500 * A_KILO_IN_GRAMS) ghgSquareClass = 6;
    if (ghg < 100 * A_KILO_IN_GRAMS) ghgSquareClass = 5;
    if (ghg < 10 * A_KILO_IN_GRAMS) ghgSquareClass = 4;
    if (ghg < 1 * A_KILO_IN_GRAMS) ghgSquareClass = 3;
    if (ghg < 100) ghgSquareClass = 2;
    if (ghg < 10) ghgSquareClass = 1;
    if (ghg < 1) ghgSquareClass = 0;

    return "ghg-" + ghgSquareClass;
  }

  function calcLinePercentage(ghg, maxGhg) {
    return Math.round((ghg * 100) / maxGhg);
  }
</script>

<div class="line-container">
  {#each currentCarbonCompareSelection as graphicalCarbon}
    <LineCarbonData carbonData={graphicalCarbon} />
  {/each}
</div>

<style>
  div {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
  .line-container {
    flex-direction: column;
  }
</style>
