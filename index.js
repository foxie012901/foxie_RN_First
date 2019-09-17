/**
 * @format
 */
import { AppRegistry } from 'react-native';
//从reactnative 的包中,导入AppRegistry组件你,他的作用就是注册项目首页的
import Main from './Main';
// import Main from './Main_';
//引用App根组件
import { name as appName } from './app.json';
//引用json中的配置文件,name即是app.json中的项目名称,不可乱改



AppRegistry.registerComponent(appName, () => Main);
//当使用AppRegistry注册项目的时候,方法中的第一个参数不要改,否则项目就废了
//第二个参数,表示把哪个页面注册为项目的首页根组件,这个不是固定的,可以用自己开发的组件替换


