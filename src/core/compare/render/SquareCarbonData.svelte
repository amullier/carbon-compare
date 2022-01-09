<script>
  export let carbonData = null;
  import { currentSelectionCarbonData } from "../../../stores/selection-store.js";

  function increaseNumberUnit(carbonData) {
    const numberUnit = carbonData.numberUnit + 1;
    updateNumberUnit(carbonData.id, numberUnit);
  }

  function decreaseNumberUnit(carbonData) {
    const numberUnit = Math.max(1, carbonData.numberUnit - 1);
    updateNumberUnit(carbonData.id, numberUnit);
  }

  function updateNumberUnit(carbonDataId, numberUnit) {
    currentSelectionCarbonData.update((carbonDatasetValue) =>
      carbonDatasetValue.map((data) => {
        if (data.id == carbonDataId) {
          data = {
            ...carbonData,
            numberUnit: numberUnit,
          };
        }
        return data;
      })
    );
  }
</script>

<div class="carbon-data">
  {#if carbonData.squareRender.size.width < 100}
    <div class="carbon-data-value">
      <b>{carbonData.displayableGhg.value}</b><span
        >{carbonData.displayableGhg.unit}</span
      >
    </div>
  {/if}
  <div
    class="carbon-data-square {carbonData.squareRender.class}"
    style="width: {carbonData.squareRender.size.width}px;height:{carbonData
      .squareRender.size.height}px"
  >
    {#if carbonData.squareRender.size.width >= 100}
      <div
        class="carbon-data-value"
        v-if="carbonData.squareRender.size.width > 100"
        style="font-size:{Math.max(
          20,
          carbonData.squareRender.size.width / 4
        )}px"
      >
        <b>{carbonData.displayableGhg.value}</b><span
          >{carbonData.displayableGhg.unit}</span
        >
      </div>
    {/if}
  </div>
  <div class="carbon-data-label">
    <h3>{carbonData.label} <button class="info">i</button></h3>
    <div class="change-unit-container {carbonData.squareRender.class}">
      <button class="btn-change-unit-number" on:click={increaseNumberUnit(carbonData)}>+</button>
      <input bind:value="{carbonData.numberUnit}" on:change={updateNumberUnit(carbonData.id, carbonData.numberUnit)}/>
      <button class="btn-change-unit-number" on:click={decreaseNumberUnit(carbonData)}>-</button>
    </div>
  </div>
</div>

<style>
  .carbon-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .carbon-data-compare {
    display: flex;
    justify-content: space-around;
  }
  .carbon-data-square {
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: black 3px 3px;
    border: solid black;
    color: white;
    margin: 0 auto;
    text-align: center;
  }
  .carbon-data-value {
    text-align: center;
  }
  .carbon-data-label > h3 {
    text-align: center;
    margin: 5px 0;
  }
  .change-unit-container {
    display: flex;
    justify-content: space-between;
    max-width: 200px;
    margin: auto;
    color: white;
  }
  .btn-change-unit-number {
    text-decoration: none;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    color: white;
    margin: 0;
    min-width: 30%;
    font-size: 25px;
    font-weight: bold;
  }
  .btn-change-unit-number:hover {
    background: rgba(0, 0, 0, 0.5);
  }
  .change-unit-container > input {
    text-decoration: none;
    background-color: transparent;
    color: white;
    border: none;
    padding: 0;
    margin: 0;
    display: block;
    max-width: 50px;
    font-size: 20px;
    text-align: center;
  }
</style>

