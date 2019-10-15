<template>
    <div class="footer">
        <div class="container footer__block">
            <div class="footer__block_links">
                <a href="£"><img src="../assets/images/vk.jpg" alt=""></a>
                <a href="£"><img src="../assets/images/facebook.jpg" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
.footer{
    width: 100%;
    height: 50px;
    background: rgb(44, 48, 53);
}
.footer__block{
    display: flex;
    justify-content: flex-end;
}
.footer__block_links a{
    margin: 0 20px;
}
    .footer__block_links img{
        width: 40px;
    }
</style>