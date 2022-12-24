<template>
  <!-- # Items Partial -->
  <div class="my-5 d-flex flex-row flex-wrap">
    <item-element
      v-for="item in items"
      :key="item.id"
      :name="item.name"
      v-on:click="selectItem(item.id)"
    />
  </div>
</template>

<script>
import ItemElement from "@/renderer/components/ItemElement.vue";

export default {
  name: "ItemsPartial",
  props: {
    items: Array,
  },
  components: {
    ItemElement,
  },
  data() {
    return {};
  },
  methods: {
    selectItem(itemId) {
      this.itemSelected = this.items.filter((item) => item.id == itemId)[0];
      this.$emit('updateItemSelected', this.itemSelected)
    },
  },
};
</script>
