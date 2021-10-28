<template>
  <div class="contain">
    <button @click="userSearch">View Users</button>
    <div v-if="usersearchflip">
      <div v-if="flipresult">
        <ul v-for="user in users" :key="user.id">
          <div>{{ user.email }}</div>
          <button @click="deleteUser(user.id)">Delete Users</button>
          <button @click="viewResult(user.email)">View Performance</button>
        </ul>
      </div>
    </div>
    <div v-if="!flipresult">
      <ul v-for="result in results" :key="result.id">
        <div>
          <span>{{ result.email }}</span>
          <span>{{ result.score }}</span>
          <span v-if="result.aptitude">Aptitude</span>
          <span v-if="result.reasoning">Reasoning</span>
          <span v-if="result.technical">Technical</span>
          <span>{{ result.date }}</span>
        </div>
      </ul>
      <button @click="closeresult">Close</button>
    </div>
  </div>
</template>

<script>
import { userSearch, deleteUser } from "../services/userSearch";
import viewResult from "../services/viewResult";
export default {
  data() {
    return {
      users: [],
      results: [],
      flipresult: true,
      usersearchflip: false,
    };
  },

  methods: {
    async userSearch() {
      console.log("user search");
      let users = await userSearch();
      this.users = users.data;
      this.usersearchflip = !this.usersearchflip;
    },
    async deleteUser(id) {
      let res = await deleteUser(id);
      console.log(res);
    },
    async viewResult(email) {
      let res = await viewResult(email);
      console.log(res);
      this.results = res.data;
      console.log("this is result", this.results);
      this.flipresult = !this.flipresult;
    },
    closeresult() {
      this.flipresult = !this.flipresult;
    },
  },
};
</script>

<style scoped>
.contain {
  height: 100vh;
}
span{
 padding: 3px 3px 3px 3px;
 border: 1px solid black;
 background-color: cornsilk;
 border-radius: 3px;
 margin: 10px 10px 10px 10px;
}
</style>
