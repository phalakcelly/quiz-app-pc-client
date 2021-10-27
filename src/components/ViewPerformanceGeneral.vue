<template>
  <div class="contain">
    <ul v-for="result in results" :key="result.id">
      <li>
        <span>{{ result.email }}</span>
        <span>{{ result.score }}</span>
        <span v-if="result.aptitude">Aptitude</span>
        <span v-if="result.reasoning">Reasoning</span>
        <span v-if="result.technical">Technical</span>
        <span>{{ result.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import viewResult from "../services/viewResult";
export default {
  data() {
    return {
      results: [],
    };
  },
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

  async created() {
    const res = await viewResult(this.email);
    this.results=res.data;
  },
};
</script>

<style scoped>
.contain{
    height: 100vh;
}
</style>
