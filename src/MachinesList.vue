<template>
    <div>
        <h1>Liste Des Machine Du monde du Café</h1>
        <div>
            <p class="red" v-if="error != null">Pas de machines === pas de travail</p>
            <p class="orange" v-if="loading">Raquête en cours</p>
            <p class="green" v-else-if="error === null">Au boulot les faignants</p>
        </div>
        <ul>
            <listemachine v-for="machine in machines"
                          :key="machine.id"
                          v-bind:machineprops="machine">

            </listemachine>
        </ul>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                // name: "MachinesList",

                machines:
                    [{
                    //     id: 1,
                    //     name: 'What else ?',
                    //     status: true,
                    //     checkedAt: new Date(),
                    // },
                    //     {
                    //         id: 2,
                    //         name: 'Broken',
                    //         status: false,
                    //         checkedAt: new Date(),
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