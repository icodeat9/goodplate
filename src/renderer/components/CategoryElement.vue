<template>
  <div class="category p-4 mx-2">
    <h3>{{ name }}</h3>
    Items: 16
  </div>
</template>

<script>
export default {
  name: "CategoryElement",
  props: {
    name: String,
  },
  data() {
    return {};
  },
};
</script>
