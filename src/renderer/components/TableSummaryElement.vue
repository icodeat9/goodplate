<template>
  <div class="w-25 h-100">
    <h1 class="fw-bold text-center">Table Summary</h1>

    <ul class="list group">
      <li v-for="tableItem in tableItems" :key="tableItem" class="list-group-item border-purple border-2 my-2 mx-2">
        <div class="">
          <h5 class="mb-1">{{ tableItem.item.name }} ({{tableItem.quantity}})</h5>
          <p>{{ tableItem.specifications }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TableSummaryElement",
  props: {
    tableItems: Array,
  },
  data() {
    return {};
  },
};
</script>
