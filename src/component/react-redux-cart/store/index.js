import { createStore, applyMiddleware, compose } from 'redux'

//导入reducer
import reducer from './reducer'

import thunk from 'redux-thunk'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




//创建仓库导出
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


export default store



