const homedata = (state = {
  list1: [],
  list2: []
}, {type,data}) => {
  if(type == ''){
    state.list1 = data
  }
  
  return state
}

export default homedata

/**
  * 入口文件处使用store.subscribe(render)监听仓库状态的变化
    组件内部通过store.dispatch({type: '',data})触发改变状态
    组件内部通过store.getState().homedata.list1拿到仓库中的值
 
 */