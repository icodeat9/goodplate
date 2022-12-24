<template>
  <div class="container">
    <h1>Log In</h1>
    <form v-on:submit.prevent="submit">
      <div class="form-floating mb-4">
        <input
          v-model="user.company_name"
          class="form-control"
          name="users[company_name]"
          type="text"
        />
        <label for="users[company_name]">Company Name</label>
      </div>
      <div class="form-floating mb-4">
        <input
          v-model="user.email"
          class="form-control"
          name="users[email]"
          type="email"
        />
        <label for="users[email]">Email</label>
      </div>
      <div class="form-floating mb-4">
        <input
          v-model="user.password"
          class="form-control"
          name="users[password]"
          type="password"
        />
        <label class="form-label" for="users[password]">Password</label>
      </div>
      <div class="mb-4">
        <button type="submit" class="btn btn-primary btn-lg">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { login } from '@/services/user.service'
export default {
  name: "LoginView",
  data() {
    return {
      user: {
        email: "myemail@email.com",
        password: "mypassword",
        company_name: "",
      },
    };
  },
  mounted() {},
  methods: {
    submit() {
      login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit(
              "userState/setAuthorizationToken",
              response.headers.authorization
            );
            this.$store.state.userState.user.loggedIn = true;
            this.$store.state.userState.user.name = this.user.email;
          }

          if (
            this.$store.state.userState.user.loggedIn &&
            this.$store.state.userState.authorizationToken != "" &&
            this.$store.state.userState.authorizationToken != undefined
          )
            this.$router.push("/home");
        });
    },
  },
};
</script>
