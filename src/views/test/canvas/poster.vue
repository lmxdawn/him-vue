<template>
    <section class="view-box">
        <!--海报-->
        <canvas ref="posterCanvas" class="poster-canvas" width="" height=""></canvas>
        <img v-if="posterImgUrl !== null" :src="posterImgUrl" class="poster-img" alt="">
    </section>
</template>

<script src="./poster.js">
</script>
<style src="./poster.scss" type="text/scss" lang="scss">
</style>
