<template>

  <nav class=" navbar-expand-lg  navbar navbar-dark bg-dark">
    <template v-if="isAuthenticated">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/" active-class="active" exact
          >Quiz up</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-if="role!=`admin`">
              <router-link class="nav-link" to="/" active-class="active" exact
                >Home</router-link
              >
            </li>
            <li class="nav-item" v-if="role!=`admin`">
              <router-link
                class="nav-link"
                to="/aptitude"
                active-class="active"
                exact
                >Aptitude</router-link
              >
            </li>
            <li class="nav-item" v-if="role!=`admin`">
              <router-link
                class="nav-link"
                to="/reasoning"
                active-class="active"
                exact
                >Reasoning</router-link
              >
            </li>
            <li class="nav-item" v-if="role!=`admin`">
              <router-link
                class="nav-link"
                to="/technical"
                active-class="active"
                exact
                >Technical</router-link
              >
            </li>
            <li class="nav-item" v-if="role!=`admin`">
              <router-link
                class="nav-link"
                to="/jobsearch"
                active-class="active"
                exact
                >Job Search</router-link
              >
            </li>
            <li class="nav-item" v-if="role==`admin`">
              <router-link
                class="nav-link"
                to="/usersearch"
                active-class="active"
                exact
                >View Performance</router-link
              >
            </li>
            <li class="nav-item" v-if="role!=`admin`">
              <router-link
                class="nav-link"
                to="/viewperformancegeneral"
                active-class="active"
                exact
                >View Performance</router-link
              >
            </li>
            

            <ul class="nav navbar-nav">
              <li class="nav-item">
                <span class="nav-link">Hi {{ email }}</span>
              </li>
              <li class="nav-item">
                <span class="nav-link cursor-pointer" @click="logout()"
                  >Logout</span
                >
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </template>
    <ul class="nav navbar-nav" v-else>
      <li class="nav-item">
        <router-link class="nav-link" active-class="active" to="/login"
          >Login</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    email() {
      return this.$store.state.auth.email;
    },
    role() {
      return this.$store.state.auth.role;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push({ name: "login" }));
    },
  },
};
</script>

<style scoped></style>
