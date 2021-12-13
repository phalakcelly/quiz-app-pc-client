<template>
  <div class="contain">
    <br>
    <div class="tbl">
      <table>
        <tr>
          <th>Email</th>
          <th>Score</th>
          <th>Topic</th>
          <th>Date</th>
        </tr>

        <tr v-for="result in results" :key="result.id">
          <td>{{ result.email }}</td>
          <td>{{ result.score }}</td>
          <td v-if="result.aptitude" class="test">Aptitude</td>
          <td v-if="result.reasoning" class="test">Reasoning</td>
          <td v-if="result.technical" class="test">Technical</td>
          <td>{{ new Date(result.date) }}</td>
        </tr>

      </table>
    </div>
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
    this.results = res.data;
  },
};
</script>

<style scoped>
.contain {
  height: 100vh;
}
.tbl {
  width: 90%;
  display: flex;
  justify-content: center;
}
span {
  padding: 3px 3px 3px 3px;
  border: 1px solid black;
  background-color: cornsilk;
  border-radius: 3px;
  margin: 10px 10px 10px 10px;
}
/* .result {
  margin-bottom: 10px;
} */
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
