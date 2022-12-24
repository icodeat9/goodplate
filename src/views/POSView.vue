<template>
  <div class="pos mx-2">
    <h1>Tables</h1>

    <div class="d-flex flex-row justify-content-around">
      <table-element
        v-for="table in tables"
        :key="table.id"
        v-on:click="goToTable(table.id)"
        :number=table.id
      />

    </div>
  </div>
</template>

<script>
import TableElement from "@/renderer/components/TableElement.vue";
export default {
  name: "POSView",
  components: { TableElement },
  data() {
    return {
      tables: [],
    };
  },
  mounted() {
    this.axios
      .get("/api/v1/tables", {
        headers: {
          "content-type": "application/json",
          Authorization: this.$store.state.userState.authorizationToken,
        },
      })
      .then((response) => {
        this.tables = response.data;
      });
  },
  methods: {
    goToTable(id) {
      this.$router.push("/table/" + id);
    },
  },
};
</script>
