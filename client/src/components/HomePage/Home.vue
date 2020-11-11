<template>
<div class="home">
    <HHeader />
    <HBanner />
    <HExplain />
    <HBenefit />
    <HWorking />
    <HCreateWill />
    <HContact />
    <HFooter />
</div>
</template>

<script>
import HHeader from "./HHeader";
import HBanner from "./HBanner";
import HExplain from "./HExplain";
import HBenefit from "./HBenefit";
import HWorking from "./HWorking";
import HCreateWill from "./HCreateWill";
import HContact from "./HContact";
import HFooter from "./HFooter";
export default {
    name: 'Home',
    props: {
        msg: String
    },
    components: {
        HHeader,
        HBanner,
        HExplain,
        HBenefit,
        HWorking,
        HCreateWill,
        HContact,
        HFooter,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss">

</style>
