<template>
  <div class="item p-3 mx-2">
    <h4>{{ name }}</h4>

  </div>
</template>

<script>
export default {
  name: "ItemElement",
  props: {
    name: String
  },
  data() {
    return {
    };
  },
};
</script>
