import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import MachinesList from './MachinesList.vue'
import MachinesMap from './MachinesMap.vue'
import MachineMachine from './MachineMachine.vue'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBQQZfVe4ThMQ8AO_Vd2ywLFi6314n6wVA',
    }
});

Vue.use(VueRouter);
Vue.use(VueAxios,axios);
Vue.component("listemachine",MachineMachine);
Vue.component("listesmachines",MachinesList);
// Vue.component("gmap-map",MachinesMap);


const routes = [

    {path: '/list', component: MachinesList},
    {path: '/map', component: MachinesMap},
    {path: '/machine', component:MachineMachine}
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app');




new Vue({
    el: '#app',
    router,

    render: h => h(App),

    // watch: {
    //     '$route'(to, from) {
    //         // Call resizePreserveCenter() on all maps
    //         Vue.$gmapDefaultResizeBus.$emit('resize')
    //     }
    // }
});
