<template>
    <div class="container pt-4" align="left">
        <h3>Skill</h3><hr/>
        <div class="row">
            <div v-for="data in resSkill" :key="data.id" class="col-12 col-md-3" style="margin-bottom: 7px;">
                <div class="card">
                    <img class="card-img-top" v-bind:src="data.foto" width="100%" height="270"/>
                    <div class="card-body bg-light">
                        <p class="card-text text-center">
                        {{data.nama_kemampuan}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Skill',
    data() {
        return {
            apiURL          :   "http://diamsyah.com/service_website/index.php/All/skills/",
            resSkill        :   []
        }
    },

    mounted() {
        this.getSkill();
    },

    methods: {
        getSkill() {
            axios.get(this.apiURL).then(response => {
                this.resSkill    =    response.data.data;
            });
        }
    }
}
</script>

<style>
    
</style>