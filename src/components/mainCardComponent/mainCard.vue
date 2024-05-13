<template>
    <div>
        <div class="main-card">
            <div class="main-card-header">
                <div class="main-card-header-input user-name">
                    <input type="text" placeholder="姓名">
                </div>
                <div class="main-card-header-input user-grade">
                    <input type="text" placeholder="意向部门">
                </div>
                <div class="main-card-header-input user-group">
                    <input type="text" placeholder="年级">
                </div>
            </div>
            <div class="main-card-search">
                <button>查询</button>
                <button>clear</button>
            </div>
            <div class="main-card-content"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            InputTextClass:"inputPart"
        }
    },
    methods: {

    }
}
</script>

<style>
.main-card{
    margin: 30px auto;
    font-size: 16px;
    font-family: var(--font-family-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    /* box-shadow: var(--nav-box-shadow); */
    position: relative;
    width: 80%;
}
.main-card-header{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
    position: absolute;
    left: 10px;
}
.main-card-header-input{
    margin-right: 20px;
    /* padding: 20px 10px; */
}
/* 修改所有的input样式 */
input {
    padding: 10px 2px;
    border-radius: 2px;
    font-size: 18px;
    border: 1px solid #b0a877;
}
.main-card-search{
    margin-top: 60px;
    display: flex;
    flex-direction: row;
    position: absolute;
    position: absolute;
    left: 10px;
    height: 40px;
    /* width: 90px; */
    line-height: 40px;
    text-align: center;
}
.main-card-search button{
    margin-right: 20px;
    padding: 10px 20px;
    width: 120px;
    /* background-color: var(--button-color); */
    color: var(--button-black-font-color);
}
.main-card-search button{
 width: 6.5em;
 height: 2.3em;
 margin: 0.5em;
 background: var(--button-color);
 color: var(--button-color-white);
 border: none;
 border-radius: 0.625em;
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 position: relative;
 z-index: 1;
 overflow: hidden;
}

.main-card-search button:hover {
 color: black;
}

.main-card-search button:after {
 content: "";
 background: var(--button-color-mint);
 position: absolute;
 z-index: -1;
 left: -20%;
 right: -20%;
 top: 0;
 bottom: 0;
 transform: skewX(-45deg) scale(0, 1);
 transition: all 0.5s;
}

.main-card-search button:hover:after {
 transform: skewX(-45deg) scale(1, 1);
 -webkit-transition: all 0.5s;
 transition: all 0.5s;
}
</style>