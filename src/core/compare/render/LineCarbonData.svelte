<script>
  export let carbonData = null;
  import {
    currentSelectionObservable,
    removeFromSelection,
  } from "../../../stores/selection-store.js";
  function increaseNumberUnit(carbonData) {
    const numberUnit = parseInt(carbonData.numberUnit) + 1;
    updateNumberUnit(carbonData.id, numberUnit);
  }

  function decreaseNumberUnit(carbonData) {
    const numberUnit = Math.max(1, carbonData.numberUnit - 1);
    updateNumberUnit(carbonData.id, numberUnit);
  }

  function updateNumberUnit(carbonDataId, numberUnit) {
    currentSelectionObservable.update((carbonDatasetValue) =>
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

<div class="title">
  <h3>{carbonData.label}</h3>
  <div class="change-unit-container">
    <button
      class="btn-change-unit-number"
      on:click={increaseNumberUnit(carbonData)}>+</button
    >
    <input
      bind:value={carbonData.numberUnit}
      on:change={updateNumberUnit(carbonData.id, carbonData.numberUnit)}
    />
    <button
      class="btn-change-unit-number"
      on:click={decreaseNumberUnit(carbonData)}>-</button
    >
  </div>
  <button class="btn-suppr" on:click={removeFromSelection(carbonData.id)}
    >Suppr.</button
  >
</div>
<div class="visualization">
  <div
    class="carbon-data-line {carbonData.lineRender.class}"
    style="width: {carbonData.lineRender.percentage}%"
  >
    {#if carbonData.lineRender.percentage >= 10}
      <div>
        <b>{carbonData.displayableGhg.value}</b><span
          >{carbonData.displayableGhg.unit}</span
        >
      </div>
    {/if}
  </div>
  {#if carbonData.lineRender.percentage < 10}
    <div class="carbon-data-value">
      <b>{carbonData.displayableGhg.value}</b><span
        >{carbonData.displayableGhg.unit}</span
      >
    </div>
  {/if}
</div>

<style>
  .title {
    display: inline-flex;
  }
  h3 {
    font-size: 25px;
    margin: auto 20px auto 0;
  }
  .visualization {
    display: flex;
    margin-bottom: 20px;
  }
  .carbon-data-line {
    border: solid 3px black;
    color: white;
    text-align: center;
  }

  .carbon-data-value {
    margin-left: 8px;
  }
  .change-unit-container {
    display: flex;
    background-color: #444;
    border-radius: 10px;
  }
  .change-unit-container,
  .btn-suppr {
    height: 25px;
    margin: auto 0;
  }
  .btn-change-unit-number {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    margin: 0;
    min-width: 30px;
  }
  .btn-change-unit-number:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  .change-unit-container > input {
    background-color: transparent;
    color: white;
    border: none;
    padding: 0;
    max-width: 50px;
    text-align: center;
  }
  .btn-suppr {
    margin-left: 10px;
    cursor: pointer;
    background: white;
    border: solid 1px #d30000;
    color: #d30000;
    height: 25px;
    border-radius: 5px;
  }
  .btn-suppr:hover {
    background: #d3000041;
  }
</style>
