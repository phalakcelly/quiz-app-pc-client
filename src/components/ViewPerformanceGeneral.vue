<template>
  <div class="contain">
    <ul v-for="result in results" :key="result.id">
      
        <span class="email">{{ result.email }}</span>
        <span class="score">{{ result.score }}</span>
        <span v-if="result.aptitude" class="test">Aptitude</span>
        <span v-if="result.reasoning" class="test">Reasoning</span>
        <span v-if="result.technical" class="test">Technical</span>
        <span class="date">{{new Date(result.date) }}</span>
      
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
span{
 padding: 20px 20px 20px 20px;
 border: 1px solid black;
 background-color: cornsilk;
 border-radius: 3px;
}
</style>
