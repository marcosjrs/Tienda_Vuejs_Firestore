<template>
  <div>

    <auth-form
      action="register"
      v-on:process="register($event)"
    />

    <app-snack-bar
      v-if="snackBar"
      :snack-bar="snackBar"
      :text="message"
      :timeout="timeout"
    />
  </div>
</template>

<script>
	import AppSnackBar from "@/components/snackbar/Snackbar";
    import AuthForm from "@/components/forms/Auth";
    import {db} from '@/main';
    export default {
        name: "Register",
        components: {AuthForm, AppSnackBar},
        data () {
            return {
                snackBar: false,
                message: '',
                timeout: 5000
            }
        },
        methods: {
		  register (user) {
		    this.$store.dispatch('firebaseRegister', user)  //Esta action del store de auth devuelve una promise (de la llamada acreateUserWithEmailAndPassword de firebase)
          .then((infoRegistered) => {
            const userRegistered = infoRegistered.user; // info dada por firebase al registrar el user
            const data = {
              uid: userRegistered.uid, 
              email: user.email,
              role: 'customer'
            };
            db.collection('users').doc(userRegistered.uid).set(data).then(() => { // con los datos creamos un doc en la colección "users" dentro de storage de la cuenta de firebase
              this.$store.commit('setRole', data.role);//una vez guardado  establecemos el role y redireccionamos al inicio
              this.$router.push('/');
            });
          })
          .catch((error) => {
            this.message = error.message.substr(0, 60);
            this.snackBar = true;
            setTimeout(() => {
              this.snackBar = false;
            }, this.timeout);
          })
      }
    }
    }
</script>
