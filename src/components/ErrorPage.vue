<template>
    <div id="ErRor">
        <div class="error"> 
            <h5>{{ Error }}</h5>
        </div>
    </div>
</template>

<script>
export default{
    name:'errorLoadingPage',
    data(){
        return{
            Error:'Invalid Not Fond',
        }
    }
}
</script>

<style scoped>
#ErRor{
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.error{
    text-align: center;
}

</style>