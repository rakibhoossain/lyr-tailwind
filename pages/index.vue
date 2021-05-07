<template>
  <div class="container">
    <div>



      <div class="question_item_area" v-for="(question, key) in questions" :key="key">
        <div class="question_input_area">
          <div class="form-group col-md-12">
            <textarea class="form-control" cols="100" rows="10" v-model="question.name"></textarea>
          </div>
        </div>
        <div class="question_options_area" v-if="question.options">

          <div class="form-group col-md-6" v-for="(option, index) in question.options" :key="option.id+'_'+key">
            <div class="input-group">
              <div class="input-group-addon">{{index + 1}}</div>
              <input type="text" class="form-control" v-model="option.name">
              <div class="input-group-addon no-radious"><input type="radio" :checked="(option.id == question.correct) ? true : false" :id="question.correct" :value="option.id" v-model="question.correct">
              </div>
            </div>
          </div>
        </div>
      </div>

      <button @click="log_val">Log Val</button>







    </div>
  </div>
</template>

<script>
import question_items from '~/question.js'
import tailwindConfig from '~tailwind.config'
export default {
  data () {
    return {
      tailwindConfig,
      questions: null,
      question_items,
      }
  },
  created() {
    this.questions = this.question_items;
  },
  methods: {
    log_val(){
      console.log(this.questions)
    }
  },
}
</script>
