<template>
  <div class="parent">
    <div class="outer">
      <div class="inner" v-if="questiondisplay">
        <h2 class="quesnumber">Question: {{ currentQuestion + 1 }}</h2>
        <span style="font-size: 40px;"
          ><strong>{{ countDown }} </strong></span
        >
        <div class="progress-check">
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped"
              role="progressbar"
              :style="width"
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div class="question">{{ questions[currentQuestion].question }}</div>
        <div class="answers">
          <div @click="answer_adder('a')" class="answer">
            {{ questions[currentQuestion].options.a }}
          </div>
          <div @click="answer_adder('b')" class="answer">
            {{ questions[currentQuestion].options.b }}
          </div>
          <div @click="answer_adder('c')" class="answer">
            {{ questions[currentQuestion].options.c }}
          </div>
          <div @click="answer_adder('d')" class="answer">
            {{ questions[currentQuestion].options.d }}
          </div>
        </div>
      </div>
      <div class="start" v-if="start">
        <div class="instructions">
          <h3><b>Instructions</b></h3>
          <p>This is a timed quiz with 10 questions each to be answered in 30 seconds</p>
          <p>These questions will be randomly picked from the question bank.</p>
          <p>You will be given the test result at the end of the quiz.</p>
          <p>The quiz will start as soon as you click the Start button.</p>         

        </div>
        
        
        <button class="btn btn-primary" @click="changedisplay">Start</button>
      </div>
      <div class="result" v-if="quizendcheck">
        <button class="btn btn-primary" @click="finalResult">Result</button>
        <div class="result_container">
            <div>Answer Count :- {{final_Ans.result}}</div>
            <ul v-for="eachans in final_Ans.fulldata" :key="eachans">
                <div><span class="box question-box">{{eachans.question}} </span><span class="box answer-box">{{eachans.answer}} </span><span class="box status-box">{{eachans.status}}</span></div>
            </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { getques, resultsubmitandcheck } from "../services/reasoning";
