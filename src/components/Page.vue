<template>
    <div class="page">
        <div class="page_left" v-show="currentPage !== 1" @click="$emit('click-prev', currentPage)">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="page_content">Page {{ currentPage }} of {{ totalPage }}</div>
        <div class="page_right" v-show="currentPage !== totalPage"  @click="$emit('click-next', currentPage)">
            <i class="el-icon-arrow-right"></i>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPage: {
            type: Number,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.page {
    width: 880px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_left,
    &_right {
        width: 4rem;
        height: 4rem;
        border: 2px solid #eee;
        border-radius: 4px;
        line-height: 4rem;
        text-align: center;
        font-size: 30px;
        color: #333;
        transition: all .3s;
        &:hover {
            background-color: #BED0E3;
            opacity: 0.6;
            transition: all .3s;
            border: 2px solid #A4C1E0;
        }
    }
    &_content {
        color: #8492a6;
        flex: 1;
        max-width: 800px;
        text-align: center;
    }
}
</style>
