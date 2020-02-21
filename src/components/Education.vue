<template>
    <div class="container pt-4" align="left">
        <h3>Education</h3><hr/>
        <div class="row">
            <div v-for="data in resEducation" :key="data.id" class="col-12 col-md-4" style="margin-bottom: 7px;">
                <div class="card">
                    <img class="card-img-top" v-bind:src="data.foto" width="100%" height="270"/>
                    <div class="card-body">
                        <h4 class="card-title">{{data.nama_sekolah}}</h4>
                        <p class="card-text">{{data.mulai_sekolah}} - {{data.selesai_sekolah}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Education',
    data() {
        return {
            apiURL          :   "http://diamsyah.com/service_website/index.php/All/educations/",
            resEducation    :   []
        }
    },

    mounted() {
        this.getEducation();
    },

    methods: {
        getEducation() {
            axios.get(this.apiURL).then(response => {
                this.resEducation    =    response.data.data;
            });
        }
    }
}
</script>

<style>
    
</style>