<template>
  <div class="contain">
    <div class="container my-4">
      <div class="row">
        <div class="offset-0 offset-md-3 col-12 col-md-6">
          <h1>Login</h1>
          <hr />
          <form name="form" @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                autocomplete="off"
                class="form-control"
                name="password"
                id="password"
                v-model="form.password"
              />
            </div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">Login</button>
              <app-spinner v-if="processing" />
            </div>
            <div>
              <br />
              <span>Don't have an account?</span>
              <br />
              <button class="btn btn-light">
                <router-link to="/register" exact>Create Account</router-link>
              </button>
            </div>
            <br>
            <div>
              <div class="head">Can also login through dummy user.</div>
              <div class="cred">dummy.user@example.com</div>
              <div class="cred">Password@123</div>              
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLogin",
  data() {
    return {
      processing: false,
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", this.form)
        .then(() => this.$router.push({ name: "Home" }))
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style scoped>
.contain {
  height: 100vh;
}

.btn {
  margin-top: 20px;
}
.head{
  font-size: 14pt;
}
.cred{
  color:crimson;
}
</style>
