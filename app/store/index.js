//创建好了一个仓库
import { createStore } from "redux";
//引入创建好的管理员
import reducer from "./reducer";
const store = createStore(
    reducer
) //把管理员传给仓库里

export default store