export default {
  data() {
    return {
      currentQuestion: 0,
      questiondisplay: false,
      start: true,
      countDown: 30,
      timer: null,
      questions: [],
      progress: 0,
      quizendcheck: false,
      submitted_anslist: [],
      final_Ans:{},
      width:""
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
  methods: {
    changedisplay() {
      this.start = false;
      this.questiondisplay = true;
      this.countDownTimer();
    },
    handleAnswerClick() {
      clearTimeout(this.timer);
      let nextQuestion = this.currentQuestion + 1;
      if (nextQuestion < this.questions.length) {
        this.currentQuestion = nextQuestion;
        this.countDown = 30;

        this.countDownTimer();
      } else {
        this.quizendcheck = true;
        this.start = false;
        this.questiondisplay = false;
      }
    },
    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown -= 1;
          this.progress = Math.ceil(((30 - this.countDown) / 30)*100);
          console.log('progress',this.progress);
          this.width=`width: ${this.progress}%`
          console.log(this.width);
          console.log(this.countDown);
          this.countDownTimer();
        }, 1000);
      } else {
        this.handleAnswerClick();
      }
    },
    answer_adder(option) {
      console.log("option", option);

      if (option == "a") {
        let ans = this.questions[this.currentQuestion].options.a;
        let id = this.questions[this.currentQuestion].id;
        let obj = {
          option: {
            given_ans: ans,
          },
          id: id,
        };
        this.submitted_anslist.push(obj);
        clearTimeout(this.timer);
        let nextQuestion = this.currentQuestion + 1;
        if (nextQuestion < this.questions.length) {
          this.currentQuestion = nextQuestion;
          this.countDown = 30;

          this.countDownTimer();
        } else {
          this.quizendcheck = true;
          this.start = false;
          this.questiondisplay = false;
        }
      }
      if (option == "b") {
        let ans = this.questions[this.currentQuestion].options.b;
        let id = this.questions[this.currentQuestion].id;
        let obj = {
          option: {
            given_ans: ans,
          },
          id: id,
        };
        this.submitted_anslist.push(obj);
        clearTimeout(this.timer);
        let nextQuestion = this.currentQuestion + 1;
        if (nextQuestion < this.questions.length) {
          this.currentQuestion = nextQuestion;
          this.countDown = 5;

          this.countDownTimer();
        } else {
          this.quizendcheck = true;
          this.start = false;
          this.questiondisplay = false;
        }
      }
      if (option == "c") {
        let ans = this.questions[this.currentQuestion].options.c;
        let id = this.questions[this.currentQuestion].id;
        let obj = {
          option: {
            given_ans: ans,
          },
          id: id,
        };
        this.submitted_anslist.push(obj);
        clearTimeout(this.timer);
        let nextQuestion = this.currentQuestion + 1;
        if (nextQuestion < this.questions.length) {
          this.currentQuestion = nextQuestion;
          this.countDown = 5;

          this.countDownTimer();
        } else {
          this.quizendcheck = true;
          this.start = false;
          this.questiondisplay = false;
        }
      }
      if (option == "d") {
        let ans = this.questions[this.currentQuestion].options.d;
        let id = this.questions[this.currentQuestion].id;
        let obj = {
          option: {
            given_ans: ans,
          },
          id: id,
        };
        this.submitted_anslist.push(obj);
        clearTimeout(this.timer);
        let nextQuestion = this.currentQuestion + 1;
        if (nextQuestion < this.questions.length) {
          this.currentQuestion = nextQuestion;
          this.countDown = 5;

          this.countDownTimer();
        } else {
          this.quizendcheck = true;
          this.start = false;
          this.questiondisplay = false;
        }
      }

      console.log("submitted anslist", this.submitted_anslist);
    },
    async finalResult() {
      console.log("Inside final result");
      let date =new Date();
      const display_result = await resultsubmitandcheck({email:this.email,anslist:this.submitted_anslist,date:date});
      console.log("display_result", display_result);
      this.final_Ans=display_result.data;
      console.log(this.final_Ans.result);
    },
  },
  async created() {
    console.log("created");
    try {
      let question_bank = await getques();

      this.questions = question_bank.data;
      console.log("quesbank", question_bank);
    } catch {
      (err) => {
        console.log(err);
      };
    }
  },
};
</script>

<style scoped>
.start{
  display: flex;
  flex-direction: column;
}
.question-box{
   background-color: #e3bab2;
}

.answer-box{
  background-color: #ded1a7;
}
.status-box{
  background-color: #a7daf2;
}
.box{
  padding: 5px 5px 5px 5px;
  border: 1px solid black;
  border-radius: 3px;
  margin:5px 5px 5px 5px ;
 
  opacity: 0.1;
  
}

.parent {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.outer {
  width: 70%;
  /* border: 1px solid black; */
  /* background-color: #f8f9fa; */
  position: relative;
    /* max-width:978px;  */
    width: 100%;
    min-height:100%; 
    /* background:rgb(240,240,240) url(https://wallpaperaccess.com/full/340434.png) repeat top center;  */
  height: 600px;
  margin: 5%;
  display: flex;
  justify-content: center;
  /* border-radius: 3px; */
}
.inner {
  width: 90%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.question {
  width: 80%;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 5%;
  background-color: cornflowerblue;
  border-radius: 3px;
  border: 1px solid gray;
}
.answers {
  margin-top: 5%;
  width: 80%;
  border: 1px solid black;
  background-color:cornflowerblue ;
  padding: 30px 30px 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;
}
.answer {
  margin-top: 10px;
  width: 95%;
  border: 1px solid black;
  background-color: ghostwhite;
  border-radius: 3px;
  padding: 3px 3px 3px 3px;
}
.progress-check {
  width: 100%;
  background-color: gold;
}
.result{
  width: 100%;
}
.result_container{
    width: 100%;
}
.btn{
  margin-top: 10px;
}
</style>
