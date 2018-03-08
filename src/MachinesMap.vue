<template>
    <div>
        <h1>Cartes Des Machine Du monde du Café</h1>

        <gmap-map

                :center="{lat:10, lng:10}"
                :zoom="5"

                style=" align:center; width: 100%; height:800px"
        >
            <gmap-marker
                    :key="index"
                    v-for="(m, index) in machines"
                    :position="{lat:m.latitude,lng:m.longitude}"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
            ></gmap-marker>
        </gmap-map>

    </div>

</template>

<script>
    export default {
        // name: "MachinesMap"
        props:["machinemap"],
        data() {
            return {
            machines: [{
                id: 1,
                latitude: 10,
                longitude: 10,
            },
                {
                    id: 2,
                    latitude: 11,
                    longitude: 9.6,
                }]
    }


    }}
</script>

<style scoped>

</style>