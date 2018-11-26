import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store(
    {
        state:{
            //para preloader
            processing: false,
            loaded: false,
            alert:{
                type:'success',
                show: false,
                message: ''
            }
        },
        mutations:{
            // actions --(llaman)--> mutations ---(modifican)--> state
            setLoaded: (state, loaded) => {
                state.loaded = loaded;
            },
            setAlertMessage: (state, data) =>{
                state.alert.type = data.type;
                state.alert.show = data.show;
                state.alert.message = data.message;
                setTimeout(()=>{ 
                    //restauramos valores iniciales
                    this.alert.type = 'success';
                    this.alert.show = false;
                    this.alert.message = '';
                }, data.timeout);
            }
        },
        modules:{

        }
    }
);