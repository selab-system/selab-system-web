<template>
  <div >
    <div class="report-task">
        <div>
            <div>汇报内容</div>
            <textarea name="message" rows="20" cols="20" v-model="content" required></textarea>
            <button class="reportTask">汇报</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

-task<style>
.report-task {
    margin:10px auto 0;
    width: 60%;
    height: 600px;
    padding-top: 5px;
    /* background-color: pink; */
}
.report-task div{
    font-size: 30px;
    font-family: var(--font-family);
    margin-bottom: 5px;
}
.report-task button{
    width: 120px;
    height: 60px;
    box-shadow: var(--table-box-shadow);
    background-color: var(--table-box-title-bgc-color);
    border: 0.5px solid var(--table-border-grey);
    border-radius: var(--table-action-radius);
    margin-left: 20px;
}
.report-task button:hover{
    background-color: var(--table-action-hover-bg-color);
    color: var(--table-action-hover-color);
}
.report-task button:active{
    background-color: var(--table-action-active-box-shadow);
    transform: scale(0.95);
}
</style>