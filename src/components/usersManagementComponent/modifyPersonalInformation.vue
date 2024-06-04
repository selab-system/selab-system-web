<script>
export default {
  name: "modifyPersonalInformation",
  data() {
    return {
      userData: {
          name: '郑凯仁',
          sex: '男',
          telephone: '1234567',
          email: '123@qq.com',
          id: 1,
          groupId: 1
      },
      span1: ''
    }
  },
  methods: {
    spanEnter() {
      const button = document.querySelector(`.userName button`);
      button.style.display = 'inline';
    },
    spanLeave() {
      const button = document.querySelector('.userName button');
      button.style.display = 'none';
    },
    spanEnter2() {
      const button = document.querySelector(`.userSex button`);
      button.style.display = 'inline';
    },
    spanLeave2() {
      const button = document.querySelector('.userSex button');
      button.style.display = 'none';
    },
    spanEnter3() {
      const button = document.querySelector(`.userTelephone button`);
      button.style.display = 'inline';
    },
    spanLeave3() {
      const button = document.querySelector('.userTelephone button');
      button.style.display = 'none';
    },
    spanEnter4() {
      const button = document.querySelector(`.userEmail button`);
      button.style.display = 'inline';
    },
    spanLeave4() {
      const button = document.querySelector('.userEmail button');
      button.style.display = 'none';
    },
    editSpan1() {
      const span = document.querySelector('.userName span');
    }
  }
}
</script>

<template>
  <div class="backDrop">
    <div class="userAvatar"><img src="../../assets/img/个人默认头像.png" alt=""></div>
    <div class="userState">逐渐暴躁</div>
    <div class="userName">
      <strong>姓名</strong>：<span @mouseenter="spanEnter" @mouseleave="spanLeave" @click="editSpan1">{{ userData.name }}</span>
      <button>点击红线修改</button>
    </div>
    <div class="userSex">
      <strong>性别：</strong><span @mouseenter="spanEnter2" @mouseleave="spanLeave2">{{ userData.sex }}</span>
      <button>点击红线修改</button>
    </div>
    <div class="userTelephone">
      <strong>联系方式：</strong><span @mouseenter="spanEnter3" @mouseleave="spanLeave3">{{ userData.telephone }}</span>
      <button>点击红线修改</button>
    </div>
    <div class="userEmail">
      <strong>电子邮件：</strong><span @mouseenter="spanEnter4" @mouseleave="spanLeave4">{{ userData.email }}</span>
      <button>点击红线修改</button>
    </div>
    <div class="userPersonalId">
      <strong>个人ID：</strong>{{ userData.id }}
<!--      <button>点击红线修改</button>-->
    </div>
    <div class="userGroupId">
      <strong>小组ID：</strong>{{ userData.groupId }}
<!--      <button>点击红线修改</button>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
  .backDrop {
    width: 100%;
    height: 1000px;
    background-color: whitesmoke;
    position: relative;
    div {
      position: absolute;
    }
    .userAvatar {
      width: 400px;
      height: 400px;
      background-color: #2196f3;
      top: 100px;
      left: 300px;
      border: 1px solid black;
      border-radius: 200px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 200px;
      }
    }
    .userState {
      width: 100px;
      height: 50px;
      background-color: wheat;
      line-height: 50px;
      text-align: center;
      top: 530px;
      left: 440px;
      border-radius: 50px;
      color: red;
      font-family: fangsong;
      font-size: 20px;
    }
    .userName {
      font-size: 30px;
      font-family: fangsong;
      top: 50px;
      left: 800px;
      position: relative;
      span:hover {
        animation: lineLong 1s linear;
        animation-fill-mode: forwards;
      }
      button {
        width: 100px;
        height: 20px;
        border-radius: 10px;
        line-height: 20px;
        margin: 20px;
        //animation: buttonChange 3s linear;
        //animation-fill-mode: forwards;
        display: none;
      }
    }
    .userSex {
      font-size: 30px;
      font-family: fangsong;
      top: 150px;
      left: 800px;
      span:hover {
        animation: lineLong 1s linear;
        animation-fill-mode: forwards;
      }
      button {
        width: 100px;
        height: 20px;
        border-radius: 10px;
        line-height: 20px;
        margin: 20px;
        //animation: buttonChange 3s linear;
        //animation-fill-mode: forwards;
        display: none;
      }
    }
    .userTelephone {
      font-size: 30px;
      font-family: fangsong;
      top: 250px;
      left: 800px;
      span:hover {
        animation: lineLong 1s linear;
        animation-fill-mode: forwards;
      }
      button {
        width: 100px;
        height: 20px;
        border-radius: 10px;
        line-height: 20px;
        margin: 20px;
        //animation: buttonChange 3s linear;
        //animation-fill-mode: forwards;
        display: none;
      }
      }
    .userEmail {
      font-size: 30px;
      font-family: fangsong;
      top: 350px;
      left: 800px;
      span:hover {
        animation: lineLong 1s linear;
        animation-fill-mode: forwards;
      }
      button {
        width: 100px;
        height: 20px;
        border-radius: 10px;
        line-height: 20px;
        margin: 20px;
        //animation: buttonChange 3s linear;
        //animation-fill-mode: forwards;
        display: none;
      }
      }
      .userPersonalId {
        font-size: 30px;
        font-family: fangsong;
        top: 450px;
        left: 800px;
        span:hover {
          animation: lineLong 1s linear;
          animation-fill-mode: forwards;
        }
        //button {
        //  width: 100px;
        //  height: 20px;
        //  border-radius: 10px;
        //  line-height: 20px;
        //  margin: 20px;
        //  //animation: buttonChange 3s linear;
        //  //animation-fill-mode: forwards;
        //  display: none;
        //}
      }
      .userGroupId {
        font-size: 30px;
        font-family: fangsong;
        top: 550px;
        left: 800px;
        span:hover {
          animation: lineLong 1s linear;
          animation-fill-mode: forwards;
        }
        //button {
        //  width: 100px;
        //  height: 20px;
        //  border-radius: 10px;
        //  line-height: 20px;
        //  margin: 20px;
        //  //animation: buttonChange 3s linear;
        //  //animation-fill-mode: forwards;
        //  display: none;
        //}
      }
    @keyframes lineLong {
      0% {
        border-bottom: 0 red solid;
      }
      100% {
        border-bottom: 5px red solid;
      }
    }
    //@keyframes buttonChange {
    //  0% {
    //    opacity: 1;
    //  }
    //  100% {
    //    opacity: 0;
    //  }
    //}
  }
</style>