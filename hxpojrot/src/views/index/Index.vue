<template>
    <div id="app">
            <div class="hx_home">
                <el-row :gutter="0" class="hx_home_nav">
                <el-col :xs="6"  :lg="12" >1234</el-col>
                <el-col :xs="18"  :lg="12" >123</el-col>
                </el-row>
            </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
.hx_home{
    background-color: black;
    color: #fff;
    .hx_home_nav{
        width: 1200px;
        margin: 0 auto;
    }
}


</style>

