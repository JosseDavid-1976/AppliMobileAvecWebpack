<template>
    <div>
        <h1>Cartes Des Machine Du monde du Café</h1>
        <div>
            <p class="red" v-if="error != null">Pas de machines === pas de travail</p>
            <p class="orange" v-if="loading">Raquête en cours</p>
            <p class="green" v-else-if="error === null">Au boulot les faignants</p>
        </div>

        <gmap-map

                :center="{lat:10, lng:10}"
                :zoom="5"

                style=" align:center; width: 100%; height:800px"
        >
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in machines"
                    :position="{lat:Number(m.latitude),lng:Number(m.longitude)}"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            ></gmap-marker>
        </gmap-map>

    </div>

</template>

<script>
    // import VueAxios from 'vue-axios'
    // import axios from 'axios'
    export default {
        // name: "MachinesMap"
        props:["machinemap"],
        data() {
            return {
             machines: [{
            //     id: 1,
            //     latitude: 10,
            //     longitude: 10,
            // },
            //     {
            //         id: 2,
            //         latitude: 11,
            //         longitude: 9.6,
                }],
                loading: false,
                error: null,
                    }
    },
        created() {
            this.loading = true;
            this.axios.get(`https://machine-api-campus.herokuapp.com/api/machines`)
                .then(raiponce => {
                    console.log(raiponce.data);
                    this.machines = raiponce.data;
                    this.loading = false;
                })
                .catch(e => {
                    console.log(e);
                    this.error=e;
                    this.loading = false;
                });
        }
    }
</script>

<style scoped>
    .red{
        color: red;
    }
    .green{
        color:green;
    }
    .orange{
        color:orange;
    }

</style>