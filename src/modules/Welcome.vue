<template>
    <div class="welcome">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="logo"><img src="../assets/images/logo.jpg" alt=""></div>
                </div>
            </div>
            <AddForm/>
        </div>
    </div>
</template>

<script>
    import AddForm from "../components/AddForm";
    export default {
        name: "Welcome",
        components:{
            AddForm
        }
    }
</script>

<style scoped>
.welcome{
    background: rgb(44, 48, 53);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo img {
    width: 200px;
    height: auto;
}

@media screen and (max-width: 768px){
    .welcome{
        min-height: 400px;
    }


}
</style>