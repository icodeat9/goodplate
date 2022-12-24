<template>
  <div class="d-flex h-100 flex-column">
    <div class="d-flex w-100 h-100 flex-row">
      <div class="d-flex w-75 h-100 flex-column">
        <div class="d-flex flex-row flex-wrap">
          <CategoryElement
            v-for="category in categories"
            :key="category.id"
            :name="category.name"
            v-on:click="selectCategory(category)"
          />
        </div>
        <ItemsPartial
          v-if="categorySelected != null"
          :items="items"
          @updateItemSelected="this.itemSelected = $event"
        />
      </div>
      <TableSummaryElement
        v-if="this.tableItems.length > 0"
        :tableItems="tableItems"
      />
    </div>
    <!-- # Bottom Bar -->
    <Transition>
      <div
        v-if="itemSelected != null"
        class="mt-auto position-relative py-3 w-100 bg-purple align-self-end c-white"
      >
        <h2 class="mx-3 c-white">{{ itemSelected.name }}</h2>
        <form>
          <div class="d-flex flex-row">
            <div class="mx-3">
              <label for="item[quantity]" class="form-label">Quantity</label>
              <input
                v-model="tableItem.quantity"
                type="number"
                class="form-control"
              />
              <div id="itemQuantityHelp" class="form-text">
                How many Item the client wants
              </div>
            </div>
            <div class="mx-3">
              <label for="item[:specifications]" class="form-label"
                >Specifications</label
              >
              <input
                v-model="tableItem.specifications"
                type="text"
                class="form-control"
              />
              <div id="itemQuantityHelp" class="form-text">
                Ej: No ketchup, no mayonese
              </div>
            </div>
            <button
              v-on:click.prevent="addItem()"
              type="submit"
              class="btn btn-primary height-25 align-self-center"
            >
              Place it!
            </button>
          </div>
        </form>
        <button
          v-on:click.prevent="unSelectItem()"
          type="button"
          class="btn btn-primary position-absolute top-0 start-97 translate-middle"
        >
          <span class="badge border border-light rounded-circle bg-danger p-2"
            ><span class="">close</span></span
          >
        </button>
      </div>
    </Transition>
  </div>
</template>

<script>
import CategoryElement from "@/renderer/components/CategoryElement.vue";
import TableSummaryElement from "@/renderer/components/TableSummaryElement.vue";
import ItemsPartial from "@/renderer/components/ItemsPartial.vue";
import { getTableById } from "@/services/table.service";
import { getAllCategories } from "@/services/category.service";

export default {
  name: "TableView",
  components: {
    CategoryElement,
    ItemsPartial,
    TableSummaryElement,
  },
  data() {
    return {
      id: null,
      table: {},
      categorySelected: null,
      itemSelected: null,
      categories: [],
      tableItems: [],
      tableItem: {
        quantity: 1,
        specifications: "",
      },
      items: [],
    };
  },
  methods: {
    addItem() {
      var item = this.itemSelected;
      item.table_id = this.table.id;
      item.item_id = this.itemSelected.id;
      item.quantity = this.tableItem.quantity;
      item.specifications = this.tableItem.specifications;

      this.axios
        .post(
          `/api/v1/tables/${this.table.id}/table_items`,
          {
            api_v1_table_item: item,
          },
          {
            headers: {
              "content-type": "application/json",
              Authorization: this.$store.state.userState.authorizationToken,
            },
          }
        )
        .then((response) => {
          if (response.status == 201) {
            console.log("success");
            this.tableItems.push(item);
            this.tableItem.quantity = 1;
            this.tableItem.specifications = "";
            this.itemSelected = null;
          }
        });
    },

    unSelectItem() {
      this.itemSelected = null;
    },

    selectCategory(category) {
      this.categorySelected = category;
      this.axios
        .get(`/api/v1/categories/${category.id}/items`)
        .then((response) => {
          this.items = response.data;
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;

    // Load Table Data
    getTableById(this.id).then((table) => {
      this.table = table;
      if (table.table_items != undefined) this.tableItems = table.table_items;
    });

    // Load Categories
    getAllCategories().then((categories) => {
      this.categories = categories;
    });
  },
};
</script>
