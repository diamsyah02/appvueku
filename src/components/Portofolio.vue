<template>
    <div class="container pt-4" align="left">
        <h3>Portofolio</h3><hr/>
        <div class="row">
            <div v-for="data in resPortofolio" :key="data.id" class="col-12 col-md-3" style="margin-bottom: 20px;">
                <b><i class="fa fa-check"></i> {{data.nama_portofolio}}</b>
                <p style="margin-left: 25px;">{{data.deskripsi}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Portofolio',
    data() {
        return {
            apiURL          :   "http://diamsyah.com/service_website/index.php/All/portofolios/",
            resPortofolio   :   []
        }
    },

    mounted() {
        this.getSkill();
    },

    methods: {
        getSkill() {
            axios.get(this.apiURL).then(response => {
                this.resPortofolio    =    response.data.data;
            });
        }
    }
}
</script>

<style>
    
</style>