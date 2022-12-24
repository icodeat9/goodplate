<template>
  <div class="bg-purple c-white">
    <div class="mx-3 mt-3 d-flex flex-row justify-content-between">
      <div>
        <p class="c-white">{{ this.$store.state.userState.title }}</p>
      </div>
      <div>
        <p class="c-white">{{ this.$store.state.userState.user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {};
  },
  methods: {},
};
</script>
