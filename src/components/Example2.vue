<script setup lang="ts">
import RawDisplayer from "./components/RawDisplayer.vue";
import { uid } from 'uid';
import { onMounted, ref, type Ref } from "vue";
import Sortable from 'sortablejs';

const list1 = ref(null)
const list2 = ref(null)

onMounted(() => {
  if (list1.value) {
    const sortable1 = Sortable.create(list1.value as HTMLDivElement, {
      sort: false,
      group: { name: "test1", pull: "clone" },
      onClone: function (evt) {
        console.log(evt.clone)
        const cloneEl = evt.clone;
        if (list2.value) {
          (list2.value as HTMLDivElement).appendChild(cloneEl)
        }
      },
    });

  }

  if (list2.value) {
    const sortable2 = Sortable.create(list2.value as HTMLElement, {
      sort: false,
      group: { name: "test2", put: ["test1"] }
    });
  }

})

</script>

<template>
  <main>
    <h1>Grid</h1>
    <div class="page-grid">
      <div>
        <div>
          Column
        </div>
        <div ref="list1">
          <div>
            <input type="text" disabled>
          </div>
          <div>
            <input type="number">
          </div>
          <div><input type="email"></div>
          <div><input type="password"></div>
          <div>
            <select name="" id="">
              <option value="1">Value1</option>
              <option value="2" disabled>Value2</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div ref="list2" class="dropzone grid-container">

        </div>
      </div>
    </div>
  </main>
</template>

<style>
.page-grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px 200px;
  column-gap: 1rem;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  margin-bottom: 1px;
}

.grid-item {
  height: 2rem;
  background-color: rgb(228, 228, 228);
}

.grid-item:hover {
  border: 1px solid darkgrey;
}

.dropzone {
  min-height: 100px;
  background-color: lightgray;
}
</style>
