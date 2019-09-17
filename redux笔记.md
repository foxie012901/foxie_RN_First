# redux 的使用
    安装  -yarn add redux

# yarn add redux
```js 创建仓库
    //创建一个store文件夹
    //在store下创建一个index.js文件
    //创建好了一个仓库
    import { createStore } from "redux";
    //引入创建好的管理员
    import reducer from "./reducer";
    
    const store = createStore(reducer) //把管理员传给仓库里

    export default store
    //==================================================
    //创建一个reducer.js文件
    const defaultState ={ 
        inputValue:'',
        list:[],

    }// 默认仓库数据

    export default (state = defaultState, action )=>{ //现在默认state里就是一个空对象 
         // console.warn(state, action)
    //state 是我们的默认或者说原始的状态

    //action 是通过使用的地方传递过来的数据

        //注意:reducer里只能接受state,不能改变state
    if(action.type === 'change_input_value'){ '值对应调用的地方设置的type'
        const newState = JSON.parse(JSON.stringify(state))  // 拷贝原数据state
        newState.inputValue = action.value // 改变新数据里的inputvalue使其等于action。value传递过来的值
        return newState  // 返回结果
    }

    if(action.type ==='on_change_data'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ""
        return newState  
    }


        return state
    }

```

```js 使用仓库
    import store from './store' // 我们平时的完整写法,我们也可以不写.js,甚至我们创建的名称是index的话作为默认,也可以不写
    constructor(props){
        super(props)
        this.state = store.getState()  //getState,是store提供的通过这个方法获取store里的数据
    }    
    store.subscribe(this._handleStoreChange)//我们的组件去订阅store，就是说，只要store里的数据改变，subscribe里面就会执行某些事件

    render(){
        return (
            组件  注册 点击事件 fun 改变值的，带value的。 和点击事件 btnfun
        )
    }
    fun=e=>{
        const action ={
            type:'change_input_value',
            value:e
        }
        store.dispatch(action) // 通过。dispatch传递给store里的reducer
    }

    btnfun=()=>{
        const action = {
            type:'on_change_data'
        }
        store.dispatch(action)
    }

    _handleStoreChange=()=>{
        this.setState(store.getState()) //通过构造里订阅跳转过来，执行的更新redux数据的操作
    }

```



====================================================================================

# 总结 关键字
```js
--------------index.js---------------------
import {createStore} from 'redux'  //引用redux 
import reducer from './reducer'    //导入reducer管理员
const store =createStore(reducer)  //把管理员传给仓库
export default store
--------------reducer.js-------------------
const defaultState={} // reducer中默认数据对象
state  //我们的默认初始化状态  
action //是使用的地方传递过来的状态
if(action==='type'){
    const newState = JSON.parse(JSON.stringify(state)) 
        执行数据改变操作
    return newState
    //我们不能直接操作改变原始数据，只能通过深藏拷贝创建一个新的变量来改变数据，并返回新的变量
}
---------------使用处.js组件----------------------------
import from './store'  // 默认在store里创建了index文件，默认会找它，默认会省略。js，所以可简写
constructor(props){
    super(props)
    this.state = store.getState() //当前组件数据等于redux的数据
    store.subcribe(this._handleStoreChange) //我们的组件去订阅store，如果store数据有改变，我们就执行方法，去更新当前数据
}
_handleStoreChange=()=>{this.setState(store.getState())} //执行方法改变当前组件中的数据
render(){
    return(
        <input组件   
            onChangeText={this._handleinputChange}
        />
        <btn组件 
            onPress={this._handleChange}
        />
        <FlatList 
            renderItem={this.显示组件}
        />
    ) 
}
_handleInputChange = e => {
        const action = {
            type: "type", //reducer里的action===的值
            value: e,
        } // 创建了一个行为action，你帮我去改变inputvalue的值
        store.dispatch(action)
        //通过dispatch把我们的行为action传递给store  store就相当于一个仓库,他并不会管理数据而是自动推送给reducers来管理
}
_handleChange = () => {
        //创建一个action行为
        const action = {
            type: 'type',
        }
        store.dispatch(action)
    }
```