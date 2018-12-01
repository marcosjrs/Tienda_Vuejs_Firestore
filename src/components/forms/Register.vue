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
                //despatchará un acción del store para que registre el usuario, y se actualizará el user y el tipo de usuario (rol)
                console.log(user);
            }
        }
    }
</script>
