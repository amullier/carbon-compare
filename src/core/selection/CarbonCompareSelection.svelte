<script>
  import { carbonCompareDataset } from "../../stores/data-store.js";
  import {
    currentSelectionObservable,
    currentSelectedIdsObservable,
  } from "../../stores/selection-store.js";

  let carbonCompareDataSelection = [];
  let carbonCompareDataSelectionCategories = new Map();
  let carbonCompareDataSelectionIds = [];
  let displayNotif = false;

  carbonCompareDataset.subscribe((carbonDatasetValue) => {
    carbonCompareDataSelection = carbonDatasetValue;
    carbonCompareDataSelection.forEach((firstLevelCategory) => {
      carbonCompareDataSelectionCategories.set(
        firstLevelCategory.category.id,
        firstLevelCategory.category
      );
      firstLevelCategory.categories.forEach((subCategories) => {
        carbonCompareDataSelectionCategories.set(
          subCategories.category.id,
          subCategories.category
        );
      });
    });
  });

  currentSelectedIdsObservable.subscribe((value) => {
    carbonCompareDataSelectionIds = value;
  });

  function addEntryToSelection(carbonCompareEntry) {
    const isCarbonDataAlreadyInComparator =
      carbonCompareDataSelectionIds.findIndex(
        (value) => value == carbonCompareEntry.id
      ) == -1;

    if (isCarbonDataAlreadyInComparator) {
      currentSelectionObservable.update((currentSelection) => {
        currentSelection.push(carbonCompareEntry);
        return currentSelection;
      });
      currentSelectedIdsObservable.update((currentSelection) => {
        currentSelection.push(carbonCompareEntry.id);
        return currentSelection;
      });
    } else {
      displayNotif = true;
    }
  }

  function removeNotification() {
    displayNotif = false;
  }

  function hideEntries(id) {
    let category = carbonCompareDataSelectionCategories.get(id);
    if (category != null) {
      category.hide = !category.hide;
      carbonCompareDataSelectionCategories.set(id, category);
      carbonCompareDataSelectionCategories =
        carbonCompareDataSelectionCategories;
    }
    console.log(carbonCompareDataSelectionCategories.get(id));
  }
</script>

<div>
  <h2>Ajouter au comparateur:</h2>
  <div class="data-selector-container">
    {#each carbonCompareDataSelection as carbonCompareOption}
      <div class="data-selector-category">
        <h4>{carbonCompareOption.category.label}</h4>
        <ul>
          {#each carbonCompareOption.entries as carbonCompareEntry}
            <li
              class="data-item"
              on:click={addEntryToSelection(carbonCompareEntry)}
              title="Ajouter au comparateur"
            >
              <button>+</button>
              {carbonCompareEntry.label}
            </li>
          {/each}
        </ul>
        {#each carbonCompareOption.categories as carbonCompareSubCategory}
          <h5 on:click={hideEntries(carbonCompareSubCategory.category.id)}>
            <span>
              {carbonCompareSubCategory.category.label} ({carbonCompareSubCategory
                .entries.length})
            </span>
            <span class="category-expand-indicator">
              {#if !carbonCompareDataSelectionCategories.get(carbonCompareSubCategory.category.id).hide}
                &gt;
              {:else}
                &lt;
              {/if}
            </span>
          </h5>

          {#if !carbonCompareDataSelectionCategories.get(carbonCompareSubCategory.category.id).hide}
            <ul>
              {#each carbonCompareSubCategory.entries as carbonCompareEntry}
                <li
                  class="data-item"
                  on:click={addEntryToSelection(carbonCompareEntry)}
                  title="Ajouter au comparateur"
                >
                  <button>+</button>
                  {carbonCompareEntry.label}
                </li>
              {/each}
            </ul>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>
{#if displayNotif}
  <div class="notif">
    <p>Cette donnée à déjà été ajoutée au comparateur</p>
    <button on:click={removeNotification}>X</button>
  </div>
{/if}

<style>
  .data-selector-container {
    border: solid 4px black;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-bottom: 10px;
  }
  h2 {
    margin: 0;
    background-color: black;
    color: white;
    padding: 5px 20px;
  }
  h4,
  h5 {
    margin: 0;
    padding: 7px;
    display: flex;
    justify-content: space-between;
  }
  h4 {
    background: #ccc;
  }
  h5 {
    background: #eee;
    cursor: pointer;
  }
  h5:hover {
    background: #aaa;
  }
  .category-expand-indicator {
    transform: rotate(-90deg);
    font-weight: bold;
    font-family: monospace;
    font-size: 18px;
    color: black;
    display: block;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    cursor: pointer;
    padding: 7px;
    padding-left: 15px;
  }
  li:hover {
    background-color: #29538b4d;
  }
  li:hover > button {
    background-color: rgb(28, 60, 102);
  }

  button {
    background-color: #29548b;
    border-radius: 50%;
    color: white;
    width: 20px;
    height: 20px;
    padding-bottom: 2px;
    border:none;
  }
  .data-selector-category {
    flex: 1;
  }
  .data-item {
    margin-bottom: 3px;
  }

  .notif {
    position: absolute;
    background-color: rgb(255, 228, 228);
    height: 30px;
    box-shadow: 0 3px 5px -1px #0003, 0 6px 10px #00000024, 0 1px 18px #0000001f;
    width: 50%;
    left: 25%;
    height: 50px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  .notif > p {
    margin: 15px;
  }
  .notif > button {
    margin: auto 0;
    background-color: transparent;
    border: unset;
    color: black;
    font-weight: bold;
  }
  .notif > button:hover {
    color: #444;
  }
</style>
