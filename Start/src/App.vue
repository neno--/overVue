<template>
    <div class="container">
        <header-component>
        </header-component>
        <hr>
        <server-details-component>
        </server-details-component>
        <hr>
        <footer-component>
        </footer-component>
        <hr>
        {{justATest}}
    </div>
</template>

<script>
    import HeaderComponent from './Header.vue'
    import DetailsComponent from './Details.vue'
    import FooterComponent from './Footer.vue'

    export default {
        components: {
            'header-component': HeaderComponent,
            'server-details-component': DetailsComponent,
            'footer-component': FooterComponent

        },
        data: function () {
            return {justATest: 43}
        }
    }
</script>

<style>

</style>
