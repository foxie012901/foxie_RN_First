import { ON_CHANGE_DATA,CHANGE_INPUT_VALUE,DELETE_ID} from "./actionTypes";
//创建一个管理员
const defaultState = {
    inputValue: "",
    list: [
        1, 2, 3
    ]
}

export default (state = defaultState, action) => {

    // console.warn(state, action)
    //state 是我们的默认或者说原始的状态

    //action 是通过使用的地方传递过来的数据

    //注意:reducer里只能接受state,不能改变state
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))  // 拷贝原数据state
        newState.inputValue = action.value // 改变新数据里的inputvalue使其等于action。value传递过来的值
        return newState  // 返回结果
    }

    if (action.type === ON_CHANGE_DATA) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState
    }

    if (action.type === DELETE_ID) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }

    return state

}