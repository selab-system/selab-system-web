<template>
  <div>
        <div class="page-change-box">
            <div class="page-box">
                <div class="change-box lastbox">
                    <button>上一页</button>
                </div>
                <div class="page-box-item" v-for="(index,item) in currentIndexs" :key="index">{{ item + 1 }}</div>
                <div class="page-box-NotSow">
                    <div class="page-box-item">🕺</div>
                    <div class="page-box-right">
                        <button>下一页</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.page-change-box{
    margin: 25px auto;
    width: 30%;
    display: flex;
    justify-content: space-between;
}
.page-box{
    display: flex;
}
</style>