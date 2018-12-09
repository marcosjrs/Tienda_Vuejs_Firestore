<template>
  <div>
    <!-- Tanto Login como Register utilizar el el formulario base: Auth.vue (importado como auth-form) -->
      <!-- con action="login" no mostrará el repetir password -->
    <auth-form action="login" v-on:process="login($event)"/>
    <app-snack-bar v-if="snackBar" :snackBar="snackBar" :text="message" :timeout="timeout"/>
  </div>
</template>

<script>
import AppSnackBar from "@/components/snackbar/Snackbar";
import AuthForm from "@/components/forms/Auth";
import { db } from "@/main";
export default {
  name: "Login",
  components: {
    AuthForm,
    AppSnackBar
  },
  data() {
    return {
      snackBar: false,
      message: "",
      timeout: 5000
    };
  },
  methods: {
    login(user) {
      this.$store
        .dispatch("firebaseLogin", user) //devuelve una promise con datos del usuario logado
        .then(data => {
          db.collection("users")
            .doc(data.user.uid)
            .onSnapshot(snapshot => {
              this.$router.push("/"); //onSnapshot es como un listener al cambio del doc (cuyo nombre es el valor de data.uid)
            });
        })
        .catch(error => {
          this.message = error.message.substr(0, 60);
          this.snackBar = true;
          setTimeout(() => {
            this.snackBar = false;
          }, this.timeout);
        });
    }
  }
};
</script>
