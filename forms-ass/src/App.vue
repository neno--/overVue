<template>
  <div class="container">
    <form @submit.prevent="submit" v-show="formInputStage">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->

          <form class="form-horizontal" role="form">

            <first-last-name-input @dataChange="updateFullName"></first-last-name-input>

            <div class="form-group">
              <label for="email" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <input type="mail" v-model="email" class="form-control" id="email" placeholder="Email">
              </div>
            </div>

            <div class="form-group">
              <label for="password" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
              </div>
            </div>

            <div class="radio">
              <label>
                <input type="radio" v-model="storeInDatabase" name="optionsRadios" id="optionsRadios1"
                       :value="true">
                Store in database
              </label>
            </div>
            <div class="radio">
              <label>
                <input type="radio" v-model="storeInDatabase" name="optionsRadios" id="optionsRadios2"
                       :value="false">
                Do not store in database
              </label>
            </div>


            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </form>
    <hr>
    <div class="row" v-show="!formInputStage">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{fullName}}</p>
            <p>Mail: {{email}}</p>
            <p>Password: {{password}}</p>
            <p>Store in Database?: {{storeInDatabase}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FirstLastNameInput from './components/FirstLastNameInput.vue'

  export default {
    components: {
      'firstLastNameInput': FirstLastNameInput
    },
    data: function () {
      return {
        fullName: '',
        email: '',
        password: '',
        storeInDatabase: null,
        formInputStage: true
      }
    },
    methods: {
      submit: function () {
        this.formInputStage = !this.formInputStage
      },
      updateFullName: function (fullName) {
        this.fullName = fullName
      }
    }
  }
</script>

<style>
</style>
