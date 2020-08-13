import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon';

// 自动引入
// require中的context方法 提供一个由当前文件夹所指定的上下文目录 在目录中读出指定信息的文件
const req = require.context('./svg', false, /\.svg$/);

// 通过keys获取所有文件名
// map(req) 执行req 让req去加载文件名
req.keys().map(req);

// 全局注册
Vue.component('svg-icon', SvgIcon);
