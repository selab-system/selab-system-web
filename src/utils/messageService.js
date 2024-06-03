// messageService.js
import Vue from 'vue';
import ElementUI from 'element-ui';

const messageService = {
    error(message) {
        Vue.prototype.$message.error(message);
    }
};

export default messageService;