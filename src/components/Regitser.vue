<template>
  <div class="contain">
    <div class="container my-4">
      <div class="row">
        <div class="offset-0 offset-md-3 col-12 col-md-6">
          <h1>Create Account</h1>
          <hr />
          <form name="form" @submit.prevent="register">
              <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                class="form-control"
                name="name"
                id="name"
                placeholder="Enter Fullname"
                v-model="form.name"
              />
            </div>
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
            <div>Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 numeric character, and one special character.</div>
            <div class="form-group">
              <button class="btn btn-primary" type="submit">Create Account</button>
              <app-spinner v-if="processing" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {registration} from '../services/register'
export default {
  name: "AppRegister",
  data() {
    return {
      processing: false,
      form: {
          name: "",
        email: "",
        password: "",
        role:"general"
      },
    };
  },
  methods: {
    async register(){

       try{ let res=await registration(this.form);
        if(res.status==201){
            alert('Account Created')
            this.email=="";
            this.name=="";
            this.password=="";
            
        }
       }
       catch(error){
             alert('Wrong Password/Username exists');
             this.email=="";
            this.name=="";
            this.password=="";
       }
      

    }
  },
};
</script>

<style scoped>
.contain {
  height: 100vh;
}

.btn{
    margin-top: 20px;
}
</style>
