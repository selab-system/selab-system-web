<template>
    <div>
        <mainPerfectTable v-if="!formIfShowed" @onEmitShow="onEmitShow"/>
        <RegistrasionForm v-if="formIfShowed"/>
    </div>
</template>

<script>
import mainPerfectTable from '@/components/EnrollMenagge/mainPerfectTable.vue';
import RegistrasionForm from '@/components/EnrollMenagge/RegistrasionForm.vue';
export default {
    components:{
        mainPerfectTable,
        RegistrasionForm
    },
    data() {
        return {
            formIfShowed:false
        }
    },
    computed: {
    },
    methods: {
        onEmitShow(ifshow) {
            this.formIfShowed = ifshow
            console.log("onEmitShow",ifshow);
        }
    },
    mounted() {
    }
}
</script>

<style>

</style>