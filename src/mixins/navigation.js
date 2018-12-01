export default {
    methods: {
      toggleDrawer () {
        this.drawer = !this.drawer;
      },
      logout () {
        //En el futuro "disaparará" acciones (vuex) para resetear los valores del usuario logado
      }
    }
  }
  