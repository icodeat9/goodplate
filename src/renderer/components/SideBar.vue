<template>
  <nav id="sidebar" :class="{ active: isActive }">
    <div class="custom-menu">
      <button
        v-on:click="collapse()"
        type="button"
        id="sidebarCollapse"
        class="btn btn-primary"
      >
        <i class="fa fa-bars"></i>
        <span class="sr-only">Toggle Menu</span>
      </button>
    </div>
    <div class="p-4">
      <h1>
        <a href="index.html" class="logo"
          >GoodPlate <span>Best Restaurant POS</span></a
        >
      </h1>
      <ul class="list-unstyled components mb-5">
        <li class="active">
          <a href="#"><span class="fa fa-home mr-3"></span> Home</a>
        </li>
        <li>
          <router-link to="/pos"
            ><span class="fa fa-user mr-3"> </span> POS
          </router-link>
        </li>
        <li>
          <router-link to="/inventory"
            ><span class="fa fa-user mr-3"> </span> Inventory
          </router-link>
        </li>
        <li>
          <a href="#"><span class="fa fa-briefcase mr-3"></span> Works</a>
        </li>
        <li>
          <a href="#"><span class="fa fa-sticky-note mr-3"></span> Blog</a>
        </li>
        <li>
          <a href="#"><span class="fa fa-suitcase mr-3"></span> Gallery</a>
        </li>
        <li>
          <a href="#"><span class="fa fa-cogs mr-3"></span> Services</a>
        </li>
        <li>
          <a v-on:click="logout()" href="#"
            ><span class="fa fa-paper-plane mr-3"></span> Log out
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    collapse() {
      this.isActive = !this.isActive;
    },
    logout() {
      this.axios
        .delete("/users/sign_out", {
          headers: {
            "content-type": "application/json",
            Authorization: this.$store.state.userState.authorizationToken,
          },
        })
        .then((response) => {
          if (response.status == 200) {
            this.$store.state.userState.authorizationToken = null;
            this.$store.state.userState.user.loggedIn = true;
          }

          if (!this.$store.state.userState.user.loggedIn) this.$router.push("/");
        });
    },
  },
};
</script>
