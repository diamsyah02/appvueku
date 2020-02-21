<template>
    <div class="container pt-4" align="left">
        <h3>Portofolio</h3><hr/>
        <div class="row">
            <div v-for="data in resExperience" :key="data.id" class="col-12" style="margin-bottom: 20px;">
                <h5>{{index+1}}. {{data.nama_perusahaan}}</h5>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <tr>
                            <th width="20%" class="bg-light">Job Position</th>
                            <td>{{data.posisi_pekerjaan}}</td>
                        </tr>
                        <tr>
                            <th width="20%" class="bg-light">Periode</th>
                            <td>{{data.mulai_kerja}} - {{data.selesai_kerja}}</td>
                        </tr>
                        <tr>
                            <th width="20%" class="bg-light">responsible</th>
                            <td>{{data.tanggung_jawab}}</td>
                        </tr>
                        <tr>
                            <th width="20%" class="bg-light">workplace address</th>
                            <td>{{data.alamat_tempat_kerja}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Experience',
    data() {
        return {
            apiURL          :   "http://diamsyah.com/service_website/index.php/All/experiences/",
            resExperience   :   [],
            index           :   0
        }
    },

    mounted() {
        this.getSkill();
    },

    methods: {
        getSkill() {
            axios.get(this.apiURL).then(response => {
                this.resExperience    =    response.data.data;
            });
        }
    }
}
</script>

<style>
    
</style>