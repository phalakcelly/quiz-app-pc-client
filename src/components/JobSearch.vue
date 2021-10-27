<template>
  <div class="contain">
    <div v-if="nojobs" class="jobs-box">
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
    <div v-if="!nojobs" class="d-flex justify-content-center">
      <div
        class="spinner-border spinner-border-large text-info"
        role="status"
      >
        <span class="sr-only">Loading...</span>
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
      nojobs: false,
    };
  },
  async created() {
    console.log("created");
    const res = await jobsearch();
    if (res != null) {
      this.nojobs = true;
    }

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
.contain {
  height: 100vh;
}
.spinner-border-large {
    width: 3rem;
    height: 3rem;
}
.sr-only{
  font-size: 20pt;
}
.jobs-box{
  display: flex;
  justify-content: space-between;
}
</style>
