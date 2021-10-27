<template>
  <div class="contain">
    <div v-for="job in jobs" :key="job.id">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ job.company_name }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ job.location }}</h6>
          <p class="card-text description">
            
              {{ job.description }}
            
          </p>
          <a :href="job.detail_url" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { jobsearch } from "../services/jobsearch";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  async created() {
    console.log("created");
    const res = await jobsearch();

    this.jobs = res.jobs;
    console.log(this.jobs);
  },
};
</script>

<style scoped>
.description {
  height: 300px;
  overflow-x: hidden;
  text-overflow: ellipsis;
  display: block;
}
.contain{
  height: 100vh;
}
</style>
