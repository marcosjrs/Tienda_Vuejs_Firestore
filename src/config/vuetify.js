import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

//configuración de un "theme" que se utilizará con el Vuetify
const themeToUse =  {
    primary: colors.red.darken1,
    secondary:colors.red.lighten4,
    accent:colors.indigo.base,
    error:colors.red.accent3
};

Vue.use(Vuetify, { theme:themeToUse });