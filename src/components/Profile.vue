<template>
    <div class="container pt-4" align="left">
        <h3>Profile</h3><hr/>
        <div align="left" class="table table-responsive">
            <table class="table table-bordered">
                <tr>
                    <th width="20%" class="bg-light">Name</th>
                    <td>{{responseProfile.nama}}</td>
                </tr>
                <tr>
                    <th width="20%" class="bg-light">Place of birth</th>
                    <td>{{responseProfile.tempat_lahir}}</td>
                </tr>
                <tr>
                    <th width="20%" class="bg-light">Date of birth</th>
                    <td>{{responseProfile.tanggal_lahir}}</td>
                </tr>
                <tr>
                    <th width="20%" class="bg-light">Phone</th>
                    <td>{{phone.alamat_kontak}}</td>
                </tr>
                <tr>
                    <th width="20%" class="bg-light">Email</th>
                    <td style="text-transform: lowercase;">{{email.alamat_kontak}}</td>
                </tr>
                <tr>
                    <th width="20%" class="bg-light">Address</th>
                    <td>{{responseProfile.alamat}}</td>
                </tr>
                <tr>
                    <th width="20%" class="bg-light">Note</th>
                    <td>{{responseProfile.lainnya}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Profile',
    data() {
        return {
            apiURL  : 'http://diamsyah.com/service_website/index.php/All/profiles/',
            apiURL2 : 'http://diamsyah.com/service_website/index.php/All/contacts/',

            responseProfile: [],
            responseContact: null,
            phone: [],
            email: []
        }
    },

    mounted() {
        this.getProfile();
        this.getContact();
    },

    methods: {
        getProfile() {
            axios.get(this.apiURL).then(response => {
                this.responseProfile    =    response.data.data[0];
            });
        },

        getContact() {
            axios.get(this.apiURL2).then(response => {
                this.phone  =   response.data.data[0];
                this.email  =   response.data.data[1];
            });
        }
    }
}
</script>

<style>
    
</style>