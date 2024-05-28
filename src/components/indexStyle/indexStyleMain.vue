<script setup>
import {onMounted, ref} from "vue";
import * as echarts from 'echarts';
import earthPhoto from "../../assets/img/主页地球纹理.png";
import 'echarts-gl';

const worldBox = ref(null);
// 地球旋转
const worldRotate = () => {
  const BlChart = echarts.init(worldBox.value);
  const option = {
    globe: {
      // 地球表面覆盖的照片
      baseTexture: earthPhoto,
      // 地球中三维图形的着色效果
      shading: 'color',
      zoom: 2,
      viewControl: {
        // 自动旋转
        autoRotate: true,
        //物体自转的速度,单位为角度 / 秒，默认为10也就是36秒转一圈。
        autoRotateSpeed: 3,
        // 在鼠标静止操作后恢复自动旋转的时间间隔,默认 3s
        autoRotateAfterStill: 2,
        // 旋转操作的灵敏度，值越大越灵敏.设置为0后无法旋转。[1, 0]只能横向旋转.[0, 1]只能纵向旋转
        rotateSensitivity: 2,
        // 定位到北京
        targetCord: [116.46, 39.92],
        maxDistance: 400,
        minDistance: 200
      }
    },
    series: [{
      name: "lines3D",
      type: "lines3D",
      coordinateSystem: "globe",
      effect: {
        show: true,
      },
      blendMode: "lighter",
      lineStyle: {
        color: '#fff',
        width: 1,
      },
      data: [],
      silent: false,
    },],
  };
  // 随机数据 i控制线数量
  for (let i = 0; i < 30; i++) {
    option.series[0].data = option.series[0].data.concat(randomData());
  }
  BlChart.setOption(option);
  window.onresize = () => {
    BlChart.resize();
  };
}
// 随机生成起始及终点经纬度坐标
const randomData = () => {
  // eslint-disable-next-line no-unused-vars
  let name = "随机点" + Math.random().toFixed(5) * 100000;
  // 起点经纬度-北京
  let longitude = 116.2,
      latitude = 39.56;
  // 随机终点经纬度
  let longitude2 = Math.random() * 360 - 180;
  let latitude2 = Math.random() * 180 - 90;
  return {
    coords: [
      [longitude, latitude],
      [longitude2, latitude2],
    ],
    value: (Math.random() * 3000).toFixed(2),
  };
}
onMounted( () => {
  worldRotate();
})
</script>

<template>
  <div class="worldBox" ref="worldBox"></div>
</template>

<style scoped>
  .worldBox {
    width: 800px;
    height: 800px;
    margin: 0 auto;
  }
</style>