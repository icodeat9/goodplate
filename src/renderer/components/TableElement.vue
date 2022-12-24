<template>
  <div class="table py-4 mx-4">
    <div class="mx-3">
      <h3>Table #{{ number }}</h3>
      Ocuppied: {{ occupied ? "Yes" : "No" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TableElement",
  props: {
    number: Number,
  },
  data() {
    return {
      occupied: false,
    };
  },
};
</script>
